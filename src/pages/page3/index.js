import React from 'react';
import Bcrumb from '../../models/bcrumb'
import Menu from '../../models/menu'
import {Switch, Route} from 'react-router-dom';

function App() {
  const menuList = [
    {
      name : '生活1',
      key: 'life1',
      path: '/nav3/life1'
    },
    {
      name : '生活2',
      key: 'life2',
      path: '/nav3/life2'
    },
    {
      name : '生活3',
      key: 'life3',
      path: '/nav3/life3'
    },
  ]
  return (
    <div>
      <Bcrumb></Bcrumb>
      <Menu menuList = {menuList} className={'little-menu'}></Menu>
      nav3
      <Route path="/nav3/life1" render={() => <span>life1 Page1111</span>} />
      <Route path="/nav3/life2" render={() => <span>life2 Page1111</span>} />
      <Route path="/nav3/life3" render={() => <span>life3 Page1111</span>} />

    </div>
  );
}

export default App;