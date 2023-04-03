import react from "react";
import PageTemplate from "../Components/PageTemplate";

function Statistics({ data }) {
  console.log(JSON.stringify(data));

  return (
    <PageTemplate heading="Workflow - Statistics">
      <table className="govuk-table">
        <caption className="govuk-table__caption govuk-table__caption--m">
          Deployed Processes
        </caption>
        <thead className="govuk-table__head">
          <tr className="govuk-table__row">
            <th scope="col" className="govuk-table__header">
              Name
            </th>
            <th scope="col" className="govuk-table__header">
              Version
            </th>
            <th scope="col" className="govuk-table__header">
              Instances
            </th>
          </tr>
        </thead>
        <tbody className="govuk-table__body">
          {data.map((d) => (
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">{d.definition.name}</td>
              <td className="govuk-table__cell">{d.definition.version}</td>
              <td className="govuk-table__cell">{d.instances}</td>
            </tr>
          ))}
    
        </tbody>
      </table>
    </PageTemplate>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://workflow-ho-hmpo-dev1-i-dlsr-bac.np.ebsa.homeoffice.gov.uk/engine-rest/process-definition/statistics"
  );
  const data = await res.json();
  return { props: { data } };
}

export default Statistics;
