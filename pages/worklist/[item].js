import React from "react";
import PageTemplateFull from "../Components/PageTemplateFull";
import SummaryListRow from "../components/SummaryListRow";

function Item({ data }) {
  return (
    <PageTemplateFull heading="Lost Stolen and Recovered">
      <h2 class="govuk-heading-m">Worklist Report Details</h2>
      <dl className="govuk-summary-list">
        <SummaryListRow
          title="Lost Stolen Reference"
          value={data.lsReference}
        ></SummaryListRow>
        <SummaryListRow
          title="Business Key"
          value={data.businessKey}
        ></SummaryListRow>
        <SummaryListRow
          title="Forenames"
          value={data.forenames}
        ></SummaryListRow>
        <SummaryListRow title="Surname" value={data.surname}></SummaryListRow>
        <SummaryListRow title="Date of Birth" value={data.dob}></SummaryListRow>
        <SummaryListRow
          title="Loss Date"
          value={data.reportData.lossDate}
        ></SummaryListRow>
        <SummaryListRow
          title="Loss Type"
          value={data.reportData.lossType}
        ></SummaryListRow>
        <SummaryListRow
          title="Loss Town"
          value={data.reportData.lossAddress.lossTown}
        ></SummaryListRow>
        <SummaryListRow title="Status" value={data.status}></SummaryListRow>
        <SummaryListRow
          title="Created at"
          value={data.createdAt}
        ></SummaryListRow>
        <SummaryListRow
          title="Workstream"
          value={data.workStream}
        ></SummaryListRow>
      </dl>
    </PageTemplateFull>
  );
}

export async function getServerSideProps(context) {
  const { item } = context.query;
  const res = await fetch(
    "https://worklist-ho-hmpo-dev1-i-dlsr-bac.np.ebsa.homeoffice.gov.uk/worklist/v1/reports/lsReference/" +
      item
  );
  const data = await res.json();
  return { props: { data } };
}

export default Item;
