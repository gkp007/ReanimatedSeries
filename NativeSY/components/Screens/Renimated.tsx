import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import React from 'react';
import Renimated2 from './Renimated2';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';

const Renimated = ({navigation}) => {
  const offsetX = useSharedValue(0);
  const rotation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offsetX.value * 255 },
        { rotateZ: `${rotation.value}deg` },
      ],
    };
  });

  return (
    <View>
      <View>
        <Button variant="outline" onPress={() => navigation.navigate('Renimated2')}>
          navigate to Animation
        </Button>
      </View>

      <Animated.View style={[styles.box, animatedStyles]} />

      <Button variant="outline" onPress={() => (offsetX.value = Math.random())}>
        Move
      </Button>

      <Button
        variant="outline"
        style={{ marginTop: 10, borderRadius: 10 }}
        onPress={() => {
          offsetX.value = withSpring(Math.random());
        }}
      >
        Move with spring
      </Button>

      <Button
        variant="outline"
        style={{ marginTop: 10, borderRadius: 10, alignItems:'center',
        justifyContent:'center' }}
        onPress={() => {
          const ANGLE = 13; 
          rotation.value = withSequence(
            withTiming(1, { duration: 1 }),
            withRepeat(withTiming(ANGLE, { duration: 100 }), 3, true),
            withTiming(0, { duration: 10 })
          );
        }}
      >
        Rotate with repeat
      </Button>

      <Text>renimated</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems:'center',
    justifyContent:'center'
  },
});

export default Renimated;
