import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Welcome_Pg from "./pages/Welcome_Pg/Welcome_Pg";
import ErrorPage from './pages/Error_Pg/Error_Pg';
import ShowAll_Pg from './pages/ShowAll_Pg/ShowAll_Pg';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome_Pg />,
    errorElement: <ErrorPage />
  },
  {
    path: '/show_all',
    element: <ShowAll_Pg /> ,
  },
]);

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
