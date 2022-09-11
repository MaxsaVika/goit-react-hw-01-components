import PropTypes from 'prop-types';
import { SectionTitle } from 'constans/SectionTitle.styled';
import { Section } from 'constans/Section.styled'
import { TransactionsHistory } from 'components/TransactionTable/TransactionTable';

export const TransactionHistory = ({ title }) => {
    return (
      <Section>
          <SectionTitle>{title}</SectionTitle>
          <TransactionsHistory/>
      </Section>
    );
  };
  
  TransactionHistory.propTypes = {
    title: PropTypes.string.isRequired,
  };