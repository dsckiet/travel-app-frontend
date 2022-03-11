function Footer() {
  return (
    <div className="flex flex-wrap justify-between md:px-32 px-10 mt-16 bg-lightgreen font-body text-green py-6">
      <div className="w-68">
        <h2 className="fi:text-xl font-heading mb-4">TravelEzy</h2>
        <p className="font-semibold">
          We created a seamless experience for you to help you discover and
          explore this world better.
        </p>
      </div>
      <div className="md:mt-0 mt-5">
        <h2 className="mb-4 font-semibold">About Us</h2>
        <ul>
          <li className="mb-2">What do we do?</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="">
        <h2 className="mb-4 font-semibold md:mt-0 mt-5">Legal Stuff</h2>
        <ul>
          <li className="mb-2">Privacy policy</li>
          <li>Terms & conditions</li>
        </ul>
      </div>
      <div className="">
        <div className="flex flex-wrap text-sm md:mt-0 mt-5">
          {" "}
          <div className="md:mt-2 mt-5">Subscribe to our newsletter</div>{" "}
          <button className="text-white bg-green ml-3  md:h-9 h-8 md:mt-0 mt-2 px-2 rounded-md">
            <img src="next.svg" alt="next" />
          </button>
        </div>
        <input
          className="py-1 mt-2 rounded-sm w-60"
          type="text"
          placeholder="  yourmail@xyz.com"
        />
        <div className="flex justify-center mt-2">
          <img src="twitter.svg" className="w-9 mt-2" alt="twitter" />
          <img
            src="facebook icon.svg"
            className="w-9 mt-2 ml-8"
            alt="facebook"
          />
          <img src="googleplus.svg" className="w-9 mt-2 ml-8" alt="Gmail" />
          <img src="youtube.svg" className="w-9 mt-2 ml-8" alt="Youtube" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
