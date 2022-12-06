import './App.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  redirect,
  useNavigate, 
} from "react-router-dom";

import ErrorPage from './__pages/ErrorPage';

import Root from './Root';
import Contact from './__pages/Contact';
import Dashboard from './__pages/Dashboard';
import AuthLayout from './__pages/AuthLayout';
import Login from './Login';
import Home from './__pages/pageHome/Home';
import Design from './__pages/pageDesign/Design'
import CMS from './__pages/pageCMS/CMS'
import { useSelector, useDispatch } from 'react-redux';
import PageLogin from './__pages/pageLogin/PageLogin';
import { useEffect } from 'react';
import {logIn} from './store/userSlice'



function App() {

  const loader = () => {

    console.log("redirect")
    return redirect("../");
  
  };
  const user = useSelector((state) => state.user.user)
  const loggedIn = useSelector((state) => state.user.loggedIn)
  const dispatch = useDispatch()

  const cat = localStorage.getItem('admin');

  useEffect(()=>{
    if (cat){
      dispatch(logIn(cat)) 
    }
  },[])
 
 

  
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route 
//       path="/" 
//       element={<Root />}>
//       <Route 
//         path="home"
//         element={<div></div>} 
//         loader={loader}
        
//       />
//       <Route path="contact" element={<Contact />} />
//       <Route
//         path="dashboard"
//         element={<Dashboard />}
//       />
//       <Route element={<AuthLayout />}>
//         <Route
//           path="login"
//           element={<Login />}
          
//         />
//         <Route path="logout" />
//       </Route>

      
      
//     </Route>
//   )
// );
const NavToMain = () =>{

  const navigate = useNavigate();
  
  useEffect(()=>{
    navigate("/");
  },[])
  return (
    <div> 40404040404</div>
  )
}



const unloggedrouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<NavToMain />}
    >
      <Route index element={<PageLogin />} />
     
    </Route>
  )
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      // loader={rootLoader}
      // action={rootAction}
      errorElement={<ErrorPage />}
    >
      {/* <Route index element={<Home />} /> */}
      <Route index element={<Design />} />
      <Route errorElement={<ErrorPage />}>
        <Route
          path="design"
          element={<Design />}
          // loader={contactLoader}
          // action={contactAction}
        />
        <Route
          path="content"
          element={<Contact />}
          // loader={contactLoader}
          // action={contactAction}
        />
        <Route
          path="dashboard"
          element={<Dashboard />}
          // loader={contactLoader}
          // action={editAction}
        />
        <Route
          path="cms"
          element={<CMS />}
          // action={destroyAction}
        />
      </Route>
    </Route>
  )
);


  if (loggedIn)
  return (
      <RouterProvider router={router}/>
  );
  if (!loggedIn)
  return (
      <RouterProvider router={unloggedrouter}/>
  );
}

export default App;



const UnAuthorizedUserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>

      <Route element={<AuthLayout />}>
        <Route
          path="login"
          element={<Login />}
          
        />
        <Route path="logout" />
      </Route>
    </Route>
  )
);



