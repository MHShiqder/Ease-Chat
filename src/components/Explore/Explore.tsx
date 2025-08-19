import { Button } from "../ui/button";

export default function Explore() {
  return (
    <div className="flex flex-col items-center justify-center py-52 px-40">
      <h1 className="font-bold text-5xl text-primary mb-8">
        Explore Properties by Country
      </h1>
      <p className="w-[1015px] text-center mx-auto montserrat-font text-lg text-[#5E5A5A]">
        Join thousands of buyers and sellers on the world’s premier land
        marketplace and experience a smarter, more secure way to buy and sell
        land across the globe. Whether you're looking for a peaceful countryside
        plot, a strategic investment opportunity, or a space to build your dream
        home, our platform connects you with high-quality listings and trusted
        users worldwide.
      </p>
      <div className="grid grid-cols-6 w-full gap-6 mt-12">
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">United States</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">Canada</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">Mexico</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">Brazil</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">Spain</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">Australia</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">United kingdom</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">France</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">Germany</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">Italy</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">Japan</Button>
        <Button className="bg-[#E8EBF3] text-primary hover:text-white">South Africa</Button>
      </div>
    </div>
  );
}
