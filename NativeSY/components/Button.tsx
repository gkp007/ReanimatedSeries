import React, { useState, useEffect } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { Button, Center, PresenceTransition, Text } from 'native-base';
import Animation1 from './Screens/Animation1';

const Buttons = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [translation] = useState(new Animated.Value(0));

  const screenWidth = Dimensions.get('window').width;
  const boxSize = 100;
  const animationEndValue = screenWidth - boxSize;

  useEffect(() => {
    startAnimation();
    // Cleanup function to stop the animation when the component unmounts
    return () => stopAnimation();
  }, []);

  const startAnimation = () => {
    Animated.timing(translation, {
      toValue: animationEndValue,
      duration: 2000, // Adjust this value to control the duration of the animation
      useNativeDriver: true,
    }).start();
  };

  const stopAnimation = () => {
    Animated.timing(translation).stop();
  };

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      stopAnimation();
    } else {
      startAnimation();
    }
  };

  return (
    <View>
      <Button onPress={handleButtonClick}>
        {isOpen ? 'Hide' : 'Show'}
      </Button>
      <PresenceTransition
        visible={isOpen}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 250,
          },
        }}
      >
        <Center w="200" h="100" mt="7" bg="teal.500" rounded="md">
          ScaleFade
        </Center>
      </PresenceTransition>

      <Button variant="outline" onPress={() => navigation.navigate('Animation1')}>
        navigate to Animation
      </Button>
      <Text>Button Screen</Text>
      <Animated.View
        style={{
          width: boxSize,
          height: boxSize,
          backgroundColor: 'orange',
          transform: [{ translateX: translation }],
        }}
      />
    </View>
  );
};

export default Buttons;
