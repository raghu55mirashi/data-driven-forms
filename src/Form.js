import React, { useState } from 'react'
import FormRenderer from '@data-driven-forms/react-form-renderer/dist/cjs/form-renderer'
import componentTypes from '@data-driven-forms/react-form-renderer/dist/cjs/component-types'
import validatorTypes from '@data-driven-forms/react-form-renderer/dist/cjs/validator-types';
import DataTypes from '@data-driven-forms/react-form-renderer/dist/cjs/data-types'
import useFieldApi from '@data-driven-forms/react-form-renderer/dist/cjs/use-field-api'
import FormTemplate from '@data-driven-forms/mui-component-mapper/dist/cjs/form-template';
// import TextField from '@data-driven-forms/mui-component-mapper/dist/cjs/text-field';
import Checkbox from '@data-driven-forms/mui-component-mapper/dist/cjs/checkbox';
import submitFunction from './upload-handler'

const schema = {
    fields: [
        {
            component: componentTypes.TEXT_FIELD,
            name: 'username',
            label: 'Username',
            dataType: DataTypes.STRING,
            isRequired: true,
            helpertext: 'min 5 characters, max 10',
            validate: [
                {
                    type: validatorTypes.MAX_LENGTH,
                    threshold: 5
                },
                {
                    type: validatorTypes.MAX_LENGTH,
                    threshold: 10
                },
                {
                    type: validatorTypes.REQUIRED
                }
            ]
        },
        {
            component: componentTypes.TEXT_FIELD,
            name: 'age',
            label: 'Age',
            type: 'number',
            dataType: DataTypes.INTEGER,
            isRequired: true,
            validate: [
                {
                    type: validatorTypes.REQUIRED,
                    message: 'Age must be required'
                }]
        },
        {
            component: componentTypes.TEXT_FIELD,
            name: 'email',
            label: 'Email',
            isRequired: true,
            validate: [
                {
                    type: validatorTypes.PATTERN,
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                    message: 'Invalid email'
                },
                {
                    type: validatorTypes.REQUIRED,
                    message: 'Email must be required'
                }
            ]
        },
        {
            component: componentTypes.CHECKBOX,
            name: 'useDefaultNickName',
            label: 'Do you want to use?',
            description: 'set: {} is used to reset the setter'
        },
        {
            component: 'file-upload',
            label: 'File upload',
            name: 'file-upload-name',
            type: 'file',
            validate: [{ type: validatorTypes.REQUIRED },
                // { type: 'file-size', maxSize: 600000 }
            ]
        }
    ]
}
const TextField = props => {
    const { label, input, meta, ...rest } = useFieldApi(props)
    return (
        <div>
            <label htmlFor={input.name}>{label}</label>
            <input {...input} {...rest} id={input.name} />
            {meta.error && <p>{meta.error}</p>}
        </div>
    )
}
const FileUploadComponent = (props) => {
    const { input, meta, label } = useFieldApi(props);
    return (
        <div>
            <label htmlFor={input.name}>{label}</label>
            <input id={input.name} {...input} accept="image/*" multiple />
            {meta.error && (
                <span style={{ color: 'red' }}>{meta.error}</span>
            )}
        </div>
    );
};
const fileSizeValidator = ({ maxSize }) => {
    return (value) => {
        if (value && value.inputFiles[0] && value.inputFiles[0].size > maxSize) {
            return `File is too large, maximum allowed size is ${maxSize} bytes. Current file has ${value.inputFiles[0].size} bytes`;
        }
    };
};
const validatorMapper = {
    'file-size': fileSizeValidator
};
const componentMapper = {
    [componentTypes.TEXT_FIELD]: TextField,
    [componentTypes.CHECKBOX]: Checkbox,
    'file-upload': FileUploadComponent
}
const Form = () => {
    const [value, setValue] = useState({})
    return (
        <div>
            <FormRenderer
                FormTemplate={FormTemplate}
                componentMapper={componentMapper}
                validatorMapper={validatorMapper}
                schema={schema}
                onSubmit={async (value, formApi) => {
                    setValue(value)
                    const encoded = await submitFunction(value, formApi);
                    console.log('encoded image', encoded);
                }}
            />
        </div>
    )
}

export default Form
