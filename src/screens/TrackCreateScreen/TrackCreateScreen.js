

import React,{useEffect,useState} from 'react'

import Map from '../../components/Map/Map'
import {SafeAreaView} from 'react-navigation'
import {requestPermissionsAsync,watchPositionAsync,Accuracy} from 'expo-location'
import {Text} from 'react-native-elements'

function TrackCreateScreen(){

    
    const [error,setError] = useState(null)

    const autorizaVerLocalizacao = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Localizacao não autorizada');
          }
            await watchPositionAsync({
                accuracy:Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:10
                
            },(location)=>{
                console.log(location)
            })
          
        } catch (e) {
          setError(e)
        }
      };

    useEffect(()=>{
        autorizaVerLocalizacao()
    },[])

    return(
       <SafeAreaView style={{flex:1}} forceInset={{top:"always"}}>
           <Map />
        {error ? <Text style={{color:'red',textAlign:'center'}}>Por favor autorize sua localização</Text> : null}
       </SafeAreaView> 
    )
}
export default TrackCreateScreen