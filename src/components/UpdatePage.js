/* eslint-disable no-undef */
import React, { useState } from "react";
import axios from "axios";
import pic from "../img/movies.jpg";
import "../style/SignUpForm.css";
import "../style/MoviePage.css";

export default function UpdatePage() {
  // const [inputs, setInputs] = useState([]);
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((values) => ({ ...values, [name]: value }));
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:8888/api/movie/update.php", inputs)
  //     .then(function (response) {
  //       console.log(response.data);
  //     });
  // };

  return (
    <div>
      <div className="form-container rounded-t-2xl">
        <div className="form-content-right items-end rounded-l-md">
          <form
            className="form rounded-l-md space-y-11 p-2 items-end"
            noValidate
          >
            <h3 className=" py-4 px-5 font-sans font-semibold text-teal-800 shadow-2xl rounded-full bg-rose-200">
              Update Movie
            </h3>
            <div className=" grid grid-cols-2  text-black">
              <label className=" font-sans font-semibold text-teal-800 pr-8  ">
                Ttile
              </label>
              <input
                className=" font-sans  sm:w-32 lg:w-72 text-rose-900 placeholder:text-rose-900  h-10 rounded-2xl bg-cyan-300"
                type="text"
                name="title"
                placeholder=" Enter title"
              />
            </div>
            <div className=" font-sans grid grid-cols-2">
              <label className="font-sans font-semibold text-teal-800  pr-8">
                Year
              </label>
              <input
                className="font-sans sm:w-32 text-rose-900 placeholder:text-rose-900  lg:w-72 h-10 rounded-2xl bg-cyan-300 "
                type="text"
                name="year"
                placeholder=" Enter year"
              />
            </div>
            <div className="text-gray-900 grid grid-cols-2">
              <label className="font-sans font-semibold text-teal-800  ">
                Description
              </label>
              <textarea
                color="black"
                name="description"
                rows={1}
                className=" lg:w-72 sm:w-32 font-sans text-rose-900 placeholder:text-rose-900 rounded-2xl bg-cyan-300"
              ></textarea>
            </div>
            <div className="font-sans text-gray-900 grid grid-cols-2">
              <label className="font-sans  font-semibold text-teal-800 ">
                Img URL
              </label>
              <textarea
                color="black"
                name="poster"
                rows={1}
                className=" font-sans sm:w-32 lg:w-72 text-rose-900 placeholder:text-rose-900 rounded-2xl bg-cyan-300"
              ></textarea>
            </div>
            <div className="pl-40 pt-10">
              <button className="md:px-32 sm:px-11 bg-purple  text-gray-100 py-2 text-sm font-semibold font-sans transition bg-cyan-500 rounded-xl hover:bg-cyan-700 hover:text-white hover:shadow-sm hover:shadow-slate-400">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
