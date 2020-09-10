import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Search from './../screen/Search'
import TabNav from './TabNav'
import {
    Text, 
    Button,
    View
} from 'react-native'

const Drawer = createDrawerNavigator();
export default function MyDrawer() {
    return (
      <Drawer.Navigator
        drawerPosition='right'
        drawerType='slide'
        overlayColor={0}
        // screenOptions={({route})=>{
        //   drawerIcon:({color,size,focused})
        // }}
        >
        <Drawer.Screen name="TabHome" component={TabNav} options={{
            swipeEnabled:false
        }} />
        <Drawer.Screen name="Search" component={Search} />
      </Drawer.Navigator>
    );
  }
