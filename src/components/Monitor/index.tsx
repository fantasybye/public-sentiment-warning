import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Schema, Layout } from '../../constants';
import { Customize } from '../Customize';

import styles from './index.module.less';

const Monitor = () => {
  const [isCustomize, setIsCustomize] = useState<boolean>(false);
  const [list, setList] = useState<Schema[]>([]);

  useEffect(() => {
    setList([
      {
        id: 'test1',
        layout: Layout.FiveSlots,
        slots: []
      },
      {
        id: 'test2',
        layout: Layout.FiveSlots,
        slots: []
      },
      {
        id: 'test3',
        layout: Layout.FiveSlots,
        slots: []
      },
      {
        id: 'test4',
        layout: Layout.FiveSlots,
        slots: []
      },
      {
        id: 'test5',
        layout: Layout.FiveSlots,
        slots: []
      },
      {
        id: 'test6',
        layout: Layout.FiveSlots,
        slots: []
      }
    ]);
  }, []);

  return(
    <div className={styles.container}>
      {isCustomize ?  <Customize setIsCustomize={(is) => {
        setIsCustomize(is);
      }}/> : <>
        <div className={styles.title}>
          <Button type='primary' onClick={() => setIsCustomize(true)}> + 新增配置</Button>
        </div>
        <div className={styles.content}>
          {list && list.length > 0 ? list.map((item) => (
            <div className={styles.thumbnail} key={item.id}>

            </div>
          )) : 
            <div className={styles.blank}>还没有任何可预览的配置</div>
          } 
        </div>
      </>}
    </div>
  );
};

export { Monitor };