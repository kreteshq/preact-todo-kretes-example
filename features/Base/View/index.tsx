import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

interface Task {
  name: string;
  done: boolean
};

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/task');
      const result = await response.json();
      setTasks(result);
    };

    fetchData();
  }, [])

  const addTodo = () => {
    setTasks([...tasks, { name: newTask, done: false }]);
    setNewTask('');
  }

  const onInput = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    setNewTask(value)
  }

  const onKeyUp = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === 'Enter') {
      addTodo();
    }
  }

  return (
    <div class="task-container">
      <div class="task-input">
        <input
          placeholder="Add new item..."
          type="text"
          class="task-new"
          value={newTask}
          onInput={onInput}
          onKeyUp={onKeyUp}
        />
        <button class="task-add" onClick={addTodo}>Add</button>
      </div>
      <ul class="task-list">
        {tasks.map((task, index) => (
          <li key={index} class="task-item" v-for="task in state.tasks">
            <label class="task-item-container">
              <div class="task-checkbox">
                <input type="checkbox" class="opacity-0 absolute" value={task.done} />
                <svg class="task-checkbox-icon" viewBox="0 0 20 20">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="ml-2">{task.name}</div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { App };


