import React,{useContext} from 'react';
import Center from './../component/Center'
import {
        Text, 
        Button,
        AsyncStorage
} from 'react-native'
import {Authcontext} from './../context/AuthContext'

const Login=({navigation})=>{
    const {signinout} = useContext(Authcontext)
    return(
      <Center>
        <Text>
          Login
        </Text>
        <Button title='masuk'
                onPress={()=>{
                        AsyncStorage.setItem('login','iya')
                        .then(()=>{
                                signinout()
                        })
                
                }}
        />
        <Button title='register to jc12'
                onPress={()=>navigation.navigate('Register', {kelas:'jc12'})}
                />
        <Button title='register to jc11'
                onPress={()=>navigation.navigate('Register', {kelas:'jc11'})}
                />
      </Center>
    )
  }

  export default Login