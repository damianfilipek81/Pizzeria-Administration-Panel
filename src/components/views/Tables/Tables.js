import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const demoContent = [
  {
    hour: '12:00',
    tables: [
      { tableId: '1', status: 'null', id: null },
      { tableId: '2', status: 'booked', id: '333' },
      { tableId: '3', status: 'event', id: '444' },
    ],
  },
  {
    hour: '12:30',
    tables: [
      { tableId: '1', status: 'event', id: '222' },
      { tableId: '2', status: 'booked', id: '111' },
      { tableId: '3', status: 'booked', id: '555' },
    ],
  },
  {
    hour: '13:00',
    tables: [
      { tableId: '1', status: 'null', id: null },
      { tableId: '2', status: 'booked', id: '431' },
      { tableId: '3', status: 'null', id: null },
    ],
  },
  {
    hour: '13:30',
    tables: [
      { tableId: '1', status: 'null', id: null },
      { tableId: '2', status: 'null', id: null },
      { tableId: '3', status: 'event', id: '132' },
    ],
  },
  {
    hour: '14:00',
    tables: [
      { tableId: '1', status: 'booked', id: '124' },
      { tableId: '2', status: 'booked', id: '321' },
      { tableId: '3', status: 'event', id: '123' },
    ],
  },
];

const renderActions = (status, id) => {
  switch (status) {
    case 'null':
      return (
        <>
          <Button variant="outlined" component={Link} to={`tables/booking/new`}>New booking</Button>
          <Button variant="outlined" component={Link} to={`tables/event/new`}>New event</Button>
        </>
      );
    case 'booked':
      return (
        <Button variant="outlined" component={Link} to={`/tables/bookings/${id}`}>Booking Details</Button>
      );
    case 'event':
      return (
        <Button variant="outlined" component={Link} to={`/tables/events/${id}`}>Event Details</Button>
      );
    default:
      return null;
  }
};

const Tables = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </MuiPickersUtilsProvider>
      </div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour</TableCell>
              {demoContent[0].tables.map(row => (
                <TableCell key={row.tableId}>{`Table ${row.tableId}`}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.hour}>
                <TableCell component="th" >
                  {row.hour}
                </TableCell>
                {row.tables.map(data => (
                  <TableCell key={data.tableId} className={data.status === 'booked' ? styles.booked : (data.status === 'event' ? styles.event : styles.free)}>
                    {renderActions(data.status, data.id)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div className={styles.legend}>
        <div><span className={styles.availableLegend}></span><span> - Available table</span></div>
        <div><span className={styles.bookedLegend}></span><span> - Booked table</span></div>
        <div><span className={styles.eventLegend}></span><span> - Event-booked table</span></div>
      </div>
    </div>
  );
};

export default Tables;