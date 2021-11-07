import React, { useState } from "react";
import {func} from 'prop-types'
import { Box, TextField, InputLabel, Button, Typography } from "@mui/material";
const TransactiionForm = ({ updateBalance }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const saveTransactiion = () => {
    let a = parseFloat(amount);
    let value = a < 0 ? a * -1 : a
    if (!isNaN(a)) {
        updateBalance(value,text,a < 0 ? 0 : 1);
        setText('')
        setAmount(0)
    }
  };
  return (
    <div>
      <Typography  component="h4" variant="h5">
        Add New Transaction
      </Typography>
      <Box>
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

      <Box>
        <InputLabel>Amount</InputLabel>
        <TextField
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          fullWidth
          size="small"
          variant="outlined"
        />
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
};

export default TransactiionForm
