import reviewImg from "../assets/images/reviw_bg.png";
import reviwerImg from "../assets/images/review_person.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Review = () => {
  return (
    <div
      className=" max-w-[1728px] px-2 py-5 md:py-10 mx-auto"
      style={{
        background: `url(${reviewImg}) lightgray 0px 0px / 100% 234.375% no-repeat`,
      }}
    >
      {/* section title  */}
      <div className=" w-full md:w-2/3 lg:w-2/4 mx-auto text-center pt-32  md:pt-40 lg:pt-44">
        <h3 className="text-[#DF6951] text-lg">PROMOTION</h3>
        <h2 className="text-3xl md:text-4xl text-[#181E4B] font-bold">
          See What Our Clients Say About Us
        </h2>
      </div>
      {/* reviws  */}
      <div className="relative shadow-lg text-sm max-w-[540px] text-center mx-auto p-8 md:p-12 bg-[#FFFFFF] rounded-lg mt-10">
        <img
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -160%)",
          }}
          className="absolute h-[90px] w-[90px]"
          src={reviwerImg}
          alt=""
        />
        <div className="px-5 mt-4">
          <p>
            Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam
            et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt
            provident quo possimus impedit vel doloremque obcaecati qui ullam
            consectetur et ipsum omnis.
          </p>
          <p className="font-bold">Christine Beckam - Designer</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="absolute w-full"
        >
          <div className="flex justify-between">
            <span className="bg-slate-200 p-3 rounded-full">
              <IoIosArrowBack className="text-xl text-[#DF6951]" />
            </span>
            <span className="bg-slate-200 p-3 rounded-full">
              <IoIosArrowForward className="text-xl text-[#DF6951]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
