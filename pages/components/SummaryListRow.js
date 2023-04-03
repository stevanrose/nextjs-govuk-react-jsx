export default function SummaryListRow({ title, value }) {
  return (
    <div class="govuk-summary-list__row">
      <dt className="govuk-summary-list__key">{title}</dt>
      <dd className="govuk-summary-list__value">{value}</dd>
    </div>
  );
}
