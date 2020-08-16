import React ,{useState}from 'react'


import Spacer from '../../components/Spacer/Spacer'
import {Text,Input,Button} from 'react-native-elements'
import {StyleSheet,View} from 'react-native'



function AuthForm({headerText,errorMessage,onSubmit,submitButtonText}){

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
   // senha do matheus  559558

    return (
        <View>
            <Spacer>
                <Text h3>{headerText}</Text>
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
                    <Button title={submitButtonText} onPress={()=>{
                       onSubmit({email:email,password:password})
                    }} />
                </Spacer>
        </View>
    )

}

const estilo = StyleSheet.create({
    errorMessage: {
        textAlign: 'center',
        color: 'red',
        fontSize:16,
    }
})
   

export default AuthForm