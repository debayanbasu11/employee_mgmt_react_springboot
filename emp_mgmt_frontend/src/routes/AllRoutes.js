import { Routes, Route } from "react-router-dom";
//import { ListEmployees, AddEmployee } from "../pages";
import { Suspense,lazy } from "react";
import HocListEmployees from "../components/HocListEmployees";
import MouseTracker from "../components/MouseTracker";


export const AllRoutes = () => {

  const ListEmployees = lazy(() => import('../pages/ListEmployees'));
  const AddEmployee = lazy(() => import('../pages/AddEmployee'));

  return (
    <div className="dark:bg-darkbg">
      
      <Suspense fallback='Loading!!!'>
        <Routes>
          
          <Route path="/" element={<ListEmployees title="Employee List"/>} end/>
          <Route path="/employees" element={<ListEmployees title="Employee List"/>} />
          <Route path="/add-employee" element={<AddEmployee title="Add Employee"/>} />
          <Route path='/update-employee/:id' element={<AddEmployee title="Update Employee"/>}/>
          <Route path='/hoc' element={<HocListEmployees/>}/>
          <Route path='/render-props' element={<MouseTracker render={({ x, y }) => (
           <p>The current mouse position is ({x}, {y})</p>)} />}/>
          
        </Routes>
      </Suspense>
    </div>
  )
}