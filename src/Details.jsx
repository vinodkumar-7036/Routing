import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
function Details(props) {
  const userData = [props.location.state];
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("::::", state);
  // useEffect(()=>{
  //   dispatch(()=>
  //   )
  // })
  return (
    <>
      <div>Details Page</div>
      <div>
        {state && (
          <table style={{ marginTop: "100px" }} className="table-container">
            <thead>
              <tr>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">MobileNo</th>
              </tr>
            </thead>
            <tbody>
              {state.map((data) => (
                <tr>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.mobileNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default Details;
