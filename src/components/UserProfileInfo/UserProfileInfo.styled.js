import styled from 'styled-components';

export const UserProfileDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[4]};
  background-color: ${p => p.theme.colors.whiteBG};
`;

export const UserProfileImage = styled.img`
  width: ${p => p.theme.sizes.avatarImage};
  height: ${p => p.theme.sizes.avatarImage};
  margin-bottom: ${p => p.theme.space[5]};
  background-color: ${p => p.theme.colors.lightBG};
  border-radius: ${p => p.theme.radii.round};
  box-shadow: ${p => p.theme.shadows.generic};
`;

export const UserProfileName = styled.p`
  margin: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[4]};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.darkText};
  text-shadow: ${p => p.theme.shadows.text};
`;

export const UserProfileInformation = styled.p`
  margin: ${p => p.theme.space[0]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.lightText};
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]};
  }
`;
