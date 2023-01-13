import React, { useState } from "react";
import * as yup from "yup";
import PageTemplate from "./PageTemplate";
import { Formik, Form } from "formik";
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
                  <Input
                    id="forenames"
                    label={{
                      children: "Forenames",
                    }}
                    name="forenames"
                    type="text"
                    {...(touched.forenames &&
                      errors.forenames && {
                        errorMessage: {
                          children: errors.forenames,
                        },
                      })}
                  />
                  <Input
                    id="surname"
                    label={{
                      children: "Surname",
                    }}
                    name="surname"
                    type="text"
                    {...(touched.surname &&
                      errors.surname && {
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
