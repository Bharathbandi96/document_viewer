## Getting Started
The Document Viewer Component is a React/Next-based UI module that allows users to view documents and files. It provides a structured layout for folders and files, enabling easy navigation and document access.

### Functionality and Key Features
1. Displays a list of folders and files in a hierarchical structure.
2. Supports opening and previewing documents (e.g., PDFs, Word files, images) within folders.
3. Handles sorting folders and files based on folder/file name.
4. Provides search functionality to search files by file name.


### Technologies Used
React – Core framework for UI rendering.
Tailwind CSS / Material-UI – Ensures a modern and clean design.
Local JSON – Handles document retrieval.
React Testing Library and Jest - Enables testing React components and core functionality.



## To view the application, run the development server:

```bash
# To build the application, run the below command
npm run build

#TO host the application, run the below command
npm run dev

#To run test cases, run the below command
npm run test

#to run test cases in watch mode, run the below command
npm run test:watch
```

Application will be hosted at [http://localhost:3000](http://localhost:3000). Open in browser to see the result.

### Further Enhancements,
1. Sorting is done based on file name. But it can be done by Id, type, and DateAdded. We just need to finetune the 'handleSort' function available in utilities to accept additional parameter which can used to sort the folders/files.
2. Based on file type, we can render relevant icon that indicates the file type visually.
