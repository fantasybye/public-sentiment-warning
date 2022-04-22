import React from 'react';
import cls from 'classnames';

import styles from './index.module.less';

const SixSlots = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>

      </div>
      <div className={styles.content}>
        <div className={cls([styles.slot1, styles.slotContainer])}>
          slot1
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
        <div className={cls([styles.slot5, styles.slotContainer])}>
          slot5
        </div>
        <div className={cls([styles.slot6, styles.slotContainer])}>
          slot6
        </div>
      </div>
    </div>
  );
};

export { SixSlots };