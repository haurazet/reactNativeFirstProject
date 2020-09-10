import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Login from './../screen/Login'
import Register from './../screen/Register'
import {Button} from 'react-native'

const AuthStack=createStackNavigator()

export default ()=>{
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name='Login' component={Login}/>
            <AuthStack.Screen name='Register' 
                            component={Register}
                            // initialParams={{kelas:'jc11'}}
                            options={({route})=>({
                                title:'Register'+route.params.kelas,
                                headerStyle:{
                                backgroundColor: route.params.kelas==='jc11'?'pink':'blue'
                                },
                                headerRight:()=>(
                                <Button onPress={()=>alert('This is a button!')}
                                        title='info'
                                        color='black'
                                        />
                                )
                            })}
            />
      </AuthStack.Navigator>
    )
}