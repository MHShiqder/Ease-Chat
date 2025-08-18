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
        <Button className="bg-[#E8EBF3] text-primary">United States</Button>
        <Button className="bg-[#E8EBF3] text-primary">Canada</Button>
        <Button className="bg-[#E8EBF3] text-primary">Mexico</Button>
        <Button className="bg-[#E8EBF3] text-primary">Brazil</Button>
        <Button className="bg-[#E8EBF3] text-primary">Spain</Button>
        <Button className="bg-[#E8EBF3] text-primary">Australia</Button>
        <Button className="bg-[#E8EBF3] text-primary">United kingdom</Button>
        <Button className="bg-[#E8EBF3] text-primary">France</Button>
        <Button className="bg-[#E8EBF3] text-primary">Germany</Button>
        <Button className="bg-[#E8EBF3] text-primary">Italy</Button>
        <Button className="bg-[#E8EBF3] text-primary">Japan</Button>
        <Button className="bg-[#E8EBF3] text-primary">South Africa</Button>
      </div>
    </div>
  );
}
