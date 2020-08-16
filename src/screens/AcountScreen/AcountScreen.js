import React,{useContext} from 'react'

import {Text} from 'react-native'
import {Button} from 'react-native-elements'

import AuthContext from '../../context/AuthContext'
import Spacer from '../../components/Spacer/Spacer'
import {SafeAreaView} from 'react-navigation'

function AcountScreen(){

    const {logOut} = useContext(AuthContext)

    return(

        <SafeAreaView forceInset={{top:"always"}}>
            <Text>AcountScreen</Text>
            <Spacer />
            <Button 
            title="Sign Out"
            onPress={logOut}

            />
        </SafeAreaView>
    )
}
export default AcountScreen