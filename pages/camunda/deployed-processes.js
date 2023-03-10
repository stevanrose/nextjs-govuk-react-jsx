import React from "react";
import PageTemplate from "../Components/PageTemplate";

function DeployedProcesses({ data }) {
  console.log(JSON.stringify(data));
  return (
    <PageTemplate heading="Camunda - Deployed Processes">
      <table class="govuk-table">
        <caption class="govuk-table__caption govuk-table__caption--m">
          Deployed Processes
        </caption>
        <thead class="govuk-table__head">
          <tr class="govuk-table__row">
            <th scope="col" class="govuk-table__header">
              ID
            </th>
            <th scope="col" class="govuk-table__header">
              Name
            </th>
            <th scope="col" class="govuk-table__header">
              Version
            </th>
          </tr>
        </thead>
        <tbody class="govuk-table__body">
          {data &&
            data.length > 0 &&
            data.map((d) => (
              <tr class="govuk-table__row">
                <td class="govuk-table__cell">{d.id}</td>
                <td class="govuk-table__cell">{d.name}</td>
                <td class="govuk-table__cell">{d.version}</td>
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
