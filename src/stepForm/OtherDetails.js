import React from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/dist/cjs/form-renderer'
import componentTypes from '@data-driven-forms/react-form-renderer/dist/cjs/component-types'
import validatorTypes from '@data-driven-forms/react-form-renderer/dist/cjs/validator-types';
import useFormApi from '@data-driven-forms/react-form-renderer/dist/cjs/use-form-api'

import componentMapper from '../components/component-mapper/component-mapper'

const OtherDetails = (props) => {
    const schema = {
        title: 'Other Details',
        fields: [
            {
                component: componentTypes.SELECT,
                label: 'Site Name',
                name: 'Site Name',
                options: [
                    {
                        label: 'Select Site',
                        value: '',
                    },
                    {
                        label: 'Google',
                        value: 'Google',
                    },
                    {
                        label: 'Amazon',
                        value: 'Amazon',
                    },
                    {
                        label: 'Facebook',
                        value: 'Facebook',
                    },
                    {
                        label: 'Microsoft',
                        value: 'Microsoft',
                    },
                    {
                        label: 'Tesla',
                        value: 'Tesla',
                    },
                ],
                isSearchable: true,
                validate: [
                    {
                        type: validatorTypes.REQUIRED,
                        message: 'Please select option'
                    }
                ]
            },
            {
                component: componentTypes.CHECKBOX,
                label: 'Categories',
                name: 'categories',
                options: [
                    {
                        label: 'Romance',
                        value: 'Romance',
                    },
                    {
                        label: 'Thriller',
                        value: 'Thriller',
                    },
                    {
                        label: 'Adventure',
                        value: 'Adventure',
                    },
                ],
            },
            {
                component: componentTypes.SWITCH,
                label: 'Switch',
                name: 'switch',
            },
        ]
    }

    const saveAndContinue = () => {
        props.nextStep()
    }
    const back = () => {
        props.prevStep();
    }
    const FormTemplate = ({ schema, formFields }) => {
        const { handleSubmit, onCancel } = useFormApi();
        return (
            <form onSubmit={handleSubmit}>
                { formFields}
                <button type="cancel" className="btn btn-secondary" onClick={onCancel}>Back</button>
                <button type="submit" className="btn btn-primary">Next</button>
            </form>
        )
    }

    return (
        <FormRenderer
            FormTemplate={FormTemplate}
            componentMapper={componentMapper}
            schema={schema}
            onSubmit={async (value) => {
                // setValue(value)
                saveAndContinue()
            }}
            onCancel={() => { back() }}
        />
    )
}

export default OtherDetails;