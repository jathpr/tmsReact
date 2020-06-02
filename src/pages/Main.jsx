import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header as MyHeader } from '../components/Header';
import { SideMenu } from '../components/SideMenu';
import { Home } from './Home';
import { Users } from './Users';
import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;

export const Main = ({ users, user, onLogout }) => {
  return (
    <Layout>
      <Header className="header" style={{ backgroundColor: 'blue', height: '10vh' }}>
        <MyHeader user={user} />
      </Header>
      <Layout>
        <Sider width={200} style={{ height: '90vh' }}>
          <SideMenu onLogout={onLogout} />
        </Sider>
        <Content>
          <Switch>
            <Route path="/main/home" component={Home} />
            <Route path="/main/users" render={() => <Users users={users} />} />
            <Redirect to="/main/home" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};
