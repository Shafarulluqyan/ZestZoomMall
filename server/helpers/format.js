// helpers/format.js

const formatPrice = (price) => {
  if (typeof price !== "number") {
    return price;
  }

  return `Rp. ${price.toLocaleString("id-ID")}`;
};

const capitalizeFirstLetter = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

module.exports = { formatPrice, capitalizeFirstLetter };
