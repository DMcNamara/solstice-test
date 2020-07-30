import React, { useState, useEffect } from 'react';
import {
    Account,
    Customer,
    GetCustomerResponse,
} from '@solstice-test/api-interfaces';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider/Divider';
import { Accounts } from '../accounts/Accounts';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import { Grid } from '@material-ui/core';
import { BooleanDisplay } from '@solstice-test/utils';

export const CustomerView = () => {
    const { customerId } = useParams();
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [customer, setCustomer] = useState<Customer>(null);

    useEffect(() => {
        if (customerId) {
            fetch(`/api/customers/${customerId}`)
                .then((r) => r.json())
                .then((res: GetCustomerResponse) => {
                    setCustomer(res.customer);
                    setAccounts(res.accounts);
                });
        }
    }, [customerId]);

    return (
        <>
            <Typography gutterBottom variant="h4">
                Customer: {customer?.first_name} {customer?.last_name}
            </Typography>
            <Divider style={{ marginBottom: 12 }} />
            <Card style={{ marginBottom: 12 }}>
                <CardHeader title="Details" />
                <CardContent>
                    <Grid container justify="flex-start">
                        <DetailDisplay label="Email:">
                            <Typography>{customer?.email}</Typography>
                        </DetailDisplay>
                        <DetailDisplay label="Active:">
                            <BooleanDisplay value={customer?.active} />
                        </DetailDisplay>
                        <DetailDisplay label="Reason for Joining:">
                            <Typography>
                                {customer?.reason_for_joining}
                            </Typography>
                        </DetailDisplay>
                        <DetailDisplay label="Date Created:">
                            <Typography>{customer?.created_date}</Typography>
                        </DetailDisplay>
                    </Grid>
                </CardContent>
            </Card>
            <Typography gutterBottom variant="h5">
                Accounts
            </Typography>
            <Accounts accounts={accounts} />
        </>
    );
};

interface DetailDisplayProps {
    label: string;
    children: JSX.Element;
}
const DetailDisplay = ({ label, children }: DetailDisplayProps) => {
    return (
        <>
            <Grid item xs={2} style={{ minHeight: 30 }}>
                <Typography variant="subtitle2">{label}</Typography>
            </Grid>
            <Grid item xs={10}>
                {children}
            </Grid>
        </>
    );
};
