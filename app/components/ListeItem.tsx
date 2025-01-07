import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";



export function ListeItem(
    props: {
        title: string;
        state: boolean;
    }
) {
    const [checked, setChecked] = useState(props.state);

    const check = () => {
        setChecked(!checked);
    }

    return (
        <View
            style={{
                width: "100%",
                backgroundColor: "rgb(255 255 255)",
                padding: 10,
                flexDirection: "row",
            }}
            onTouchEnd={check}
        >
            <Ionicons
                name={checked ? "checkmark-circle" : "close-circle"}
                size={24}
                color={checked ? "green" : "red"}
                style={{ marginRight: 10 }}
            />
            <Text>{props.title}</Text>
        </View>
    );
}
