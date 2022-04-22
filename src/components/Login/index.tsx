import React, { useEffect } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useHistory } from 'react-router';

import styles from './index.module.less';

const Login = () => {
  const history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('user'))
      history.push('/home');
  },[]);
  return(<div className={styles.container}>
    <div className={styles.title}>舆情预警系统</div>
    <div className={styles.panel}>
      <div className={styles.panelTitle}>登录</div>
      <Form className={styles.form}>
        <Form.Item className={styles.fmField}>
          <Input size='large' prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item className={styles.fmField}>
          <Input.Password size='large' prefix={<LockOutlined />}/>
        </Form.Item>
        <Form.Item>
          <Button onClick={() => {
            history.push('/home');
          }} type='primary' size='large' className={styles.fmButton}>登录</Button>
        </Form.Item>
      </Form>
    </div>
  </div>);
};

export { Login };