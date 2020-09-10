import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import SettingsScreen from './../screen/Setting'

const SettingStack=createStackNavigator()

const SettingStackRoot=()=>{
    return (
      <SettingStack.Navigator
          // screenOptions={{
          //   headerStyle:{
          //     backgroundColor:'#6b49ba'
          //   },
          //   headerTitleStyle:{
          //     fontWeight:'bold'
          //   },
          //   headerTitleAlign:'center',
          //   headerTintColor:'#fff'
          // }}
      >
          <SettingStack.Screen name='Setting' component={SettingsScreen}/>
      </SettingStack.Navigator>
    )
  }

  export default SettingStackRoot