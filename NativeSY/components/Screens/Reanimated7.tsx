import { Button, StatusBar} from 'native-base';
import React, { useCallback, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  TapGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function Reanimated7() {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  const doubleTapRef = useRef();

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  const rTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  const onSingleTap = useCallback(() => {
    opacity.value = withTiming(0, undefined, (isFinished) => {
      if (isFinished) {
        opacity.value = withDelay(500, withTiming(1));
      }
    });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}
        >
          <Animated.View>
            <ImageBackground
              source={require('../../assets/img/nature.webp')}
              style={styles.image}
            >
              <AnimatedImage
                source={require('../../assets/img/heart.png')}
                style={[
                  styles.image,
                  {
                    shadowOffset: { width: 0, height: 20 },
                    shadowOpacity: 0.35,
                    shadowRadius: 35,
                  },
                  rStyle,
                ]}
                resizeMode={'center'}
              />
            </ImageBackground>
            <Button variant="outline" style={{top:35}} onPress={() => ('Reanimated8')}>
          navigate to Reanimated 8
        </Button>
            
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
    </GestureHandlerRootView>
  );
}

const { width: SIZE } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
});