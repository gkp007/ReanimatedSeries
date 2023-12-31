import { Button, StatusBar } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Switch, Text, View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import Reanimated6 from './Reanimated6';
import Reanimated7 from './Reanimated7';
import Reanimated8 from './Reanimated8';
import Reanimated9 from './Reanimated9';
import Reanimated10 from './Reanimated10';
import Reanimated11 from './Reanimated11';
const Colors = {
  dark: {
    background: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8',
  },
  light: {
    background: '#F8F8F8',
    circle: '#FFF',
    text: '#1E1E1E',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256, 0, 256, 0.2)',
  false: 'rgba(0,0,0,0.1)',
};

type Theme = 'light' | 'dark';

export default function Reanimated5({navigation}) {
  const [theme, setTheme] = useState<Theme>('light');

  // const progress = useSharedValue(0);
  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background]
    );

    return { backgroundColor };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle]
    );

    return { backgroundColor };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text]
    );

    return { color };
  });

  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Animated.Text style={[styles.text, rTextStyle]}>Reanimated5</Animated.Text>
      <Animated.View style={[styles.circle, rCircleStyle]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={(toggled) => {
            setTheme(toggled ? 'dark' : 'light');
          }}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor={'violet'}
        />
      </Animated.View>
      <Button variant="outline" style={{top:35}} onPress={() => navigation.navigate('Reanimated6')}>
          navigate to Reanimated 6
        </Button>
      <Button variant="outline" style={{top:35}} onPress={() => navigation.navigate('Reanimated7')}>
          navigate to Reanimated 7
        </Button>
      <Button variant="outline" style={{top:35}} onPress={() => navigation.navigate('Reanimated8')}>
          navigate to Reanimated 8
        </Button>
      <Button variant="outline" style={{top:35}} onPress={() => navigation.navigate('Reanimated9')}>
          navigate to Reanimated 9
        </Button>
      <Button variant="outline" style={{top:35}} onPress={() => navigation.navigate('Reanimated10')}>
          navigate to Reanimated 10
        </Button>
      <Button variant="outline" style={{top:35}} onPress={() => navigation.navigate('Reanimated11')}>
          navigate to Reanimated 11
        </Button>
    </Animated.View>
  );
}

const SIZE = Dimensions.get('window').width * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: SIZE,
    height: SIZE,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZE / 2,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 8,
  },
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 14,
    marginBottom: 35,
  },
});