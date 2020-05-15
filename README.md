## Available Scripts

In the project directory, you can run:

`yarn start`
`yarn test`
`yarn build`
`yarn eject`

## Create the project
```
npx create-react-app ABC
npm i --save-dev node-sass
```

## VSCode
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

## useState()
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

#### side effect
Chia lam 2 loai side effects
- khong can clean up: Goi API, tuong tac DOM
- can clean up: subscriptions, setTimeout, setInterval

## useEffect()
Sau moi lan render
```
function useEffect(callback, dependencies) {}
```

```
function App() {
  const [color, setColor] = useState('deeppink');

  useEffect(() => {
    // Effect

    return () => {
      //Clean up
    };
  }, []);

  return <h1>ABC DEF</h1>
}
```

MOUNTING
- rendering
- run useEffect()

UPDATING
- rendering
- run `userEffect() cleanup` : neu dependencies thay doi.
- run `userEffect()`: neu dependencies thay doi.

UNMOUTING
- run `userEffect() cleanup`

Dieu Khien:
```
function App() {
  const [filters, setFilters] = userState();

  useEffect(() => {
    // luon luon dc chay sau moi lan render
    return () => {
      // luon luon dc chay sau moi lan render
    };
  });
  
  useEffect(() => {
    // chay 1 lan sau render dau tien
    return () => {
      // chay 1 lan sau render dau tien
    };
  }, []);

  useEffect(() => {
    // chay  sau render

    return () => {
      // chay khi filters thay doi
    };
  }, [filters]);
}
```

Life cycle -> useEffect() hook
```
class App extend PureComponent {
  componentDidMount() { console.log('Component Did Mount'); }

  componentWillUnmount() { console.log('Component Will Unmount'); }
}

// chay dung 1 lan
class App {
  useEffect(() => {
    console.log('Component Did Mount');

    return () => {
      console.log('Component Will Unmount');
    };
  }, []);
}
```

```
// check dieu kien

class App extend PureComponent {
  componentDidMount() { console.log('Component Did Mount or Did Update'); }

  componentDidUpdate() { console.log('Component Did Mount or Did Update'); }
}

// chay dung 1 lan
class App {
  useEffect(() => { console.log('Component Did Mount or Did Update'); });
}
```

## Custom hook
dung "use...()"

```
function useMagicColor() {
  const [color, setColor] = useState('green');

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const newColor = randomColor();
      setColor(newColor);
    }, 2000);

    return () => {
      clearInterval(intervalRef);
    }
  }, []);

  // Custom hooks return data instead of JSK
  return color;
}


function MagicBox() {
  const color = useMagicColor();

  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}
```

## Memoization
```
const addMeno = (a, b) => {
  // Init cache
  if (!addMemo.cache) {
    addMeno.cache = {};
  }

  // Return cache if fond
  const key = `${a}_${b}`;
  const synmetricKey = `${b}_${a}`;
  if (addMeno.cache[key]) return addMeno.cache[key];
  if (addMeno.cache[synmetricKey]) return addMeno.cache[synmetricKey];

  // Calculate and save to cache
  const sum = a + b;
  addMemo.cache[key] = sum;
  addMemo.cache[synmetricKey] = sum;
  return sum
}

add(2, 3); // Tinh toan & luu cache, => 5
add(3, 2); // Phat hien da co trong cache => 5
add(1, 2); // Ko co trong cache, Tinh toan & luu cache, => 3
```

## React.memo()
- La HOC, khong hooks
- Tuong tu PureComponent
- PureComponent cho Class component
- React.memo() cho functional component
- Chi render lai component ner props thay doi
- Su dung shallow comparison
```
// Class component - PureComponent
export default class Hero extends PureComponent {
  return () { return <div>Super hero!</div> }
}

// Functional component - React.memo
function Hero() {
  return () { return <div>Super hero!</div> }
}
export defaut React.memo(Hero);
```

## useCallback()
- La react hooks, nhan vao 2 tham so: 1 la function, 2 la dependencies
- return memozied callback
- Chi tao ra function moi khi dependencies thay doi
- Neu dung empty dependencies thi KO tao ra FUNCTION moi
```
// App re-render
// -> tao ra 1 function moi
// -> Chart bi re-render

function App() {
  const handleChartTypeChange = (type) => {}
  return <Chart onTypeChange={handleChartTypeChange} />
}

// Moi lan App re-render
// -> dung useCallback() chi tao function 1 lan dau
// -> nen Chart ko bi re-render

function App() {
  const handleChartTypeChange = useCallback((type) => {}, [])
  return <Chart onTypeChange={handleChartTypeChange} />
}
```

## useMemo()
- La react hooks, nhan vao 2 tham so: 1 la function, 2 la dependencies
- Chi tinh toan value moi khi depencies thay doi
- Neu dung empty dependencies thi KO tao ra VALUE moi
```
fucntion App() {
  const data = [{}, {}, {}];
  return <Chart data={data}/>
}

fucntion App() {
  const data = useMemo(() => [{}, {}, {}], []);
  return <Chart data={data}/>
}
```

useCallback() va useMemo():
- Chi dung: Do thi, Bieu do, animations, nhung component nang phan render
- Chi ra micro improvements