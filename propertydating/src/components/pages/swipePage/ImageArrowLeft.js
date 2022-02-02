import React from "react";

export default function ImageArrowLeft({ setCurrentImage, currentImage }) {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImage((previousState) => previousState - 1);
  };

  return (
    <>
      {currentImage > 0 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="image-arrow-left"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleClick}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : null}
    </>
  );
}
