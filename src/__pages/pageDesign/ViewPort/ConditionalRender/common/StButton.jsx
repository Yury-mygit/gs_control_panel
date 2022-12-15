import React from 'react';
import { Link } from 'react-router-dom';

const StButton = ({text,link}) => {
    return (
        <Link to={link}  style={{...links}}> {text} </Link>
    );
};

export default StButton;

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
    marginBottom:'100px'
}