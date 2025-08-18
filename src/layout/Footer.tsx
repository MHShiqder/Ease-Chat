export default function Footer() {
  return (
    <div>
      <footer className="footer sm:footer-horizontal   p-10 px-32 montserrat-font bg-[#000C2D] text-white gap-44">
        <aside className="flex flex-col w-[430px] items-center justify-center">
          <img src="/logo.png" alt="" className="w-40"/>
          <p className="">
            The premier global marketplace for buying and selling land properties worldwide.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title ">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe To our land news Email</h6>
          <fieldset className="w-80">
            <div className="join ">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item bg-transparent border-white border border-r-0"
              />
              <button className="btn btn-primary bg-[#1C3988] border-white border border-l-0 join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}
