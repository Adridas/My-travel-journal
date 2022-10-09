
import './App.css';
import Header from './header'
import Main from './main';
import data from './data';

function App() {

  const mains = data.map(item => {
    return (
        <Main 
            key={item.id}
            item={item}
        />
    )
})        

  return (
    <div className="App">
      <Header/>
      {mains}
       
   
    </div>
  );
}

export default App;

// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
