import { useState } from "react";
import DatePicker from "react-datepicker";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <>
      <div className="col-sm-6">
        <label htmlFor="dateSelect" className="form-label fs-5 p-3">
          Please select your pickup date:
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          id="dateSelect"
          className="fs-5"
        />
      </div>

      <div className="col-sm-6">
        <label htmlFor="timeSelect" className="form-label fs-5 p-3">
          Please select your pickup time:
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          id="timeSelect"
          className="fs-5"
        />
      </div>
    </>
  );
};

export default DatePickerComponent;
