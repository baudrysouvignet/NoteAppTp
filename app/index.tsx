import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Header } from "./components/Header";

interface Item {
  id: string;
  title: string;
}

export default function Index() {

  const [data, setData] = useState<Item[]>([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ]);

  const renderItem = ({ item }: { item: Item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View >
      <Header />

      <FlatList
        data={data} // Les données à afficher
        renderItem={renderItem} // La fonction qui retourne un composant pour chaque élément
        keyExtractor={(item) => item.id} // Clé unique pour chaque élément
      />
    </View>
  );
}
