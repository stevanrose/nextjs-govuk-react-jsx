// Note to Steve https://github.com/trujic1000/react-formik-form/blob/master/src/components/FormPersonalDetails.js

import React, { useState } from "react";
import EmailAddress from "../components/EmailAddress";
import PassportHolder from "../components/PassportHolder";

export default function CreateLostStolen() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    forenames: "",
    surname: "",
    email: "",
    dob: "",
    townOfBirth: "",
    countrOfBirth: "",
  });
  const nextStep = () => setStep((prev = prev + 1));
  const prevStep = () => setStep((prev = prev - 1));

  switch (step) {
    case 1:
      return (
        <PassportHolder
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 2:
      return (
        <EmailAddress
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    default:
      return <Success />;
  }
}
