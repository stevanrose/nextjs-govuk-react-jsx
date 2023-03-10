import React, { useState } from "react";
import * as yup from "yup";
import PageTemplate from "../PageTemplate";
import { Formik, Form, Field } from "formik";
import { Button, Input, Fieldset } from "govuk-react-jsx";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export default function EmailAddress({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [direction, setDirection] = useState("back");
  return (
    <PageTemplate heading="Create a Lost Stolen Record">
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
          console.log("Data: ", JSON.stringify(values));
          console.log("Next Step: ", nextStep);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Fieldset
              legend={{
                children: "Details of the lost/stolen passport",
                className: "govuk-fieldset__legend--m",
              }}
            >
              <Field
                as={Input}
                name="email"
                label={{
                  children: "Email address",
                }}
                margin="normal"
                {...(touched.email &&
                  errors.email && {
                    errorMessage: {
                      children: errors.email,
                    },
                  })}
              />

              <Button type="submit" onClick={() => setDirection("back")}>
                Back
              </Button>
              <Button type="submit" onClick={() => setDirection("forward")}>
                Continue
              </Button>
            </Fieldset>
          </Form>
        )}
      </Formik>
    </PageTemplate>
  );
}
