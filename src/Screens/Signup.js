import React from "react";
import Navbar from "../Components/Navbar";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Signup() {
  useEffect(() => {
    console.log("hi");

    const fetchApi = async () => {
      const url = `https://5d9c-2409-4053-2c88-f90f-a9d4-8d62-2634-5f8d.ngrok.io/accounts/register/`;
      const response = await fetch(url);

      const resJson = await response.json();

      console.log(resJson);
    };

    fetchApi();
  }, []);

  return (
    <div
      className="container-fluid lg:h-screen h-full text-black font-body"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <Navbar />
      <div className="flex justify-center flex-wrap">
        <div></div>
        <div className="bg-black text-white pr-11 opacity-80 rounded-xl  mt-36 md:mt-28 mx-3 bg-black text-white pr-11 md:h-100 opacity-80 rounded-xl  mt-36 md:mt-28 md:mx-0 mx-3 pb-5">
          <div className="w-52 font-body mt-6 ml-10 text-lg">Get Started.</div>
          <div className="ml-10">
            Already have an account?
            <Link to="/signin">
              <span className="text-green"> Log in.</span>
            </Link>
          </div>
          {/* <GoogleButton style={{width: '12rem', padding: "1rem"}} /> */}
          <div className="flex">
            <button className="border-2 text-black mt-4 ml-10 px-2 py-1 rounded-md bg-white w-42 flex">
              <FcGoogle size={30} className="-ml-1" />
              <span className="ml-1 mt-1 pt-0.5 text-xs">
                Continue with Google
              </span>
            </button>
            <button className=" mt-4 ml-2 p-2 rounded-md px-2 py-1 bg-blue flex h-14 md:h-10">
              <ImFacebook2 size={30} className=" -ml-0.5" />
              <span className="ml-2 mt-2 text-xs">Continue with Facebook</span>
            </button>
          </div>
          <div className=" ml-10 mt-6 mb-4">Email Address</div>
          <div className=" ml-10">
            <input className="bg-transparent border-b-2 w-72 md:w-96" />
          </div>
          <div className="ml-10 mt-4 mb-4">Password</div>
          <div className=" ml-10">
            <input className="bg-transparent border-b-2 w-72 md:w-96" />
          </div>
          <div className="ml-10 mt-4 mb-4">Confirm Password</div>
          <div className=" ml-10">
            <input className="bg-transparent border-b-2 w-72 md:w-96" />
          </div>
          <div className="mt-3 ml-10">
            <input type="checkbox" /> I agree to{" "}
            <span className="text-green">terms</span> &{" "}
            <span className="text-green">conditions.</span>
          </div>
          <Link to="/home">
            <button className="rounded-md text-center ml-10 p-2 border-darkgrey mt-6 bg-green md:w-96">
              Sign Up
            </button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Signup;
