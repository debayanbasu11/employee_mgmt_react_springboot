import { Routes, Route } from "react-router-dom";
import { ListEmployees, AddEmployee } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
        <Routes>
            <Route path="/" element={<ListEmployees/>} end/>
            <Route path="/employees" element={<ListEmployees/>} />
            <Route path="/add-employee" element={<AddEmployee/>} />
            <Route path='/update-employee/:id' element={<AddEmployee/>}/>
        </Routes>
    </div>
  )
}