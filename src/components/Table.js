const Table = ({ tableData }) => {
  return (
    <div className="table-container">
      {!tableData && <p>Nothing currently selected</p>}
      {tableData && (
        <section className="data-grid">
          <h4 className="title">{tableData.name}</h4>
          <img
            className="table-image"
            src={tableData.imgURL}
            alt={tableData.name}
          />
          <p className="type">Type of place: {tableData.type}</p>
          <p className="rating">Google rating: {tableData.googleRating}</p>
        </section>
      )}
    </div>
  );
};

export default Table;
