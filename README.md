## Getting Started

The Document Viewer Component is a React/Next.js-based UI module that allows users to view and navigate documents. It provides a structured layout for folders and files, enabling easy access and interaction with stored documents.


### Functionality and Key Features

1. Folder & File Listing – Displays folders and files in a hierarchical structure.
2. File Preview – Supports to view folder content.
3. Sorting – Organizes folders/files based on their name.
4. Search – Allows users to search for files by file name.


### Technologies Used

1. React/Next – The core framework for UI rendering.
2. Tailwind CSS – Ensures a modern and clean design.
3. Local JSON – Handles document retrieval.
4. React Testing Library & Jest – Enables testing of React components and core functionality.


## To view the application, run the development server:

```bash
#Follow the below steps once you clone the application,
# Build the application
npm run build

# Host the application
npm run dev

# Run test cases
npm run test

# Run test cases in watch mode
npm run test:watch

#Or

# Use this below link to view the application
[https://document-viewer-five.vercel.app/](https://document-viewer-five.vercel.app/)
```


Once started, the application will be hosted at http://localhost:3000. Open it in your browser to view the result.


### Further Enhancements

1. Advanced Sorting – Sorting is based on file name, but it can be expanded to include ID, File type and Date added. This can be achieved by fine-tuning the handle sort function in the utilities module to allow sorting by additional parameters.
2. File Type Icons — We can render relevant icons to indicate different document types visually based on file type.
