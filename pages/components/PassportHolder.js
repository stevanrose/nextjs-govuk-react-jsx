import React, { useState } from "react";
import * as yup from "yup";
import PageTemplate from "./PageTemplate";
import { Formik, Form, Field } from "formik";
import { Button, Input, Fieldset } from "govuk-react-jsx";

const validationSchema = yup.object().shape({
  forenames: yup.string().required("Forename(s) is required"),
  surname: yup.string().required("Surname is required"),
});

export default function PassportHolder({ formData, setFormData, nextStep }) {
  const [direction, setDirection] = useState("forward");

  return (
    <PageTemplate heading="Create a Lost Stolen Record">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <Formik
            initialValues={formData}
            onSubmit={(values) => {
              setFormData(values);
              nextStep();
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
                  {/* <Fieldset.Legend>Forename(s)</Fieldset.Legend> */}
                  <Field
                    as={Input}
                    name='forenames'
                    label={{
                      children: 'Forename(s)',
                    }}
                    margin='normal'
                    {...(touched.forenames && errors.forenames && {
                      errorMessage: {
                        children: errors.forenames,
                      },
                    })}
                  />

                  <Field
                    as={Input}
                    name='surname'
                    label={{
                      children: 'Surname',
                    }} 
                    margin='normal'
                    {...(touched.surname && errors.surname && {
                      errorMessage: {
                        children: errors.surname,
                      },
                    })}
                  />

                  <Button type="submit">Continue</Button>
                </Fieldset>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </PageTemplate>
  );
}
