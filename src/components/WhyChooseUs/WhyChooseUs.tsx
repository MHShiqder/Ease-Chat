import { FaGlobe, FaDollarSign, FaCalculator, FaUsers } from "react-icons/fa"; // example icons

const features = [
  {
    title: "Global Reach",
    description:
      "Browse and list properties from around the world with country-specific categories and multi-language support.",
    icon: <FaGlobe className="text-white w-12 h-12" />,
  },
  {
    title: "Down Payment Options",
    description:
      "Browse and list properties from around the world with country-specific categories and multi-language support.",
    icon: <FaDollarSign className="text-white w-12 h-12" />,
  },
  {
    title: "Construction Calculator",
    description:
      "Browse and list properties from around the world with country-specific categories and multi-language support.",
    icon: <FaCalculator className="text-white w-12 h-12" />,
  },
  {
    title: "Seller Subscriptions",
    description:
      "Browse and list properties from around the world with country-specific categories and multi-language support.",
    icon: <FaUsers className="text-white w-12 h-12" />,
  },
];
export default function WhyChooseUs() {
  return (
    <section className="bg-background py-16">
      <div className=" mx-auto  px-32 flex flex-col lg:flex-row items-center gap-20">
        {/* Left side: text & features */}
        <div className="flex-1">
          <h2 className="text-5xl font-semibold mb-4 text-primary">
            Why Choose You safehand
          </h2>
          <p className="text-gray-600 mb-10 montserrat-font text-lg">
            The premier global marketplace for buying and selling land with
            innovative features designed for both buyers and sellers.
          </p>

          <div className="flex flex-col gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="bg-primary  p-5 rounded-md flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-primary font-medium text-2xl mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg montserrat-font">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: image */}
        <div className="w-[910px]">
          <img
            src='/world.png'
            alt="Why Choose Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );

}
