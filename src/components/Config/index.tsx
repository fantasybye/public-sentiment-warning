import React from 'react';
import { Menu, Table } from 'antd';
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, PieChartOutlined } from '@ant-design/icons';

import styles from './index.module.less';

const { SubMenu } = Menu;
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const Config = () => {
  return(
    <div className={styles.container}>
      <Menu
        style={{ width: 200 }}
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
      >
        <SubMenu key="sub1" icon={<PieChartOutlined />} title="指标配置">
          <Menu.Item key="1">指标管理</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<DesktopOutlined />} title="动作配置">
          <Menu.Item key="5">通用动作</Menu.Item>
          <Menu.Item key="6">动作类型</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="策略配置">
          <Menu.Item key="9">策略层</Menu.Item>
        </SubMenu>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
            配置管理
        </Menu.Item>
      </Menu>
      <div className={styles.content}>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export { Config };