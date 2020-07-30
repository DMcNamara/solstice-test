import * as express from 'express';
import { customers } from './assets/data/customers';
import { accounts } from './assets/data/accounts';
import { GetCustomerResponse } from '@solstice-test/api-interfaces';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'dist/apps/solstice')));
// long term, routes should not live in a single file
app.get('/api/accounts', (req, res) => {
    res.send(accounts);
});

app.get('/api/customers', (req, res) => {
    res.send(customers);
});

app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === Number(req.params.id));
    const customerAccounts = accounts.filter(a => a.customer_id === customer.id);
    res.send({ customer: customer, accounts: customerAccounts} as GetCustomerResponse);
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist/apps/solstice/index.html'));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
