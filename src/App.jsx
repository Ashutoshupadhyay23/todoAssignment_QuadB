import React from 'react';
import TaskInput from "./components/taskInput";
import TaskList from "./components/taskList";
import { Provider } from 'react-redux';
import store from "./store/Store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center min-h-screen bg-gray-700">
        <h1 className="text-3xl font-bold mb-4 mt-4 text-gray-200">ToDo App with Tailwind CSS</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
