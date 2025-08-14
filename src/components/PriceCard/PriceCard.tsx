import type { Prices } from "../Pricing/Pricing";

interface PriceProp {
  price: Prices;
}
export default function PriceCard({ price }: PriceProp) {
  return (
    <div className="text-primary  pt-9 bg-white rounded-lg shadow-[0px_5.13px_5.13px_0px_rgba(0,0,0,0.25)]">
      <div className="pl-7 relative">
        <h1 className="text-primary font-semibold text-5xl mb-3">{price.plan}</h1>
        <p className="montserrat-font  text-lg">{price.description}</p>

            
                <img src="/shade.png" alt="" className="absolute top-32 -left-16 " />
                <h1 className="text-white absolute top-40 left-7 font-bold text-7xl">${price.price}<span className="text-2xl">/month</span></h1>
            

        <div className="mt-52 mb-36">
          {price.features.map((feature, idx) => (
            <div key={idx} className="flex mb-5 items-center gap-3">
              <img src="/check.png" alt="" className="h-5 w-5" />
              <p className="text-lg font-semibold montserrat-font">{feature}</p>
            </div>
          ))}
          {price.not_included?.map((feature, idx) => (
            <div key={idx} className="flex mb-5 items-center gap-3">
              <img src="/cross.png" alt="" className="h-5 w-5" />
              <p className="text-lg font-semibold montserrat-font">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-16 rounded-b-lg overflow-hidden">
        <button className="w-full h-full bg-primary cursor-pointer text-white font-semibold text-2xl">
          Get Started
        </button>
      </div>
    </div>
  );
}
