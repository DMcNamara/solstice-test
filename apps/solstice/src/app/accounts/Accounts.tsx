import React from 'react';
import { Account, Dictionary, Customer } from '@solstice-test/api-interfaces';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export interface AccountsProps {
    accounts: Account[];
    customersById?: Dictionary<Customer>;
}

export const Accounts = ({ accounts, customersById }: AccountsProps) => {
    const getCustomerName = (customerId: number) => {
        if (customersById && customersById[customerId]) {
            const customer = customersById[customerId];
            return `${customer.first_name} ${customer.last_name}`;
        }
        return '';
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="Customer Table">
                <TableHead>
                    <TableRow>
                        {/* Including a row for solar farm id here, since while I don't have that join data I can pretend they're numbered */}
                        {/* TODO: Add sorting, search */}
                        {customersById && <TableCell>Customer Name</TableCell>}
                        <TableCell>Address</TableCell>
                        <TableCell align="right">Solar Farm #</TableCell>
                        <TableCell align="right">Capacity Share</TableCell>
                        <TableCell>Date Created</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {accounts.map((row) => (
                        <TableRow key={row.id}>
                            {customersById && (
                                <TableCell>
                                    <Link to={`/customers/${row.customer_id}`}>
                                        {getCustomerName(row.customer_id)}
                                    </Link>
                                </TableCell>
                            )}
                            <TableCell>
                                <Address {...row} />
                            </TableCell>
                            <TableCell align="right">
                                {row.solar_farm_id}
                            </TableCell>
                            <TableCell align="right">
                                {row.capacity_share}
                            </TableCell>
                            <TableCell>{row.created_date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

interface Address {
    address: string;
    city: string;
    state: string;
    zip_code: string;
}
const Address = (props: Address) => {
    return (
        <Grid container justify="flex-start" style={{ maxWidth: 300 }}>
            <Grid item xs={12}>
                {props.address}
            </Grid>
            <Grid item xs={4}>
                {props.city}
            </Grid>
            <Grid item xs={4}>
                {props.state}
            </Grid>
            <Grid item xs={4}>
                {props.zip_code}
            </Grid>
        </Grid>
    );
};
