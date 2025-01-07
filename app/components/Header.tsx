import { Text, View } from "react-native";


export function Header() {
    return (
        <View>
            <Text style={{
                width: "100%",
                backgroundColor: "rgb(255 255 255)",
                fontSize: 24,
                textAlign: "center",
                padding: 20
            }}>NotesApp</Text>
        </View>
    );
}
