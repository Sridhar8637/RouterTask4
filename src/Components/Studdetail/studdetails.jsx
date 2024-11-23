import React from "react";
import "./stud.css";

const Studdetails = (props) => {
  // const objArr = [
  //   {
  //     id: 1,
  //     name: "sam",
  //     age: "23",
  //     TenthMark: 424,
  //     TwelveMark: 727,
  //   },
  //   {
  //     id: 2,
  //     name: "ram",
  //     age: "22",
  //     TenthMark: 424,
  //     TwelveMark: 727,
  //   },
  //   {
  //     id: 1,
  //     name: "som",
  //     age: "24",
  //     TenthMark: 454,
  //     TwelveMark: 787,
  //   },
  // ];
  return (
    <div>
      <h1 id="studenttitle">Student Details</h1>
      {props.objArr.length < 1 ? (
        <p>There is no student details to view</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Age</th>
              <th>10th Mark</th>
              <th>12th Mark</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.objArr.map((ob, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{ob.name}</td>
                  <td>{ob.age}</td>
                  <td>{ob.TenthMark}</td>
                  <td>{ob.TwelveMark}</td>
                  <td>
                    <button className="tdbut">Edit</button>
                  </td>
                  <td>
                    <button className="tdbutdanger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Studdetails;



