import React, { useEffect } from "react";
import { Button, Input, ErrorSummary, Fieldset, Radios } from "govuk-react-jsx";
import * as yup from "yup";
import { useFormik } from "formik";
import PageTemplate from "../components/PageTemplate";
const errorSummaryRef = React.createRef();

export default function CreateLostStolen() {
  const FormValidationSchema = yup.object().shape({
    reportType: yup.string().required("Report type is required"),
    forenames: yup.string().required("Forename(s) is required"),
    surname: yup.string().required("Surname is required"),
    dob: yup.string().required("Date of birth is required"),
    townOfBirth: yup.string().required("Town of birth is required"),
    countryOfBirth: yup.string().required("Country of birth is required"),
  });

  const formik = useFormik({
    initialValues: {
      reportType: "",
      forenames: "",
      surname: "",
      dob: "",
      townOfBirth: "",
      countryOfBirth: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: FormValidationSchema,
    onSubmit: (values) => {
      console.log("Posting to API: ", JSON.stringify(values, null, 2));
      const res = fetch("api/create-lost-stolen", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify(values),
      });
      formik.setSubmitting(false);
    },
  });

  useEffect(() => {
    if (formik.isSubmitting && errorSummaryRef.current) {
      errorSummaryRef.current.focus();
    }
  }, [formik.errors, formik.isSubmitting]);

  return (
    <PageTemplate heading="Create a Lost Stolen Record" backLink="/">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          {Object.keys(formik.errors).length !== 0 && (
            <ErrorSummary
              ref={errorSummaryRef}
              errorList={Object.entries(formik.errors).map((error) => ({
                href: `#${error[0]}`,
                children: error[1],
              }))}
            />
          )}
          <form onSubmit={formik.handleSubmit}>
            <Fieldset
              legend={{
                children: "Details of the lost/stolen passport",
                className: "govuk-fieldset__legend--m",
              }}
            >
              <Radios
                fieldset={{
                  legend: {
                    children: "What type of LS record is this?",
                  },
                }}
                idPrefix="reportType"
                name="reportType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values["reportType"]}
                {...(formik.errors["reportType"] && {
                  errorMessage: {
                    children: formik.errors["reportType"],
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

              <Input
                id="forenames"
                label={{
                  children: "Forenames",
                }}
                name="forenames"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.forenames}
                {...(formik.errors.forenames && {
                  errorMessage: {
                    children: formik.errors.forenames,
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.surname}
                {...(formik.errors.surname && {
                  errorMessage: {
                    children: formik.errors.surname,
                  },
                })}
              />

              <Input
                id="dob"
                label={{
                  children: "Date of Birth",
                }}
                name="dob"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                {...(formik.errors.dob && {
                  errorMessage: {
                    children: formik.errors.dob,
                  },
                })}
              />

              <Input
                id="townOfBirth"
                label={{
                  children: "Town of Birth",
                }}
                name="townOfBirth"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.townOfBirth}
                {...(formik.errors.townOfBirth && {
                  errorMessage: {
                    children: formik.errors.townOfBirth,
                  },
                })}
              />

              <Input
                id="countryOfBirth"
                label={{
                  children: "Country of Birth",
                }}
                name="countryOfBirth"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.countryOfBirth}
                {...(formik.errors.countryOfBirth && {
                  errorMessage: {
                    children: formik.errors.countryOfBirth,
                  },
                })}
              />

              <Button type="submit">Submit</Button>
            </Fieldset>
          </form>
          <div className="govuk-grid-column-one-third">
            <h2 className="govuk-heading-l">Form data</h2>
            <code>
              <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            </code>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
