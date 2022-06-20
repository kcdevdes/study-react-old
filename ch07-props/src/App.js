import './App.css';
import Hello from './components/Hello.jsx'
import Wrapper from './components/Wrapper.jsx'
import Counter from './components/Counter.jsx'
import InputSample from './components/InputSample.jsx'
import Strikethrough from './components/Strikethrough.jsx'
import UserList from './components/UserList.jsx'

function App() {
  return (
    <Wrapper>
      <Hello name='Kevin Choi' color='red' isBold isSpecial />
      <Strikethrough />
      <Counter />
      <Strikethrough />
      <InputSample />
      <Strikethrough />
      <UserList />
    </Wrapper>
  );
}

export default App;
