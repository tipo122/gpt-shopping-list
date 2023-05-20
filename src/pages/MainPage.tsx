// import React from 'react';
// import { Chat } from '../components/ChatArea';
// import { ShoppingList } from '../components/ShoppingList';

// interface MainPageProps {
//   children?: React.ReactElement;
// }

// const MainPage = (props: MainPageProps) => {
//   return (
//     <div>
//       <Chat />
//       <ShoppingList />
//     </div>
//   );
// };

// export default MainPage;

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
      <div className="child-common">
        <Chat />
      </div>
      <div className="child-common">
        <ShoppingList />
      </div>
    </div>
  );
};

export default MainPage;
