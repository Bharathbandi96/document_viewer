import React, { memo } from 'react';
import { FileProps } from '../types';

function FileRenderer(props: FileProps) {
    const { fileData: { id, name, type, dateAdded, folderId } } = props;

    return (<tr key={id} data-testid={id} className="flex w-full odd:bg-white even:bg-gray-100">
        <td className={`${folderId ? 'pl-6' : 'pl-2'} pr-4 py-2 w-[10%]`}>
            <p className={`w-[20px] h[10px] inline-block`}>
            </p>
            📄 {id}
        </td>
        <td className="px-4 py-2 w-[30%]">{name}</td>
        <td className="px-4 py-2 w-[40%]">{type}</td>
        <td className="px-4 py-2 w-[20%]">{dateAdded}</td>
    </tr>)
}

export default memo(FileRenderer);