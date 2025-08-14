import { Button } from "../ui/button";

export default function WorldMap() {
  return (
    <div className="mt-24 pb-44">
        
        <div className="pb-12 text-center">
            <h1 className="text-primary font-semibold mb-6 text-5xl">Explore Properties on the Map</h1>
            <p className="montserrat-font text-lg text-[#656565]">Whether you're looking to buy or sell land, we have the right tools and <br />features for you.</p>
        </div>
        <img src="/worldFlat.png" alt="" />
        <div className="flex justify-center">
            <Button className="mt-16 rounded-none ">Open Map View</Button>
        </div>
    </div>
  )
}
