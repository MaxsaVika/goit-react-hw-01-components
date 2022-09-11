import PropTypes from 'prop-types';
import {FriendItem, FriendStatus, FriendImage, FriendName} from './FriendCard.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <FriendItem>
          <FriendStatus isOnline={isOnline}/>
          <FriendImage src={avatar} alt="User avatar" />
          <FriendName>{name}</FriendName>
      </FriendItem>
    );
  };

  FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };

