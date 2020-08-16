import React from 'react'

import {View} from 'react-native'

function Spacer({children}){

    return(
        <View style={{margin:15}}>
            {children}
        </View>
    )
}

export default Spacer