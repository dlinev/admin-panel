import cx from "classnames";
import { Row, Button, Text } from "..";
import styles from "./Paginator.module.css";

export const Paginator = ({ className, currentPage, lastPage }) => {
  const pages = generatePageRange(currentPage, lastPage);

  return (
    <Row className={cx(styles._, className)}>
      {pages.map((page) =>
        page === "..." ? (
          <Text className={styles.text}>{page}</Text>
        ) : (
          <Button
            className={styles.button}
            theme={page === currentPage ? "default" : "flat"}
            size="small"
            text={page}
          />
        )
      )}
    </Row>
  );
};

const generatePageRange = (currentPage, lastPage, delta = 2) => {
  // creates array with base 1 index
  const range = Array(lastPage)
    .fill()
    .map((_, index) => index + 1);

  return range.reduce((pages, page) => {
    // allow adding of first and last pages
    if (page === 1 || page === lastPage) {
      return [...pages, page];
    }

    // if within delta range add page
    if (page - delta <= currentPage && page + delta >= currentPage) {
      return [...pages, page];
    }

    // otherwise add 'gap if gap was not the last item added.
    if (pages[pages.length - 1] !== "...") {
      return [...pages, "..."];
    }

    return pages;
  }, []);
};
