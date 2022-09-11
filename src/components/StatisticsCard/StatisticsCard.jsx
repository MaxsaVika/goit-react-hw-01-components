
import { SectionSubTitle } from 'constans/SectionTitle.styled';
import statsData from 'data/statistics.json';
import {StatisticsInfoItem} from 'components/StatisticsInfo/StatisticsInfo'
// import {StatisticsList} from '.StatisticsInfo/StatisticsInfo.styled'

import {StatsCard, StatisticsList} from './StatisticsCard.styled'

export const StatisticsCard = () => {
    return (
      <StatsCard>
          <SectionSubTitle>Upload stats</SectionSubTitle>
          <StatisticsList>
                {statsData.map(({label, percentage, id}) => (
                    <StatisticsInfoItem key = {id} statName={label} statValue={percentage}/>
                ))}
            </StatisticsList>
      </StatsCard>
    );
  };
  
  