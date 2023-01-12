import { ErrorSummary, Template } from "govuk-react-jsx";
import BackLink from "./BackLink";

const headerProps = {
  serviceName: "LSR",
  serviceUrlHref: "/",
  navigation: [
    {
      children: "Sign out",
      href: "/logout",
    },
  ],
};

const footerProps = {
  meta: {
    children: "Built by HM Passport Office",
  },
};

export default function PageTemplate({ children, heading, backLink, errors }) {
  return (
    <Template
      title={headerProps.serviceName}
      header={headerProps}
      footer={footerProps}
      {...(backLink && { beforeContent: <BackLink href={backLink} /> })}
    >
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          {errors?.length > 0 && (
            <ErrorSummary
              errorList={errors.map(({ message, href }) => ({
                children: message,
                href,
              }))}
            />
          )}
          <h1 className="govuk-heading-xl">{heading}</h1>
          {children}
        </div>
      </div>
    </Template>
  );
}
