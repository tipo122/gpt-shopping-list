import React, { useMemo } from 'react';
import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Table } from 'antd';
import { Item } from '@models/Item';
import db from '../../firebase';

interface ShoppingListProps {
  children?: React.ReactElement;
}

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

  const itemlist: Item[] | undefined = useMemo(() => {
    return itemsnapshot
      ? itemsnapshot.docs.map((item) => {
          return item.data() as Item;
        })
      : undefined;
  }, [itemsnapshot]);

  return (
    <div>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Items: Loading...</span>}
      {itemlist && <Table dataSource={itemlist} columns={columns} />}
    </div>
  );
};

export default ShoppingList;
