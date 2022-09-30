import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [select, setSelect] = useState("");
  const [image, setImage] = useState([]);
  const handleSubmit = () => {
    console.log();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Event name, Host name, Start and End time/date, Location and Event photo. */}
          <label htmlFor="eventName" className="form-label">
            <span>Event Name</span>
            <input
              type="text"
              placeholder="Event Name"
              id="eventName"
              name="eventName"
              className="form-control"
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="hostName" className="form-label">
            <span>Host Name</span>
            <input
              type="text"
              placeholder="Host Name"
              id="hostName"
              name="hostName"
              className="form-control"
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="hostName" className="form-label">
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
          <label htmlFor="hostName" className="form-label">
            <span>End Date/Time</span>

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />
          </label>
        </div>
        <div>
          <label htmlFor="hostName" className="form-label">
            <span>Location</span>
            <select
              name="role"
              id="role"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
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
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button type="button" className="upload-btn">
            Upload Image
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
