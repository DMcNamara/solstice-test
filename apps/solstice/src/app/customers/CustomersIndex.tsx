import React, { useState, useEffect } from 'react';
import { Customer } from '@solstice-test/api-interfaces';
import Customers from './customers';
import { sortBy } from '@solstice-test/utils';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider/Divider';

export const CustomersIndex = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        fetch('/api/customers')
            .then((r) => r.json())
            .then((customers: Customer[]) =>
                customers.sort((a, b) => sortBy(a, b, 'last_name'))
            )
            .then(setCustomers);
    }, []);

    return (
        <>
            <Typography gutterBottom variant="h4">
                Customers
            </Typography>
            <Divider style={{ marginBottom: 12 }} />
            <Customers customers={customers} />
        </>
    );
};
