import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${p => p.theme.sizes.friendListItem};
  padding: ${p => p.theme.space[3]} ${p => p.theme.space[4]};
  background-color: ${p => p.theme.colors.whiteBG};
  border: ${p => p.theme.borders.cardInner};
  border-radius: ${p => p.theme.radii.card};
  box-shadow: ${p => p.theme.shadows.generic};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.06);
  }
`;

export const FriendStatus = styled.span`
  width: ${p => p.theme.sizes.statusFriend};
  height: ${p => p.theme.sizes.statusFriend};
  margin-right: ${p => p.theme.space[4]};
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p =>
    p.isOnline ? p.theme.colors.online : p.theme.colors.offline};
`;

export const FriendImage = styled.img`
  width: ${p => p.theme.sizes.avatarFriend};
  height: ${p => p.theme.sizes.avatarFriend};
  background-color: ${p => p.theme.colors.lightBG};
  border-radius: ${p => p.theme.radii.card};
  box-shadow: ${p => p.theme.shadows.generic};
  overflow: hidden;
`;

export const FriendName = styled.p`
  margin-left: ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.darkText};
`;
