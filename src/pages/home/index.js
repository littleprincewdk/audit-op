import React from 'react';
import { connect } from 'dva';
import styles from './styles.less';

function HomePage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to xng!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        
      </ul>
    </div>
  );
}

HomePage.propTypes = {
};

export default connect()(HomePage);
