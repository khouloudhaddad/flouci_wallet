import axios from "axios";
import React, { useState } from "react";

function Payment() {
  const [form, setForm] = useState({});
  const onchange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/payment", form)
      .then((res) => {
        const result = res.data.result 
        window.location.href = result.link
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-md-8 mx-auto">
          <form className="card p-5" onSubmit={onsubmit}>
            <h1 className="mb-5">Payment Form</h1>
            <label htmlFor="amount">Amount</label>
            <div className="mt-2 d-flex">
              <input
                type="text"
                className="form-control"
                name="amount"
                id="amount"
                placeholder="$0.00"
                onChange={onchange}
              />
              <button className="btn btn-primary w-25 justify-content-center ms-3 d-flex align-items-center">
                Pay now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ms-2 mt-1"
                  width="15"
                  height="15"
                >
                  <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
