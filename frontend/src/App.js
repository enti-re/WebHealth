import Register from './Components/Register/Register';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Home from './Components/pages/Home';
import Diet from './Components/pages/Diets';
import Gym from './Components/pages/Gyms'
import Article from './Components/pages/Article';
import FrontPage from './Components/pages/FrontPage'
import LogOut from './Components/Register/LogOut';
import BmiDiet from './Components/pages/BmiDiet';
import KommunicateChat from './Components/chat'
function App() {

  return <div>
  <BrowserRouter>
  <KommunicateChat />
  <Switch>
         <Route path='/' exact component={FrontPage} />
         <Route path='/logout' exact component={LogOut} />
         <Route path='/register' component={Register} /> 
         <Route path='/home' exact component={Home} />
         <Route path="/bmi" component={BmiDiet} />
         <Route path="/workout" component={Diet} />
         <Route path="/gym" component={Gym} />
         <Route path="/article" component={Article} />
  </Switch>
  </BrowserRouter>  
    
  </div>
}

export default App;
