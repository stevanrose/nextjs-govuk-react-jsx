import React, { useState } from "react";
import * as yup from "yup";
import PageTemplate from "../PageTemplate";
import { Formik, Form, Field } from "formik";
import { Button, Fieldset, Radios } from "govuk-react-jsx";

const validationSchema = yup.object().shape({
  reportType: yup.string().required("Report type is required"),
});

export default function ReportType({ formData, setFormData, nextStep }) {
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
                as={Radios}
                fieldset={{
                  legend: {
                    children: "What type of LS record is this?",
                  },
                }}
                idPrefix="reportType"
                name="reportType"
                {...(touched.reportType &&
                  errors.reportType && {
                    errorMessage: {
                      children: errors.reportType,
                    },
                  })}
                items={[
                  {
                    children: "Adult",
                    value: "adult",
                  },
                  {
                    children: "Child",
                    value: "child",
                  },
                  {
                    children: "Third Party",
                    value: "third party",
                  },
                ]}
              />
              <Button type="submit">Continue</Button>
            </Fieldset>
          </Form>
        )}
      </Formik>
    </PageTemplate>
  );
}
