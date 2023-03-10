import React, { useState } from "react";
import PageTemplate from "../PageTemplate";
import { Button } from "govuk-react-jsx";

export default function CheckYourAnswers({ formData, nextStep }) {
  const [direction, setDirection] = useState("forward");

  return (
    <PageTemplate heading="Create a Lost Stolen Record">
      <h1 className="govuk-heading-l">Check your answers</h1>
      <h2 className="govuk-heading-m">Personal details</h2>
      <dl className="govuk-summary-list govuk-!-margin-bottom-9">
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Report type</dt>
          <dd className="govuk-summary-list__value">{formData.reportType}</dd>
          <dd className="govuk-summary-list__actions">
            <a className="govuk-link" href="#">
              Change<span className="govuk-visually-hidden"> name</span>
            </a>
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Name</dt>
          <dd className="govuk-summary-list__value">
            {formData.forenames} {formData.surname}
          </dd>
          <dd className="govuk-summary-list__actions">
            <a className="govuk-link" href="#">
              Change<span className="govuk-visually-hidden"> name</span>
            </a>
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Email address</dt>
          <dd className="govuk-summary-list__value">{formData.email}</dd>
          <dd className="govuk-summary-list__actions">
            <a className="govuk-link" href="#">
              Change<span className="govuk-visually-hidden"> name</span>
            </a>
          </dd>
        </div>
        <div className="govuk-summary-list__row">
          <dt className="govuk-summary-list__key">Date of Birth</dt>
          <dd className="govuk-summary-list__value">{formData.dob}</dd>
          <dd className="govuk-summary-list__actions">
            <a className="govuk-link" href="#">
              Change<span className="govuk-visually-hidden"> name</span>
            </a>
          </dd>
        </div>
      </dl>
    </PageTemplate>
  );
}
