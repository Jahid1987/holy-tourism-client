import { useEffect, useState } from "react";
import useAuth from "../CustomHooks/useAuth";
import footerImg from "../assets/images/footer_bg.png";
import { FaRegEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { CiLocationOn } from "react-icons/ci";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";
const MyList = () => {
  const [myList, setMyList] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://holy-tourism-server.vercel.app/lists/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyList(data);
      });
  }, []);

  function handleDelete(id) {
    Swal.fire({
      title: "Do You Want to Delete?",
      text: "You won't be able to get this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete it Anyway!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const filteredSpots = myList.filter((item) => item._id !== id);
              setMyList(filteredSpots);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  }
  return (
    <div className="max-w-[1320px] mx-auto">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {myList.map((item) => (
          <div className="flex gap-3 bg-slate-50 rounded-lg" key={item._id}>
            <div className="h-auto w-32 rounded-lg">
              <img
                className="object-cover w-full h-full rounded-l-lg"
                src={item.image}
                alt=""
              />
            </div>
            <div className=" flex justify-between w-full px-2">
              {/* details  */}
              <div>
                <h2 className="font-bold text-lg">{item.tourist_spot_name}</h2>
                <p className="text-gray-400 flex gap-1 items-center">
                  {" "}
                  <CiLocationOn /> {item.location}
                </p>
                <p className="text-gray-600 flex gap-1 items-center">
                  {item.country_name}
                </p>
                <p className="text-gray-600 flex gap-1 items-center">
                  <FaBangladeshiTakaSign className="text-sm" />
                  {item.average_cost}
                </p>
                <Rating
                  style={{ maxWidth: 100, height: "24px" }}
                  value={item?.default_rating}
                  transition="zoom"
                />
              </div>
              {/* actions  */}
              <div className="flex gap-2 flex-col py-2">
                <Link to={`/spot/${item._id}`}>
                  <button className="btn btn-sm text-white bg-[#D2B48C] btn-square">
                    <FaRegEye />
                  </button>
                </Link>
                <Link to={`/update/${item._id}`}>
                  <button className="btn btn-sm text-white bg-[#3C393B] btn-square">
                    <FaPen />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-sm text-white bg-[#EA4744] btn-square"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
