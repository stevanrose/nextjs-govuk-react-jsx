import React, { useState } from "react";
import * as yup from "yup";
import PageTemplate from "../PageTemplate";
import { Formik, Form, Field } from "formik";
import { Button, Input, Fieldset } from "govuk-react-jsx";

const validationSchema = yup.object().shape({
  forenames: yup.string().required("Forename(s) is required"),
  surname: yup.string().required("Surname is required"),
});

export default function PassportHolder({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) {
  const [direction, setDirection] = useState("forward");

  return (
    <PageTemplate heading="Create a Lost Stolen Record">
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
              <Field
                as={Input}
                className="govuk-input--width-30"
                name="forenames"
                label={{
                  children: "Forename(s)",
                }}
                margin="normal"
                {...(touched.forenames &&
                  errors.forenames && {
                    errorMessage: {
                      children: errors.forenames,
                    },
                  })}
              />

              <Field
                as={Input}
                className="govuk-input--width-30"
                name="surname"
                label={{
                  children: "Surname",
                }}
                margin="normal"
                {...(touched.surname &&
                  errors.surname && {
                    errorMessage: {
                      children: errors.surname,
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
