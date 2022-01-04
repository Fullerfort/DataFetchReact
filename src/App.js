import React, { useState, useEffect } from "react";
import axios from "axios";
import Test from "./Test";
import Pagination from "./Pagination";

const App = () => {
  const [screens, setScreens] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://insight.mhtc.org.my/api/v1/getScene")
      .then((response) => {
        console.log(response.data);
        setScreens(response.data.screen);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  }, []);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = screens.slice(indexOfFirstPost, indexOfLastPost);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Test screens={screens} loading={loading} />
    </div>
  );
};

export default App;
