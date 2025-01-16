// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import TodoListScreen from "../screens/TodoListScreen";
// import CompletedTasksScreen from "../screens/CompletedTasksScreen";

// const Tab = createBottomTabNavigator();

// export default function BottomTabs() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;

//             if (route.name === "Todo List") {
//               iconName = "format-list-bulleted";
//             } else if (route.name === "Completed Tasks") {
//               iconName = "check";
//             }

//             return <Icon name={iconName} color={color} size={size} />;
//           },
//           headerTitleAlign: "center",
//         })}
//         tabBarOptions={{
//           activeTintColor: "#6200ee",
//           inactiveTintColor: "gray",
//           style: {
//             backgroundColor: "#f8f8f8",
//             paddingBottom: 5,
//           },
//         }}
//       >
//         <Tab.Screen name="Todo List" component={TodoListScreen} />
//         <Tab.Screen name="Completed Tasks" component={CompletedTasksScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import TodoListScreen from "../screens/TodoListScreen";
import CompletedTasksScreen from "../screens/CompletedTasksScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Todo List") {
              iconName = "format-list-bulleted";
            } else if (route.name === "Completed Tasks") {
              iconName = "check";
            }

            return <Icon name={iconName} color={color} size={size} />;
          },
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "lavender",
          },
          headerTitleStyle: {
            color: "#333",
            fontWeight: "bold",
          },
          tabBarStyle: {
            backgroundColor: "#C9EFFC",
            paddingBottom: 5,
          },
          tabBarActiveTintColor: "#6200ee",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Todo List" component={TodoListScreen} />
        <Tab.Screen name="Completed Tasks" component={CompletedTasksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}