const coinFormat = (number) => {
  const nums = number.toString().split(".");

  if (nums[1] === undefined) {
    return nums[0].replace(/(.)(?=(\d{3})+$)/g, "$1,");
  } else {
    return nums[0].replace(/(.)(?=(\d{3})+$)/g, "$1,") + "." + nums[1];
  }
};

export default coinFormat;
