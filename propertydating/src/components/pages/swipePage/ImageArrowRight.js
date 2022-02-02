import React from "react";

export default function ImageArrowRight({
  setCurrentImage,
  currentImage,
  numOfImages,
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImage((previousState) => previousState + 1);
  };

  return (
    <>
      {currentImage < numOfImages ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="image-arrow-right"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleClick}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      ) : null}
    </>
  );
}
