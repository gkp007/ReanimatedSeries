import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Screens/Home';
import Buttons from './components/Button';
import Animation1 from './components/Screens/Animation1';
import Renimated from './components/Screens/Renimated';
import Renimated2 from './components/Screens/Renimated2';
import Reanimated3 from './components/Screens/Reanimated3';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Reanimated4 from './components/Screens/Reanimated4';
import Reanimated5 from './components/Screens/Reanimated5';
import Reanimated6 from './components/Screens/Reanimated6';
import Reanimated7 from './components/Screens/Reanimated7';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Buttons' component={Buttons} />
          <Stack.Screen name='Animation1' component={Animation1} />
          <Stack.Screen name='Renimated' component={Renimated} />
          <Stack.Screen name='Renimated2' component={Renimated2} />
          <Stack.Screen name='Renimated3' component={Reanimated3} />
          <Stack.Screen name='Reanimated4' component={Reanimated4} />
          <Stack.Screen name='Reanimated5' component={Reanimated5} />
          <Stack.Screen name='Reanimated6' component={Reanimated6} />
          <Stack.Screen name='Reanimated7' component={Reanimated7} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default gestureHandlerRootHOC(App);
