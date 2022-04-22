import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { FourSlots } from '../config/layout';
import { FiveSlots } from '../config/layout';
import { SixSlots } from '../config/layout';
import { LineChart } from '../config/model';




const Test = () => {
  const [count, setCount] = useState<number>(0);
   
  return <div style={{
    width: '100vw',
    height: '100vh'
  }}>
    <FourSlots />
  </div>; 
  
};

export { Test };