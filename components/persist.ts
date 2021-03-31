import { useState } from 'react';

export default (ky: string, initVal: string[]): [string[], (val: string[]) => void] => { // eslint-disable-line
  const key = ky;
  const value = (): string[] => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) as string[] : initVal;
    } catch (err) {
      console.log(err);
      return initVal;
    }
  };

  const setValue = (val: string[]): void => {
    console.log(val);
    try {
      setSavedValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (err) {
      console.log(err);
    }
  };
  const [savedValue, setSavedValue] = useState<string[]>(value);

  return [savedValue, setValue];
};
