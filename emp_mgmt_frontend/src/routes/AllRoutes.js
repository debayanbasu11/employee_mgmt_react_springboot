import { Routes, Route } from "react-router-dom";
import { ListEmployees, AddEmployee } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="/" element={<ListEmployees title="Employee List"/>} end/>
            <Route path="/employees" element={<ListEmployees title="Employee List"/>} />
            <Route path="/add-employee" element={<AddEmployee title="Add Employee"/>} />
            <Route path='/update-employee/:id' element={<AddEmployee title="Update Employee"/>}/>
        </Routes>
    </div>
  )
}