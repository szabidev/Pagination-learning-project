"use client";
import { useEffect, useState } from "react";
import SearchBar from "../searchbar";

import "../../../style/main.scss";
import Display from "../display";
import Pagination from "../pagination";

const Gallery = () => {
  const [image, setImage] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("landscape");
  const numberOfItems = "&per_page=60";

  // for pagination
  const [currentPage, setCurrentPage] = useState<number>(5);
  const [imagePerPage] = useState<number>(3);

  const clientId = "hn9AB9ssfHtwEEYspleFrtZZcnS-X52aGiisoFKzhJY";
  const url =
    "https://api.unsplash.com/search/photos?client_id=" +
    clientId +
    "&query=" +
    searchTerm +
    numberOfItems;

  console.log(url);
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
  console.log(image);

  // make a function that sets the searchword and pass it down to onSearch
  const handleSearch = (keyword: string) => {
    setSearchTerm(keyword);
  };

  // function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Loading screen if url is not working
  if (!image) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="gallery-container">
      <h1 className="project-title">Pagination project</h1>
      <SearchBar onSearch={handleSearch} />
      <Display imagesToShow={image} />
      <Pagination
        totalPosts={image.length}
        imagePerPage={imagePerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Gallery;
