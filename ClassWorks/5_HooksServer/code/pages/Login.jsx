import React, { useContext } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { ThemeContext } from '../Styles/Themes';

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

export const Login = ({ checkUser, user }) => {
  const onFinish = (values) => {
    checkUser({ login: values.username, pass: values.password });
  };

  const onFinishFailed = (errorInfo) => {};

  const theme = useContext(ThemeContext);
  console.log('onFinishFailed -> theme', theme);

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {!!user && <Redirect to="/main" />}
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

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{ background: theme.background, color: theme.foreground }}>
          Submit
        </Button>
        <Button type="primary">
          <Link to="/register">Register</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};
