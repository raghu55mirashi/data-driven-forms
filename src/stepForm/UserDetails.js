import React from 'react';
import FormRenderer from '@data-driven-forms/react-form-renderer/dist/cjs/form-renderer'
import componentTypes from '@data-driven-forms/react-form-renderer/dist/cjs/component-types'
import validatorTypes from '@data-driven-forms/react-form-renderer/dist/cjs/validator-types';
import DataTypes from '@data-driven-forms/react-form-renderer/dist/cjs/data-types'
import useFormApi from '@data-driven-forms/react-form-renderer/dist/cjs/use-form-api'

import componentMapper from '../components/component-mapper/component-mapper'

const UserDetails = (props) => {
    const schema = {
        title: 'User Details',
        fields: [
            {
                component: componentTypes.TEXT_FIELD,
                name: 'username',
                label: 'Username',
                dataType: DataTypes.STRING,
                helpertext: 'min 3 characters, max 10',
                validate: [
                    {
                        type: validatorTypes.MIN_LENGTH,
                        threshold: 3
                    },
                    {
                        type: validatorTypes.MAX_LENGTH,
                        threshold: 10
                    },
                    {
                        type: validatorTypes.REQUIRED,
                        message: 'Username must be required'
                    }
                ]
            },
            {
                component: componentTypes.TEXT_FIELD,
                name: 'email',
                label: 'Email',
                validate: [
                    {
                        type: validatorTypes.PATTERN,
                        pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                        message: 'Invalid email'
                    },
                    {
                        type: validatorTypes.REQUIRED,
                        message: 'Email must be required'
                    }
                ]
            },
            {
                component: componentTypes.TEXTAREA,
                name: 'address',
                label: 'Address',
                validate: [
                    {
                        type: validatorTypes.REQUIRED,
                        message: 'Address must be required'
                    }
                ]
            },
            {
                component: componentTypes.DATE_PICKER,
                name: 'dateofbirth',
                label: 'Date of Birth',
                type: 'date',
                validate: [
                    {
                        type: validatorTypes.REQUIRED
                    }
                ]
            },
            {
                component: "radio",
                name: "gender",
                label: "Select gender",
                options: [
                    {
                        "value": "male",
                        "label": "Male"
                    },
                    {
                        "value": "female",
                        "label": "Female"
                    }
                ],
                validate: [
                    {
                        type: validatorTypes.REQUIRED,
                        message: 'Please select gender'
                    }
                ]
            },


            // {
            //     component: 'tabs',
            //     name: 'tabs',
            //     fields: [
            //         {
            //             component: componentTypes.TAB_ITEM,
            //             name: 'Movies',
            //             title: 'Movies',
            //             fields: [
            //                 {
            //                     component: componentTypes.TEXT_FIELD,
            //                     label: 'Textfield 1',
            //                     name: 'Movie Details',
            //                 },
            //                 {
            //                     component: 'radio',
            //                     label: 'Categories',
            //                     name: 'radio',
            //                     options: [
            //                         {
            //                             label: 'Romance',
            //                             value: 'Romance',
            //                         },
            //                         {
            //                             label: 'Thriller',
            //                             value: 'Thriller',
            //                         },
            //                         {
            //                             label: 'Adventure',
            //                             value: 'Adventure',
            //                         },
            //                     ],
            //                 },
            //             ],
            //         }
            //     ]
            // },
            // {
            //     component: componentTypes.TAB_ITEM,
            //     name: 'Games',
            //     title: 'Games',
            //     fields: [
            //         {
            //             component: componentTypes.TEXT_FIELD,
            //             label: 'Games Details',
            //             name: 'Games Details',
            //         },
            //         {
            //             component: 'radio',
            //             label: 'Category',
            //             name: 'Category',
            //             options: [
            //                 {
            //                     label: 'Indoor',
            //                     value: 'Indoor',
            //                 },
            //                 {
            //                     label: 'Outdoor',
            //                     value: 'Outdoor',
            //                 },
            //                 {
            //                     label: 'Netflix and Chill',
            //                     value: 'Netflix and Chill',
            //                 },
            //             ],
            //         },
            //     ],
            // },
        ]
    }

    // const Tabs = ({ fields }) => {
    //     const formOptions = useFormApi();

    //     return fields.map((tab) => (
    //         <div key={tab.name}>
    //             <h2>{tab.title}</h2>
    //             {formOptions.renderForm(tab.fields, formOptions)}
    //         </div>
    //     ));
    // };

    const saveAndContinue = () => {
        props.nextStep()
    }
    const FormTemplate = ({ formFields, schema }) => {
        const { handleSubmit } = useFormApi();
        return (
            <form onSubmit={handleSubmit}>
                {formFields}
                <button type="submit" className="btn btn-primary" color="primary" variant="contained">
                    Next
                </button>
            </form>
        );
    };

    return (
        <FormRenderer
            FormTemplate={(props) => <FormTemplate {...props} showFormControls={true} />}
            componentMapper={componentMapper}
            schema={schema}
            subscription={true}
            onSubmit={async (value) => {
                saveAndContinue()
            }}

        />
    )
}

export default UserDetails;