import React, { useEffect, useState } from 'react';
import Select from 'react-tailwindcss-select';
import { BiChevronDown } from 'react-icons/bi';

interface Mdata {
    label: string
    value: string
}
interface Props {
    mydata: Mdata[]
}

function SelectComponent({ mydata }: Props) {
  const [val, setValue] = useState<any|null>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {

  }, []);
  return (
    // <Select
    //   primaryColor="red"
    //   classNames={{
    //     listGroupLabel: 'bg-transparent',
    //   }}
    //   value={mydata[0]}
    //   options={mydata}
    //   onChange={(e:any) => setValue(e)}
    // />
    <div className="w-fit relative font-sm">
      <div aria-hidden="true" onClick={() => setShow(!show)} className="bg-transparent border-2 border-red-600 w-full p-2 flex items-center justify-between rounded-lg">
        {val !== null ? val?.label : mydata[0].label }
        <BiChevronDown size={20} />
      </div>
      <ul className={`absolute z-50 top-10 bg-gray-100 text-black mt-2  w-full ${show === false && 'hidden'}`}>
        {
            mydata.map((item) => (
              <li
                aria-hidden="true"
                key={item.label}
                className="p-2 text-sm hover:bg-red-600 hover:text-white whitespace-nowrap"
                onClick={() => { setValue(item); setShow(false); }}
              >
                {item.label}

              </li>
            ))
}
      </ul>
    </div>
  );
}

export default SelectComponent;
