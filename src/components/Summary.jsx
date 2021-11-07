import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Paper, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  incomeBox: {
    textAlign: "center",
    borderRight: "1px solid #ddd",
    paddingBottom: 16,
  },
  expenseBox: {
    textAlign: "center",
    paddingBottom: 16,
  },
  red: {
      color: 'red'
  },
  green: {
      color: 'green'
  }
});
const Summary = ({income,expense,finalBalance}) => {
    const classes = useStyles()
    return (
      <Box>
        <Typography variant="h4" component="h4">
          Expense Tracker
        </Typography>
        <Typography variant="h5" component="h5">
          Your Balance
        </Typography>
        <Typography variant="h3" component="h5">
          ${finalBalance.toFixed(2)}
        </Typography>
        <Paper>
          <Box>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Box className={classes.incomeBox}>
                  <Typography variant="h5" component="h5">
                    INCOME
                  </Typography>
                  <Typography
                    className={classes.green}
                    variant="h5"
                    component="h5"
                  >
                    ${income.toFixed(2)}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className={classes.expenseBox}>
                  <Typography variant="h5" component="h5">
                    EXPENSE
                  </Typography>
                  <Typography
                    className={classes.red}
                    variant="h5"
                    component="h5"
                  >
                    ${expense.toFixed(2)}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    );
}

Summary.propTypes = {
  income: PropTypes.number,
  expense: PropTypes.number,
  finalBalance: PropTypes.number
};

export default Summary
