"use client";
import Image from "next/image";
import { FC, useCallback, useEffect, useState } from "react";

interface PaginationProps {
  pagesInView: number;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  pagesInView,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const [pageDisplayed, setPageDisplayed] = useState<number[]>([]);
  console.log(pagesInView);
  const calculatePages = useCallback(
    (currentPage: number) => {
      // No. of page numbers shown on the left and right of currentPage
      const showLeftAndRight = Math.floor(pagesInView / 2);
      // First number for pagesInView
      const stepLeft = currentPage - showLeftAndRight;
      // Last number for pagesInView, if pagesInView is paired number, show 1 page less on the right than left, otherwise equal pagenumbers on left and right
      const lastPageInView =
        pagesInView % 2 === 0
          ? currentPage + showLeftAndRight - 1
          : currentPage + showLeftAndRight;
      console.log("🚀 ~ file: pagination.tsx:31 ~ pagesInView:", pagesInView);

      // Condition to not go below 1
      const leftLimitPage = stepLeft < 1 ? 1 : stepLeft;
      // Condition to not go above lastpage number
      const rightLimitPage = stepLeft < 1 ? pagesInView : lastPageInView;

      let prevPage = leftLimitPage;
      let nextPage = rightLimitPage;

      if (stepLeft < 1) {
        prevPage = 1;
        nextPage = pagesInView;
      } else {
        if (rightLimitPage > totalPages) {
          nextPage = totalPages;
          const nextStep = rightLimitPage - totalPages;
          prevPage = leftLimitPage - nextStep;
        }
      }

      const pageNumbers = [];

      for (let i = prevPage; i <= nextPage; i++) {
        pageNumbers.push(i);
      }

      return pageNumbers;
    },
    [pagesInView, totalPages]
  );

  useEffect(() => {
    setPageDisplayed(calculatePages(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, calculatePages]);

  const changePage = (page: number) => {
    setCurrentPage(page);
    calculatePages(page);
  };

  const onPrevClick = (currentPage: number) => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      calculatePages(currentPage);
    }
  };

  const onDblPrevClick = (currentPage: number) => {
    if (currentPage !== 1) {
      setCurrentPage(1);
      calculatePages(currentPage);
    }
  };

  const onNextClick = (currentPage: number) => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
      calculatePages(currentPage);
    }
  };

  const onDblNextClick = (currentPage: number) => {
    if (currentPage !== totalPages) {
      setCurrentPage(totalPages);
      calculatePages(currentPage);
    }
  };

  return (
    <div className="pagination__container">
      <div className="pagination">
        <div className="pagination__left--btn">
          <Image
            src="svg/left_arrow.svg"
            alt="left arrow"
            width={32}
            height={32}
            onClick={() => onPrevClick(currentPage)}
          />
        </div>
        <div className="pagination__dbl--left--btn">
          <Image
            src="svg/double_left_arrow.svg"
            alt="double left arrow"
            width={48}
            height={48}
            onClick={() => onDblPrevClick(currentPage)}
          />
        </div>
        <div className="pagination__numbers">
          {pageDisplayed.map((number) => {
            return (
              <div
                className={`pagination__number ${
                  number === currentPage ? "selected" : ""
                }`}
                key={number}
                onClick={() => changePage(number)}
              >
                {number}
              </div>
            );
          })}
        </div>
        <div className="pagination__dbl--right--btn">
          <Image
            src="svg/double_right_arrow.svg"
            alt="double right arrow"
            width={48}
            height={48}
            onClick={() => onDblNextClick(currentPage)}
          />
        </div>
        <div className="pagination__right--btn">
          <Image
            src="svg/right_arrow.svg"
            alt="right arrow"
            width={32}
            height={32}
            onClick={() => onNextClick(currentPage)}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
