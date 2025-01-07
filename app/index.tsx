import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Header } from "./components/Header";
import { ListeItem } from "./components/ListeItem";
import { Input } from "./components/Input";

interface Item {
  id: number;
  title: string;
}

export default function Index() {

  const [data, setData] = useState<Item[]>([
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
  ]);

  const renderItem = ({ item }: { item: Item }) => (
    <ListeItem title={item.title} state={false}/>
  );

  const addData = (title: string) => {
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    setData([...data, { id: newId, title }]);
  }

  return (
    <View >
      <Header />
      <Input handleClick={addData}/>

      <View style={{
        width: "80%",
        backgroundColor: "rgb(255 255 255)",
        padding: 10,
        marginLeft: "10%"
      }}>
        <FlatList
          data={data} 
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
}
