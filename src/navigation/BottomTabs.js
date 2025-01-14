import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import TodoListScreen from "../screens/TodoListScreen";
import CompletedTasksScreen from "../screens/CompletedTasksScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todo List" component={TodoListScreen} />
        <Tab.Screen name="Completed Tasks" component={CompletedTasksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
