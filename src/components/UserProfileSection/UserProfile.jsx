import PropTypes from 'prop-types';
import { SectionTitle } from 'constans/SectionTitle.styled';
import {UserProfileCard} from 'components/UserProfileCard/UserProfileCard'
import { Section } from 'constans/Section.styled'

export const UserProfile = ({ title }) => {
    return (
      <Section>
          <SectionTitle>{title}</SectionTitle>
          <UserProfileCard />
      </Section>
    );
  };
  
  UserProfile.propTypes = {
    title: PropTypes.string.isRequired,
  };