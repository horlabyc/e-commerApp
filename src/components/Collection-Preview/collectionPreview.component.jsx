import React from 'react';
import CollectionItem from '../Collection-Item/collection-item.component';
import './collectionPreview.styles.scss';

const CollectionPreview = ({ title, items}) => {
    return (  
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                .filter((item, index) => index < 5)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))}
            </div>
        </div>
    );
}
 
export default CollectionPreview;