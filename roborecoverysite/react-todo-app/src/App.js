import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import TodoContainer from './components/TodoContainer';
import About from './components/About/AboutTodoContainer';
import CoreTenets from './components/CoreTenets/CoreTenetsToDoContainer';
import ReachUs from './components/ReachUs/ReachUsTodoContainer';
import Donate from './components/Donate/DonateTodoContainer';
import Teachers from './components/Teachers/TeachersTodoContainer';



function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoContainer></TodoContainer>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About/AboutTodoContainer' component={About} />
        <Route path='/Model/ModelTodoContainer' component={Model} />
        <Route path='/ReachUs/ReachUsTodoContainer' component={ReachUs} />
        <Route path='/Donate/DonateTodoContainer' component={Donate} />
         <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoContainer></TodoContainer>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    */
   <div className="App">
     
     <Navbar />

      

        
        <Routes>
          <Route exact path='/' element={<TodoContainer />} />
          <Route path='/components/About/AboutTodoContainer' element={<About />} />
          <Route path='/components/CoreTenets/CoreTenetsToDoContainer' element={<CoreTenets />} />
          <Route path='/components/ReachUs/ReachUsTodoContainer' element={<ReachUs />} />
          <Route path='/components/Donate/DonateTodoContainer' element={<Donate />} />
          <Route path='/components/Teachers/TeachersTodoContainer' element={<Teachers />} />
        </Routes>


      
    </div>
   
   


      

  );
}

export default App;
