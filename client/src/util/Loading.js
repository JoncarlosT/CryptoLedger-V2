import React from "react";
import Loader from "react-loader-spinner";

const Loading = ({ height, width }) => {
  return (
    <Loader type="ThreeDots" color="#17b978" height={height} width={width} />
  );
};

export default Loading;
