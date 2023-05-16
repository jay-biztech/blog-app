'use client';

import { Field, Form, Formik } from 'formik';
import React from 'react';
import Heading from '../../atoms/Heading';
import { BlogFormValues } from './types';
import Link from 'next/link';
import Button, { ButtonType } from '../../atoms/Button';

const CreateBlog: React.FC<{}> = () => {
  const initialValues: BlogFormValues = { title: '', description: '' };

  return (
    <div>
      <Heading>Create Blog</Heading>
      <Link href="/">
        <Button title="Back to Home" buttonType={ButtonType.Info} />
      </Link>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="title">Title</label>
            <Field
              id="title"
              name="title"
              placeholder="Title"
              className="form-control"
            />
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
          </div>

          <Button
            title="Submit"
            type="submit"
            buttonType={ButtonType.Success}
          ></Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateBlog;
