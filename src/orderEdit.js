import * as React from "react";
import { Edit, SimpleForm, TextInput, SelectInput, NumberInput, ArrayInput, SimpleFormIterator } from 'react-admin';

const STATUSES = [
    { id: 'PENDIENTE_DE_PAGO', name: 'PENDIENTE' },
    { id: 'PAGADO', name: 'PAGADO' },
    { id: 'PAGO_RECHAZADO', name: 'RECHAZADO' }
]

export const OrderEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput source="status" choices={STATUSES} />
            <ArrayInput source="orderItems">
                <SimpleFormIterator>
                    <TextInput source="name" />
                    <NumberInput source="quantity" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);
2