import { useEffect } from 'react';

const useDidMount = (fn: () => void) => {
  return useEffect(() =>{
    fn();
  }, []);
};

export { useDidMount };