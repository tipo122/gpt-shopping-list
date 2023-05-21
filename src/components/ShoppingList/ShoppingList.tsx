import React, { useEffect, useState } from 'react';
import { doc, collection, addDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import ShoppingListItem from './ShoppingListItem';
import { Item } from '@models/Item';
import db from '../../firebase';

interface ShoppingListProps {
  children?: React.ReactElement;
}

const ShoppingList = (props: ShoppingListProps) => {
  const [itemsnapshot, loading, error] = useCollection(collection(db, 'items'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <div style={{ width: '100%' }}>
      Shopping List
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {itemsnapshot &&
        itemsnapshot.docs.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'nowrap',
            }}
          >
            <ShoppingListItem item={item.data() as Item} />
          </li>
        ))}
    </div>
  );
};

export default ShoppingList;
