import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomHexColor';


import {StatisticsListItem, StatisticsTitle, StatisticsValue} from './StatisticsInfo.styled'

export const StatisticsInfoItem = ({statName, statValue}) => {
    return (

            <StatisticsListItem backgroundColor = {getRandomHexColor()}>
                <StatisticsTitle>{statName}</StatisticsTitle> 
                <StatisticsValue>{`${statValue}%`}</StatisticsValue>
            </StatisticsListItem>
        )}

  
  StatisticsInfoItem.propTypes = {
    statName: PropTypes.string.isRequired,
    statValue: PropTypes.number.isRequired,
  };