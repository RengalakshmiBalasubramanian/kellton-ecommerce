import React from 'react';
import './collections.style.scss'
import {useState} from 'react'
import SHOP_DATA from '../shop/shop.data'

function Collection(ownProps){
    //console.log(ownProps.match.params.collectioName)
    const [shop,setShop] = useState({
        collections:SHOP_DATA
    })
    return (
        <div className="collections-page">
            <div className="title">
                Hats
            </div>
            <div className="items">
                const collection = collection.filter(value => value.title === ownProps.match.params.collectionname() =>  )        
                console
            </div>
        </div>
      );  
}

export default Collection;
