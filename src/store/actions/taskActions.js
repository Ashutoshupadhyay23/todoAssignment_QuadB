import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./Types";

export const addTask = (taskName) => {
  return {
    type: ADD_TASK,
    payload: {
      name: taskName,
      id: new Date().getTime().toString(), // Generate unique ID
    },
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: {
      id: taskId,
    },
  };
};

export const updateTask = (taskId, newName) => {
  return {
    type: UPDATE_TASK,
    payload: {
      id: taskId,
      newName: newName,
    },
  };
};
