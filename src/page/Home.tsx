import Hero from "../assets/svg/Hero.svg";
import Icon from "../assets/svg/Icon.svg";
import Logo1 from "../assets/ClientLogo/Logo1.svg";
import Logo2 from "../assets/ClientLogo/Logo2.svg";
import Logo3 from "../assets/ClientLogo/Logo3.svg";
import Logo4 from "../assets/ClientLogo/Logo4.svg";
import Logo5 from "../assets/ClientLogo/Logo5.svg";
import Logo6 from "../assets/ClientLogo/Logo6.svg";
import Logo7 from "../assets/ClientLogo/Logo7.svg";
import Vector1 from "../assets/CommunityLogo/Vector1.svg";
import Vector2 from "../assets/CommunityLogo/Vector2.svg";
import Vector3 from "../assets/CommunityLogo/Vector3.svg";
import Body from "../assets/Body/Body.svg";
import Icon1 from "../assets/Achievements/Icon.svg";
import Icon2 from "../assets/Achievements/Icon2.svg";
import Icon3 from "../assets/Achievements/Icon3.svg";
import Icon4 from "../assets/Achievements/Icon4.svg";

function Home() {
  const clients = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];
  const community = [
    {
      image: Vector1,
      title: "Membership Organisations",
      description: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      image: Vector2,
      title: "National Associations",
      description: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
      image: Vector3,
      title: "Clubs And Groups",
      description: "Our membership management software provides full automation of membership renewals and payments"
    },
  ];
  return (
    <div>
      {/* Home */}
      <div className="bg-Silver w-full h-auto">
        <nav className=" flex justify-between items-center px-28 py-5 bg-white">
          <div>
            <a className="flex gap-3 " href="/">
              <img src={Icon} alt="" />
              <div className="font-bold	 ">Nexcent</div>
            </a>
          </div>
          <ul className="flex gap-10 ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Service</a>
            </li>
            <li>
              <a href="/about">Feature</a>
            </li>
            <li>
              <a href="/about">Product</a>
            </li>
            <li>
              <a href="/about">Testimonial</a>
            </li>
            <li>
              <a href="/contact">FAQ</a>
            </li>
          </ul>
          <div>
            <ul className="flex gap-6">
              <li>
                <a className="px-5 py-2 text-Primary" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a
                  className="px-5 py-2 text-white bg-Primary rounded-md"
                  href="/register"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* banner */}
        <div className="flex item-center justify-between px-36 py-24 ">
          {/* title */}
          <div className="flex flex-col item-center justify-center gap-2">
            <h1 className="text-6xl text-[#4D4D4D]">Lessons and insights</h1>
            <h1 className="text-6xl text-Primary">from 8 years</h1>
            <p className="text-[#717171]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div className="pt-6">
              <a
                className="inline-block px-6 py-3 text-white bg-Primary rounded-md"
                href="/register"
              >
                Register
              </a>
            </div>
          </div>
          {/* heroImage */}
          <div>
            <img src={Hero} alt="Hero" />
          </div>
        </div>
      </div>
      {/* Clients */}
      <div className="flex flex-col  px-36 py-16 text-center">
        <h2 className="text-[#4D4D4D] text-4xl mb-2">Our Clients</h2>
        <p className="text-[#717171] text-base mb-5">We have been working with some Fortune 500+ clients</p>
        <div className="flex justify-between">
          {clients.map((client, index) => {
            return <img key={index} src={client}></img>;
          })}
        </div>
      </div>
      {/* Community */}
      <div className="flex flex-col items-center justify-center px-36 py-8">
        <p className="text-4xl text-[#4D4D4D] flex flex-col justify-center items-center gap-1 ">
          <h2>Manage your entire community</h2>
          <h2>in a single system</h2>
        </p>
        <p className="text-base text-[#717171] my-2">Who is Nextcent suitable for?</p>
        <div className="grid grid-cols-3 gap-x-28">
        {community.map((item, index) => (
      <div key={index} className="flex flex-col items-center justify-center text-center px-8 py-4 w-80 rounded-lg  shadow transition-shadow hover:shadow-xl">
        <div className="mb-2">
          <img src={item.image} alt="" />
        </div>
        <h3 className="mb-4 text-[#4D4D4D] text-3xl font-bold  line-clamp-2">{item.title}</h3>
        <p className="text-[#717171] line-clamp-3">{item.description}</p>
      </div>
    ))}
          
        </div>
      </div>
      {/* body */}
      <div className="flex items-center justify-between px-36 ">
        <div>
          <img src={Body} alt="" />
        </div>
        <div className="w-3/6">
          <h2 className="text-3xl font-semibold	 text-[#4D4D4D]">The unseen of spending three years at Pixelgrade</h2>
          <p className="text-base text-[#717171 ] py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <div className="">
          <a
                  className="inline-block px-5 py-2 text-white bg-Primary rounded-md"
                  href="/register"
                >
                  Learn More
                </a>
          </div>
        </div>
      </div>
      {/* Achievements */}
      <div className="flex items-center justify-between  w-full px-36 py-16 bg-[#F5F7FA]">
        <div>
          <p className="text-4xl font-semibold">
            <h2>Helping a local</h2>
            <h2 className="text-Primary">business reinvent itself</h2>
          </p>
          <p className="text-[#18191F] text-lg">We reached here with our hard work and dedication</p>
        </div>
        <div>
          {/* row */}
          <div className="flex gap-24 mb-8">
            {/* col */}
          <div className="flex gap-4">
            <img src={Icon1} alt="" />
            <div>
              <h3 className="text-[#4D4D4D] font-bold text-2xl">2,245,341</h3>
              <p className="text-[#717171] font-normal text-base">Members</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={Icon2} alt="" />
            <div>
              <h3 className="text-[#4D4D4D] font-bold text-2xl">46,328</h3>
              <p className="text-[#717171] font-normal text-base">Clubs</p>
            </div>
          </div>
          </div>
          {/* row */}
          <div className="flex gap-24 mb-8">
            {/* col */}
          <div className="flex gap-4">
            <img src={Icon3} alt="" />
            <div>
              <h3 className="text-[#4D4D4D] font-bold text-2xl">828,867</h3>
              <p className="text-[#717171] font-normal text-base">Event Bookings</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={Icon4} alt="" />
            <div>
              <h3 className="text-[#4D4D4D] font-bold text-2xl">1,926,436</h3>
              <p className="text-[#717171] font-normal text-base">Payments</p>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home;
