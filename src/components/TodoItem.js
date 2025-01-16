import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function TodoItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.name);

  const handleSubmitEditing = () => {
    if (editedText.trim()) {
      onEdit(editedText.trim());
      setIsEditing(false);
    }
  };

  return (
    <View style={styles.container}>
      {isEditing ? (
        <TextInput
          style={styles.editInput}
          value={editedText}
          onChangeText={setEditedText}
          onBlur={handleSubmitEditing}
          onSubmitEditing={handleSubmitEditing}
          autoFocus
        />
      ) : (
        <TouchableOpacity
          style={styles.textContainer}
          onPress={() => setIsEditing(true)}
        >
          <Text style={[styles.text, task.completed && styles.completed]}>
            {task.name}
          </Text>
        </TouchableOpacity>
      )}
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
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "grey",
  },
  editInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#B67BD8",
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