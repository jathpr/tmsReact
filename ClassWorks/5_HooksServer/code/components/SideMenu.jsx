import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'antd';

export const SideMenu = ({ onLogout }) => {
  return (
    <Menu defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
      <Menu.Item key="1">
        <NavLink to="/main/home">Home</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to="/main/users">Users</NavLink>
      </Menu.Item>
      <Button onClick={onLogout}>Exit</Button>
    </Menu>
  );
};
