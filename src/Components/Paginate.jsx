import { useEffect, useState } from "react";

const Paginate = () => {
  const [size, setSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  // setting total items
  useEffect(() => {
    fetch("http://localhost:5000/productcount")
      .then((res) => res.json())
      .then((data) => setTotalItems(data.count));
  }, []);

  // paginate items
  useEffect(() => {
    fetch(
      `http://localhost:5000/productbypaginate?page=${currentPage}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [currentPage, size]);

  const pageNumbers = Math.ceil(totalItems / size);
  const pages = [...Array(pageNumbers).keys()];

  function handleSize(e) {
    setSize(e.target.value);
    setCurrentPage(0);
  }

  function handlePrev() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="text-center space-x-2">
      <button onClick={handlePrev} className="btn btn-sm px-3">
        Previous
      </button>
      {pages.map((page) => (
        <button
          onClick={() => setCurrentPage(page)}
          key={page}
          className={`btn btn-sm ${
            currentPage === page ? "bg-orange-600" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNext} className="btn btn-sm px-3">
        Next
      </button>

      <select
        onChange={handleSize}
        defaultValue={size}
        className="select select-bordered select-sm"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default Paginate;
