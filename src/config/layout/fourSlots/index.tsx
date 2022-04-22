import React, {useEffect, useState} from 'react';
import cls from 'classnames';

import styles from './index.module.less';
import { Line } from '@ant-design/plots';


const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v: any) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };

  return <Line {...config} style={{width: 700, height: 260}}/>;
};

const FourSlots = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>

      </div>
      <div className={styles.content}>
        <div className={cls([styles.slot1, styles.slotContainer])}>
          <DemoLine />
        </div>
        <div className={cls([styles.slot2, styles.slotContainer])}>
          slot2
        </div>
        <div className={cls([styles.slot3, styles.slotContainer])}>
          slot3
        </div>
        <div className={cls([styles.slot4, styles.slotContainer])}>
          slot4
        </div>
      </div>
    </div>
  );
};

export { FourSlots };