import { IData, File, Folder, FolderTypes } from "./types";

const generateId = () => {
    return 'xx4xayxx'.replace(/[xy]/g, function (character) {
        const randomValue = Math.random() * 16 | 0;
        const value = character === 'x' ? randomValue : (randomValue & 0x3 | 0x8);
        return value.toString(16);
    })
};

const stringSort = (fileData: File[]) => {
    return fileData.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
}

const handleSort = (myData: IData[] | File[], isAscendingSort: boolean) => {

    myData.sort((a, b) => {
        if (a.type === FolderTypes.FOLDER && b.type !== FolderTypes.FOLDER) {
            return -1
        }
        if (a.type !== FolderTypes.FOLDER && b.type === FolderTypes.FOLDER) {
            return 1
        }
        const res = a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        return isAscendingSort ? res : -res;
    })
    myData.map((data) => {
        if (data.type === FolderTypes.FOLDER) {
            if (!!(data as Folder).contents)
                handleSort((data as Folder)?.contents as File[], isAscendingSort);
        } else {

        }
    });

    return myData;
};

const filterData = (data: Folder[], key: string): IData[] => {
    return data.reduce((acc, item) => {
        if (item.type !== FolderTypes.FOLDER && item.name.toLowerCase().includes(key.toLowerCase())) {
            acc.push(item);
        }
        if (item.contents) {
            acc.push(...filterData(item.contents, key));
        }
        return acc;
    }, [] as IData[]);
}

export {
    generateId,
    stringSort,
    handleSort,
    filterData
}