import * as React from "react";
import { useRecordContext } from 'react-admin';

const DateField = ({ source }) => {
    const record = useRecordContext();
    const date = record[source].replace('-', '/');
    return record ? (
        <span>{date}</span>
    ) : null;
}

export default DateField;