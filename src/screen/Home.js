import React,{useContext} from 'react';
import Center from './../component/Center'
import {
        Text, 
        Button,
        View
} from 'react-native'
import {Authcontext} from './../context/AuthContext'

export default function HomeScreen({route,navigation}) {
  const {signinout, Username} = useContext(Authcontext)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home! {Username}</Text>
        <Button
          title='to Details'
          onPress={()=>navigation.navigate('Details')}/>
      </View>
    );
  }