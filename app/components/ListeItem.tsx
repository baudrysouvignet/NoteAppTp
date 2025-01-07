import { Alert, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";



export function ListeItem(
    props: {
        id: number;
        title: string;
        state: boolean;
        handleDelete: (id: number) => void;
    }
) {
    const [checked, setChecked] = useState(props.state);

    const check = () => {
        setChecked(!checked);

    }

    const handleDelete = () => {
        if (window.confirm('Veuillez confirmer la suppression')) {
            props.handleDelete(props.id);
        } else {
            return;
        }

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
            <Text style={{
                marginLeft: "auto",
                color: "red",
                cursor: "pointer"
            }}
                onPress={handleDelete}
            >Supprimer</Text>
        </View>
    );
}
