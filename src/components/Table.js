import "./Table.css";

const Table = ({ tableData }) => {
  return (
    <div className="table-container">
      {!tableData && <p>Nothing currently selected</p>}
      {tableData && (
        <section className="data-grid">
          <h4 className="title">{tableData.name}</h4>
          <div className="table-img-and-info">
            <img
              className="table-image"
              src="https://media-cdn.tripadvisor.com/media/photo-s/02/5c/5f/dc/blackroot-bistro.jpg"
              alt={tableData.name}
            />
            <div className="table-type-and-place">
              <p className="type">
                <span className="bold">Type of Place: </span> {tableData.type}
              </p>
              <p className="rating">
                <span className="bold">Google Rating: </span>
                {tableData.googleRating}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Table;
