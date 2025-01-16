
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { loadTasks } from "../utils/storage";

export default function CompletedTasksScreen() {
  const [completedTasks, setCompletedTasks] = useState([]);

  // Fetch tasks whenever the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      const fetchTasks = async () => {
        const tasks = await loadTasks();
        setCompletedTasks(tasks.filter((task) => task.completed));
      };
      fetchTasks();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={completedTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No completed tasks</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#634992",
    padding: 16,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "lavender",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskText: {
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#999",
  },
});
