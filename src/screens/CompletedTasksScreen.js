import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { loadTasks, saveTasks } from "../utils/storage";

export default function CompletedTasksScreen() {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await loadTasks();
      setCompletedTasks(tasks.filter((task) => task.completed));
    };
    fetchTasks();
  }, []);

  const deleteTask = (index) => {
    const updatedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={completedTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text>{item.name}</Text>
            <Button title="Delete" onPress={() => deleteTask(index)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
