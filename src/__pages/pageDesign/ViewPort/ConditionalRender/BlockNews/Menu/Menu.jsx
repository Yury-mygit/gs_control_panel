import React from 'react';
import cl from './__style.module.scss'

const Menu = ({newsCount, setNewsCount}) => {
    return (
        <div className={cl.news_menu} >  
                <div><h3>меню</h3></div>
                <label>Колличество новостей</label>
                <select value={newsCount} onChange={(e)=>setNewsCount(e.target.value)}>
                    <option value={5}> 5 </option>
                    <option value={10}> 10 </option>
                    <option value={20}> 20 </option>
                    <option value={40}> 40 </option>
                </select>
                <button 
                    onClick={()=>{
                    console.log('sdsdsd')
                    addPost({one:'oneopt'})
                }}>
                    статус
                </button>
            </div>
    );
};

export default Menu;