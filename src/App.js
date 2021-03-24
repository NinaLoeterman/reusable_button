import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button title="save me" type="bookmark" theme="accent" />
      <Button title="click me" type="send" theme="light" outlined />
      <Button title="love me" type="love" theme="dark" />
      <Button title="go home" type="home" theme="accent" />
      <Button title="lets chat" type="chat" theme="light" />
    </div>
  );
}

export default App;
