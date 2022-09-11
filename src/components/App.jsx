import {UserProfile} from './UserProfileSection/UserProfile'
import {Statistics} from './StatisticsSection/Statistics'
import {Friends} from './FriendsSection/FriendsSection'
import {TransactionHistory} from './TransactionSection/TransactionSection'

export const App = () => {
  return (
    <main>
      <UserProfile title="Profile #1" />
      <Statistics title = "Statistics #2" />
      <Friends title = "Friends #3" />
      <TransactionHistory title = "Transaction History #4"/>
    </main>
  );
};
