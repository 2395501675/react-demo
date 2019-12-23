import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb} from 'antd';
const breadcrumbNameMap = {
    '/nav1': 'nav1',
    '/nav2': 'nav2',
    '/nav3': 'nav3',
    '/nav3/life1': '生活1',
    '/nav3/life2': '生活2',
    '/nav3/life3': '生活3',
    '/apps': 'Application List',
      '/apps/1': 'Application1',
      '/apps/2': 'Application2',
      '/apps/1/detail': 'Detail',
      '/apps/2/detail': 'Detail'
  };
const Home = (props) => {
  const location = useLocation();
  // 当前路由
  const pathSnippets = location.pathname.split('/').filter(i => i);
  // 合并默认显示后的路由显示
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/home">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <hr/>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
}
function App() {
  return (
    <Home />
  )
}
export default App;