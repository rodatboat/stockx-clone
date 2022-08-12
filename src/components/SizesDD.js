import "./SizesDD.css";

const SizesDD = () => {
  return (
    <>
      <div className="dropdown-component">
        <div className="dropdown-wrapper">
          <div className="dropdown-sizechart">
              <span>Select Size</span>
              <span>Size Chart</span>
          </div>
          <div className="dropdown-all">
            <button>
              <span>All</span>
              <span>$237</span>
            </button>
          </div>
          <div className="dropdown-sizes">
            <button>
              <span>US M 7</span>
              <span>$237</span>
            </button>
            <button>
              <span>US M 8</span>
              <span>$237</span>
            </button>
            <button>
              <span>US M 9</span>
              <span>$237</span>
            </button>
            <button>
              <span>US M 10</span>
              <span>$237</span>
            </button>
            <button>
              <span>US M 11</span>
              <span>$237</span>
            </button>
            <button>
              <span>US M 12</span>
              <span>$237</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SizesDD;
