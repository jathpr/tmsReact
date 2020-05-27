import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddItem(props) {
  const [task, setTask] = useState('');
  return (
    <>
      <Input
        placeholder="Write new Task"
        style={{ width: '80vw' }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        style={{ width: '20vw' }}
        type="primary"
        onClick={() => {
          setTask('');
          props.onAdd(task);
        }}
      >
        Add
      </Button>
    </>
  );
}

export { AddItem };
