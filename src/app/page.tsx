"use client";
import { ChangeEvent, useCallback, useState } from 'react';
import Image from 'next/image';
import FolderRenderer from './components/folder_renderer';
import FileRenderer from './components/file_renderer';
import { IData, FolderTypes } from './types';
import { generateId, handleSort, filterData } from './utilities';
import data from '../../public/mockData.json'

export default function HomePage() {

  const [myData, setMyData] = useState<IData[]>(data);
  const [isAscendingSort, setIsAscendingSort] = useState(true);

  const onSort = useCallback(() => {
    const sortedData = handleSort(myData, isAscendingSort);
    setMyData(sortedData);
    setIsAscendingSort(!isAscendingSort);
  }, [isAscendingSort]);

  const onSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value;
    const res = filterData(data, key);
    if (key) {
      setMyData(res)
    } else {
      setMyData(data);
    }
  }, [filterData]);

  return (
    <main className="p-6 bg-gray-100 h-screen overflow-auto">
      <h1 className="text-3xl font-bold mb-4">Document Viewer</h1>
      <div className='relative float-right h-[30px] w-[250px] mb-2'>
        <input
          className='relative w-full h-full border rounded border-[var(--foreground)] p-1'
          placeholder='Filter By File Name...'
          type="text"
          onChange={onSearch}
        />
      </div>
      <table className="table w-full max-h-[450px] h-auto border border-gray-300">
        <thead className='block w-full'>
          <tr className="flex w-full bg-gray-300 text-left">
            <th className="w-[10%] px-4 py-2">Id</th>
            <th className='w-[30%] px-4 py-2'>Name
              <Image
                className={`relative inline-block m-2 -top-[2px] cursor-pointer ${isAscendingSort ? '-rotate-90' : 'rotate-90'}`}
                src='/arrow_sort.png'
                alt='Sort Icon'
                width='15'
                height='15'
                onClick={onSort} />
            </th>
            <th className="w-[40%] px-4 py-2">Type</th>
            <th className="w-[20%] px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody className="block w-full divide-y divide-gray-200 max-h-[420px] overflow-auto">
          {
            myData.map((data) => {
              if (data.type === FolderTypes.FOLDER) {
                return <FolderRenderer key={generateId()} folderData={data} />
              } else {
                return <FileRenderer key={generateId()} fileData={data} />
              }
            })
          }
        </tbody>
      </table>
    </main>
  );
}
