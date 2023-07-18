"use client";
import { useEffect, useState } from "react";
import SearchBar from "../searchbar";
import Display from "../display";
import Pagination from "../pagination";
import "../../../style/main.scss";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState<number>(5);
  const [image, setImage] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("landscape");
  const [imagePerPage] = useState<number>(3);
  const [pagesInView, setPagesInView] = useState<number>(5);

  const startIdx = (currentPage - 1) * imagePerPage;
  const endIdx = startIdx + imagePerPage;
  const imagesToShow = image.slice(startIdx, endIdx);

  // API
  const clientId = "hn9AB9ssfHtwEEYspleFrtZZcnS-X52aGiisoFKzhJY";
  const numberOfItems = "&per_page=60";
  const url =
    "https://api.unsplash.com/search/photos?client_id=" +
    clientId +
    "&query=" +
    searchTerm +
    numberOfItems;

  // useEffect to fetch data
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setImage(data.results);
      });
  }, [url]);

  // make a function that sets the searchword and pass it down to onSearch
  const handleSearch = (keyword: string) => {
    setSearchTerm(keyword);
  };

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  // Loading screen if url is not working
  if (!image) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="gallery-container">
      <h1 className="project-title">Pagination project</h1>
      <SearchBar onSearch={handleSearch} />
      <Display imagesToShow={imagesToShow} />
      <Pagination
        totalPosts={image.length}
        imagePerPage={imagePerPage}
        pagesInView={pagesInView}
        currentPage={currentPage}
        setCurrentPage={paginate}
      />
    </div>
  );
};

export default Gallery;
