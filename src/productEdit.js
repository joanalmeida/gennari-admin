import * as React from "react";
import { Edit, SimpleForm, TextInput, NumberInput, ImageInput, ImageField } from 'react-admin';

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <NumberInput source="price" />
            <ImageInput source="image" accept="image/png, image/jpg, image/jpeg">
                <ImageField source="src" title="product-image" />
            </ImageInput>
            <TextInput source="size" />
            <TextInput source="category" />
        </SimpleForm>
    </Edit>
);