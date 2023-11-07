import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ListView = ({ openDetail }) => {
  const store = useSelector((store) => store);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = store?.flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % store?.flights.length;

    // const handlePos = (pos) => {
    //   console.log(pos);
    // };

    // navigator.geolocation.getCurrentPosition(handlePos);

    setItemOffset(newOffset);
  };
  return (
    <div className="list-page">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>Tail Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((fly, i) => (
              <tr key={i}>
                <td>{fly.id}</td>
                <td>{fly.code}</td>
                <td>{fly.lat}</td>
                <td>{fly.lang}</td>
                <td>
                  <button onClick={() => openDetail(fly.id)}>Detail</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </div>
  );
};

export default ListView;
