import React from 'react'
import {Paper,Box} from '@mui/material'
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  list: {
    padding: 16,
    marginBottom: 8,
    borderRight: '5px solid'
  },
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "stretch",
  },
  itemLeft: {
    flexGrow: 1,
  },
  itemRight: {
    
  },
  red: {
    borderColor: 'red'
  },
  green: {
    borderColor: 'green'
  }
});
const TransactionListItem = ({item}) => {
    const classes = useStyles()
    return (
      <div>
        <Paper className={`${classes.list} ${item.type === 1 ? classes.green : classes.red}`}>
          <Box className={classes.root}>
            <Box className={classes.itemLeft}>{item.text}</Box>
            <Box className={classes.itemRight}>
              {item.type === 1 ? "+" : "-"}${item.amount}
            </Box>
          </Box>
        </Paper>
      </div>
    );
}

export default TransactionListItem
