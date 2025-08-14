import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <div className="bg-[url('/heroBanner.png')] bg-cover bg-center h-[700px] flex flex-col items-center justify-center gap-10">
      <h1 className="w-[985px] mx-auto text-center text-white font-bold text-7xl leading-snug">Find Land, Ranches, Farms & Recreational Properties Worldwide</h1>
      <div className="flex justify-center gap-10">
        <Button variant={"custom"}><Link to={"/"}>Buyer Profile</Link></Button>
        <Button variant={"custom2"}><Link to={"/"}>Sell Your Land</Link></Button>
      </div>
    </div>
  )
}
