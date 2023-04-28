import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Registration(props) {
  console.log("::::>", props);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [userData, setUserData] = useState([]);
  const history = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(";;;;>", state);

  const handleSubmit = () => {
    let obj1 = {
      firstName: firstName,
      lastName: lastName,
      mobileNo: mobileNo,
    };
    // setUserData([...userData, obj1]);
    setFirstName("");
    setLastName("");
    setMobileNo("");
    dispatch({
      type: "INTIALIZED",
      payload: obj1,
    });
  };
  // const submit = () => {
  //   history.push({ pathname: "/details", state: userData });
  // };
  const viewDetails = () => {
    history.push({ pathname: "/details", state: userData });
  };
  return (
    <div className="">
      <div className="container">
        <h1 style={{ marginTop: "100px" }}>Registration Page</h1>
        <div className="field mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            FirstName:
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="field mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            FirstName:
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="field mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mobile No:
          </label>
          <input
            type="tel"
            className="form-control"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </div>
        <>
          <button onClick={() => handleSubmit()}>submit</button>
        </>
        <button onClick={() => viewDetails()}>view Details</button>
        {/* <Details userData={userData} /> */}
      </div>
    </div>
  );
}
export default Registration;
