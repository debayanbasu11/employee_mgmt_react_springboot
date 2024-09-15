import React from 'react'
  
const HocTest = (OriginalComponent) => { 
    class NewComponent extends React.Component { 
  
        // Logic here 
  
        render() { 
            return (
            <>
                <div style={{backgroundColor:'cyan'}}>
                    <h1>Testing Higher Order Component Feature by returning ListEmployees component with updated Background Color!</h1>
                    <OriginalComponent />
                </div>
                
            </>)  
        } 
    } 
    // Returns the new component 
    return NewComponent;
} 
  
export default HocTest;