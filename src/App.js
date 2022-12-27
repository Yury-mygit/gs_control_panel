import './App.css';
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
import Root from './router/Root';
import AuthLayout from './__pages/pageAuth/AuthLayout';
import Login from  './__pages/pageAuth/Login';
import Home from   './__pages/pageHome/Home';
import Design from './__pages/pageDesign/Design'
import Lesson from './__pages/pageLesson/LessonPage'
import CMS from './__pages/pageCMS/CMS'
import { useSelector, useDispatch } from 'react-redux';
import PageLogin from './__pages/pageLogin/PageLogin';
import { useEffect } from 'react';
import {logIn} from './store/userSlice'
import Timetable from './__pages/timetable/Timetable';
import Materials from './__pages/pageMaterials/PageMaterials'


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
      // errorElement={<Error />}
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
      {/* <Route index element={<CMS />} /> */}
      {/* <Route index element={<Design />} /> */}
      <Route index element={<Lesson />} />
      <Route errorElement={<ErrorPage />}>
        <Route
          path="design"
          element={<Design />}
          // loader={contactLoader}
          // action={contactAction}
        />
        <Route
          path="lessons"
          element={<Lesson />}
          // loader={contactLoader}
          // action={contactAction}
        />
        <Route
          path="Materials"
          element={<Materials />}
        />

        <Route
          path="timetable"
          element={<Timetable />}
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



