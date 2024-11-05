import React from "react";

function Payment() {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-md-8 mx-auto">
          <form className="card p-5">
            <h1 className="mb-5">Payment Form</h1>
            <label for="amount">Amount</label>
            <div className="mt-2 d-flex">
              <input
                type="text"
                className="form-control"
                name="amount"
                id="amount"
                placeholder="$0.00"
              />
              <button className="btn btn-primary w-25 justify-content-center ms-3 d-flex align-items-center">
                Pay now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="ms-2 mt-1"
                  width="15"
                  height="15"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
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
