import React, { useEffect, useState } from "react";
import PageTemplateFull from "../Components/PageTemplateFull";
import Pagination from "../components/Pagination";
import { Table } from "govuk-react-jsx/govuk/components/table";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

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

export default function Worklist() {
  const [page, setPage] = useState(1);
  const currentPage = page;

  async function fetchWorkList(page = 1) {
    const { data } = await axios.get("/api/worklist/work-list?page=" + page);
    return data;
  }

  const { status, data, error, isFetching, isPreviousData } = useQuery({
    queryKey: ["worklist", page],
    queryFn: () => fetchWorkList(page),
    keepPreviousData: true,
    staleTime: 5000,
  });

  const totalPages = Math.ceil(data?.data?.pagination?.totalResults / 10);

  return (
    <PageTemplateFull heading="Lost Stolen and Recovered">
      <Table
        head={[
          { children: "Lost stolen reference" },
          { children: "Name" },
          { children: "Date of birth" },
          { children: "Status" },
        ]}
        rows={data?.data?.reports?.map((item) => formatCell(item))}
      />
      <Pagination
        totalPages={totalPages}
        currentPageNum={currentPage}
        currentPageCallback={setPage}
      />
    </PageTemplateFull>
  );
}
