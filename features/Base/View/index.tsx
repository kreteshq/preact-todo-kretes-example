import { h, Component } from 'preact';

interface Props {
  page?: string,
}

interface State {
  todos: string[]
}

class App extends Component<Props, State> {
  addTodo() {
    const { todos = [] } = this.state;
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }
  render({ }: Props, { todos = [] }: State) {
    return (
      <div class="task-container">
        <div class="task-input">
          <input
            placeholder="Add new item..."
            type="text"
            class="task-new"
            v-model="state.newTask"
          />
          <button class="task-add">Add</button>
        </div>
        <ul class="task-list">
          <li class="task-item" v-for="task in state.tasks">
            <label class="task-item-container">
              <div class="task-checkbox">
                <input type="checkbox" class="opacity-0 absolute" />
                <svg class="task-checkbox-icon" viewBox="0 0 20 20">
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              </div>
              <div class="ml-2">test</div>
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

const Header = ({ name }: any) => <h1 class="text-2xl">{name} List</h1>;
const Footer = (props: any) => <footer {...props} />;

export { App };


