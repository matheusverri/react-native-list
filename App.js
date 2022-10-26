import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';

export default function App() {

  const [text, setText] = useState("");

  let listItems = [];

  function addItemToListAndClearInput(itemName) {
    listItems.push(itemName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text> Matheus Gustavo Verri Dias. R.A: 2020101522</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder="Insira um item"
          onChangeText={text => setText(text)}
          value={text}
        />
        <Button
        onPress={addItemToListAndClearInput(text)}
        title="Adicionar"
        color="#841584"
        accessibilityLabel="Adicionar item"
        />
        <View>
          <Text> {listItems} </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    marginTop: 25,
  },
  body: {
    marginTop: 60,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
