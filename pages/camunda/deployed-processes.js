import React from "react";
import PageTemplate from "../Components/PageTemplate";

function DeployedProcesses({ data }) {
  console.log(JSON.stringify(data));
  return (
    <PageTemplate heading="Workflow - Deployed Processes">
      <table className="govuk-table">
        <caption className="govuk-table__caption govuk-table__caption--m">
          Deployed Processes
        </caption>
        <thead className="govuk-table__head">
          <tr className="govuk-table__row">
            <th scope="col" className="govuk-table__header">
              ID
            </th>
            <th scope="col" className="govuk-table__header">
              Name
            </th>
            <th scope="col" className="govuk-table__header">
              Version
            </th>
          </tr>
        </thead>
        <tbody className="govuk-table__body">
          {data &&
            data.length > 0 &&
            data.map((d) => (
              <tr className="govuk-table__row">
                <td className="govuk-table__cell">{d.id}</td>
                <td className="govuk-table__cell">{d.name}</td>
                <td className="govuk-table__cell">{d.version}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </PageTemplate>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://workflow-ho-hmpo-dev1-i-dlsr-bac.np.ebsa.homeoffice.gov.uk/engine-rest/process-definition?latestVersion=true"
  );
  const data = await res.json();
  return { props: { data } };
}

export default DeployedProcesses;
