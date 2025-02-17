// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const saveTasks = async (tasks) => {
//   try {
//     await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
//   } catch (e) {
//     console.error("Error saving tasks", e);
//   }
// };

// export const loadTasks = async () => {
//   try {
//     const tasks = await AsyncStorage.getItem("tasks");
//     return tasks ? JSON.parse(tasks) : [];
//   } catch (e) {
//     console.error("Error loading tasks", e);
//     return [];
//   }
// };
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  } catch (error) {
    console.error("Failed to load tasks", error);
    return [];
  }
};

export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks", error);
  }
};