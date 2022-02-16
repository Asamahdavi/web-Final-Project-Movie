/* eslint-disable no-undef */
import React, { useState } from "react";
import Modal from "react-modal";
//
import axios from "axios";
//import img for styling
import pic from "../img/movies.jpg";
//import css for styling
import "../style/SignUpForm.css";
//
Modal.setAppElement("#root");

export default function AddMovieModal() {
  const [inputs, setInputs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
//change handler to add and then set items to inputs
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  //connect create to backend 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8888/backend/api/movie/create.php", inputs)
      .then(function (response) {
        console.log(response.data);
        setIsOpen(false);
        window.location.reload();
      });
  };


//open toggle
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button
        className=" hover:bg-teal-500  w-40 h-10  shadow-2xl shadow-neutral-700 px-16 py-2 rounded-3xl bg-lightPurle  "
        onClick={toggleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          className=" text-teal-800 fill-current bg-center hover:object-center"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            backgroundColor: "white",
            position: "absolute",
            top: "100px",
            left: "195px",
            right: "195px",
            bottom: "100px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <button
          className="self-start transition rounded-full "
          onClick={toggleModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </button>

        <div className="grid grid-cols-2 ">
          <form
            className="flex flex-col p-9 space-y-4 sm:w-96"
            onSubmit={handleSubmit}
          >
            <h3 className=" py-4  font-sans text-gray-900 rounded-xl ">
              Add New Movie
            </h3>
            <div className=" grid grid-cols-2  text-black">
              <label className=" font-sans text-gray-900 pr-8  ">Ttile</label>
              <input
                className=" font-sans  sm:w-32 lg:w-72 text-white placeholder:text-white  h-10 rounded-2xl bg-red-400"
                type="text"
                name="title"
                placeholder=" Enter title"
                onChange={handleChange}
              />
            </div>
            <div className=" font-sans grid grid-cols-2">
              <label className="font-sans  text-gray-900 pr-8">Year</label>
              <input
                className="font-sans sm:w-32 text-white placeholder:text-white  lg:w-72 h-10 rounded-2xl bg-red-400 "
                type="text"
                name="year"
                placeholder=" Enter year"
                onChange={handleChange}
              />
            </div>
            <div className="text-gray-900 grid grid-cols-2">
              <label className="font-sans text-gray-900 ">Description</label>
              <textarea
                color="black"
                name="description"
                rows={1}
                className=" lg:w-72 sm:w-32 font-sans text-white rounded-2xl bg-red-400"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="font-sans text-gray-900 grid grid-cols-2">
              <label className="font-sans  text-gray-900">Img URL</label>
              <textarea
                color="black"
                name="poster"
                rows={1}
                className=" font-sans sm:w-32 lg:w-72 placeholder:text-white text-white rounded-2xl bg-red-400"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="pl-40 pt-10">
              <button className="px-32 sm:px-11 bg-purple  text-gray-100 py-2 text-sm font-semibold font-sans transition md:bg-red-500 rounded-xl hover:bg-rose-300 hover:text-red-900 hover:shadow-sm hover:shadow-slate-400">
                Add
              </button>
            </div>
          </form>
          <div className="items-center pl-44 pt-12">
            <img
              src={pic}
              style={{ backgroundPosition: "center" }}
              className="w-56 "
              alt=""
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
