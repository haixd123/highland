import { Input } from "antd";
import {useState} from 'react'


const TestSearch = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          console.log('clicked');
          setShow(!show)
        }}
      >
        TestSearch
      </button>
      {show && <button>Search Item</button>}
    </>
  );
};

export default TestSearch;



