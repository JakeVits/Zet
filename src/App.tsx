import { Route, Switch, Redirect } from 'react-router-dom';
import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import GettingStarted from "./pages/GettingStarted";
import Report from "./pages/Report";
import Category from "./pages/Management"
import Guideline from "./pages/Guideline"
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>   
      <Switch>
        <Redirect exact path='/' to="/welcome"/>
        <Route path="/guideline" exact={true} component={Guideline}/>
        <Route path="/home" exact={true} component={Home}/>
        <Route path="/report" exact={true} component={Report}/>     
        <Route path='/welcome' exact={true} component={GettingStarted}/>
        <Route path='/category/:name' exact={true} component={Category}/>
      </Switch>
    </IonReactRouter>
  </IonApp>
);
export default App;
