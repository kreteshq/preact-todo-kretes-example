import { h, Component } from 'preact';

interface Props {
  page?: string,
}

interface Task {
  name: string;
  done: boolean
};

interface State {
  newTask: string;
  tasks: Task[];
}

class App extends Component<Props, State> {
  addTodo = () => {
    const { tasks = [], newTask: name } = this.state;
    this.setState({ tasks: tasks.concat({ name, done: false }), newTask: '' });
  }

  onInput = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    this.setState({ newTask: value })
  }

  onKeyUp = (event: KeyboardEvent) => {
    const { key } = event;
    if (key === 'Enter') {
      this.addTodo();
    }
  }

  render({ }: Props, { tasks = [], newTask }: State) {
    return (
      <div class="task-container">
        <div class="task-input">
          <input
            placeholder="Add new item..."
            type="text"
            class="task-new"
            value={newTask}
            onInput={this.onInput}
            onKeyUp={this.onKeyUp}
          />
          <button class="task-add" onClick={this.addTodo}>Add</button>
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
}

const Header = ({ name }: any) => <h1 class="text-2xl">{name} List</h1>;
const Footer = (props: any) => <footer {...props} />;

export { App };


