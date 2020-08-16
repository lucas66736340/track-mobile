import React,{useState} from 'react'
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../../src/navigationRef'

const AuthContext = React.createContext()

export function AuthProvider({children}){  
    const [errorMessage,setErrorMessage] = useState('')
    const [token,setToken] = useState('')
    
   async function signup({password,email}){
        try {
            const response = await api.post('/signup',{email,password})
            // armazenado o token no AsyncStorage
            if(response.data.error){
                throw new Error(response.data.error)
            }
            await AsyncStorage.setItem('token', response.data.token)
            setErrorMessage('')
            navigate('TrackList')
        } catch (error) {
          setErrorMessage(error.message)
        }
    }

   async function signin({email,password}){
        try {
            const response = await api.post('signin',{email,password})
            // armazenado o token no AsyncStorage
            //caso ocorra algum erro
            if(response.data.error){
                const error = new Error(response.data.error)
                error.status = response.data.status
                throw error
            }
            await AsyncStorage.setItem('token', response.data.token)
            setErrorMessage('')
            navigate('TrackList')
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    function clearErrorMessage(){
        setErrorMessage('')
    }
    //funcao que verifica se existe um token para autenticar o usuario assim 
    // que ele entrar na aplicacao
  async function trayLocalSignin(){
       const token = await AsyncStorage.getItem('token') 
       if(token){
        setToken(token)
        navigate('TrackList')
       }else{
        navigate('loginFlow')
       }
    }
    //tirando o token da minha app efetuando o log out do usuario 
   async function logOut(){
        await AsyncStorage.removeItem('token')
        setErrorMessage('')
        navigate('loginFlow')
    }

    return <AuthContext.Provider
     value={{
        errorMessage,
        signup,
        signin,
        logOut,
        clearErrorMessage,
        trayLocalSignin
        }}>
        {children}
    </AuthContext.Provider>

}


export default AuthContext


