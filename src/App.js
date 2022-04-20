import logo from './logo.svg';
import './App.css';
import TextInput from './TextInput';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  let onSubmit = (e) => {
    e.preventDefault();
    console.log(e);

  };

  let handleClick = () => {
    setCount(count + 1);
    console.log("button clickec", count)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={onSubmit}>
          <TextInput name="first_name" title="First Name" placeholder="First Name"/>
          <TextInput name="last_name" title="Last Name" placeholder="Last Name"/>
          <TextInput name="email" title="Email" placeholder="Email"/>
          <TextInput type="password" name="password" title="Password" placeholder="Password"/>
          <input type="submit" value="Submit"></input>
        </form>

        <div>
          <p>You have clicked {count} times</p>
          <button onClick={handleClick}>Click me</button>
        </div>




      </header>
    </div>
  );
}

//increment 1 or decrement
//same for 5
//resets to zero
 // npm start
export default App;
