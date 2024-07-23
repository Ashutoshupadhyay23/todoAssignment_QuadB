import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../actions/Types";

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasksAdd = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasksAdd));
      return {
        ...state,
        tasks: newTasksAdd,
      };
    case DELETE_TASK:
      const newTasks = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks,
      };
    case UPDATE_TASK:
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, name: action.payload.newName };
        }
        return task;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
