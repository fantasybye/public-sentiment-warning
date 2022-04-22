import React from 'react';
import { Tabs } from 'antd';
import { Monitor } from '../Monitor';
import { Strategy } from '../Strategy';
import { Config } from '../Config';

import styles from './index.module.less';

export enum TabKeys {
  MONITOR = '舆情感知',
  STRATEGY = '策略中心',
  CONFIG = '配置中心',
}

const { TabPane } = Tabs;

const Home = () => {
  return(
    <div className={styles.container}>
      <Tabs
        className={styles.tabs}
        tabBarExtraContent={{ left: <div className={styles.titleText}>舆情预警搭建平台</div>}}
      >
        <TabPane tab='舆情感知' key={TabKeys.MONITOR}>
          <Monitor />
        </TabPane>
        <TabPane tab='策略中心' key={TabKeys.STRATEGY}>
          <Strategy />
        </TabPane>
        <TabPane tab='配置中心' key={TabKeys.CONFIG}>
          <Config />
        </TabPane>
      </Tabs>
    </div>
  );
};

export { Home };