import { useEffect, useState } from "react"
import PriceCard from "../PriceCard/PriceCard"

export interface Prices{
   
    plan: string,
    description: string,
    price: number,
    billing_period: string,
    note?:string,
    features: string[],
    not_included?: string[]
}

export default function Pricing() {

    const [prices,setPrices]=useState<Prices[]>([])


    useEffect(()=>{
        fetch('/price.json')
        .then(res=>res.json())
        .then((data:Prices[])=>{
            console.log(data,"Prices fetched")
            setPrices(data);
        })
    },[])
  return (
    <div className="px-32 pb-32">
        
        <div className="py-20 text-center">
            <h1 className="text-primary font-semibold text-5xl mb-5">Seller Pricing</h1>
            <p className="text-lg montserrat-font text-[#656565]">Choose the plan that works best for your need</p>
        </div>
        <div className="grid grid-cols-3 gap-24">
            {prices.map((price,idx)=><PriceCard key={idx} price={price}></PriceCard>)}
        </div>
    </div>
  )
}
