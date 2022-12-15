import React from 'react';
import { Link } from 'react-router-dom';

const CommonActionButton = ({children, data, setData}) => {
    return (
        <button
            style={{...links}}
            onClick={()=>{
                console.log('sssas',data)
                setData(data)
            }}
        >
            {children}
        </button>
    );
};

export default CommonActionButton;

const links = {
    margin: '10px',
    textDecoration: 'none',
    fontWeight: '700',
    color:'white',
    fontSize:'20px',
    height: '50px',
    width:'200px',
    borderRadius: '25px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center', 
    backgroundColor: 'rgba(216, 138, 13, 1)',
}