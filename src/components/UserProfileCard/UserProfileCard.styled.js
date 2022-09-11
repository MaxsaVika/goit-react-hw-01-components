import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: ${p => p.theme.sizes.profileWidth};
  border-radius: ${p => p.theme.radii.card};
  box-shadow: ${p => p.theme.shadows.generic};
  overflow: hidden;
`;
