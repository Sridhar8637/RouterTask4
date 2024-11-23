import React from "react";

const Studdetails = () => {
  const objArr = [
    {
      id: 1,
      name: "sam",
      age: "23",
      TenthMark: 424,
      TwelveMark: 727,
    },
    {
      id: 2,
      name: "ram",
      age: "22",
      TenthMark: 424,
      TwelveMark: 727,
    },
    {
      id: 1,
      name: "som",
      age: "24",
      TenthMark: 454,
      TwelveMark: 787,
    },
  ];
  return (
    <div>
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
          {objArr.map((ob, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{ob.name}</td>
                <td>{ob.age}</td>
                <td>{ob.TenthMark}</td>
                <td>{ob.TwelveMark}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Studdetails;
