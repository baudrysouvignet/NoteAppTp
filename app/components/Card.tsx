import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Card(
    props: { 
        value: string 
    }
) {
    return (
        <View style={{
            padding: 50,
            backgroundColor: "lightblue",
        }}>
            <Text>{props.value}</Text>
        </View>

    );
}