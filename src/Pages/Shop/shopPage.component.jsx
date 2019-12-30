import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/Collection-Preview/collectionPreview.component';
import './shopPage.styles.scss';

class ShopPage extends React.Component {
    constructor(){
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }
    state = {  }
    render() { 
        const {collections} = this.state;
        return (  
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))}
                
            </div>
        );
    }
}
 
export default ShopPage;