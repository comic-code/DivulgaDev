import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from './pages/Home';
import FindDev from './pages/FindDev';
import ShareDev from './pages/ShareDev';


const Stack = createStackNavigator();

export default function App() {

  return(
        <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
                headerStyle: {
                  backgroundColor: '#042D59',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
              }}
            >
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              
              <Stack.Screen
              name="ShareDev"
              component={ShareDev}
              options={{
                title: 'Divulgue Seu Trabalho'
              }}
              />

              <Stack.Screen
              name="FindDev"
              component={FindDev}
              options={{
                title: 'Encontre Desenvolvedores',
              }}
              />
            </Stack.Navigator>
        </NavigationContainer>
   );
}