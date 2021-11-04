import * as React from "react";
import { useRecordContext } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    span: {
        fontSize: '0.75rem'
    }
});


const SmallIdField = ({ source }) => {
    const record = useRecordContext();
    const classes = useStyles();
    return record ? (
        <span className={classes.span}>{record[source]}</span>
    ) : null;
}

export default SmallIdField;