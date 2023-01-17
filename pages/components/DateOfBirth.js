import React, { useState } from "react";
import * as yup from "yup";
import PageTemplate from "./PageTemplate";
import { Formik, Form, Field } from "formik";
import { Button, Input, Fieldset } from "govuk-react-jsx";

const validationSchema = yup.object().shape({
  dob: yup.string().required("Date of Birth is required"),
});

export default function DateOfBirth({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [direction, setDirection] = useState("back");
  return (
    <PageTemplate heading="Create a Lost Stolen Record">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
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
                    name='dob'
                    label={{
                      children: 'Date of Birth',
                    }}
                    margin='normal'
                    {...(touched.dob && errors.dob && {
                      errorMessage: {
                        children: errors.dob,
                      },
                    })}
                  />

                  <Button type="submit" onClick={() => setDirection("back")}>
                    Back
                  </Button>
                  <Button type="submit" onClick={() => setDirection("forward")}>
                    Submit
                  </Button>
                </Fieldset>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </PageTemplate>
  );
}
