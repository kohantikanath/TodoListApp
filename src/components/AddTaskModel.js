import React, { useState } from "react";
import { Modal, View, TextInput, Button, StyleSheet } from "react-native";

export default function AddTaskModel({ visible, onClose, onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName("");
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.input}
            placeholder="Task Name"
            value={taskName}
            onChangeText={setTaskName}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={onClose} />
            <Button title="Add Task" onPress={handleAddTask} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
