import React from 'react';
import { List, Divider } from 'antd';

export const Users = ({ users }) => {
  return (
    <>
      <Divider orientation="left">List of Users</Divider>
      <List
        size="large"
        bordered
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            Name: {user.login}, Other: {user.other}
          </List.Item>
        )}
      />
    </>
  );
};
