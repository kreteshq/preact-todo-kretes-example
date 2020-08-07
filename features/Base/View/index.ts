import { Component } from 'preact';
import { html } from 'htm/preact';

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
    return html`
      <div>
        <${Header} name="ToDos ()" />
        <ul>
          ${todos.map(todo => html`
            <li>${todo}</li>
          `)}
        </ul>
        <button onClick=${() => this.addTodo()} class="bg-blue-100 border px-2 py-1">Add Todo</button>
        <${Footer}>footer content here<//>
      </div>
    `;
  }
}

const Header = ({ name }: any) => html`<h1 class="text-2xl">${name} List</h1>`
const Footer = (props: any) => html`<footer ...${props} />`

export { App };
