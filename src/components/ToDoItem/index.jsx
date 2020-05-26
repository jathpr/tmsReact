import React from 'react';
import { Checkbox, Button } from 'antd';
import styles from './item.module.css';

export const Item = (props) => {
  const { checked, name, active = true, onRemove, onDone, id } = props;
  return (
    <li className={checked ? styles.chk : 'unchk'}>
      {name}
      {active && <Checkbox className={styles.chk_box} checked={checked} onChange={() => onDone(id)} />}
      {active && (
        <Button className="delete" onClick={() => onRemove(id)}>
          X
        </Button>
      )}
    </li>
  );
};
