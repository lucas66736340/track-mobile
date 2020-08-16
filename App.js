import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {AuthProvider} from './src/context/AuthContext'
import {setNavigator} from './src/navigationRef'


import AcountScreen from './src/screens/AcountScreen/AcountScreen'
import SigninScreen from './src/screens/SigninScreen/SigninScreen'
import SigniupScreen from './src/screens/SignupScreen/SignupScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen/TrackCreateScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen/TrackListScreen'
import EmptyScreen from './src/screens/EmptyScreen/EmptyScreen'


//serve para alternar entre o fluxo de login e fluxo de principal
const switchNavigator = createSwitchNavigator({

  //posso passar referencia para outros tipos de navegacao
  Empty:EmptyScreen,
  loginFlow: createStackNavigator({
    Signup:SigniupScreen,
    Signin:SigninScreen,

  })
  ,
  mainFlow :createBottomTabNavigator({
        trackListFlow:createStackNavigator({
          TrackList:TrackListScreen,
          TrackDetail: TrackDetailScreen
        }),
     TrackCreate : TrackCreateScreen,
     Account:AcountScreen
  })

})

const App = createAppContainer(switchNavigator)

export default ()=>{
  return(
    <AuthProvider>
      <App ref={(navigator)=>{
        setNavigator(navigator)
      }} />
    </AuthProvider> 
  )
    
}
 