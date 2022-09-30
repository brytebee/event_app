import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [locate, setLocate] = useState("");
  const [image, setImage] = useState([]);
  const [eName, setEName] = useState("");
  const [hName, setHName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      eName,
      hName,
      startDate,
      endDate,
      locate,
      image,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    window.history.pushState({}, "", "/event");
    window.location.reload();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <center className="top form-top">Add an Event</center>
        <br />
        <div>
          {/* Event name, Host name, Start and End time/date, Location and Event photo. */}
          <label htmlFor="eventName" className="form-label">
            Event Name
            <br />
            <input
              type="text"
              placeholder="Event Name"
              id="eventName"
              name="eventName"
              value={eName}
              onChange={(e) => setEName(e.target.value)}
              className="form-control"
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="hostName" className="form-label">
            Host Name
            <br />
            <input
              type="text"
              placeholder="Host Name"
              id="hostName"
              value={hName}
              onChange={(e) => setHName(e.target.value)}
              name="hostName"
              className="form-control"
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="startDate" className="form-label">
            <span>Start Date/Time</span>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />
          </label>
        </div>
        <div>
          <label htmlFor="endDate" className="form-label">
            <span>End Date/Time</span>

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              dateFormat="Pp"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="location" className="form-label">
            Location
            <select
              name="location"
              id="location"
              value={locate}
              onChange={(e) => setLocate(e.target.value)}
              required
            >
              <option defaultValue="">Select...</option>
              <option value="London">London</option>
              <option value="New York">New York</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Paris">Paris</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="location photo" className="form-label">
            Location Photo
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>
        <br />
        <center>
          <button className="land-btn" type="submit">
            Next
          </button>
        </center>
      </form>
    </div>
  );
};

export default Form;
