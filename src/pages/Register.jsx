import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, Redirect } from 'react-router-dom';

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

const sendData = async (data) => {
  const url = 'http://localhost:3004/users';
  try {
    const response = await fetch(url, {
      method: 'POST', // или 'PUT'
      body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Успех:', JSON.stringify(json));
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

export const Register = ({ addUser }) => {
  const [success, setSuccess] = useState(false);
  const onFinish = (values) => {
    // addUser({ login: values.username, pass: values.password, other: values.other });
    sendData({ login: values.username, pass: values.password, other: values.other });
    setSuccess(true);
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <>
      {success && <Redirect to="/login" />}
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
