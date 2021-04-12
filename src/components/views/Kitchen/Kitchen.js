import React from 'react';
import styles from './Kitchen.module.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const demoOrders = [
  { id: 1, order: 'Pizza', options: ['Thick crust', 'Tomato sauce', 'Basil'], tableId: '1', time: '12:00' },
  { id: 2, order: 'Pizza', options: ['Thick crust', 'Tomato sauce', 'Basil'], tableId: '2', time: '12:30' },
  { id: 3, order: 'Pizza', options: ['Thick crust', 'Tomato sauce', 'Basil'], tableId: '3', time: '12:40' },
];

const Kitchen = () => {
  return (
    <div className={styles.component}>
      {demoOrders.map(data => (
        <Card key={data.id}>
          <CardContent>
            <Typography>
              Order: {data.order}
            </Typography>
            <Typography>
              Options: {data.options.map(option => (
                option +', '
              ))}
            </Typography>
            <Typography>
              Table: {data.tableId}
            </Typography>
            <Typography>
              Time: {data.time}
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="contained" size="small">Order done</Button>
          </CardActions>
        </Card>
      ))}

    </div>
  );
};

export default Kitchen;