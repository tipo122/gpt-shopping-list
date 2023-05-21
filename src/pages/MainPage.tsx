import React from 'react';
import { Chat } from '../components/ChatArea';
import { ShoppingList } from '../components/ShoppingList';
import './MainPage.css';
interface MainPageProps {
  children?: React.ReactElement;
}

const MainPage = (props: MainPageProps) => {
  return (
    <div className="main">
      <div className="main-child-common">
        <Chat />
      </div>
      <div className="main-child-common">
        <ShoppingList />
      </div>
    </div>
  );
};

export default MainPage;
