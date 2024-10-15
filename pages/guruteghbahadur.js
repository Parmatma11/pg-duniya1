import Image from "next/image";
import Link from "next/link";


const guruteghbahadur = ({ e, city }) => {
  
  return (
    <div className=" border-2 border-red-500 rounded-lg h-70 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={"/h22.jpeg"}
          alt="hotel"
          width={200}
          height={200}
          className=" w-96 h-60 mr-3"
        />
        <div className="flex flex-col justify-between">
          {e
            ? e.gallery?.map((ele) => {
                return (
                  <Image
                    key={ele}
                    src={ele}
                    alt="hotel"
                    width={200}
                    height={200}
                    className=" w-28 h-16 object-cover  "
                  />
                );
              })
            : ""}
        </div>
        <div className=" ml-20">
          <h2 className="font-bold text-3xl line-clamp-1">Malhotra PG</h2>
          <p className=" text-justify my-5 text-lg">Best PG in Hari Nagar for students and professionals</p>
          <div className=" text-2xl my-5">
            <span className=" font-bold">Facilities : </span>
            <span> Wifi, 3 Time Food, Washroom, AC, Geyser, Metro Station Nearby, Bus Facility</span>
            <ul className=" flex">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className=" mr-10 mb-3 flex items-center"
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={200}
                            height={200}
                            className="w-8 h-8 rounded-full"
                          />
                        </span>
                        <span className="ml-5">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className=" flex items-center">
            <button className=" w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price : 8000 for double
            </button>
            <Link
              href={`/hotels/2`}
              className="text-xl font-bold text-red-600 ml-10"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default guruteghbahadur;