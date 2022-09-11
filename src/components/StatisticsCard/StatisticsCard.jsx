import PropTypes from 'prop-types';
import { SectionSubTitle } from 'constans/SectionTitle.styled';
import statsData from 'data/statistics.json';
import {StatisticsInfoItem} from 'components/StatisticsInfo/StatisticsInfo'
// import {StatisticsList} from '.StatisticsInfo/StatisticsInfo.styled'

import {StatsCard, StatisticsList} from './StatisticsCard.styled'

export const StatisticsCard = ({subTitle}) => {
    return (
      <StatsCard>
        {subTitle && <SectionSubTitle>{subTitle}</SectionSubTitle>}
          <StatisticsList>
                {statsData.map(({label, percentage, id}) => (
                    <StatisticsInfoItem key = {id} statName={label} statValue={percentage}/>
                ))}
            </StatisticsList>
      </StatsCard>
    );
  };
  
  StatisticsCard.propTypes = {
    subTitle: PropTypes.string.isRequired,
  };