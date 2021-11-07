import React from 'react'
import {array} from 'prop-types'
import TransactionListItem from './TransactionListItem'
import { Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  titleArea: {
    borderBottom: "1px solid #ededed",
  },
  root: {
    margin: `32px 0`,
  },
});
const TransactionList = ({items}) => {
    const classes = useStyles()
    return (
      <div className={classes.root}>
        <Box mt={4} mb={2}>
          <Typography className={classes.titleArea} component="h4" variant="h5">
            HISTORY
          </Typography>
        </Box>
        {items.map((item, index) => {
          return <TransactionListItem key={index} item={item} />;
        })}
        {items.length <= 0 && <p>No transaction added yet.</p>}
      </div>
    );
}
TransactionList.propTypes = {
    items: array
}
export default TransactionList
