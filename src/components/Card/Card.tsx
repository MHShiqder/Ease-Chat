import type { Property } from "../Properties/Properties";
import { Button } from "../ui/button";

interface CardProps {
  property: Property;
}

export default function Card({ property }: CardProps) {
  return (
    <div>
      <div className="card bg-base-100 ">
        <div className="relative ">
          <figure>
            <img src={property.image} alt="Shoes" />
          </figure>
          <Button className="absolute top-4 left-4">Recreational</Button>
          <div className="bg-white rounded-md p-2 absolute top-4 right-4">
            <img src="/heart.png" alt="" className="w-8 h-8" />
          </div>
        </div>
        <div className="p-5">
          <div className="space-y-2">
            <h2 className="card-title font-medium text-2xl text-primary">
              {property.title}
            </h2>
            <div className="flex gap-1">
              <img src="/location.png" className="w-5 h-5" alt="" />
              <p className="text-[#797979] text-sm">{property.location}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-primary font-semibold text-xl">
                <span>$</span>
                {property.price}
              </p>
              <p className="font-medium text-lg text-[#8D8D8D]">
                {property.acres} Acres
              </p>
            </div>
            <div className="flex justify-between h-10">
              <div>
                {property.downPaymentAvailable && (
                  <button className="text-primary  border-[2px] rounded-2xl border-primary px-3 py-1 font-medium montserrat-font">
                    Down Payment Available
                  </button>
                )}
              </div>
              <div className=" flex  gap-2">
                {property.interested.current > 0 && (
                  <>
                    <img src="/Black.png" alt="" className="w-7 h-7" />
                    <p className="text-[#8D8D8D] ">
                      <span>{property.interested.current}</span>/
                      <span>{property.interested.total}</span> interested
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <p className="montserrat-font text-sm mt-4 text-[#8B8B8B]">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions ">
            <button className="montserrat-font w-full py-4 bg-primary text-white mt-10 rounded-md font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
