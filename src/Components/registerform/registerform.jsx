import React, { useState } from "react";
import "./registerform.css";
import { useDispatch } from "react-redux";
// import Studdetails from "../Studdetail/studdetails";
import {addStudent} from '../redux/slice.jsx'


const Registerform = () => {

  //value
  let [name, setName] = useState('');
  let [age, setAge] = useState('');
  let [tenMark, setTenMark] = useState('');
  let [twelveMark, setTwelveMark] = useState('');

  //validation
  let [check, setCheck] = useState(false);
  let [namecheck, setNameCheck] = useState(false);
  let [agecheck, setAgeCheck] = useState(false);
  let [tencheck, settenCheck] = useState(false);
  let [twelvecheck, setTwelveCheck] = useState(false);
  let [id, setId] = useState(1);

  //object
  //let [Objarr, setObjarr] = useState([]);

  let dispatch = useDispatch();

  //input value
  const ChangeHandler = (e) => {
    setCheck(false);
    if (e.target.name === 'inname')
    {
      setNameCheck(false);
      setName(e.target.value);
    }
    else if (e.target.name === 'inage')
    {
      setAgeCheck(false);
      setAge(e.target.value);
    }
    else if (e.target.name === 'in10th')
    {
      settenCheck(false);
      setTenMark(e.target.value);
    }
    else if (e.target.name === 'in12th')
    {
      setTwelveCheck(false)
      setTwelveMark(e.target.value);
    }
  }
  //input value end

  //form submission 
  const SubmitHandler = (e) => {
    e.preventDefault();
    // console.log('clicked');

    //validation
    if (name === '' && age === '' && tenMark === '' && twelveMark === '') {
      setCheck(true);
    }
    else {
      if (name === '') {
        setNameCheck(true);
      }
      if (age === '') {
        setAgeCheck(true);
      }
      if (tenMark === '')
      {
        settenCheck(true);
      }
      if (twelveMark === '')
      {
        setTwelveCheck(true);
      }
    }
    //validation end
    
    let obj = {
      id:id,
      name: name,
      age: age,
      TenthMark: tenMark,
      TwelveMark: twelveMark
    }

    // console.log(obj);

    dispatch(addStudent(obj));

    //increasing the id after everyobj 
    setId(id + 1)

    //resetting the field empty
    setName('');
    setAge('');
    setTenMark('');
    setTwelveMark('');
  }

  //form submission end

  return (
    <div id="homediv">
      <div id="regformdiv">
        <h2 id="regtitle">Register Form</h2>
        <form id="regForm" onSubmit={SubmitHandler}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="regInput"
            name='inname'
            onChange={ChangeHandler}
            value={name}
          />
          {(check || namecheck )?<p className="errormsg">*Enter the Student name</p>:''}
          <input
            type="number"
            placeholder="Enter Your Age"
            className="regInput"
            name='inage'
            onChange={ChangeHandler}
            value={age}
          />
          {(check || agecheck)?<p className="errormsg">*Enter the Student age</p>:''}
          <input
            type="text"
            placeholder="Enter Your 10th Mark"
            className="regInput"
            name='in10th'
            onChange={ChangeHandler}
            value={tenMark}
          />
          {(check || tencheck )?<p className="errormsg">*Enter the Student 10th mark</p>:''}
          <input
            type="text"
            placeholder="Enter Your 12th Mark"
            className="regInput"
            name='in12th'
            onChange={ChangeHandler}
            value={twelveMark}
          />
          {(check || twelvecheck )?<p className="errormsg">*Enter the Student 12th mark</p>:''}
          <button id="regSubmit">Submit</button>
        </form>
      </div>
      {/* <Studdetails /> */}
    </div>
  );
};

export default Registerform;


