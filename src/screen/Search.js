import React from 'react';

import {
        Text, 
        Button,
        View
} from 'react-native'
import { Title } from 'native-base';

export default function SearchScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search</Text>
        <Button
            onPress={()=>navigation.navigate('TabHome',
            {
                screen:'HomeStack',
                params:{
                    screen:'Details',
                    params:{
                        tes:'haura'
                    }
                }
            })}
            title='ke details'
        />
      </View>
    );
  }