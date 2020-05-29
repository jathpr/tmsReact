import React from 'react';
import { Checkbox, Button, List, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Text } = Typography;

export const ToDoItem = ({ item: { done: checked, name, active, id }, onRemove, onDone }) => (
  <List.Item style={{ justifyContent: 'center' }}>
    {active && <Checkbox checked={checked} onChange={() => onDone(id)} />}
    <Text delete={checked}>
      <Link to={`item/${id}`}>{name}</Link>
    </Text>
    {active && (
      <Button className="delete" onClick={() => onRemove(id)}>
        X
      </Button>
    )}
    {!active && (
      <Button className="delete" onClick={() => onRemove(id)}>
        Restore
      </Button>
    )}
  </List.Item>
);
