import React from 'react';
import { Item } from '@models/Item';
import './ShoppingListItem.css';

interface ShoppingListItemProps {
  item: Item;
  children?: React.ReactElement;
}

const ShoppingListItem = ({ item }: ShoppingListItemProps) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          width: '15rem',
          whiteSpace: 'nowrap',
        }}
      >
        <div className="common">{item.name}</div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          gap: '2rem',
          flexBasis: 0,
        }}
      >
        <div className="common">{item.requiredCount}</div>
        <div className="common">{item.stockAmount}</div>
        <div className="common">{item.purchasedAmount}</div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          width: '10rem',
          whiteSpace: 'nowrap',
        }}
      >
        <div className="common">{item.category}</div>
      </div>
    </>
  );
};

export default ShoppingListItem;
