import React, { useEffect, useState } from 'react';
import { doc, collection, addDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import ShoppingListItem from './ShoppingListItem';
import { Item } from '@models/Item';
import db from '../../firebase';

interface ShoppingListProps {
  children?: React.ReactElement;
}

const list: Item[] = [
  {
    name: 'トイレットペーパー',
    requiredCount: 2,
    stockAmount: 0,
    purchasedAmount: 2,
    category: '洗剤紙類',
  },
  {
    name: 'しょうゆ',
    requiredCount: 2,
    stockAmount: 1,
    purchasedAmount: 1,
    category: '調味料',
  },
  {
    name: 'オイスター缶',
    requiredCount: 3,
    stockAmount: 2,
    purchasedAmount: 1,
    category: 'ごはん用',
  },
  { name: '卵', requiredCount: 3, stockAmount: 0, purchasedAmount: 3, category: '冷蔵類' },
  {
    name: 'ベーコン',
    requiredCount: 1,
    stockAmount: 0,
    purchasedAmount: 1,
    category: '保存食',
  },
  {
    name: 'オレンジティー',
    requiredCount: 1,
    stockAmount: 1,
    purchasedAmount: 0,
    category: '飲みもの',
  },
];

const handleClick = async () => {
  try {
    list.forEach(async (item) => {
      const docRef = await addDoc(collection(db, 'items'), item);
      console.log('Document written with ID: ', docRef.id);
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const ShoppingList = (props: ShoppingListProps) => {
  // const [itemList, setItemList] = useState<Item[] | null>(null);
  const [itemsnapshot, loading, error] = useCollection(collection(db, 'items'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const docRef = doc(db, 'items');
  //     const itemList = await getDoc(docRef);
  //     // setItemList(itemList);
  //   };
  //   fetchData();
  // }, []);

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
      <button onClick={handleClick}>Initialize</button>
    </div>
  );
};

export default ShoppingList;
