import Image from "next/image";
import { FC } from "react";

interface PaginationProps {
  totalPosts: number;
  imagePerPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalPosts,
  imagePerPage,
  paginate,
  currentPage,
}) => {
  const pageNumbers: number[] = [];
  const pageInView = 2;
  const totalPageNumber = pageNumbers[pageNumbers.length - 1];
  const prevPages: number[] = [];
  const nextPages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / imagePerPage); i++) {
    pageNumbers.push(i);
  }

  for (let i = currentPage; i >= currentPage - pageInView; i--) {
    // if ((i = 1)) {
    //   return;
    // }
    prevPages.push(i);
    prevPages.sort();
  }

  for (let i = currentPage; i <= currentPage + pageInView; i++) {
    // if ((i = totalPageNumber)) {
    //   return;
    // }
    nextPages.push(i);
  }

  // creating a Set to easily remove duplicate from array
  const pagesToDisplay = [...new Set(prevPages.concat(nextPages))];
  console.log("🚀 ~ file: pagination.tsx:23 ~ pagesToDisplay:", pagesToDisplay);

  return (
    <div className="pagination__container">
      <div className="pagination">
        <div className="pagination__left--btn">
          <Image
            src="svg/left_arrow.svg"
            alt="left arrow"
            width={32}
            height={32}
          />
        </div>
        <div className="pagination__dbl--left--btn">
          <Image
            src="svg/double_left_arrow.svg"
            alt="double left arrow"
            width={48}
            height={48}
          />
        </div>
        <div className="pagination__numbers">
          {pagesToDisplay.map((number) => {
            return (
              <div
                className="pagination__number"
                key={number}
                onClick={() => paginate(number)}
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
          />
        </div>
        <div className="pagination__right--btn">
          <Image
            src="svg/right_arrow.svg"
            alt="right arrow"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;

// modify loop so that pagination will remain in bounds with 1 and totalPages
// modify logic so that when clicked on number visible on screen only on page moves
// add logic so that pagination can be done with the arrows
// add double arrow logic , jump 3 pages, setCurrentPage to currentPage + 3
