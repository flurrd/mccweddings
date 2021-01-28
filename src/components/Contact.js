import React from 'react';
import { Formik } from 'formik';
import { useState } from 'react';


export default function ContactForm(props) {

    const [response, setResponse] = useState({
        type: '',
        message: ''
    });

    const postMessage = async values => {

        try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: { 'Content-Type': 'application/json' }
            });

            const json = await res.json();

            if (json.success) {
                setResponse({
                    type: 'success',
                    message: 'Thank you for reaching out to us.'
                });
            } else {
                setResponse({
                    type: 'error',
                    message: json.message
                });
            }
        } catch (e) {
            console.log('An error occurred', e);
            setResponse({
                type: 'error',
                message: 'An error occured while submitting the form'
            });
        }
    };

    return (
        <Formik
        initialValues={{
            name: '',
            email: '',
            subject: 'StaticForms - Contact Form',
            honeypot: '',
            message: '',
            replyTo: '@',
            accessKey: '9c86c327-b21f-4644-8ae7-40b0972a8b39'
        }}
        onSubmit={values => {
            console.log('submitting', values);
        }}
        handleSubmit={event => {
            event.preventDefault();
            debugger
            postMessage(values);
            this.setState({ isSubmitting: true });
        }}
    >

        {({ handleSubmit, handleChange, values }) => (

            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                
                <input onChange={handleChange}
                    value={values.name}
                    name="name"
                    type="text"
                    placeholder="Name">
                </input>
                <button>Submit</button>
            </form>
        )}
    </Formik>
    );

}



