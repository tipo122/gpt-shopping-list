import React from 'react';
import ShoppingListItem from './ShoppingListItem';
import { Item } from '@models/Item';

interface ShoppingListProps {
  children?: React.ReactElement;
}

const list: Item[] = [
  {
    _id: 0,
    name: 'トイレットペーパー',
    requiredCount: 2,
    stockAmount: 0,
    purchasedAmount: 2,
    category: '洗剤紙類',
  },
  {
    _id: 0,
    name: 'しょうゆ',
    requiredCount: 2,
    stockAmount: 1,
    purchasedAmount: 1,
    category: '調味料',
  },
  {
    _id: 0,
    name: 'オイスター缶',
    requiredCount: 3,
    stockAmount: 2,
    purchasedAmount: 1,
    category: 'ごはん用',
  },
  { _id: 0, name: '卵', requiredCount: 3, stockAmount: 0, purchasedAmount: 3, category: '冷蔵類' },
  {
    _id: 0,
    name: 'ベーコン',
    requiredCount: 1,
    stockAmount: 0,
    purchasedAmount: 1,
    category: '保存食',
  },
  {
    _id: 0,
    name: 'オレンジティー',
    requiredCount: 1,
    stockAmount: 1,
    purchasedAmount: 0,
    category: '飲みもの',
  },
];

const ShoppingList = (props: ShoppingListProps) => {
  return (
    <div style={{ width: '100%' }}>
      Shopping List
      {list.map((item, index) => (
        <li
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
          }}
        >
          <ShoppingListItem item={item} />
        </li>
      ))}
    </div>
  );
};

export default ShoppingList;
