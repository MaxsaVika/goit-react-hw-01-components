import PropTypes from 'prop-types';
import { SectionTitle } from 'constans/SectionTitle.styled';
import { Section } from 'constans/Section.styled'
import {StatisticsCard} from 'components/StatisticsCard/StatisticsCard'

export const Statistics = ({ title }) => {
    return (
      <Section>
          <SectionTitle>{title}</SectionTitle>
          <StatisticsCard subTitle = "Upload stats"/>
      </Section>
    );
  };
  
  Statistics.propTypes = {
    title: PropTypes.string.isRequired,
  };