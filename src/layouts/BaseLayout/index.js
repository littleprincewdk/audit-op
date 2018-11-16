import React from 'react';
import { Layout } from 'antd';

import styles from './styles.less';
import Sider from '../Sider';
import PrimaryLayout from '../PrimaryLayout';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <Layout className={styles.container}>
        <Sider />
        <PrimaryLayout />
      </Layout>
    );
  }
}
