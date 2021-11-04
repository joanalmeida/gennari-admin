import * as React from "react";
import { useRecordContext } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    span: {
        display: 'block'
    }
});

const AddressField = ({ source }) => {
    const record = useRecordContext();
    const address = record[source];
    const classes = useStyles();
    return record ? (
        <div>
            <span className={classes.span}>Ciudad: {address.city}</span>
            <span className={classes.span}>Calle: {address.street}</span>
            <span className={classes.span}>Numero: {address.streetNumber}</span>
            <span className={classes.span}>Piso: {address.floor}</span>
            <span className={classes.span}>CP: {address.postalCode}</span>
        </div>
    ) : null;
}

export default AddressField;