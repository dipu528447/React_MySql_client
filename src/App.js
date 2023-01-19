
import './App.css';
import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import Main from './Components/Main';
import { router } from './Router/Router';
export const UserContext =createContext();

function App() {
  const [user,setUser]=useState({})
  return (
    <UserContext.Provider value={[user,setUser]}> 
      <div className="App">
        <RouterProvider router={router}>
          <Main></Main>
        </RouterProvider>
      </div>
    </UserContext.Provider>
  );
}

export default App;
