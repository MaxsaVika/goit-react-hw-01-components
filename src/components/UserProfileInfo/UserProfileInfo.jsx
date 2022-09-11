import PropTypes from 'prop-types';
import { UserProfileDescriptions, UserProfileImage,  UserProfileName, UserProfileInformation } from './UserProfileInfo.styled';

export const UserProfileInfo = ({ username, tag, location, avatar }) => {
    return (
      <UserProfileDescriptions>
          <UserProfileImage src={avatar} alt="User avatar" />
          <UserProfileName>{username}</UserProfileName>
          <UserProfileInformation>{`@${tag}`}</UserProfileInformation>
          <UserProfileInformation>{location}</UserProfileInformation>
      </UserProfileDescriptions>
    );
  };

  UserProfileInfo.propTypes = {
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
  };