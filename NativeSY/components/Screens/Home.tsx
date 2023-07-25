import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        variant="outline"
        onPress={() => navigation.navigate('Buttons')}>
        Click me
      </Button>
      <Text>Gk pattanaik</Text>
    </View>
  );
};

export default Home;
