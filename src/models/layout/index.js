import React from 'react';
import './index.scss';
import { BrowserRouter} from 'react-router-dom';
import Header from '../header/index.js'
import Footer from '../footer/index.js'
import Menu from '../menu/index.js'
import BasicRoute from '../../util/routes.js'
import { Layout } from 'antd';
const { Content } = Layout;

const App = () => {
  // const locationurl = useLocation();
  // console.log(locationurl)
  const menuList = [
      {
        name : 'nav1',
        key: 'nav1',
        path: '/home'
      },
      {
        name : 'nav2',
        key: 'nav2',
        path: '/nav2'
      },
      {
        name : 'nav3',
        key: 'nav3',
        path: '/nav3'
      },
    ]
  return (

    <Layout className="layout">
      <Header></Header>
        <Menu menuList = {menuList} className={'bigMenu'}></Menu>
        <Content style={{ padding: '0 50px', minHeight: 280 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <BasicRoute></BasicRoute>
          </div>
        </Content>
     
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

  </Layout>

  );
}
function Home() {
  return (
    <BrowserRouter>
    <App></App>
  </BrowserRouter>
  )

}
export default Home;
