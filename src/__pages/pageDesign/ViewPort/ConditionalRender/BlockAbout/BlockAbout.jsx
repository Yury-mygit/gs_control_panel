import React from 'react';
import cl from './BlockAbout.module.scss'
import settings from '../../../../../common/settings';

const BlockAbout = ({data}) => {

    console.log(data)

    let back = `url(${settings.imageServer}image/${data.fon})`

    return (
        <div className={cl.wrapper} style={{backgroundImage: back}}>
              <div className={cl.content} >

                <h2>{data.title}</h2>
                <h2>{data.motto}</h2>
                <div>{data.text}</div>
                 
              </div>
             
        </div>
    );
};

export default BlockAbout;


    // fon: "150"
    // layers: 

    // motto: "Логопед онлайн!"
    // text: "Мы работаем по всему миру, очно и online.\r\nЗвоните и пишите в Whats Upp и Telegram на наш прямой номер:\r\n+7 985-888-63-31, пн-вс с 9:00 до 21:00.\r\n\r\nТакже вы можете связаться с нами по e-mail:\r\ngoldenspeak@mail.ru"
    // title: "О нас"