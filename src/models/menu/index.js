import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

import './index.scss';
import {Menu} from 'antd'
function App(props) {
  const {menuList, mode, className} = props
  const [currentMenu, setCurrentMenu] = useState()
  const location= useLocation();
  useEffect((props) => {
    if (className === 'bigMenu') {
      setCurrentMenu('/' + location.pathname.split('/')[1])
    } else {
      setCurrentMenu(location.pathname)
    }
  })
  const listItems = menuList.map((menu) => 
    <Menu.Item key={menu.path}>
      <NavLink to={menu.path}>{menu.name}</NavLink>
      
    </Menu.Item>
  )
  return (
    <div>
      <Menu className={className} defaultSelectedKeys={menuList[0].path} selectedKeys={[currentMenu]} mode={mode || "horizontal"}>
        {listItems}
      </Menu>
    </div>
  );
}

export default App;
