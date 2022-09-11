import {UserProfile} from './UserProfileSection/UserProfile'
import {Statistics} from './StatisticsSection/Statistics'

export const App = () => {
  return (
    <main>
      <UserProfile title="Profile" />
      <Statistics title = "Statistics" />
    </main>
  );
};
