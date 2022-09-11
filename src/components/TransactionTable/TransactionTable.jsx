import PropTypes from 'prop-types';
import transactionsData from 'data/transactions.json'
import { Box } from 'constans/Box';
import {TransactionTable, TransactionTableHead, TransactionTableData} from './TransactionTable.styled'

export const TransactionsHistory = ()=>{
    return (
        <TransactionTable>
            <Box as = "thead" bg = "tableHeadBG">
                <tr>
                    {Object.keys(transactionsData[0]).map((item)=> 
                        item !== "id" && 
                        <TransactionTableHead key = {item}>{item}</TransactionTableHead>
                    )}
                </tr>
            </Box>

            <Box as = "tbody">
                {transactionsData.map(({type, amount, currency, id}, ind)=>{
                    return (
                        <Box as="tr" key = {id} bg = {ind % 2 === 0 ? "whiteBG" : "lightBG"}>
                            <TransactionTableData>{type}</TransactionTableData>
                            <TransactionTableData>{amount}</TransactionTableData>
                            <TransactionTableData>{currency}</TransactionTableData>
                        </Box> 
                    )
                })}
            </Box>
        </TransactionTable>
    )
}

transactionsData.propTypes = {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
  };