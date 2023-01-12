import Link from "next/link";
import React from "react";

export default function BackLink({ href }) {
  return (
    <Link className="govuk-back-link" href={href}>
      Back
    </Link>
  );
}

BackLink.defaultProps = {
  href: "/",
};
