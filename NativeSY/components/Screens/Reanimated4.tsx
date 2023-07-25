import {StyleSheet, Text, View,ScrollView} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Page} from '../Page';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Reanimated5 from './Reanimated5';
import { Button } from 'native-base';


const WORD = ["What's", 'Up', 'Gk'];

const Reanimated4 = ({navigation}) => {

  const translateX = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x
  })


  return (
    <Animated.ScrollView 
    pagingEnabled
    onScroll={scrollHandler}
    scrollEventThrottle={1}
    horizontal
    style={styles.container} >
      {WORD.map((title, index) => {
        return <Page key={index.toString()} title={title} index={index} translateX={translateX} />;
      })}
      <Button variant="outline" style={{top:35}} onPress={() => navigation.navigate('Reanimated5')}>
          navigate to Animation
        </Button>
    </Animated.ScrollView>
  );
};

export default Reanimated4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});