import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, task.completed && styles.completed]}>
        {task.name}
      </Text>
      <Button title={task.completed ? "Undo" : "Complete"} onPress={onToggle} />
      <Button title="Delete" onPress={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  text: { flex: 1 },
  completed: { textDecorationLine: "line-through", color: "grey" },
});
