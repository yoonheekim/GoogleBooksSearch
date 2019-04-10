import React from "react";

function Jumbotron ({children}){
    return (
        <div 
            style={{clear:"both",marginTop:30, paddingTop: 100, textAlign: "center" }}
            className="jumbotron jumbotron-fluid">
            {children}
        </div>
    )
}

export default Jumbotron