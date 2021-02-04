import React from "react";
import {
  faHome,
  faBookOpen,
  faListAlt,
  faMicrophone,
  faVideo,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftsidePane = () => {
  return (
    <div className="d-none d-md-block">
      <div className="d-flex flex-column mt-1">
        <p className="mb-4">
          <FontAwesomeIcon icon={faHome} /> Home
        </p>
        <p className="mb-4">
          <FontAwesomeIcon icon={faBookOpen} /> Reading List
        </p>
        <p className="mb-4">
          <FontAwesomeIcon icon={faListAlt} /> Listings
        </p>
        <p className="mb-4">
          <FontAwesomeIcon icon={faMicrophone} /> Podcasts
        </p>
        <p className="mb-4">
          <FontAwesomeIcon icon={faVideo} /> Videos
        </p>
        <p className="mb-4">
          <FontAwesomeIcon icon={faTags} /> Tags
        </p>
      </div>
      <div className="d-flex flex-column mt-5">
        <h5>My Tags</h5>
        <p className="mt-2">#javascript</p>
        <p className="mt-2">#reactjs</p>
        <p className="mt-2">#mongodb</p>
        <p className="mt-2">#node</p>
        <p className="mt-2">#graphql</p>
        <p className="mt-2">#webdevelopment</p>
      </div>
    </div>
  );
};

export default LeftsidePane;
