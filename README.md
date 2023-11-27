## Clear Setup/Running Instructions

The project is built with [Vite](https://vitejs.dev/), a fast React framework. Follow these steps to set up and run the project:

1. Install dependencies:
    
    `npm install`
    
2. Run the development server:
    
    `npm run dev`
    
3. Add the following environment variables to connect to the API:
    
    - `VITE_API_TOKEN`
    - `VITE_API_URL`
  
4. For automatic type generation for GraphQL queries and mutations, run:
    
    `npm run graphql-watch`
    

## Project Description

This project is a simplified version of a Trello board, organized into different columns for various task statuses. Users can add, update, or delete tasks.

## Screenshots/Gifs

![image](https://github.com/gamanc/ravn-code-challenge/assets/80120863/a696b87e-9ee2-4959-b4fe-911f277b38b9)
![image](https://github.com/gamanc/ravn-code-challenge/assets/80120863/9211630f-8558-4bfe-b9d2-a5ff452b044a)


## Project details

### Stack

- **Vite**: Chosen for its speed and simplicity, considering Next.js might be overkill for this project.
    
- **React-Router**: Used for handling routing within the application.
    
- **Chakra UI**: Selected for its customizable and time-saving components for styling.
    
- **Apollo Client**: Employed to connect to the provided GraphQL API seamlessly.
    
- **React Hook Form**: Chosen for efficient form management.
    
- **Sassy-datepicker**: Utilized as the datepicker for the project.
    
- **Zustand**: Selected for global state management, considering Redux would be overkill for the specific use case of managing the filters state.
    

### Project Structure


```- assets: static images and icons 
 - components: common components across the application
 - config: config files for providers (react-router, apollo, and chakra ui theme)
 - constants: common values used across the app, separated by concerns
 - gql: generated type files by graphql-codegen/cli for improved developer experience using apollo/typescript
 - helpers: common helper functions, like date formatters, etc.
 - hooks: custom hooks
 - layouts: main layout components
 - pages: pages components
 - services: subfolders for each relevant entity (e.g., tasks, users) with GraphQL queries, mutations, and custom hooks for components. This abstraction allows easy changes in clients if necessary.
 - store: Zustand store definition
```

