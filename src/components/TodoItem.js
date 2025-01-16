import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, task.completed && styles.completed]}>
        {task.name}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onToggle} style={styles.toggleButton}>
          <Text style={styles.buttonText}>
            {task.completed ? "Undo" : "Complete"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "grey",
  },
  buttons: {
    flexDirection: "row",
  },
  toggleButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  deleteButton: {
    backgroundColor: "#F44336",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
