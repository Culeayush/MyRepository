import React from 'react';

export default function Progressbar({Progress}) {
    const prop1 = {
        display:"flex",
        alignItems:"center",
        paddingLeft:"5px",
        paddingRight:"5px",
        paddingBottom:"2px",
        width:"100%",
        height:"26px",
        borderRadius:"12px",
        backgroundColor:"grey"
    }
    
    const prop2 = {
        height: "20px",
        width: Progress.concat("", "%"),
        backgroundColor:"#fff",
        borderRadius:"12px",
        boxShadow:"rgba(0,0,0,0.4) 0px 0px 6px 2px"
    }

  return (
    <div style={prop1}>
        <div width={Progress} style={prop2}></div>
    </div>
    )
}

