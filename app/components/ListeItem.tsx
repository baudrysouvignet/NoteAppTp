import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export function ListeItem(
    props: {
        title: string;
    }
) {
    return (
        <View style={{
            width: "100%",
            backgroundColor: "rgb(255 255 255)",
            padding: 10,
            flexDirection: "row",
            
        }}>
            <Ionicons name="checkmark-circle" size={24} color="green" style={{ marginRight: 10 }} />
            <Text>{props.title}</Text>
        </View>
    );
}
