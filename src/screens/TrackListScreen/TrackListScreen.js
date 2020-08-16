import React from 'react'

import {View,Text,Button} from 'react-native'

function TrackListScreen({navigation}){

    return(
        <View>
            <Text>TrackListScreen</Text>
            <Button title="go to TrackDetail" onPress={()=>{
                navigation.navigate('TrackDetail')
            }}/>
        </View>
    )
}
export default TrackListScreen