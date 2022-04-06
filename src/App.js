import './App.scss';
import './styles/partials/_global.scss';
import Navigation from './components/Navigation/Navigation'; 
import Header from './components/Header/Header';
import AddTaskForm from './pages/AddTaskForm/AddTaskForm';
import TaskList from './components/TaskList/TaskList';
import Calendar from './pages/CalendarPage/CalendarPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Switch>
        <Route path ='/' exact component = {TaskList} />
        <Route path ='/form' component = {AddTaskForm} />
        <Route path ='/task/:id' component = {TaskList} /> 
        <Route path ='/calendar' component = {Calendar} /> 
      </Switch>
      {/* <Navigation />  */}
    </BrowserRouter>
  );
}
export default App;
