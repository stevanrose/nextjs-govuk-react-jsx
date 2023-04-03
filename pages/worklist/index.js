import React, { useEffect, useState } from "react";
import PageTemplateFull from "../Components/PageTemplateFull";
import Pagination from "../components/Pagination";
import { Table } from "govuk-react-jsx/govuk/components/table";

const recordsPerPage = 10;

function formatCell(item) {
  return {
    cells: [
      {
        children: item.lsReference,
      },
      {
        children: item.surname,
      },
      {
        children: item.dob,
      },
      {
        children: item.status,
      },
    ],
  };
}

export default function Index() {
  const [reports, setReports] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("Using Effect");

    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/worklist/list?currentPage=${currentPage}&limit=10`
        );

        const json = await response.json();

        setReports(json.data.reports);
        setTotalPages(Math.ceil(json.data.pagination.totalResults / 10));

        console.log("Current page: ", currentPage);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
    };
    fetchData();
  }, [currentPage]);

  return (
    reports &&
    Object.keys(reports).length > 0 && (
      <PageTemplateFull heading="Lost Stolen and Recovered">
        <Table
          head={[
            { children: "Lost stolen reference" },
            { children: "Name" },
            { children: "Date of birth" },
            { children: "Status" },
          ]}
          rows={reports.map((item) => formatCell(item))}
        />
        <Pagination
          totalPages={totalPages}
          currentPageNum={currentPage}
          currentPageCallback={setCurrentPage}
        />
      </PageTemplateFull>
    )
  );
}
