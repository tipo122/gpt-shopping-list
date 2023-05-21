import React from 'react';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Table } from 'antd';
import ShoppingListItem from './ShoppingListItem';
import { Item } from '@models/Item';
import db from '../../firebase';

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

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '必要数',
    dataIndex: 'requiredCount',
    key: 'requiredCount',
  },
  {
    title: '在庫数',
    dataIndex: 'stockAmount',
    key: 'stockAmount',
  },
  {
    title: '購入数',
    dataIndex: 'purchasedAmount',
    key: 'purchasedAmount',
  },
  {
    title: 'カテゴリー',
    dataIndex: 'category',
    key: 'category',
  },
];

const ShoppingList = (props: ShoppingListProps) => {
  const [itemsnapshot, loading, error] = useCollection(collection(db, 'items'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  return (
    <Table dataSource={list} columns={columns} />

    // <div style={{ width: '100%' }}>
    //   Shopping List
    //   {error && <strong>Error: {JSON.stringify(error)}</strong>}
    //   {loading && <span>Collection: Loading...</span>}
    //   {itemsnapshot &&
    //     itemsnapshot.docs.map((item, index) => (
    //       <li
    //         key={index}
    //         style={{
    //           display: 'flex',
    //           alignItems: 'center',
    //           justifyContent: 'space-between',
    //           flexWrap: 'nowrap',
    //         }}
    //       >
    //         <ShoppingListItem item={item.data() as Item} />
    //       </li>
    //     ))}
    // </div>
  );
};

export default ShoppingList;
