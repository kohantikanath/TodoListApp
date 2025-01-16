
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import { useFocusEffect } from "@react-navigation/native";
// import { loadTasks, saveTasks } from "../utils/storage";

// export default function CompletedTasksScreen() {
//   const [completedTasks, setCompletedTasks] = useState([]);

//   // Fetch tasks whenever the screen is focused
//   useFocusEffect(
//     React.useCallback(() => {
//       const fetchTasks = async () => {
//         const tasks = await loadTasks();
//         setCompletedTasks(tasks.filter((task) => task.completed));
//       };
//       fetchTasks();
//     }, [])
//   );

//   const deleteTask = async (index) => {
//     const updatedTasks = completedTasks.filter((_, i) => i !== index);
//     setCompletedTasks(updatedTasks);

//     // Save updated tasks back to storage
//     const allTasks = await loadTasks();
//     const updatedAllTasks = allTasks.filter(
//       (task) =>
//         !completedTasks.some(
//           (completedTask, completedIndex) =>
//             completedIndex === index && completedTask.name === task.name
//         )
//     );
//     saveTasks(updatedAllTasks);
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={completedTasks}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.taskContainer}>
//             <Text style={styles.taskText}>{item.name}</Text>
//             <TouchableOpacity
//               style={styles.deleteButton}
//               onPress={() => deleteTask(index)}
//             >
//               <Text style={styles.deleteButtonText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         ListEmptyComponent={
//           <Text style={styles.emptyText}>No completed tasks</Text>
//         }
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "lavender",
//     padding: 16,
//   },
//   taskContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 16,
//     marginVertical: 8,
//     backgroundColor: "#ffffff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   taskText: {
//     fontSize: 16,
//   },
//   deleteButton: {
//     backgroundColor: "#ff6666",
//     padding: 8,
//     borderRadius: 8,
//   },
//   deleteButtonText: {
//     color: "#ffffff",
//     fontWeight: "bold",
//   },
//   emptyText: {
//     textAlign: "center",
//     marginTop: 20,
//     fontSize: 18,
//     color: "#999",
//   },
// });


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
    backgroundColor: "lavender",
    padding: 16,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#ffffff",
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
