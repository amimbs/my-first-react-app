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

  let handleClick = (e) => {
    console.log(e.target)
    console.log(e.target.dataset)
    console.log(parseInt(e.target.dataset.calc))
    if (e.target.dataset.calc === "reset") {
      setCount(0)
    } else {
      setCount(count + parseInt(e.target.dataset.calc))
    }
    console.log("button clicked", count)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={onSubmit}>
          <TextInput name="first_name" title="First Name" placeholder="First Name" />
          <TextInput name="last_name" title="Last Name" placeholder="Last Name" />
          <TextInput name="email" title="Email" placeholder="Email" />
          <TextInput type="password" name="password" title="Password" placeholder="Password" />
          <input type="submit" value="Submit"></input>
        </form>

        <div>
          <p>You have clicked {count} times</p>
          <button data-calc="-5" onClick={handleClick}>-5</button>
          <button data-calc="-1" onClick={handleClick}>-1</button>
          <button data-calc="reset" onClick={handleClick}>Reset</button>
          <button data-calc="+1" onClick={handleClick}>+1</button>
          <button data-calc="+5" onClick={handleClick}>+5</button>
        </div>




      </header>
    </div>
  );
}
export default App;
