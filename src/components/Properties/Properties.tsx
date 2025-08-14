import { useEffect, useState } from "react";
import Card from "../Card/Card";

export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  acres: number;
  category: string;
  image: string;
  downPaymentAvailable: boolean;
  interested: {
    current: number;
    total: number;
  };
  description: string;
}
export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);
  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data: Property[]) => {
        console.log(data, "data fetched");
        setProperties(data);
      });
  }, []);

  return (
    <div className="bg-[#f9f5ed] p-32">
      <div className="flex mb-14 items-center justify-between">
        <div>
          <h1 className="text-5xl font-semibold text-primary mb-2">
            Featured Properties
          </h1>
          <p className="text-[#545454] montserrat-font">
            Discover our featured properties, carefully selected for their prime
            locations and exceptional value. Whether for <br /> recreation,
            investment, or building your dream home, these listings offer unique
            opportunities{" "}
          </p>
        </div>
        <div className="flex gap-4">
          <button className="w-[187px] h-14 bg-primary text-white rounded-md  font-medium">
            View all properties
          </button>
          <button className="w-[187px] h-14 bg-white text-primary rounded-md border border-[#B9C2DA] font-medium flex items-center justify-center gap-2">
            <img className="w-6 h-6" src="/location.png" alt="" />
            <span>View Map</span>
          </button>
          <button className="w-[187px] h-14 bg-white text-primary rounded-md border border-[#B9C2DA] font-medium">
            Featured
          </button>
          
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-9">
          {properties.map((property) => (
            <Card key={property.id} property={property}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}
