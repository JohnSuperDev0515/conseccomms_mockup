import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-4 bg-black"></div>
      <div className="flex justify-between h-24 items-center px-24 py-16">
        <span className="h-24"><img className="h-24" src="/conseccomms.png" alt="logo" /></span>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:text-blue-500 font-bold text-lg text-gray-700 px-4 py-2 rounded-md">Home</li>
          <li className="cursor-pointer hover:text-blue-500 font-bold text-lg text-gray-700 px-4 py-2 rounded-md">About</li>
          <li className="cursor-pointer hover:text-blue-500 font-bold text-lg text-gray-700 px-4 py-2 rounded-md">Services</li>
          <li className="cursor-pointer hover:text-blue-500 font-bold text-lg text-gray-700 px-4 py-2 rounded-md">Careers</li>
          <li className="cursor-pointer hover:text-blue-500 font-bold text-lg text-gray-700 px-4 py-2 rounded-md">Blog</li>
          <li><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Contact Us</button></li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center h-[500px] p-24 text-white" style={{ backgroundImage: "url('/ServicePointPro_ParallaxImages2.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="flex h-full justify-evenly">
          <div className="h-full">
            <img className="h-full" src="https://conseccomms.com/assets/Rectangle-BFqPjUXC.png" />
          </div>
          <div className="w-[40%]">
            <h1 className="text-4xl font-bold">Inspiring Brilliance, Streaming To Digital Horizons</h1>
            <p className="text-lg">Conseccomms is dedicated to inspiring and nurturing excellence within its team. The company creates an environment where brilliance can thrive, encouraging employees to reach their full potential.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Get Started</button>
          </div>
        </div>
      </div>
      <div className="p-5 bg-gray-500 text-white"><h1 className="text-center text-2xl font-bold">Have a Question? Call Us Toll Free at 1-877-351-2470</h1></div>
      <div className="py-5 text-center">
        <div className="p-5"><h1 className="text-center text-2xl font-bold">Our Blog</h1></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          <div className="p-[30px] bg-slate-100"><img src="https://api.conseccomms.com/storage/blogs/K51QFt8veh77HozZMKRRawszWSGtGokIvN3hYcJF.jpg" alt="blog" /><h2 className="text-2xl font-bold">Item 1</h2></div>
          <div className="p-[30px] bg-slate-100"><img src="https://api.conseccomms.com/storage/blogs/K51QFt8veh77HozZMKRRawszWSGtGokIvN3hYcJF.jpg" alt="blog" /><h2 className="text-2xl font-bold">Item 2</h2></div>
          <div className="p-[30px] bg-slate-100"><img src="https://api.conseccomms.com/storage/blogs/K51QFt8veh77HozZMKRRawszWSGtGokIvN3hYcJF.jpg" alt="blog" /><h2 className="text-2xl font-bold">Item 3</h2></div>
          <div className="p-[30px] bg-slate-100"><img src="https://api.conseccomms.com/storage/blogs/K51QFt8veh77HozZMKRRawszWSGtGokIvN3hYcJF.jpg" alt="blog" /><h2 className="text-2xl font-bold">Item 4</h2></div>
        </div>
      </div>
      <div className="text-center items-center h-[500px] p-24" style={{ backgroundImage: "url('/SP_Pro_Black_background.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <h1 className="text-4xl text-white font-bold">See how Conseccomms help your business?</h1>
          <img className="h-full mx-auto" src="https://conseccomms.com/bg.svg" />
      </div>
      <div className="flex flex-col items-center justify-center h-[500px] p-24" style={{ backgroundImage: "url('/https://conseccomms.com/assets/Group1-46OGF45e.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="flex h-[100%] justify-evenly">
          <div className="h-full">
            <img className="h-full" src="https://conseccomms.com/assets/Group1-46OGF45e.png" />
          </div>
          <div className="w-[50%]">
            <h1 className="text-4xl font-bold">Why Choose Conseccomms?</h1>
            <p className="text-lg">
              At Conseccomms, we are dedicated to delivering top-notch IT solutions that drive business success. Our team of experts brings a wealth of experience and a commitment to excellence in every project. We prioritize innovation, quality, and customer satisfaction, ensuring that our solutions are tailored to meet your unique needs.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Discover More</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[25%_41.65%_16.66%_16.66%] gap-4 px-32 py-16 bg-gray-300">
        <div className="text-center">
          <span className="h-24"><img className="h-24" src="/conseccomms.png" alt="logo" /></span>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Contact</h1>
          <p>Email: info@conseccomms.com</p>
          <p>Contact: +91 20 6702 4727</p>
          <p>Business Address: 111, Xrbia Township Nere-dattawadi, Hinjewadi Pune - 411 057</p>
          <p>Registered Address: Saneguruji Vasahat, Chopda, Maharashtra</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Pages</h1>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
    </>
  );
}
