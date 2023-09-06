import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';
import user from '../assets/user.json';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import history from '../assets/transactions.json';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={history} />
    </>
  );
};
