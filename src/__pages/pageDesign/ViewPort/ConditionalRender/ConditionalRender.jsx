import React from 'react';

import BlockAbout from './BlockAbout/BlockAbout';
import BlockFixed from './BlockFixed/BlockFixed';
import BlockFotoText from './BlockFotoText/BlockFotoText';
import BlockBenefits from './BlockBenefits/BlockBenefits';
import BlockCosts from './BlockCosts/BlockCosts';
import BlockReviews from './BlockReviews/BlockReviews';
import BlockTask from './BlockTask/BlockTask'
import Contacts from './BlockContacts/Contacts';
import BlockArticles from './BlockArticles/BlockArticles';
import BlockPay from './BlockPay/BlockPay';
import BlockPayShop from './BlockPay/BlockPayShop';
import BlockNewsList from './BlockNews/BlockNews';


const ConditionalRender = ({type, block_type, data}) => {

 let block
    // console.log(block_type)
//  let a = <div>sdfsds</div>

// if (block_type) {
//     let test  = BlockFixed
//     console.log(typeof(block_type),block_type)
//     a = React.createElement(test, {...data} , ['<div>sds</div>'])
// }

//  let a = React.createElement(block_type, {...data})
//  let b = React.createElement("div", {},[])

 
 switch (type) {
    case 'about':     block = <BlockAbout  data={data} />; break;
    case 'face':      block = <BlockFixed  data={data} />; break;
    case 'content':   block = <BlockFotoText   data={data}/>; break;
    case 'benefit':   block = <BlockBenefits data={data}/>; break;
    case 'costs':     block = <BlockCosts data={data}/>; break;
    case 'reviews':   block = <BlockReviews data={data}/>; break;
    case 'taskslist': block = <BlockTask data={data}/>; break;
    case 'articles':  block = <BlockArticles data={data}/>; break;
    case 'pay':       block = <BlockPay data={data}/>; break;
    case 'payshop':   block = <BlockPayShop data={data}/>; break;
    case 'news':      block = <BlockNewsList data={data}/>; break;
    case 'contacts': block= <Contacts data={data} />; break;
   
    default: block = <div></div>
}

    return (       
        block
        // a
    );
};

export default ConditionalRender;