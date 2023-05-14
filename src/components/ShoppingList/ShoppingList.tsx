import React from 'react';
import ShoppingListItem from './ShoppingListItem';
import { Item } from '@models/Item';

interface ShoppingListProps {
  children?: React.ReactElement;
}

const list: Item[] = [
  { _id: 0, name: 'hoge1', requiredCount: 2, stockAmount: 0, purchasedAmount: 0, category: 0 },
  { _id: 0, name: 'hoge2', requiredCount: 3, stockAmount: 0, purchasedAmount: 0, category: 0 },
  { _id: 0, name: 'hoge3', requiredCount: 2, stockAmount: 0, purchasedAmount: 0, category: 0 },
  { _id: 0, name: 'hoge4', requiredCount: 1, stockAmount: 0, purchasedAmount: 0, category: 0 },
  { _id: 0, name: 'hoge5', requiredCount: 1, stockAmount: 0, purchasedAmount: 0, category: 0 },
];

const ShoppingList = (props: ShoppingListProps) => {
  return (
    <div style={{ width: '100%' }}>
      Shopping List
      {list.map((item, i) => (
        <ShoppingListItem item={item} />
      ))}
    </div>
  );
};

export default ShoppingList;
