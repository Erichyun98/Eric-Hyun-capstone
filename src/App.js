import './App.css';
import './styles/partials/_global.scss';
import Navigation from './components/Navigation/Navigation'; 
import Header from './components/Header/Header';
import AddTaskForm from './pages/AddTaskForm/AddTaskForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import {Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Navigation /> 
      <Switch>
        <Route path ='/' exact component = {AddTaskForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
