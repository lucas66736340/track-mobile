import React,{useContext,useState} from 'react'

import AuthContext from '../../context/AuthContext'
import {Text,Input,Button} from 'react-native-elements'
import {TouchableOpacity} from 'react-native'
import {View,StyleSheet} from 'react-native'
import Spacer from '../../components/Spacer/Spacer'


function SignupScreen({navigation}){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
   
    const {errorMessage,signup,clearErrorMessage} = useContext(AuthContext)

    return(
        <View style={{flex:1,justifyContent:'center'}}>
             <Spacer>
                <Text h3>Sign Up for Track</Text>
            </Spacer>
    
            <Spacer/>

                <Input
                 value={email}
                  label="Email"
                  onChangeText={(email)=>{
                      setEmail(email)  
                  }}
                  autoCapitalize='none'
                  autoCorrect={false}
                  
                  />
                <Input  label = "Password" 
                    value={password}
                  onChangeText={(password)=>{
                      setPassword(password)
                    }}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                    {/* usando um render condition para erros */}
                {errorMessage? <Text style={estilo.errorMessage}>{errorMessage}</Text> : null}
                <Spacer>
                    <Button title="Sign Up" onPress={()=>{
                        signup({email:email,password:password},()=>{
                            navigation.navigate('TrackList')
                        })
                
                    }} />
                </Spacer>

             <TouchableOpacity onPress={()=>{
                 clearErrorMessage()
                 navigation.navigate('Signin')
             }} style={{alignSelf:'center'}}>
                    <Text style={{color:'blue'}}> Already have an acount signin instad</Text>
            </TouchableOpacity>
        </View>
          
    )
}

SignupScreen.navigationOptions = {
  headerShown:false
}


const estilo = StyleSheet.create({
    errorMessage: {
        textAlign: 'center',
        color: 'red',
        fontSize:16,
    }
})
   

export default SignupScreen