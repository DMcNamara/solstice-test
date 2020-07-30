import React from 'react';
import { Customer } from '@solstice-test/api-interfaces';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { BooleanDisplay } from '@solstice-test/utils';

export interface CustomersProps {
    customers: Customer[];
}

export const Customers = (props: CustomersProps) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="Customer Table">
                <TableHead>
                    <TableRow>
                        {/* Not including a row for account manager here, since I don't have that join data and an ID isn't that useful */}
                        {/* TODO: Add sorting, search */}
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Active?</TableCell>
                        <TableCell>Date Created</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.customers.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Link to={`/customers/${row.id}`}>
                                    {row.first_name}
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Link to={`/customers/${row.id}`}>
                                    {row.last_name}
                                </Link>
                            </TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>
                                <BooleanDisplay value={row.active} />
                            </TableCell>
                            <TableCell>{row.created_date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Customers;
