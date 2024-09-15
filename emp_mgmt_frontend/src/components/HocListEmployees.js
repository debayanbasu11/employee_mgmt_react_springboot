import React from "react"; 
import HocTest from "../components/HocTest";
import ListEmployees from "../pages/ListEmployees";
   
class HocListEmployees extends React.Component {
  
  render() { 
    
    return <></>  
  } 
} 
   
// Passed the originalcomponent  
export default HocTest(ListEmployees);