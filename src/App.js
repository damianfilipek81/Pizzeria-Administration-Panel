import React from 'react';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Waiter from './components/views/Waiter/WaiterContainer';
import Tables from './components/views/Tables/Tables';
import Homepage from './components/views/Homepage/Homepage';
import BookingInfo from './components/views/BookingInfo/BookingInfo';
import BookingNew from './components/views/BookingNew/BookingNew';
import EventsInfo from './components/views/EventsInfo/EventsInfo';
import EventsNew from './components/views/EventsNew/EventsNew';
import OrderInfo from './components/views/OrderInfo/OrderInfo';
import OrderNew from './components/views/OrderNew/OrderNew';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/panel'}>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={'/'} component={Homepage} />
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/tables'} component={Tables} />
                <Route exact path={'/tables/bookings/:id'} component={BookingInfo} />
                <Route exact path={'/tables/booking/new'} component={BookingNew} />
                <Route exact path={'/tables/events/:id'} component={EventsInfo} />
                <Route exact path={'/tables/event/new'} component={EventsNew} />
                <Route exact path={'/waiter/orders/:id'} component={OrderInfo} />
                <Route exact path={'/waiter/order/new'} component={OrderNew} />
                <Route exact path={'/waiter'} component={Waiter} />
                <Route exact path={'/kitchen'} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </ StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
