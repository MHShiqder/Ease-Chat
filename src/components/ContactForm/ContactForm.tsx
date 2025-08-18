export default function ContactForm() {
  return (
    <div className="mx-32 mt-52 ">
        <div className="bg-[#f7f6f0] py-12 flex justify-center">
      <div className="bg-white w-full py-20 px-32 rounded-lg shadow-md flex flex-col md:flex-row gap-20">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-5xl font-semibold text-primary">
            Get In Touch
          </h2>
          <p className="text-[#788293] montserrat-font text-lg">
            For property inquiries please contact the seller directly by using
            the contact seller section on each listing. We do not own the
            properties or have any additional information.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-10 mt-12">
            <div className="flex items-center gap-4">
              <img src="/email.png" alt="" className=""/>
              <div>
                <p className="text-2xl font-medium text-[#1C3988]">Email Us</p>
                <p className="text-sm text-gray-400 montserrat-font">
                  Info@Aiprojectmanager.Com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src="/phone.png" alt="" className=""/>
              <div>
                <p className="text-2xl font-medium text-[#1C3988]">Call Us</p>
                <p className="text-sm text-gray-400 montserrat-font">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src="/pin.png" alt="" className=""/>
              <div>
                <p className="text-2xl font-medium text-[#1C3988]">
                  Location Us
                </p>
                <p className="text-sm text-gray-400 montserrat-font">Dhanmondi, Dhaka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <label className="text-gray-700 text-2xl font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1C3988] montserrat-font"
          />

          <label className="text-gray-700 text-2xl font-medium">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1C3988] montserrat-font"
          />

          <label className="text-gray-700 text-2xl font-medium">Number</label>
          <input
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1C3988] montserrat-font"
          />

          <label className="text-gray-700 text-2xl font-medium">Message</label>
          <textarea
            placeholder="Write Your Message Here"
            rows={4}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1C3988] montserrat-font"
          ></textarea>

          <button className="bg-primary text-white py-3 rounded-md mt-4 w-32 hover:bg-[#16307a] transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
