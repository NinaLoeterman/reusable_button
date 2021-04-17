import './App.css';
import Button from './components/Button/Button';

function App() {

  const doSomething = () => {
    console.log('im doing a lot of things');
  }

  return (
    <div className="App">
      <Button type="bookmark" onClick={doSomething} theme="accent" className="new_style" />
      <Button title="click me" theme="light" outlined />
      <Button type="love" theme="dark" />
      <Button title="go home" type="home" theme="accent" />
      <Button title="lets chat" type="chat" theme="light" />
    </div>
  );
}

export default App;
