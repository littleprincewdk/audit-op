import React from 'react';
import { Route } from 'dva/router';
import { Layout } from 'antd';

import styles from './styles.less';
import HomePage from '../../pages/home';
import AuditPage from '../../pages/audit';

const { Header, Content, Footer } = Layout;

export default class PrimaryLayout extends React.Component {
  render() {
    return (
      <Layout className={styles.container}>
        <Header className={styles.header}>
          go far, go together
        </Header>
        <Content className={styles.content}>
          <Route path="/" exact component={HomePage} />
          <Route path="/audit" component={AuditPage} />
        </Content>
        <Footer className={styles.footer}>
          小年糕 ©2018
        </Footer>
      </Layout>
    );
  }
}
