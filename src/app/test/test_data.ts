import { File } from '../types';

const input:File[] = [
    {
        "id": "12",
        "name": "Resume.pdf",
        "type": "PDF Document",
        "size": "1MB",
        "dateAdded": "2024-01-05",
        "folderId": "1"
    },
    {
        "id": "13",
        "name": "Project.docx",
        "type": "Microsoft Word Document",
        "size": "500KB",
        "dateAdded": "2024-01-10",
        "folderId": "1"
    }
]

const outputAscending:File[] = [
    {
        "id": "13",
        "name": "Project.docx",
        "type": "Microsoft Word Document",
        "size": "500KB",
        "dateAdded": "2024-01-10",
        "folderId": "1"
    },
    {
        "id": "12",
        "name": "Resume.pdf",
        "type": "PDF Document",
        "size": "1MB",
        "dateAdded": "2024-01-05",
        "folderId": "1"
    }
]

const outputDescending:File[] = [
    {
        "id": "12",
        "name": "Resume.pdf",
        "type": "PDF Document",
        "size": "1MB",
        "dateAdded": "2024-01-05",
        "folderId": "1"
    },
    {
        "id": "13",
        "name": "Project.docx",
        "type": "Microsoft Word Document",
        "size": "500KB",
        "dateAdded": "2024-01-10",
        "folderId": "1"
    },
]

const filteredOutput:File[] = [{
    "id": "13",
    "name": "Project.docx",
    "type": "Microsoft Word Document",
    "size": "500KB",
    "dateAdded": "2024-01-10",
    "folderId": "1"
}]

export {
    input,
    outputAscending,
    outputDescending,
    filteredOutput
}