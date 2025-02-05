interface File {
    id: string;
    name: string;
    type: string;
    size?: string;
    dateAdded: string;
    folderId?: string;
}

interface Folder {
    id: string;
    name: string;
    type: string;
    dateAdded: string;
    contents?: File[];
}

interface FolderProps {
    folderData: Folder;
}

interface FileProps {
    fileData: File;
}

type IData = Folder | File;

enum FolderTypes {
    FOLDER = 'folder',
    PDF = 'PDF Document',
    WORD = 'Microsoft Word Document',
    Excel = 'Microsoft Excel Worksheet',
    JS = 'JavaScript File',
    JPG = 'jpgfile'
}

export {
    FolderTypes
};

export type {
    File,
    Folder,
    FileProps,
    FolderProps, IData
};
