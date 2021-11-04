import * as React from "react";
import { useRecordContext } from 'react-admin';

const MoneyField = ({ source }) => {
    const record = useRecordContext();
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS' 
    });
    const price = formatter.format(record[source]);
    return record ? (
        <span>{price}</span>
    ) : null;
}

export default MoneyField;