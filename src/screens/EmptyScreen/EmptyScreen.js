import React ,{useEffect,useContext} from 'react'

import AuthContext from '../../context/AuthContext'


function EmptyScreen (){
    const {trayLocalSignin} = useContext(AuthContext)

    useEffect(()=>{
        trayLocalSignin()
    },[])

   return null
      
}



export default EmptyScreen
  