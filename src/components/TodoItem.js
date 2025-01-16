// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
// } from "react-native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// export default function TodoItem({ task, onToggle, onDelete, onEdit }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedText, setEditedText] = useState(task.name);

//   const handleSubmitEditing = () => {
//     if (editedText.trim()) {
//       onEdit(editedText.trim());
//       setIsEditing(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {isEditing ? (
//         <TextInput
//           style={styles.editInput}
//           value={editedText}
//           onChangeText={setEditedText}
//           onBlur={handleSubmitEditing}
//           onSubmitEditing={handleSubmitEditing}
//           autoFocus
//         />
//       ) : (
//         <TouchableOpacity
//           style={styles.textContainer}
//           onPress={() => setIsEditing(true)}
//         >
//           <Text style={[styles.text, task.completed && styles.completed]}>
//             {task.name}
//           </Text>
//         </TouchableOpacity>
//       )}
//       <View style={styles.buttons}>
//         <TouchableOpacity onPress={onToggle} style={styles.toggleButton}>
//           <Text style={styles.buttonText}>
//             {task.completed ? "Undo" : "Complete"}
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
//           <Icon name="delete" size={20} color="red" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: "lavender",
//     borderRadius: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   text: {
//     fontSize: 16,
//   },
//   completed: {
//     textDecorationLine: "line-through",
//     color: "grey",
//   },
//   editInput: {
//     flex: 1,
//     fontSize: 16,
//     padding: 0,
//     borderBottomWidth: 1,
//     borderBottomColor: "#B67BD8",
//   },
//   buttons: {
//     flexDirection: "row",
//   },
//   toggleButton: {
//     backgroundColor: "green",
//     padding: 9,
//     borderRadius: 17,
//     marginRight: 5,
//   },
//   deleteButton: {
//     backgroundColor: "lavender",
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 11,
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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
          <Icon
            name={task.completed ? "undo" : "check"}
            size={24}
            color={task.completed ? "Grey" : "green"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Icon name="delete" size={20} color="red" />
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
    backgroundColor: "lavender",
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
    alignItems: "center",
  },
  toggleButton: {
    padding: 8,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "lavender",
    padding: 10,
    borderRadius: 5,
  },
});