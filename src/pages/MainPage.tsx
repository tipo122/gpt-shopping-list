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
interface MainPageProps {
  children?: React.ReactElement;
}

const MainPage = (props: MainPageProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
      }}
    >
      <div>
        <Chat />
      </div>
      <div>
        <ShoppingList />
      </div>
    </div>
  );
};

export default MainPage;
