import { useState } from "react";
import Summary from "./components/Summary";
import TransactiionForm from "./components/TransactiionForm";
import TransactionList from "./components/TransactionList";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#fdfdfd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: 16,
  },
  box: {
    width: "100%",
    maxWidth: "400px",
  },
});
function App() {
  const classes = useStyles();
  const [income, setIncome] = useState(0);
  const [finalBalance, setFinalBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [history, setHistory] = useState([]);

  const updateBalance = (amount, text, type) => {
    if (type === 0) setExpense((prev) => prev + amount);
    else setIncome((prev) => prev + amount);
    let list = {
      text: text,
      amount: amount.toFixed(2),
      type: type,
    };
    let lists = history.slice();
    lists = [...lists, list];
    setHistory(lists);
    if (type === 0) setFinalBalance((prev) => prev - amount);
    else setFinalBalance((prev) => prev + amount);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Summary
          income={income}
          expense={expense}
          finalBalance={finalBalance}
        />
        <TransactionList items={history} />
        <TransactiionForm updateBalance={updateBalance} />
      </Box>
    </div>
  );
}

export default App;
