import React from 'react';
import { Layout } from 'antd';

import styles from './styles.less';
import Menu from '../Menu';

const { Sider } = Layout;

export default class SiderBar extends React.Component {
  render() {
    return (
      <Sider className={styles.container}>
        <div className={styles.logo} />
        <Menu />
      </Sider>
    );
  }
}
