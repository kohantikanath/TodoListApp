
import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, TextInput } from "react-native";
import { FAB } from "react-native-paper";
import { saveTasks, loadTasks } from "../utils/storage";
import TodoItem from "../components/TodoItem";
import AddTaskModel from "../components/AddTaskModel";

export default function TodoListScreen() {
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const savedTasks = await loadTasks();
      setTasks(savedTasks);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Tasks"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TodoItem
            task={item}
            onToggle={() => toggleCompletion(index)}
            onDelete={() => deleteTask(index)}
          />
        )}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        color="white"
        onPress={() => setIsModalVisible(true)}
      />
      <AddTaskModel
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddTask={addTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "lavender" },
  searchBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  searchBar: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#B67BD8",
  },
});