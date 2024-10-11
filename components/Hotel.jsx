import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <div className=" border-2 border-red-500 rounded-lg h-70 w-full mb-5 p-5">
      <div className="flex">
        <Image
          src={"data:image/jpeg;base64,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"}
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
          <h2 className="font-bold text-3xl line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, perspiciatis.</h2>
          <p className=" text-justify my-5 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, sapiente?</p>
          <div className=" text-2xl my-5">
            <span className=" font-bold">Facilities : </span>
            <span> wifi, food, washroom, ac</span>
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
              Price : 654654
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

export default Hotel;
