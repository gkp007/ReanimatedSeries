import React, { useEffect, useRef } from 'react';
import { View, Dimensions } from 'react-native';
import { Animated } from 'react-native';
import { Button, Text } from 'native-base';
import Home from './Home';
import renimated from './Renimated';

const Animation1 = ({ navigation }) => {
  const translation = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;
  const boxSize = 100;
  const animationEndValue = screenWidth - boxSize; // Animation will go till the last of the screen
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const animate = (startTime) => {
      const currentTime = Date.now();
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(1, timeElapsed / 2000); // 2000ms is the duration of the animation

      const animationValue = progress * animationEndValue;
      translation.setValue(animationValue);

      if (progress < 1) {
        animationFrameIdRef.current = requestAnimationFrame(() => animate(startTime));
      }
    };

    const startAnimation = () => {
      if (!animationFrameIdRef.current) {
        animationFrameIdRef.current = requestAnimationFrame(() => animate(Date.now()));
      }
    };

    const stopAnimation = () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
    };

    startAnimation();

    return () => {
      stopAnimation();
    };
  }, []);

  return (
    <View>
      <View>
        <Button variant="outline" onPress={() => navigation.navigate('Renimated')}>
          navigate to Animation
        </Button>
      </View>
      <Animated.View
        style={{
          width: boxSize,
          height: boxSize,
          opacity: translation.interpolate({
            inputRange: [0, animationEndValue / 2, animationEndValue],
            outputRange: [0, 1, 0],
          }),
          backgroundColor: translation.interpolate({
            inputRange: [0, animationEndValue],
            outputRange: ['orange', 'blue'],
          }),
          transform: [
            { translateX: translation },
            {
              rotate: translation.interpolate({
                inputRange: [0, animationEndValue],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
    </View>
  );
};

export default Animation1;
