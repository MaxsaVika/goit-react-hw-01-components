import PropTypes from 'prop-types';
import { SectionTitle } from 'constans/SectionTitle.styled';
import { Section } from 'constans/Section.styled'
import {FriendsList} from 'components/FriendsList/FriendsList'
// import {StatisticsCard} from 'components/StatisticsCard/StatisticsCard'

export const Friends = ({ title }) => {
    return (
      <Section>
          <SectionTitle>{title}</SectionTitle>
          <FriendsList/>
      </Section>
    );
  };
  
  Friends.propTypes = {
    title: PropTypes.string.isRequired,
  };