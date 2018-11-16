import React from 'react';
import { NavLink } from 'dva/router';
import { Menu, Icon } from 'antd';

import menu from '../../configs/menu';
import urls from '../../common/urls';

export default class MainMenu extends React.Component {
  renderList(list) {
    return list.map(item => (
      <Menu.Item key={item.url}>
        <NavLink to={{ pathname: item.url }}>
          <Icon type={item.icon} />
          <span className="nav-text">{item.title}</span>
        </NavLink>
      </Menu.Item>
    ));
  }

  render() {
    return (
      <Menu
        defaultSelectedKeys={[urls.home.index]}
        inlineCollapsed={true}
        mode="inline"
        theme="dark"
      >
        {this.renderList(menu)}
      </Menu>
    );
  }
}
