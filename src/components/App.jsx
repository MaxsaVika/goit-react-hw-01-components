import {UserProfile} from './UserProfileSection/UserProfile'
import {Statistics} from './StatisticsSection/Statistics'
import {Friends} from './FriendsSection/FriendsSection'

export const App = () => {
  return (
    <main>
      <UserProfile title="Profile" />
      <Statistics title = "Statistics" />
      <Friends title = "Friends" />
    </main>
  );
};
