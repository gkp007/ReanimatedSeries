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
import Reanimated8 from './components/Screens/Reanimated8';
import Reanimated9 from './components/Screens/Reanimated9';
import Reanimated10 from './components/Screens/Reanimated10';
import Reanimated11 from './components/Screens/Reanimated11';
import Reanimated12 from './components/Screens/Reanimated12';
import Reanimated13 from './components/Screens/Reanimated13';
import Reanimated14 from './components/Screens/Reanimated14';
import Reanimated15 from './components/Screens/Reanimated15';

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
          <Stack.Screen name='Reanimated8' component={Reanimated8} />
          <Stack.Screen name='Reanimated9' component={Reanimated9} />
          <Stack.Screen name='Reanimated10' component={Reanimated10} />
          <Stack.Screen name='Reanimated11' component={Reanimated11} />
          <Stack.Screen name='Reanimated12' component={Reanimated12} />
          <Stack.Screen name='Reanimated13' component={Reanimated13} />
          <Stack.Screen name='Reanimated14' component={Reanimated14} />
          <Stack.Screen name='Reanimated15' component={Reanimated15} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default gestureHandlerRootHOC(App);
