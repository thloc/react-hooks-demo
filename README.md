## Available Scripts

In the project directory, you can run:

`yarn start`
`yarn test`
`yarn build`
`yarn eject`

### Create the project
```
npx create-react-app ABC
npm i --save-dev node-sass
```

### VSCode
- SCSS Formatter
- ReactJS code snippets
- Ctrl + Option + O (Window: Alt + Shift + O) : delete import not use.

### Array destructoring syntax
```
const array = ['Easy', 'Frontend'];
const a = array[0]; // Easy
const b = array[1]; //Frontend

const [a, b] = ['Easy', 'Frontend'];
// a = 'Easy'
// b = 'Frontend'
```

```
function useSate(initialState) {
  return [state, setState];
}

function ColorBox() {
  const [color, setColor] = useState('deeppink);
  return ...;
}
```

#### Class Component
```
class ColorBox extends PureComponent {
  construstor(props) {
    super(props);
  }

  this.state = {
    shape: 'square',
    color: 'deeppink',
  };

  handleBoxClick() {
    this.setState({ color: 'green' });
  }

  render() {
    const { color } = this.state;
    return (
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={this.handleBoxClick}>
      </div>
    );
  }
}
```

#### Functional Component
```
// default value

function ColorBox() {
  const [share, setShape] = useState('square');
  const [color, setColor] = userState('deeppink);

  function handleBoxClick() {
    setColor('green');
  }

  render() {
    const { color } = this.state;
    return (
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={this.handleBoxClick}>
      </div>
    );
  }
}
```

#### useState()
```
function TodoList() {
  const [todoList, setTodoList] = useState(['love', 'easy', 'frontend']);

  function removeTodo(index) {
    <!-- Clone into a new array -->
    const newTodoList = [...todoList];

    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <ul className="todo-list">
    {
      todoList.map((todo, index) => (
        <li 
          key={todo.id}
          onClick={() => removeTodo(index)}>
          {todo.title}
        </li>
      ));
    }
    </ul>
  );
}
```

#### NOTE useState()
- useState() use REPLACING instead MERGING
```
// setState() in class component: MERGING
this.state = { name: 'A', color: 'red' };
this.setState({color: 'green'});
// -> { name: 'A', color: 'green' }


// UserSte() in functional component: REPLACING
const [person, setPerson] = useState({name: 'B', color: 'red'});
setPerson({ color: 'green' })
// -> { color: 'green' }

// solution
setPerson({ ...person, color: 'green' });
// -> { name: 'B', color: 'green' }
```

- Initial state only run one time.
```
function ColorBox() {
  // redundant code for sub-sequent re-render
  const initColor = getComplicatedColor();
  const [color, setColor] = userState(initColor);

  // ....
}
```

- Initial state callback chi chay 1 lan (danh cho tinh toan nhieu)
```
function ColorBox() {
  // redundant code for sub-sequent re-render
  const [color, setColor] = userState(() => {
    // This function will be called once
    const initColor = getComplicatedColor();
    return initColor;
  });

  // ....
}
```