import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type Inputs = {
  location: string;
  property: string;
  country: string;
  minPrice: number;
  maxPrice: number;
  downPayment: boolean;
};
export default function PropertySearch() {
  const inputStyle: string =
    "bg-white h-[56px]  text-[#1C3988] placeholder-[#1C3988]/50 rounded-sm border border-[#1C3988] px-4";
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("location")); // watch input value by passing the name of it

  return (
    <div className="bg-[#E8EBF3] py-10 px-32">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-6 gap-8 "
      >
        <div className="col-span-2 relative">
          <input
          placeholder="Search of location"
          {...register("location")}
          className={`${inputStyle} w-full pl-14`}
        />
        <img src="/location.png" alt="" className="h-6 w-6 absolute top-4 left-5"/>
        </div>
        <input
          placeholder="Min Price"
          type="number"
          {...register("minPrice")}
          className={inputStyle}
        />
        <input
          placeholder="Max Price"
          type="number"
          {...register("maxPrice")}
          className={inputStyle}
        />

        <label
          htmlFor="myCheckbox"
          className="bg-white flex items-center justify-between px-4 cursor-pointer rounded-sm border border-[#1C3988]"
        >
          <h2 className="text-[#1C3988]/50">Down Payment</h2>
          <input
            id="myCheckbox"
            type="checkbox"
            {...register("downPayment")}
            className="cursor-pointer w-6 h-6"
          />
        </label>
        <button
          type="submit"
          className={`${inputStyle} !bg-[#1C3988] !text-white flex gap-2 justify-center items-center`}
        >
          <img src="/Search.png" alt="" className="w-7 h-7" />
          Search
        </button>

        <div className="relative inline-block  col-span-3 h-[56px]">
          {/* Custom Chevron on left */}
          <div
            className={`pointer-events-none absolute top-5 right-0 flex items-center pr-4  `}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>

          <select {...register("country")} className="block appearance-none h-full w-full bg-white border border-[#1C3988] text-[#1C3988]/50 py-2 pl-4 pr-4 rounded-md focus:outline-none ">
            <option value="">Select Country</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <option value="Brazil">Brazil</option>
            <option value="Spain">Spain</option>
            <option value="Australia">Australia</option>
            <option value="View All Countries">View All Countries</option>
          </select>
        </div>
        <div className="relative inline-block  col-span-3 h-[56px]">
          {/* Custom Chevron on left */}
          <div
            className={`pointer-events-none absolute top-5 right-0 flex items-center pr-4  `}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>

          <select {...register("property")} className="block appearance-none h-full w-full bg-white border border-[#1C3988] text-[#1C3988]/50 py-2 pl-4 pr-4 rounded-md focus:outline-none ">
            <option value="">Property Type</option>
            <option value="Farms 7 ranches">Farms 7 ranches</option>
            <option value="Recreational">Recreational</option>
            <option value="Residential lots">Residential lots</option>
            <option value="Commercial">Commercial</option>
            <option value="waterfront">waterfront</option>
          </select>
        </div>
        
      </form>
    </div>
  );
}
