import React, {useState} from 'react';
import styles from './EventsNew.module.scss';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';

const EventsNew = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [table, setTable] = React.useState('');

  const handleChange = (event) => {
    setTable(event.target.value);
  };
  return (
    <Paper className={styles.component} elevation={3}>
      <h3>New event</h3>
      <form className={styles.form}>
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Contact" variant="outlined" />
        <MuiPickersUtilsProvider utils={DateFnsUtils} variant="outlined">
          <DatePicker inputVariant="outlined" value={selectedDate} onChange={handleDateChange} />
          <TimePicker
            showTodayButton
            todayLabel="now"
            value={selectedDate}
            minutesStep={15}
            onChange={handleDateChange}
            inputVariant="outlined"
          />
        </MuiPickersUtilsProvider>
        <FormControl variant="outlined" >
          <InputLabel id="table">Table</InputLabel>
          <Select
            value={table}
            onChange={handleChange}
            label="Table"
            labelId="table"
            id="table"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary">Confirm</Button>
      </form>
    </Paper>
  );
};

export default EventsNew;