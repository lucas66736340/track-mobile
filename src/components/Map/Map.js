import React from 'react'

import MapView from 'react-native-maps';
import {View} from 'react-native'


//vamos reprsentar um array de latitude e longintude que vai representar  uma linha 
function Map(){
//gerando cordernadas pelo menos vinte cordenadas aleatorias
//   let pontos = []
//   for(var i = 0;i<20;i++){

//     if(i % 2 === 0 ){
//         pontos.push({
//             latitude:-23.5873753 + i * 0.001,
//             longitude:-46.3957125 + i *0.001 ,
//         })
        
//     }else{
//         pontos.push({
//             latitude:-23.5873753 - i * 0.002,
//             longitude:-46.3957125 + i *0.001,
//         })

//     }
//   }

    return (
        <View>
            <MapView
            initialRegion={{
                latitude:-23.5873753,
                longitude:-46.3957125,
                latitudeDelta: 0.10,//é o nivel de zoom do mapa quanto de zom eu quero no começo
                longitudeDelta: 0.10,
            }}
            style={{height:300}} >

            
                
            </MapView>
        </View>
    )
}

export default Map