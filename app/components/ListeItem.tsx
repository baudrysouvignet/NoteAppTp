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
        if (typeof window !== 'undefined' && window.confirm) {
            if (window.confirm('Veuillez confirmer la suppression')) {
            props.handleDelete(props.id);
            } else {
            return;
            }
        } else {
            Alert.alert(
            "Confirmation",
            "Veuillez confirmer la suppression",
            [
                {
                text: "Annuler",
                style: "cancel"
                },
                {
                text: "Confirmer",
                onPress: () => props.handleDelete(props.id)
                }
            ]
            );
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
        >
            <Ionicons
                name={checked ? "checkmark-circle" : "close-circle"}
                size={24}
                color={checked ? "green" : "red"}
                style={{ marginRight: 10 }}
                onPress={check}
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
