import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';

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

export const LoginComponent = ({ users, setUser }) => {
  const history = useHistory();

  const onFinish = (values) => {
    const userIs = users.find((user) => user.login === values.login && user.pass === values.pass);
    if (userIs) {
      setUser(userIs);
      history.push('/main');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('onFinishFailed -> errorInfo', errorInfo);
  };

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
      <Form.Item
        label="Username"
        name="login"
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
        name="pass"
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="primary">
          <Link to="/register">Register</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};
