import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Success() {
  const [searchParams] = useSearchParams();
  const [output, setOutput] = useState("");
  useEffect(() => {
    axios
      .get(`/api/payment/${searchParams.get("payment_id")}`)
      .then((res) => {
        setOutput(res.data.result.status);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <React.Fragment>
      {output === "SUCCESS" && (
        <div className="p-4">
          <div role="alert" className="alert alert-success">
            <span>Payment success.</span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Success;
