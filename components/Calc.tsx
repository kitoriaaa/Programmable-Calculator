import React, { FC, useState, useEffect } from 'react';
import usePersist from './persist';
import { funcObj, funcType } from './func';


const Calc: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [data, setData] = usePersist('calc-history', []);
  const [func, setFunc] = useState<funcType | null>(null);

  const fetchFunc = async (address: string) => {
    const res = await fetch(address);
    const d = await res.json();
    return d;
  };

  useEffect(() => {
    (async () => {
      const res = await fetchFunc('/api/func');
      setFunc(res);
    })();
  }, [data]);

  const onChange = (e: { target: HTMLInputElement }) => {
    setInput(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      doAction();
    }
  };

  const doAction = () => {
    const res = eval(input);
    setMessage(res);
    data.unshift(input + ' = ' + res);
    setData(data);
    setInput('');
  };


  const clear = () => {
    setData([]);
    setMessage('Clear history.');
  };

  const doFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
    const arr = input.split(',');
    const fid = e.currentTarget.id;
    console.log(func?.func[Number(fid)]);
    if (func !== null) {
      const f = func.func[Number(fid)];
      const fe = eval(f.function);
      const res = fe(arr);
      setMessage(res);
      data.unshift(fid + ' = ' + res);
      setData(data);
      setInput('');
    }
  };

  return (
    <div>
      <div className="alert alert-primary">
        <h5>Result: {message}</h5>
        <div className="form-group">
          <input type="text" value={input} className="form-control" onChange={onChange} onKeyPress={onKeyPress} />
        </div>
        {
          funcObj.func.map((value, key) => (
            <button className="btn btn-secondary m-1" key={key} title={value.caption} id={key.toString()} onClick={doFunc}>{value.name}</button>
          ))
        }
      </div>
      <table className="table">
        <thead><tr><th>History:</th></tr></thead>
        <tbody>
          {data.map((value, key) => (
            <tr key={key}><td>{value}</td></tr>
          ))}
        </tbody>
      </table>
      <button onClick={clear} className="btn btn-warning">Clear History</button>
    </div>
  );
};

export default Calc;
