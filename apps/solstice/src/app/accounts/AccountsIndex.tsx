import React, { useState, useEffect } from 'react';
import { Account, Customer, Dictionary } from '@solstice-test/api-interfaces';
import { Accounts } from './Accounts';
import { sortBy } from '@solstice-test/utils';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider/Divider';

export const AccountsIndex = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [customers, setCustomers] = useState<Dictionary<Customer>>([]);

    useEffect(() => {
        fetch('/api/accounts')
            .then((r) => r.json())
            .then((accounts: Account[]) => accounts.sort((a, b) => sortBy(a, b, 'last_name')))
            .then(setAccounts);
    }, []);

    useEffect(() => {
        fetch('/api/customers')
            .then((r) => r.json())
            .then((customers: Customer[]) => {
                // should really be dumped into redux and this transform should be done in a selector
                const custDict: Dictionary<Customer> = {};
                customers.forEach(cust => custDict[cust.id] = cust);
                return custDict;
            })
            .then(setCustomers);
    }, []);

    return (
        <>
            <Typography gutterBottom variant="h4">
                Accounts
            </Typography>
            <Divider style={{ marginBottom: 12 }} />
            <Accounts accounts={accounts} customersById={customers}/>
        </>
    );
};
