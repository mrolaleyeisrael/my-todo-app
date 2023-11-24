import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity >
      <View style={styles.item}>
        <Text style={styles.itemText} >{item.text}</Text>
        <MaterialIcons style={styles.deleteBtn}  name="delete" size={18} color="#333" onPress={() => pressHandler(item.key)} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    cursor: "pointer",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
  alignItems: "center",
    justifyContent: "space-between"

  },
  itemText: {
    flexGrow: 0,
    maxWidth: '90%'
  },
  deleteBtn: {
    marginLeft: 10,
    flexShrink: 0
  }
});

export default TodoItem;
