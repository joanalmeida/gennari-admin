import * as React from 'react';
import { List, Datagrid, TextField, ArrayField, NumberField } from 'react-admin';
import MoneyField from './moneyField';
import AddressField from './addressField';
import DateField from './dateField';
import SmallIdField from './smallIdField';


export const OrderList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <SmallIdField source="id" />
            <DateField source="createdAt" label="fecha" />
            <TextField source="status" />
            <ArrayField source="orderItems" label="products">
                <Datagrid>
                    <TextField source="name" />
                    <MoneyField source="price" />
                    <NumberField source="quantity" />
                </Datagrid>
            </ArrayField>
            <AddressField source="address" />
        </Datagrid>
    </List>
);