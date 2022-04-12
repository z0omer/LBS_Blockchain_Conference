export const Location = (props) => {
  return (
    <div id="location">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/location.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>London Business School</h2>
              <h3>Regent's Park, London NW1 4SA</h3>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
