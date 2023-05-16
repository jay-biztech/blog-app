'use client';

import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import Button, { ButtonType } from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import { BlogFormValues } from './types';
import * as Yup from 'yup';

const CreateBlog: React.FC<{}> = () => {
  let BlogSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Title is required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Description is required'),
    date: Yup.date(),
  });

  axios.defaults.baseURL = 'http://localhost:4000';

  return (
    <div>
      <Heading>Create Blog</Heading>
      <Formik
        initialValues={{
          title: '',
          description: '',
          date: new Date(),
          url: '',
        }}
        validationSchema={BlogSchema}
        onSubmit={(values, actions) => {
          const { title, description, date, url } = values;
          axios.post('/blogs', { title, description, date, url });
          actions.setSubmitting(false);
        }}
      >
        {({ errors, touched }) => (
          <Form method="POST">
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <Field
                id="title"
                name="title"
                placeholder="Title"
                className="form-control"
              />
              {errors.title && touched.title ? <div>{errors.title}</div> : null}
            </div>

            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <Field
                id="description"
                name="description"
                placeholder="Description"
                as="textarea"
                className="form-control"
              />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
            </div>

            <Button
              title="Submit"
              type="submit"
              buttonType={ButtonType.Success}
            ></Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateBlog;
