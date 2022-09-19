import Link from "next/link";

const CardRestaurant = ({ data }) => {
  return (
    <>
      <Link href={`/restaurants/${data.id}`}>
        <a>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={data.logo}
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-1 flex flex-col justify-between">
              <div className="flex-1">
                <a href="#" className="block mt-2">
                  <p className="text-center text-2xl font-semibold text-yellow-700">
                    {data.restaurant}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {data.slogants}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default CardRestaurant;
