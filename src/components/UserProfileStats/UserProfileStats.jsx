import PropTypes from 'prop-types';

import {UserProfileStatsListItem, UserProfileStatTitle, UserProfileStatValue} from './UserProfileStats.styled'

export const UserProfileStat = ({ statName, statValue }) => {
  return (
    <UserProfileStatsListItem>
      <UserProfileStatTitle>{statName}</UserProfileStatTitle>
      <UserProfileStatValue>{statValue}</UserProfileStatValue>
    </UserProfileStatsListItem>
  );
};

UserProfileStat.propTypes = {
  statName: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired,
};