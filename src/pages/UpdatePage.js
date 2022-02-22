/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
//useprams for access the parameters of the current route useNavigate is replaced of useHistory (The useHistory hook allows us to access React Router's history object)
import { useNavigate, useParams } from "react-router-dom";
//axios for connecting to the back
import axios from "axios";
//imported styles
import "../style/Form.css";
import "../style/MoviePage.css";


export default function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title:"",year:"",description:"",poster:"",id
  });

  useEffect(() => {
    getMovie();
  }, []);
  //connect get movie by id from backend 
  function getMovie() {
    axios.get(`http://localhost:8888/backend/api/movie/read_by_id.php?id=${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  //connect update backend
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8888/backend/api/movie/update.php`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };

  return (
    <div>
      <div className="coreDiv py-11  px-40 md:px-64 ">
        <div className="firstDiv items-center  rounded-3xl py-5 pl-52 lg:pl-4 sm:pl-0 pr-0  space-x-9 space-y-12 bg-rose-200 ">
         
            <h3 className=" py-4 px-5 font-sans font-semibold text-teal-100 shadow-2xl w-40 rounded-full bg-rose-500">
              Update Movie
            </h3>
            <div className=" grid grid-cols-2  text-black">
              <label className=" font-sans font-semibold text-teal-800 pr-8  ">
                Ttile :
              </label>
              <input
                className="lg:w-52 font-sans  sm:w-32 xl:w-72 text-rose-200 placeholder:text-rose-200  h-10 rounded-xl bg-cyan-800"
                type="text"
                name="title"
                placeholder=" Enter title"
                value={inputs.title}
                onChange={handleChange}
              />
            </div>
            <div className=" font-sans grid grid-cols-2">
              <label className="font-sans font-semibold text-teal-800  pr-8">
                Year :
              </label>
              <input
                className=" lg:w-52 xl:w-72 font-sans  sm:w-32  text-rose-200 placeholder:text-rose-200   h-10 rounded-xl bg-cyan-800 "
                type="text"
                name="year"
                placeholder=" Enter year"
                onChange={handleChange}
                value={inputs.year}
              />
            </div>
            <div className="text-gray-900 grid grid-cols-2">
              <label className="font-sans font-semibold text-teal-800  ">
                Description :
              </label>
              <textarea
                color="black"
                name="description"
                rows={3}
                className=" lg:w-52 xl:w-72 sm:w-32 font-sans text-rose-200 placeholder:text-rose-200 rounded-xl bg-cyan-800"
                onChange={handleChange}
                value={inputs.description}
              ></textarea>
            </div>
            <div className="font-sans text-gray-900 grid grid-cols-2">
              <label className="font-sans  font-semibold text-teal-800 ">
                Img URL :
              </label>
              <textarea
                color="black"
                name="poster"
                rows={3}
                onChange={handleChange}
                value={inputs.poster}
                className=" font-sans xl:w-72 lg:w-52 sm:w-32  text-rose-200 placeholder:text-rose-200 rounded-xl bg-cyan-800"
              ></textarea>
            </div>
            <div className="pl-40 pt-10">
              <button onClick={handleSubmit} className="md:px-8 xl:px-32  sm:px-11 bg-purple  text-cyan-100 py-2 text-sm font-semibold font-sans transition bg-rose-500 rounded-xl hover:bg-cyan-700 hover:text-white hover:shadow-sm hover:shadow-slate-400">
                Update
              </button>
            </div>
         
        </div>
      </div>
    </div>
  );
}
