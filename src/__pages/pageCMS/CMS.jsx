import React from 'react';
import cl from './CMS.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Header from './Header';
import PayList from './PayList';
import Menu from './Menu';
import Summary from './Summary';

const CMS = () => {
    let [userName, setUserName] = useState('')

    const [checkpayment, setCheckPayment] = useState('')

    const count = useSelector((state) => state.counter.value)
    const name = useSelector((state) => state.controller.value)
    const user = useSelector((state) => state.user.user)
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch()

    // async function postData(url = '', data = {}) {
    //     // Default options are marked with *
    //     const response = await fetch(url, {
    //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //       mode: 'cors', // no-cors, *cors, same-origin
    //       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //       credentials: 'same-origin', // include, *same-origin, omit
    //       headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       redirect: 'follow', // manual, *follow, error
    //       referrerPolicy: 'no-referrer', // no-referrer, *client
    //       body: JSON.stringify(data) // body data type must match "Content-Type" header
    //     }) .then(response => response.json())
    //         .then(data => console.log(data));
    //     // return await response; // parses JSON response into native JavaScript objects
    //   }

    // const check = () => {
    //     postData('http://factory/api/paycheck', { answer: 42 })
    //     // .then((data) => {
    //     //     console.log(data); // JSON data parsed by `response.json()` call
    //     //     console.log('data'); // JSON data parsed by `response.json()` call
    //     // });
    // }

    const check = () => {
        // console.log("sds")
        // let url = 'https://jsonplaceholder.typicode.com/posts'
        let url = 'http://factory/api/paycheck'


        const requestOptions = {
            method: 'POST',
            // mode: 'no-cors',
            headers: { 
                'Content-Type': 'application/json',
                'Accecc-Control-Allow-Origin':'*',
                'Authorization': 'Bearer my-token',
                'Access-Control-Allow-Methods':'POST',
                'My-Custom-Header': 'foobar',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify({ paymentId: checkpayment })
        }

        

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }




    return (
        <div className={cl.wrapper}> 
            <Menu />       
            <Header />
            <PayList />
            <Summary />

            <div>
                
                <button
                    onClick={()=>{
                        console.log("sdbj.jckbs")
                       check()
                    }}
                > Проверить 1</button>
                <button
                    onClick={()=>{
                        console.log(checkpayment)}
                    }
                >
                    Проверить
                </button>
                <input 
                   value={checkpayment}
                    onChange={(e)=>setCheckPayment(e.target.value)}
                />
            </div>
            

             
        </div> 



    );
};

export default CMS;