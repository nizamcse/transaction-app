import React, { useState } from "react";
import {func,number} from 'prop-types'
import {
  FormHelperText,Box,
  TextField,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
const TransactiionForm = ({ updateBalance, finalBalance }) => {
  const [text, setText] = useState("");
  const [errText, setErrText] = useState("");
  const [amount, setAmount] = useState(0);
  const saveTransactiion = () => {
    let a = parseFloat(amount);
    let value = a < 0 ? a * -1 : a;
    if (a)
      {
          if (!isNaN(a)) {
            if (finalBalance < value && a < 0) {
              setErrText("Expense is larger than final balance.");
            }
            else{
                updateBalance(value, text, a < 0 ? 0 : 1);
                setText("");
                setAmount(0);
                setErrText("");
            }
          } else {
            setErrText("You should only input the numbers.");
          }
      }else{
          setErrText("Invalid input.");
      }
  };
  return (
    <div>
      <Typography component="h4" variant="h5">
        Add New Transaction
      </Typography>
      <Box pt={2}>
        <InputLabel>Text</InputLabel>
        <TextField
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          fullWidth
          size="small"
          variant="outlined"
        />
      </Box>

      <Box pt={2}>
        <InputLabel>Amount</InputLabel>
        <Box pt={1} pb={1}>
          <small>(Negative - expense,positiive - income)</small>
        </Box>
        <TextField
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          fullWidth
          size="small"
          variant="outlined"
        />
        {errText.length > 0 && <FormHelperText>{errText}</FormHelperText>}
      </Box>
      <Box pt={2}>
        <Button onClick={saveTransactiion} fullWidth variant="contained">
          Add Transaction
        </Button>
      </Box>
    </div>
  );
};
TransactiionForm.propTypes = {
  updateBalance: func,
  finalBalance: number
};

export default TransactiionForm
