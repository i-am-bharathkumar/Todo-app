import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../../store/slices/taskSlice';
import { RootState, Task } from '../../types';
import { Trash2, CheckCircle, Circle } from 'lucide-react';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100/70 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100/70 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100/70 text-green-800 border-green-200';
      default:
        return 'bg-gray-100/70 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-4 pb-8">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-item glass-effect-light flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 rounded-xl ${
            task.completed ? 'opacity-75' : ''
          }`}
        >
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <button
              onClick={() => dispatch(toggleTask(task.id))}
              className="text-gray-500 hover:text-indigo-600 transform transition-transform duration-200 hover:scale-110"
            >
              {task.completed ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {task.title}
              </span>
              <span
                className={`priority-badge inline-flex items-center border ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between sm:justify-end space-x-4">
            {task.weather && (
              <div className="weather-badge flex items-center space-x-2 px-3 py-1 rounded-lg">
                <img
                  src={`http://openweathermap.org/img/w/${task.weather.icon}.png`}
                  alt="weather"
                  className="w-8 h-8"
                />
                <span className="text-blue-800 font-medium">{Math.round(task.weather.temp)}°C</span>
              </div>
            )}
            <button
              onClick={() => dispatch(removeTask(task.id))}
              className="text-red-500 hover:text-red-700 transform transition-transform duration-200 hover:scale-110"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
      {tasks.length === 0 && (
        <div className="text-center py-12 glass-effect-light rounded-xl">
          <p className="text-gray-500 text-lg">No tasks yet. Add your first task above!</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;