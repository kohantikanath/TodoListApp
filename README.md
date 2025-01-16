# TodoListApp

A simple and intuitive Todo List Application built using React Native and Expo CLI, designed to manage and track your tasks efficiently. This project features separate screens for managing all tasks and viewing completed tasks.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- View completed tasks
- Search Task
- Edit the task
- Persistent storage using AsyncStorage

## Screens

- **Todo List Screen**: View and manage your tasks.
- **Completed Tasks Screen**: View and delete completed tasks.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/TodoListApp.git
    cd TodoListApp
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Install additional dependencies:
    ```sh
    npm install @react-navigation/native @react-navigation/bottom-tabs react-native-paper react-native-vector-icons @react-native-async-storage/async-storage
    ```

4. Link native dependencies:
    ```sh
    npx react-native link
    ```

## Running the App

1. Start the Metro Bundler:
    ```sh
    npx react-native start
    ```

2. Run the app on an Android or iOS emulator:
    ```sh
    npx react-native run-android
    # or
    npx react-native run-ios
    ```


## Usage

- **Add a Task**: Click the floating action button (FAB) in the bottom right corner of the Todo List screen to open the Add Task modal.
- **Mark as Completed**: Click on a task to toggle its completion status.
- **Delete a Task**: Click the "Delete" button next to a task to remove it.
- **View Completed Tasks**: Navigate to the Completed Tasks screen using the bottom tab navigator.


## Dependencies

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
