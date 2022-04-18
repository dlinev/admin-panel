import cx from "classnames";
import { Row, Button, Text } from "..";
import styles from "./Paginator.module.css";

export const Paginator = ({ className, currentPage, lastPage, onClick }) => {
  const pages = generatePageRange(currentPage, lastPage);

  return (
    <Row className={cx(styles._, className)}>
      {pages.map((page) =>
        page === "..." ? (
          <Text key={0} name={0} className={styles.text}>
            {page}
          </Text>
        ) : (
          <Button
            key={page}
            value={page}
            className={styles.button}
            theme={page == currentPage ? "default" : "flat"}
            size="small"
            text={page}
            onClick={onClick}
          />
        )
      )}
    </Row>
  );
};

const generatePageRange = (currentPage, lastPage, delta = 2) => {
  const range = Array(lastPage)
    .fill()
    .map((_, index) => index + 1);

  return range.reduce((pages, page) => {
    if (page === 1 || page === lastPage) {
      return [...pages, page];
    }

    if (page - delta <= currentPage && page + delta >= currentPage) {
      return [...pages, page];
    }

    if (pages[pages.length - 1] !== "...") {
      return [...pages, "..."];
    }

    return pages;
  }, []);
};
