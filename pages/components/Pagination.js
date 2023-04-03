import styles from "./Pagination.module.scss";

function generatePageList(currentPage, lastPage, ellipsisDelta) {
  const fullRange = Array.from({ length: lastPage }, (_, i) => i + 1);

  // If we know we won't need any ellipses we can just return the full range
  if (lastPage <= ellipsisDelta * 2 + 3) {
    return fullRange;
  }

  return fullRange.reduce((pageNumbers, p) => {
    // Always add the first and last pages
    // Also add page p if it's within the defined ellipsis delta, i.e. it satisfies: currentPage - ellipsisDelta <= p <= currentPage + ellipsisDelta
    if (
      p === 1 ||
      p === lastPage ||
      (p >= currentPage - ellipsisDelta && p <= currentPage + ellipsisDelta)
    ) {
      return [...pageNumbers, p];
    }

    // Add ellipsis if it wasn't already added as the last element
    if (pageNumbers[pageNumbers.length - 1] !== "...") {
      return [...pageNumbers, "..."];
    }

    return pageNumbers;
  }, []);
}

export default function Pagination({
  totalPages,
  currentPageNum,
  currentPageCallback,
}) {
  const ellipsisDelta = 1;

  const pageNumbers = generatePageList(
    currentPageNum,
    totalPages,
    ellipsisDelta
  );

  return (
    <nav className={styles.navigation}>
      <div className={styles.previousPage}>
        {currentPageNum !== 1 && (
          <p onClick={() => currentPageCallback(currentPageNum - 1)}>
            Previous page
          </p>
        )}
      </div>
      <div className={styles.pageNumbers}>
        <ul>
          {pageNumbers.map((number, idx) => (
            <li key={idx}>
              {number === "..." ? (
                <p>...</p>
              ) : (
                <p
                  id={`page${number}`}
                  className={`${styles.pageLink} ${
                    number === currentPageNum ? styles.blackBold : ""
                  }`}
                  onClick={() => currentPageCallback(number)}
                >
                  {number}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.nextPage}>
        {currentPageNum !== totalPages && (
          <p onClick={() => currentPageCallback(currentPageNum + 1)}>
            Next page
          </p>
        )}
      </div>
    </nav>
  );
}
