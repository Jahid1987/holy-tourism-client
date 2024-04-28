import { useEffect, useState } from "react";
import useAuth from "../CustomHooks/useAuth";
import footerImg from "../assets/images/footer_bg.png";
const MyList = () => {
  const [myList, setMyList] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://holy-tourism-server.vercel.app/lists/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyList(data));
  }, []);
  return (
    <div>
      {/* section title  */}
      <div
        className="py-4"
        style={{
          backgroundColor: "white",
          background: `url(${footerImg}) -0.019px -41.058px / 154.946% 129.339% no-repeat`,
        }}
      >
        <div className=" w-full md:w-2/3 lg:w-1/3 mx-auto text-center my-5 md:my-10">
          <h3 className="text-[#DF6951] text-base lg:text-lg">MY LIST</h3>
          <h2 className="text-2xl md:text-4xl text-[#181E4B] font-bold">
            {myList.length} Spots Added By {user?.displayName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MyList;
