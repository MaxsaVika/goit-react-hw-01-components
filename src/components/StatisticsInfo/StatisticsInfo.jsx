import PropTypes from 'prop-types';


import {StatisticsListItem, StatisticsTitle, StatisticsValue} from './StatisticsInfo.styled'

export const StatisticsInfoItem = ({statName, statValue}) => {
    return (

            <StatisticsListItem>
                <StatisticsTitle>{statName}</StatisticsTitle> 
                <StatisticsValue>{`{statValue}%`}</StatisticsValue>
            </StatisticsListItem>
        )}

  
  StatisticsInfoItem.propTypes = {
    statName: PropTypes.string.isRequired,
    statValue: PropTypes.string.isRequired,
  };