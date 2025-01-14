import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <table>
        <tr>
          <th>Name</th>
        </tr>
        <tr>
          <td>John</td>
        </tr>
        <tr>
          <td>Elsa</td>
        </tr>
      </table>
      <h1>React is {5+5} times better with JSX</h1>
      <h1>{myElent}</h1>
      
    </div>
    
  );
}
const x = 7;
let text = "Goodbye";
if (x<10){
  text = "Hello";
}
const myElent = <h1>{text}</h1>;

export default App;

