import React,{useContext} from 'react'

import AuthContext from '../../context/AuthContext'

import {TouchableOpacity} from 'react-native'
import {View,Text} from 'react-native'
import {NavigationEvents} from 'react-navigation'

import AuthForm from '../../components/AuthForm/AuthForm'

function SigninScreen({navigation}){
   
   
    const {errorMessage,signin,clearErrorMessage} = useContext(AuthContext)

    return(
        <View style={{flex:1,justifyContent:'center'}}>
          
            <AuthForm
                 headerText="Sign in for Track"
                errorMessage={errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
               
            />

        <TouchableOpacity onPress={()=>{
                clearErrorMessage()
                 navigation.navigate('Signup')
             }} style={{alignSelf:'center'}}>
                    <Text style={{color:'blue'}}> You don't have an acount Signup first</Text>
            </TouchableOpacity>

        </View>
          
    )
}

SigninScreen.navigationOptions = {
  headerShown:false
}



   

export default SigninScreen