import React, { useCallback, useState, memo } from 'react';
import Image from 'next/image';
import FileRenderer from './file_renderer';
import { FolderProps } from '../types';
import { generateId } from '../utilities';

function FolderRenderer(props: FolderProps) {
    const { folderData: { id, name, type, dateAdded, contents } } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onStatusChange = useCallback(() => setIsOpen(!isOpen), [isOpen]);

    return (<>
        <tr key={id} data-testid={id} className={`flex w-full odd:bg-white even:bg-gray-100 ${contents && 'cursor-pointer'}`} onClick={onStatusChange}>
            <td className="px-4 py-2 w-[10%]">
                <p className={`inline-block relative w-[15px] h-[20px] top-[2px] ${isOpen ? 'rotate-180' : 'rotate-90'}`}>
                    {contents && <Image src='/up_arrow.webp' alt='Up Arrow' width='15' height='20' />}
                </p>📁 {id}
            </td>
            <td className="px-4 py-2 w-[30%]">{name}</td>
            <td className="px-4 py-2 w-[40%]">{type}</td>
            <td className="px-4 py-2 w-[20%]">{dateAdded}</td>
        </tr>
        {isOpen && contents && contents.map((fileData) => <FileRenderer key={generateId()} fileData={fileData} />)}
    </>)
}

export default memo(FolderRenderer);