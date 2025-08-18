import globeBg from "../../assets/globeBg.png";
import { Button } from "../ui/button";

export default function Ready() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${globeBg})` }}
        className="bg-cover bg-center h-[400px] text-white flex flex-col justify-center gap-8 items-center"
      >
        <h1 className="font-bold text-5xl ">Ready to find your perfect property?</h1>
        <p className="w-[1015px] text-center mx-auto montserrat-font text-lg text-[#CACACA]">Join thousands of buyers and sellers on the world’s premier land marketplace and experience a smarter, more secure way to buy and sell land across the globe. Whether you're looking for a peaceful countryside plot, a strategic investment opportunity, or a space to build your dream home, our platform connects you with high-quality listings and trusted users worldwide.</p>
        <div className="flex gap-5 mt-5">
            <Button className="bg-[#1C3988] border-2 border-white  cursor-pointer">I'm a Buyer</Button>
            <Button className="bg-[#1C3988] border-2 border-white  cursor-pointer">I'm a Seller</Button>
        </div>
      </div>
    </div>
  );
}
