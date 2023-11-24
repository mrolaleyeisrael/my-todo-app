import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";


export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('')

  function changeHandler(val) {
    setText(val)
    console.log(text)
  }

  function pressHandler(val) {
    submitHandler(text)
    setText('')
  }
  return (
    <View>
      <TextInput style={styles.input} placeholder="new todo..." value={text} onChangeText={changeHandler} />
      <Button onPress={pressHandler}
        title="add Todo" color="coral" />
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
  }
})