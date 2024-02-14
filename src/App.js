import './assets/App.css'
import Root from './root.js';
import Home from './Home.js';
import YesMessage from './YesMessage.js';
import NoMessage from './NoMessage.js';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> } >
      <Route path="/" element={ <Home/> } />
      <Route path="/yes" element={ <YesMessage />} />
      <Route path="/no" element={ <NoMessage />} />
    </Route>
  ));

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
