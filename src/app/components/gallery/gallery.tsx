"use client";
import { useEffect, useState } from "react";

import SearchBar from "../searchbar";
import Display from "../display";
import Pagination from "../pagination";
import Filter from "../filter";

import "../../../style/main.scss";
import { ImagesToShow } from "../display/types";
import { isEmpty } from "lodash";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [image, setImage] = useState<ImagesToShow[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("landscape");
  const [imagePerPage] = useState<number>(3);
  const [pagesInView, setPagesInView] = useState<number>(5);
  const [tags, setTags] = useState<string[]>([]);
  const [tagsField, setTagsField] = useState<string>("");
  console.log("🚀 ~ file: gallery.tsx:21 ~ Gallery ~ tagsField:", tagsField);

  // Filter images based on tag keywords, compare them to all image tags
  const filteredItems = image.filter((item) => {
    const itemTags = item.tags.map((tag) => tag.title.toLowerCase());
    return tags.some((tag) => itemTags.includes(tag));
  });
  const totalPages =
    filteredItems.length < 1
      ? Math.ceil(image.length / imagePerPage)
      : Math.ceil(filteredItems.length / imagePerPage);
  console.log("🚀 ~ file: gallery.tsx:26 ~ Gallery ~ totalPages:", totalPages);
  console.log(
    "🚀 ~ file: gallery.tsx:27 ~ Gallery ~ filteredItems:",
    filteredItems
  );

  // Determine the index for all images, and determine the index for images on differrent pages
  const startIdx = (currentPage - 1) * imagePerPage;
  const endIdx = startIdx + imagePerPage;
  const imagesToShow =
    filteredItems.length < 1
      ? image.slice(startIdx, endIdx)
      : filteredItems.slice(startIdx, endIdx);
  // API Call
  const clientId = "hn9AB9ssfHtwEEYspleFrtZZcnS-X52aGiisoFKzhJY";
  const numberOfItems = "&per_page=60";
  const url =
    "https://api.unsplash.com/search/photos?client_id=" +
    clientId +
    "&query=" +
    searchTerm +
    numberOfItems;

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const inputTags = e.target.value.toLowerCase().split(/\s+/).slice(0, 3);

    setTagsField(e.target.value);

    // setTags(inputTags);
    setCurrentPage(1);
  };

  // handleCreateTags pasez setTagsField , inputTags
  const handleCreateTags = (fieldValue: string) => {
    setTags(fieldValue.toLowerCase().split(/\s+/).slice(0, 3));
  };

  // Function that sets the searchword and pass it down to onSearch
  const handleSearch = (keyword: string) => {
    setSearchTerm(keyword);
  };

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

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

  // useEffect to change pagesInView number if it is less than totalPages so there will be no 5 numbers displayed if for example there are only 2 pages
  useEffect(() => {
    if (!isEmpty(filteredItems) && totalPages <= pagesInView) {
      setPagesInView(totalPages);
    }
  }, [totalPages, pagesInView, filteredItems]);

  // useEffect to set pages back if there is no filtered items in the list
  useEffect(() => {
    if (isEmpty(filteredItems)) {
      setPagesInView(5);
    }
  }, [filteredItems]);

  // useEffect(() => {
  //   setTags(tagsField.split(/\s+/).slice(0, 3));
  // }, [tagsField]);

  // Loading screen if url is not working
  if (!image) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="gallery-container">
      <h1 className="project-title">Pagination project</h1>
      <div className="search__components">
        <SearchBar onSearch={handleSearch} />
        <Filter
          tags={tags}
          handleTagChange={handleTagChange}
          value={tagsField}
          handleCreateTags={handleCreateTags}
        />
      </div>
      <Display imagesToShow={imagesToShow} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={paginate}
        totalPages={totalPages}
        pagesInView={pagesInView}
      />
    </div>
  );
};

export default Gallery;
