export default function HouseArrows({ setHouseIndex, setCurrentImage }) {

  const handleClick = (num) => {
    setHouseIndex((previousState) => previousState + num)
    setCurrentImage(0);
  }
  
  return (
    <div className="house-arrows">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="next-house-arrow-left"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => handleClick(- 1)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="next-house-arrow-right"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => handleClick(1)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
 
    </div>
  );
}
