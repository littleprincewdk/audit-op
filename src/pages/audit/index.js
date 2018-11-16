import React from 'react';
import { connect } from 'dva';

import styles from './styles.less';

function AuditPage() {
  return (
    <div className={styles.normal}>
      sssss
    </div>
  );
}

AuditPage.propTypes = {
};

export default connect()(AuditPage);
