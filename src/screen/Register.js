import React from 'react';
import Center from './../component/Center'
import {
        Text, 
        Button
} from 'react-native'

export default ({navigation, route})=>{
    console.log(route.params.kelas)
    return(
      <Center>
        <Text>
          Register
        </Text>
        <Text>
          paramsnya adalah {route.params.kelas}
        </Text>
        <Button 
            title="login to"
            onPress={()=>navigation.push('Login')}
            />
      </Center>
    )
  }