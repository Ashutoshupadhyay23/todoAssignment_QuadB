import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../store/actions/taskActions';

const TaskList = () => {
  const tasks = useSelector(state => state.task.tasks);
  const dispatch = useDispatch();
  const [editTaskId, setEditTaskId] = useState(null); // State to track the task being edited
  const [editedTaskName, setEditedTaskName] = useState(''); // State to store edited task name

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (task) => {
    setEditTaskId(task.id);
    setEditedTaskName(task.name);
  };

  const handleUpdateTask = () => {
    dispatch(updateTask(editTaskId, editedTaskName));
    setEditTaskId(null); // Clear edit state
    setEditedTaskName(''); // Clear edited task name
  };

  return (
    <div className="mt-4">
      <ul className="divide-y divide-gray-300">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center justify-between py-2 px-4">
            {editTaskId === task.id ? (
              <input
                type="text"
                value={editedTaskName}
                onChange={(e) => setEditedTaskName(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 ml-2 focus:outline-none focus:border-blue-500"
              />
            ) : (
              <span className="text-gray-100 text-xl px-2">{task.name}</span>
            )}
            <div>
              {editTaskId === task.id ? (
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded m-2 focus:outline-none"
                  onClick={handleUpdateTask}
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none"
                  onClick={() => handleEditTask(task)}
                >
                  Edit
                </button>
              )}
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded focus:outline-none"
                onClick={() => handleDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
