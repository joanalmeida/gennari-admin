import * as React from "react";
import { List, Datagrid, TextField, ImageField } from 'react-admin';
import MoneyField from "./moneyField";

export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="description" />
            <MoneyField source="price" />
            <ImageField source="imageUri" />
            <TextField source="size" />
        </Datagrid>
    </List>
);