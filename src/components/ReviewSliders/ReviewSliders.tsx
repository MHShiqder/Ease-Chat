import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

export default function ReviewSliders() {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const reviews = [
  {
    name: "Sumon",
    role: "Frontend Developer",
    text: "The AI recommendations have saved us countless hours of planning and helped us identify potential risks, improving our project delivery significantly.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Bijoy",
    role: "Buyer From USA",
    text: "GlobalLand made finding and purchasing my dream property simple and transparent, even from thousands of miles away, giving me complete peace of mind.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Alex",
    role: "Product Manager",
    text: "The buying process was seamless, clear, and highly recommended for anyone seeking a transparent, efficient, and trustworthy property experience.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sara",
    role: "Designer",
    text: "The process was smooth, with clear details and quick support. Using GlobalLand to buy property abroad was an excellent and highly satisfying experience.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "John",
    role: "Engineer",
    text: "I felt completely confident buying land abroad thanks to GlobalLand's transparent, reliable, and easy-to-follow process every step of the way.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Emma",
    role: "Architect",
    text: "GlobalLand provided an exceptionally smooth experience, guiding me through every detail of the purchase process and ensuring everything was clear.",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Liam",
    role: "Investor",
    text: "Investing through GlobalLand was straightforward and transparent. I appreciated the detailed guidance and quick support at every stage of the process.",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Olivia",
    role: "Entrepreneur",
    text: "From start to finish, GlobalLand made buying property abroad stress-free. The clarity, support, and professionalism were exceptional throughout.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Noah",
    role: "Business Analyst",
    text: "GlobalLand’s platform made international property investment seamless. Detailed listings and transparent communication ensured complete confidence.",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Ava",
    role: "Consultant",
    text: "I am impressed with GlobalLand’s transparent and efficient process. Every step was clear, and the support team was always quick to assist me.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];


  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      (swiperInstance.params.navigation as any).prevEl = prevRef.current;
      (swiperInstance.params.navigation as any).nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="pb-40 pt-40 px-32">
      <div className="pb-12 text-center">
        <h1 className="text-primary font-semibold mb-6 text-5xl">
          What Our Customers Say
        </h1>
        <p className="montserrat-font text-lg text-[#656565]">
          Hear from buyers and sellers who have successfully used GlobalLand to{" "}
          <br /> achieve their land ownership goals.
        </p>
      </div>
      <Swiper
        loop={true}
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        modules={[Navigation]}
        className="review-swiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {reviews.map((r, idx) => (
          <SwiperSlide key={idx} className="review-slide">
            <div className="bg-white rounded-xl p-6 h-72 my-16 text-center transition-transform duration-300 shadow-[0.97px_0.97px_2.71px_0_rgba(26,32,66,0.1)]">
              <img
                src={r.img}
                alt={r.name}
                className="w-20 h-20 rounded-full mx-auto -mt-16 "
              />
              <h3 className="mt-4 text-xl font-semibold text-primary">
                {r.name}
              </h3>
              <p className="text-gray-500 text-sm">{r.role}</p>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                "{r.text}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons UNDERNEATH the cards */}
      <div className="swiper-navigation-container">
        <button ref={prevRef} className="swiper-navigation-button">
          ‹‹
        </button>
        <button ref={nextRef} className="swiper-navigation-button">
          ››
        </button>
      </div>
    </div>
  );
}
