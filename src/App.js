 
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
       <h1>React JS</h1>
       <p>
         Hello {handleNameChange()}
       </p>
    </div>
  );
}

export default App;
