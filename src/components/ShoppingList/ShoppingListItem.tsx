import React from 'react';
import { Item } from '@models/Item';

interface ShoppingListItemProps {
  item: Item;
  children?: React.ReactElement;
}

const ShoppingListItem = ({ item }: ShoppingListItemProps) => {
  return <div>{item.name}</div>;
};

export default ShoppingListItem;
