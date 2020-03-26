// Components Begin like this:
import React, {Component} from 'react';
import "../css/navbar.css";
// Use Link when using React Router
import {Link} from 'react-router-dom';

//import { Layout } from 'antd';

//const { Header, Footer, Sider, Content } = Layout;
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

// All Components have this line: change name 'NavBar'
 export default class NavBar extends Component {

  // Render Bootstrp NavBar
    render() {
        return (
  <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
    
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <UserOutlined />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <BarChartOutlined />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <CloudOutlined />
          <span className="nav-text">nav 5</span>
        </Menu.Item>
        <Menu.Item key="6">
          <AppstoreOutlined />
          <span className="nav-text">nav 6</span>
        </Menu.Item>
        <Menu.Item key="7">
          <TeamOutlined />
          <span className="nav-text">nav 7</span>
        </Menu.Item>
        <Menu.Item key="8">
          <ShopOutlined />
          <span className="nav-text">nav 8</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          content area, can scroll if content extends screen
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Typed by the fingers of Jim Doyle  ©2020 </Footer>
    </Layout>
  </Layout>
// All Components have this line: change name 'NavBar'
// export default class NavBar extends Component {

//  // Render Bootstrp NavBar
//     render() {
//         return (
//         <div>
//             <Layout>
//                 <Sider>SideBar</Sider>
//                 <Layout>
//                     <Header>Header</Header>
//                     <Content>Content</Content>
//                     <Footer>Footer</Footer>
//                 </Layout>
//             </Layout>
//         </div>
        );
    }
}