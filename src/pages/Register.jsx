import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, Redirect, useHistory } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const Register = ({ addUser }) => {
  let history = useHistory();

  const onFinish = (values) => {
    addUser({ login: values.username, pass: values.password, other: values.other });
    history.push('/login');
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="Other fields" name="other">
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary">
            <Link to="/login">Exit to Login</Link>
          </Button>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
