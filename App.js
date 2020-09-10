/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext, createContext, useState, useEffect} from 'react';
import {
  StyleSheet, AsyncStorage, Text
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer, DrawerActions} from '@react-navigation/native'
import AuthStack from './src/navigation/AuthStack'
import {Authcontext} from './src/context/AuthContext'
import MyDrawer from './src/navigation/DrawerMain'
import Center from './src/component/Center';
import * as Animatable from 'react-native-animatable';

const App = () => {
  const [Auth,setauth]=useState(false)
  const [Username]=useState('haura')
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    AsyncStorage.getItem('login')
    .then((res)=>{
      if(res==='iya'){
        setauth(true)
      }
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])

  if(loading){
    return(
      <Center>
        <Animatable.Text animation="slideInDown" iterationCount="infinite" >
          loading
        </Animatable.Text>
      </Center>
    )
  }

  return (
    <Authcontext.Provider value={{
      Auth:Auth,
      Username:Username,
      signinout:()=>{
        setauth(!Auth)
      }
    }}>
        <NavigationContainer>
          {
            Auth?
            <MyDrawer/>
            :
            <AuthStack/>
          }
        </NavigationContainer>
    </Authcontext.Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
