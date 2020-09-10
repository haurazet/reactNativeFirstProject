import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIconWithBadge from './../component/IconWithBadge'
import HomeStackRoot from './HomeStackRoot'
import SettingStackRoot from './SettingStack'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default ()=>{
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HomeStack') {
                return (
                    <HomeIconWithBadge
                    name={
                        focused 
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline' 
                    }
                    size={size}
                    color={color}
                    />
                )
                } else if (route.name === 'Setting') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />; //ini react element
            },
            })}
            tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel:false,


            }}
        >
            <Tab.Screen name='HomeStack' component={HomeStackRoot}/>
            <Tab.Screen name='Setting' component={SettingStackRoot}/>
        </Tab.Navigator>
    )
}