import React from 'react';

import BlockFixed from './BlockFixed/BlockFixed';
import BlockFotoText from './BlockFotoText/BlockFotoText';
import BlockBenefits from './BlockBenefits/BlockBenefits';
import BlockCosts from './BlockCosts/BlockCosts';
import BlockReviews from './BlockReviews/BlockReviews';
import TaskList from './task/TaskList/TaskList'
import Contacts from './BlockContacts/Contacts';
import BlockArticles from './BlockArticles/BlockArticles';
import BlockPay from './BlockPay/BlockPay';
import BlockPayShop from './BlockPay/BlockPayShop';
import BlockNewsList from './BlockNews/BlockNewsList';


const ConditionalRender = ({type, data}) => {

 let block

// console.log(data)

 switch (type) {
    case 'face':      block = <BlockFixed  data={data} />; break;
    case 'content':   block = <BlockFotoText   data={data}/>; break;
    case 'benefit':   block = <BlockBenefits data={data}/>; break;
    case 'costs':     block = <BlockCosts data={data}/>; break;
    case 'reviews':   block = <BlockReviews data={data}/>; break;
    case 'taskslist': block = <TaskList data={data}/>; break;
    case 'articles':  block = <BlockArticles data={data}/>; break;
    case 'pay':       block = <BlockPay data={data}/>; break;
    case 'payshop':   block = <BlockPayShop data={data}/>; break;
    case 'news':      block = <BlockNewsList data={data}/>; break;
    // case 'contacts': block= <Contacts data={data} />; break;
   
    default: block = <div></div>
}

    return (       
        block
    );
};

export default ConditionalRender;