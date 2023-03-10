// Note to Steve https://github.com/trujic1000/react-formik-form/blob/master/src/components/FormPersonalDetails.js

import React, { useState } from "react";
import ReportType from "../components/multi-step/ReportType";
import PassportHolder from "../components/multi-step/PassportHolder";
import EmailAddress from "../components/multi-step/EmailAddress";
import DateOfBirth from "../components/multi-step/DateOfBirth";
import CheckYourAnswers from "../components/multi-step/CheckYourAnswers";

export default function CreateLostStolen() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reportType: "",
    forenames: "",
    surname: "",
    email: "",
    dob: "",
    townOfBirth: "",
    countrOfBirth: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  switch (step) {
    case 1:
      return (
        <ReportType
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 2:
      return (
        <PassportHolder
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <EmailAddress
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <DateOfBirth
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return <CheckYourAnswers formData={formData} nextStep={nextStep} />;
    default:
      return <Success />;
  }
}
