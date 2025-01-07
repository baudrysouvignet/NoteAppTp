import { TextInput, Button, View } from "react-native";
import React, { useState } from "react";


export function Input(
    props: {
        handleClick: (title: string) => void;
    }
) {

    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        props.handleClick(inputValue);
    }

    return (
        <View style={{
            width: "80%",
            backgroundColor: "rgb(255 255 255)",
            padding: 10,
            margin: 30,
            marginLeft: "10%",
            flexDirection: "row",
            alignItems: "center",
            gap: 10
        }}>
            <TextInput
                placeholder="Enter text"
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 10,
                    flex: 1,
                    margin: 0
                }}
                onChangeText={setInputValue}
                value={inputValue}
            />
            <View style={{ height: 'auto' }}>
                <Button
                    title="Ajouter"
                    onPress={handleClick}
                />
            </View>
        </View>
    );
}
