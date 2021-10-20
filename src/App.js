import './App.css';
import User from './components/User'

function App() {


  const useradd = (adduser)=> {
    console.log(adduser)
  
    
  }

  return (
    <div className="App">
      <User useradd={useradd}/>
    </div>
    
  );
}

export default App;
