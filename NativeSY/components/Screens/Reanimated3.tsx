import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button, StatusBar } from 'native-base';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Reanimated4 from './Reanimated4';


const SIZE = 100.0;
const CIRCLE_RADIUS = SIZE * 2;

type ContextType = {
    translateX: number
    translateY: number
}

export default function Reanimated3({navigation}) {

    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (event, context) => {
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX
            translateY.value = event.translationY + context.translateY
        },
        onEnd: () => {
            
            const distance = Math.sqrt(translateX.value ** 2 + translateY.value**2 )
            if(distance < CIRCLE_RADIUS + SIZE / 2){
            translateX.value = withSpring(0);
            translateY.value = withSpring(0)
            }
        },
    });
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                },
            ],
        };
    });

    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <Animated.View style={[styles.square, rStyle]} />
                </PanGestureHandler>
            </View>
            <Button variant="outline" style={{top:35}} onPress={() => navigation.navigate('Reanimated4')}>
          navigate to Animation
        </Button>
            <Button variant="outline" style={{top:35}} onPress={() => navigation.navigate('Reanimated5')}>
          navigate to Reanimated5
        </Button>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'blue',
        borderRadius: 15,
    },
    circle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: CIRCLE_RADIUS,
        borderWidth: 5,
        borderColor: 'blue'

    }
});
