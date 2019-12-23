import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../pages/home'
import Nav2 from '../pages/page2'
import Nav3 from '../pages/page3'
// BrowserRouter必须link和routecomponet包在一起
const BasicRoute = () => (
    <div>
        <Switch>
          <Route path={["/home"]} component={Home} />
          <Route path="/nav2" component={Nav2}/>
          <Route exact path="/nav3">
            <Redirect to="/nav3/life1" />
          </Route>
          <Route path="/nav3" component={Nav3} />
          <Route path="/" component={Home} />
        </Switch>
    </div>
  );


export default BasicRoute;