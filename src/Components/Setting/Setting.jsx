import React from 'react'
import DatePicker from 'react-date-picker';

const Setting = () => {
  const [value, onChange] = React.useState(new Date());
  return (
    <>
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Name</button>
        <input type="email" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Email</button>
        <input type="text" className="form-control" placeholder="name@example.com" aria-label="Example text with button addon" aria-describedby="button-addon1" />
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Color</button>
        <input type="color" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Dates</button>
        <DatePicker onChange={onChange} value={value} />
        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
      </div>
    </>
  )
}

export default Setting