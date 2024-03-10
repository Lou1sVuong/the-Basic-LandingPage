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
import Customer from "../assets/Customer/Customer.svg";
import LogoBlue1 from "../assets/Customer/logo/LogoBlue1.svg";
import Image1 from "../assets/CommnityUpdate/image1.png";
import Image2 from "../assets/CommnityUpdate/image2.png";
import Image3 from "../assets/CommnityUpdate/image3.png";
function Home() {
  const clients = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];
  const customer = [LogoBlue1, Logo2, Logo3, Logo4, Logo5, Logo6];
  const community = [
    {
      image: Vector1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      image: Vector2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      image: Vector3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  const communityUpdate = [
    {
      image: Image1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: Image2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: Image3,
      title: "Revamping the Membership Model with Triathlon Australia",
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
        <p className="text-[#717171] text-base mb-5">
          We have been working with some Fortune 500+ clients
        </p>
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
        <p className="text-base text-[#717171] my-2">
          Who is Nextcent suitable for?
        </p>
        <div className="grid grid-cols-3 gap-x-28">
          {community.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-8 py-4 w-80 rounded-lg  shadow transition-shadow hover:shadow-xl"
            >
              <div className="mb-2">
                <img src={item.image} alt="" />
              </div>
              <h3 className="mb-4 text-[#4D4D4D] text-3xl font-bold  line-clamp-2">
                {item.title}
              </h3>
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
          <h2 className="text-3xl font-semibold	 text-[#4D4D4D]">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-base text-[#717171 ] py-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
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
          <p className="text-[#18191F] text-lg">
            We reached here with our hard work and dedication
          </p>
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
                <p className="text-[#717171] font-normal text-base">
                  Event Bookings
                </p>
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
      {/* body */}
      <div className="flex items-center justify-between px-36 ">
        <div>
          <img src={Body} alt="" />
        </div>
        <div className="w-3/6">
          <h2 className="text-3xl font-semibold	 text-[#4D4D4D]">
            How to design your site footer like we did
          </h2>
          <p className="text-base text-[#717171 ] py-6 text-justify">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
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
      {/* Customer's */}
      <div className="flex items-center gap-40 px-36 bg-[#F5F7FA] ">
        <div>
          <img src={Customer} alt="" className="w-80 h-80" />
        </div>
        <div className="w-3/6">
          <p className="text-base text-[#717171 ] py-6 text-justify">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <p className="text-[#4CAF4F] text-xl">Tim Smith</p>
          <p className="text-[#89939E] text-base">
            British Dragon Boat Racing Association
          </p>
          <div className="flex items-center gap-8 py-6">
            {customer.map((client, index) => {
              return <img key={index} src={client}></img>;
            })}
            <a href="">
              <p className="flex items-center gap-3 text-[#4CAF4F] font-semibold text-nowrap">
                Meet all customers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="11"
                  viewBox="0 0 17 11"
                  fill="none"
                >
                  <path
                    d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                    stroke="#4CAF4F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
            </a>
          </div>
        </div>
      </div>
      {/* Community Updates*/}
      <div className="flex flex-col gap-2 w-full items-center justify-center px-36 py-32">
        <h2 className="text-[#4D4D4D] text-3xl">Caring is the new marketing</h2>
        <p className="w-1/2 text-center text-[#717171]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
        {/* slide */}
        <div className="flex justify-between w-full">
          {/* cards */}
          {communityUpdate.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <div className="relative w-96 h-72 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-lg object-cover  hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="absolute flex flex-col gap-4 w-72 mt-64 bg-[#F5F7FA] rounded-lg">
                  <p className="px-10 text-center">{item.title}</p>
                  <a href="#">
                    <p className="flex justify-center items-center gap-3 text-[#4CAF4F] font-semibold text-nowrap">
                      Readmore
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                      >
                        <path
                          d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                          stroke="#4CAF4F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* get demo */}
      <div className="flex flex-col justify-center items-center py-8 bg-[#F5F7FA]">
        <div className="flex flex-col items-center gap-4  text-[#263238] text-6xl">
          <h3>Pellentesque suscipit</h3>
          <h3>fringilla libero eu.</h3>
        </div>
        <div className="flex mt-7">
          <a
            className=" flex justify-center items-center gap-3  px-5 py-2 text-white bg-Primary rounded-md "
            href="/register"
          >
            Sign up
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="11"
              viewBox="0 0 17 11"
              fill="none"
            >
              <path
                d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* footer */}
      <div className=" flex justify-between bg-[#263238] text-white py-16 px-44">
        {/* logo & social */}
        <div className="flex flex-col gap-10">
          <a className="flex gap-3 " href="/">
            <img src={Icon} alt="" />
            <div className="font-bold	 ">Nexcent</div>
          </a>
          <div>
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          {/* list social */}
          <div className="flex gap-4">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.0008 8.13843C13.6833 8.13843 13.3924 8.14856 12.4822 8.18998C11.5737 8.23158 10.9536 8.37541 10.4111 8.58643C9.84981 8.80439 9.37372 9.09595 8.8994 9.57044C8.42473 10.0448 8.13317 10.5209 7.9145 11.0819C7.70294 11.6247 7.55894 12.245 7.51805 13.1531C7.47734 14.0633 7.46667 14.3543 7.46667 16.6718C7.46667 18.9894 7.47699 19.2793 7.51823 20.1896C7.56001 21.098 7.70383 21.7181 7.91468 22.2607C8.13282 22.822 8.42437 23.2981 8.89887 23.7724C9.37301 24.247 9.8491 24.5393 10.41 24.7573C10.9529 24.9683 11.5732 25.1121 12.4815 25.1537C13.3917 25.1951 13.6824 25.2053 15.9997 25.2053C18.3175 25.2053 18.6074 25.1951 19.5176 25.1537C20.4261 25.1121 21.0469 24.9683 21.5898 24.7573C22.1509 24.5393 22.6263 24.247 23.1004 23.7724C23.5751 23.2981 23.8667 22.822 24.0853 22.2609C24.2951 21.7181 24.4391 21.0979 24.4818 20.1898C24.5227 19.2795 24.5333 18.9894 24.5333 16.6718C24.5333 14.3543 24.5227 14.0635 24.4818 13.1532C24.4391 12.2448 24.2951 11.6247 24.0853 11.0821C23.8667 10.5209 23.5751 10.0448 23.1004 9.57044C22.6258 9.09577 22.1511 8.80421 21.5893 8.58643C21.0453 8.37541 20.4249 8.23158 19.5164 8.18998C18.6062 8.14856 18.3164 8.13843 15.9981 8.13843H16.0008ZM15.2353 9.6762C15.4625 9.67584 15.716 9.6762 16.0008 9.6762C18.2792 9.6762 18.5492 9.68438 19.449 9.72526C20.281 9.76331 20.7326 9.90233 21.0334 10.0191C21.4316 10.1738 21.7155 10.3587 22.014 10.6574C22.3127 10.956 22.4976 11.2405 22.6526 11.6387C22.7694 11.9392 22.9086 12.3907 22.9464 13.2227C22.9873 14.1223 22.9962 14.3925 22.9962 16.6699C22.9962 18.9472 22.9873 19.2175 22.9464 20.117C22.9084 20.949 22.7694 21.4006 22.6526 21.701C22.4979 22.0993 22.3127 22.3828 22.014 22.6813C21.7153 22.98 21.4318 23.1649 21.0334 23.3195C20.7329 23.4369 20.281 23.5755 19.449 23.6136C18.5494 23.6545 18.2792 23.6634 16.0008 23.6634C13.7222 23.6634 13.4521 23.6545 12.5526 23.6136C11.7205 23.5752 11.269 23.4362 10.968 23.3194C10.5698 23.1647 10.2853 22.9798 9.98666 22.6811C9.68799 22.3825 9.5031 22.0987 9.34808 21.7003C9.23128 21.3999 9.09208 20.9483 9.05421 20.1163C9.01332 19.2167 9.00514 18.9465 9.00514 16.6677C9.00514 14.389 9.01332 14.1202 9.05421 13.2206C9.09226 12.3886 9.23128 11.937 9.34808 11.6362C9.50275 11.238 9.68799 10.9535 9.98666 10.6549C10.2853 10.3562 10.5698 10.1713 10.968 10.0163C11.2688 9.89896 11.7205 9.76029 12.5526 9.72206C13.3398 9.68651 13.6448 9.67584 15.2353 9.67406V9.6762ZM20.5558 11.0931C19.9905 11.0931 19.5318 11.5512 19.5318 12.1168C19.5318 12.6821 19.9905 13.1408 20.5558 13.1408C21.1212 13.1408 21.5799 12.6821 21.5799 12.1168C21.5799 11.5514 21.1212 11.0931 20.5558 11.0931ZM16.0008 12.2896C13.5807 12.2896 11.6186 14.2517 11.6186 16.6718C11.6186 19.0919 13.5807 21.0532 16.0008 21.0532C18.4209 21.0532 20.3824 19.0919 20.3824 16.6718C20.3824 14.2517 18.4209 12.2896 16.0008 12.2896ZM16.0008 13.8274C17.5717 13.8274 18.8453 15.1008 18.8453 16.6718C18.8453 18.2427 17.5717 19.5163 16.0008 19.5163C14.4298 19.5163 13.1563 18.2427 13.1563 16.6718C13.1563 15.1008 14.4298 13.8274 16.0008 13.8274Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.5333 16.6599C24.5333 17.237 24.4746 17.8133 24.3592 18.3751C24.2467 18.9235 24.08 19.4619 23.8617 19.9766C23.6483 20.4822 23.3837 20.9694 23.0745 21.4237C22.77 21.8752 22.4191 22.2988 22.0337 22.6849C21.6474 23.0693 21.2224 23.4192 20.7711 23.7251C20.3152 24.0322 19.8273 24.2964 19.3215 24.5107C18.806 24.7279 18.2664 24.8943 17.7184 25.0066C17.1559 25.1223 16.5776 25.1814 15.9996 25.1814C15.4213 25.1814 14.8429 25.1223 14.2812 25.0066C13.7324 24.8943 13.1928 24.7279 12.6778 24.5107C12.1719 24.2964 11.6836 24.0322 11.2277 23.7251C10.7764 23.4193 10.3514 23.0693 9.96599 22.6849C9.58015 22.2988 9.22928 21.8752 8.92427 21.4237C8.61675 20.9694 8.35172 20.4821 8.13755 19.9766C7.91918 19.4619 7.75211 18.9234 7.63919 18.3751C7.52503 17.8133 7.46667 17.237 7.46667 16.6599C7.46667 16.0824 7.52499 15.5049 7.63922 14.9444C7.75215 14.396 7.91922 13.8567 8.13759 13.3429C8.35175 12.8369 8.61678 12.3493 8.9243 11.8949C9.22931 11.443 9.58018 11.0203 9.96602 10.6337C10.3515 10.2492 10.7765 9.90015 11.2278 9.59475C11.6836 9.28641 12.172 9.02223 12.6778 8.8075C13.1929 8.58985 13.7324 8.42302 14.2812 8.31153C14.8429 8.19669 15.4213 8.13843 15.9997 8.13843C16.5776 8.13843 17.1559 8.19669 17.7185 8.31153C18.2664 8.42305 18.806 8.58988 19.3215 8.8075C19.8273 9.02219 20.3153 9.28641 20.7711 9.59475C21.2224 9.90015 21.6475 10.2492 22.0337 10.6337C22.4191 11.0203 22.77 11.443 23.0746 11.8949C23.3837 12.3493 23.6483 12.8369 23.8617 13.3429C24.08 13.8567 24.2467 14.396 24.3592 14.9444C24.4746 15.5049 24.5333 16.0824 24.5333 16.6599ZM12.8903 10.0778C10.8581 11.0361 9.34131 12.906 8.86836 15.1595C9.06048 15.1612 12.0973 15.1995 15.5962 14.2711C14.3349 12.0334 12.9874 10.2072 12.8903 10.0778ZM16.2 15.3917C12.4477 16.5134 8.84711 16.4327 8.71795 16.4278C8.71585 16.506 8.71211 16.5817 8.71211 16.6599C8.71211 18.5294 9.41839 20.2337 10.5793 21.5223C10.5768 21.5186 12.5711 17.9856 16.5038 16.7157C16.5988 16.6841 16.6955 16.6558 16.7913 16.6283C16.6084 16.2147 16.4087 15.8003 16.2 15.3917ZM20.8124 11.1983C19.5293 10.0686 17.8447 9.38339 15.9996 9.38339C15.4075 9.38339 14.8329 9.45496 14.2824 9.58727C14.3916 9.73375 15.7604 11.547 17.0067 13.8322C19.7565 12.8028 20.7944 11.225 20.8124 11.1983ZM17.288 17.8341C17.2718 17.8395 17.2556 17.8441 17.2397 17.8499C12.94 19.3467 11.5358 22.3632 11.5206 22.3961C12.7578 23.3568 14.3096 23.9365 15.9996 23.9365C17.0088 23.9365 17.9701 23.7313 18.8448 23.3598C18.7368 22.724 18.3135 20.4954 17.288 17.8341ZM20.0719 22.6949C21.7082 21.5922 22.8703 19.8414 23.1945 17.8133C23.0445 17.765 21.0057 17.1205 18.6535 17.4971C19.6093 20.1201 19.9977 22.2563 20.0719 22.6949ZM17.5676 14.9165C17.7368 15.2635 17.9006 15.6167 18.0518 15.9717C18.1056 16.099 18.1581 16.2239 18.2093 16.3487C20.7128 16.0341 23.1792 16.5634 23.2846 16.585C23.2679 14.8599 22.65 13.2767 21.6275 12.0372C21.6137 12.0567 20.4449 13.7431 17.5676 14.9165Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5208 13.6767L15.5544 14.2304L14.9948 14.1626C12.9579 13.9027 11.1784 13.0214 9.66756 11.5413L8.92891 10.8069L8.73865 11.3492C8.33575 12.5582 8.59316 13.8349 9.43253 14.6936C9.8802 15.1682 9.77948 15.2359 9.00725 14.9535C8.73865 14.8631 8.50363 14.7953 8.48124 14.8292C8.4029 14.9083 8.6715 15.9365 8.88414 16.3432C9.17513 16.9082 9.76828 17.4618 10.4174 17.7895L10.9658 18.0493L10.3167 18.0606C9.68994 18.0606 9.66756 18.0719 9.73471 18.3092C9.95854 19.0436 10.8427 19.8232 11.8276 20.1622L12.5214 20.3995L11.9171 20.761C11.0218 21.2808 9.96973 21.5745 8.91772 21.5971C8.41409 21.6084 8 21.6536 8 21.6875C8 21.8005 9.36538 22.4332 10.16 22.6818C12.5438 23.4162 15.3753 23.0998 17.5017 21.8457C19.0126 20.9531 20.5235 19.1792 21.2286 17.4618C21.6091 16.5466 21.9896 14.8744 21.9896 14.0722C21.9896 13.5524 22.0232 13.4847 22.6499 12.8632C23.0192 12.5017 23.3662 12.1062 23.4333 11.9932C23.5452 11.7785 23.534 11.7785 22.9633 11.9706C22.012 12.3096 21.8777 12.2644 22.3477 11.756C22.6947 11.3944 23.1088 10.7391 23.1088 10.547C23.1088 10.5131 22.9409 10.5696 22.7506 10.6713C22.5492 10.7843 22.1015 10.9537 21.7658 11.0554L21.1614 11.2475L20.613 10.8747C20.3108 10.6713 19.8856 10.4453 19.6617 10.3775C19.0909 10.2193 18.218 10.2419 17.7032 10.4227C16.3042 10.9311 15.4201 12.2418 15.5208 13.6767Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  opacity="0.1"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 16.6718C0 7.8352 7.16344 0.671753 16 0.671753C24.8366 0.671753 32 7.8352 32 16.6718C32 25.5083 24.8366 32.6718 16 32.6718C7.16344 32.6718 0 25.5083 0 16.6718Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.6677 11.1714C23.4021 11.3729 23.9804 11.9667 24.1767 12.7207C24.5333 14.0872 24.5333 16.9385 24.5333 16.9385C24.5333 16.9385 24.5333 19.7897 24.1767 21.1564C23.9804 21.9104 23.4021 22.5041 22.6677 22.7057C21.3369 23.0718 16 23.0718 16 23.0718C16 23.0718 10.6631 23.0718 9.33218 22.7057C8.59783 22.5041 8.0195 21.9104 7.82323 21.1564C7.46667 19.7897 7.46667 16.9385 7.46667 16.9385C7.46667 16.9385 7.46667 14.0872 7.82323 12.7207C8.0195 11.9667 8.59783 11.3729 9.33218 11.1714C10.6631 10.8052 16 10.8052 16 10.8052C16 10.8052 21.3369 10.8052 22.6677 11.1714ZM14.4 14.5385V19.8718L18.6667 17.2052L14.4 14.5385Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* list row & col footer */}
        <div className="flex gap-20">
          {/* col */}
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-bold">Company</p>
            <div className="flex flex-col gap-3">
              <a href="#">About us</a>
              <a href="#">Blog</a>
              <a href="#">Contact us</a>
              <a href="#">Pricing</a>
              <a href="#">Testimonials</a>
            </div>
          </div>
          {/* col */}
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-bold">Support</p>
            <div className="flex flex-col gap-3">
              <a href="#">Help center</a>
              <a href="#">Terms of service</a>
              <a href="#">Legal</a>
              <a href="#">Privacy policy</a>
              <a href="#">Status</a>
            </div>
          </div>
          <div>
            <p className="text-2xl font-bold">Stay up to date</p>
            <input type="text" placeholder="Your email address" className="rounded-md opacity-80 text-black placeholder-[#D9DBE1] mt-4" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
