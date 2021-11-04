// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import dataProvider from "./dataProvider";
import { OrderEdit } from "./orderEdit";
import { OrderList } from "./orderList";
import { ProductEdit } from "./productEdit";
import { ProductList } from "./productList";

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="products" list={ProductList} edit={ProductEdit} />
        <Resource name="order" list={OrderList} edit={OrderEdit} />
    </Admin>
);

export default App;