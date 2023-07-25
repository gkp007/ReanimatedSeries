import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import Reanimated3 from './Reanimated3';
import { Button } from 'native-base';

const SIZE = 100.0;

export default function Renimated2({navigation}) {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2)

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value*SIZE) / 2,
      transform: [{scale:scale.value}],
    };
  }, []);

  useEffect(()=>{
    progress.value = withRepeat(withSpring(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true)
  }, [])

  return (
    
    <View style={styles.container}>
      <Animated.View
        style={[{ height: SIZE, width: SIZE, backgroundColor: 'blue' }, reanimatedStyle]}/>
        <Button variant="outline" style={{top:35}} onPress={() => navigation.navigate('Renimated3')}>
          navigate to Animation
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
