import "./App.css";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Stockholm",
    temperature: 5,
    date: "Sunday 12:00",
    description: "Sunshine",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 87,
    wind: 5
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      </div>
  );
}

