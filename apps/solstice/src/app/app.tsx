import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink,
} from 'react-router-dom';
import { CustomersIndex } from './customers/CustomersIndex';
import { makeStyles } from '@material-ui/core/styles';
import { AccountsIndex } from './accounts/AccountsIndex';
import { CustomerView } from './customers/CustomerView';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    container: {
        marginLeft: 15,
        marginRight: 15,
    }
}));

export const App = () => {
    const classes = useStyles();
    return (
        <Router>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" style={{ marginRight: 25 }}>
                        Solstice
                    </Typography>
                    <Button
                        component={RouterLink}
                        to="/customers"
                        color="secondary"
                        variant="contained"
                        style={{ marginRight: 10 }}
                    >
                        Customers
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/accounts"
                        color="secondary"
                        variant="contained"
                    >
                        Accounts
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
            <div className={classes.container}>
                <Switch>
                    <Route path="/customers/:customerId">
                        <CustomerView />
                    </Route>
                    <Route path="/customers">
                        <CustomersIndex />
                    </Route>
                    <Route path="/accounts">
                        <AccountsIndex />
                    </Route>
                    <Route path="/">
                        <CustomersIndex />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
