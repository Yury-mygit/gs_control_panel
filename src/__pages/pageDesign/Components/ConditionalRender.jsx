import React from 'react';

import BlockFixed from './BlockFixed/BlockFixed';
import BlockFotoText from './BlockFotoText/BlockFotoText';
import BlockBenefits from './BlockBenefits/BlockBenefits';
import BlockCosts from './BlockCosts/BlockCosts';
import BlockReviews from './BlockReviews/BlockReviews';
import Contacts from './blockContacts/Contacts';


const ConditionalRender = ({type, data}) => {

 let block



 switch (type) {
    case 'face': block = <BlockFixed  data={data}/>; break;
    case 'content': block = <BlockFotoText   data={data}/>; break;
    case 'benefit': block = <BlockBenefits data={data}/>; break;
    case 'costs': block = <BlockCosts data={data}/>; break;
    case 'rewiews': block = <BlockReviews data={data}/>; break;
    case 'contacts': block= <Contacts data={data} />; break;
   
    default: block = <div></div>
}

    return (       
        block
    );
};

export default ConditionalRender;