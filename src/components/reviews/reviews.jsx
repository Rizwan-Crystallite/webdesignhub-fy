// Import Components
import Image from "next/image";
// Import Images
import avatarOne from "media/reviews/avatarOne.png";
import avatarTwo from "media/reviews/avatarTwo.png";
import avatarThree from "media/reviews/avatarThree.png";
import avatarFour from "media/reviews/avatarFour.png";

const Reviews = ({ content }) => {
    return (
        <section>
            <div className="bg-black py-[50px] lg:py-[100px]">
                <div className="container">
                    <div className="lg:w-[80%] m-auto">
                        <p className="text-[18px] leading-[28px] lg:text-[25px] lg:leading-[35px] text-center text-white font-normal mb-[50px] lg:mb-[70px]">
                            Unleash the Fun-tastic Magic at WitsIdea! Our Passion Fuels <br /> Epic Results. That’s How We Roll!.
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-megat text-white leading-tight font-extrabold text-center mb-[50px] lg:mb-[100px]">Our <span className="text-red">Client`s</span> Review</h2>
                        <div className="grid grid-cols-1 gap-5 lg:gap-10">
                            <div className="relative group">
                                <Image src={avatarOne} alt="avatar" className="lg:absolute lg:top-[-100px] lg:left-[-50px] shadow-md rounded-full mb-5 lg:mb-0" width={60} height={60} />
                                <h4 className="text-xl sm:text-2xl xl:text-3xl font-megat text-white leading-tight font-extrabold mb-5 group-hover:text-red transition-all">
                                    Jennifer Mitchell
                                </h4>
                                <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-white font-normal">
                                    "Creative Logo Designs created a special and eye-catching custom logo <br /> design that perfectly shows what our financial consulting firm is <br /> about. Our team and clients love it, thanks to their amazing logo <br /> design skills."
                                </p>
                            </div>
                            <div className="relative text-right group">
                                <Image src={avatarFour} alt="avatar" className="lg:absolute lg:top-[-100px] lg:right-[-50px] shadow-md rounded-full inline-block mb-5 lg:mb-0" width={60} height={60} />
                                <h4 className="text-xl sm:text-2xl xl:text-3xl font-megat text-white leading-tight font-extrabold mb-5 group-hover:text-red transition-all">
                                    John Lennon
                                </h4>
                                <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-white font-normal">
                                    I am glad I chose Creative Logo Designs for character animation <br /> services. They were ideal for the animated figures we  required <br /> for our educational materials program. Our audience likes <br /> the cartoons because they are engaging and attractive. Their <br /> crew is unmatched in terms of talent and professionalism.
                                </p>
                            </div>
                            <div className="relative group">
                                <Image src={avatarThree} alt="avatar" className="lg:absolute lg:top-[-100px] lg:left-[-50px] shadow-md rounded-full mb-5 lg:mb-0" width={60} height={60} />
                                <h4 className="text-xl sm:text-2xl xl:text-3xl font-megat text-white leading-tight font-extrabold mb-5 group-hover:text-red transition-all">
                                    Emily Parker
                                </h4>
                                <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-white font-normal">
                                    “Hiring Creative Logo Designs for our tech startup web design and <br /> development has been one of the best decisions. It's not just <br /> about aesthetics; the functionality and user experience they <br /> delivered are nothing short of exceptional.”
                                </p>
                            </div>
                            <div className="relative text-right group">
                                <Image src={avatarTwo} alt="avatar" className="lg:absolute lg:top-[-100px] lg:right-[-50px] shadow-md rounded-full inline-block mb-5 lg:mb-0" width={60} height={60} />
                                <h4 className="text-xl sm:text-2xl xl:text-3xl font-megat text-white leading-tight font-extrabold mb-5 group-hover:text-red transition-all">
                                    Sarah Johnson
                                </h4>
                                <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-white font-normal" >
                                    “Their UI/UX web design service has significantly improved the <br /> visual appeal and functionality of our ecommerce website across <br /> devices. The user engagement on our website has increased a lot <br /> as well. Creative Logo Designs is the best web design company I have <br /> ever worked with.”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;
// "use client"
// // Import Components
// import Slider from "react-slick";
// import Image from "next/image";
// // Import Css
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // Import Images
// import quote from "media/reviews/quote.png";
// import avatarOne from "media/reviews/avatarOne.png";
// import avatarTwo from "media/reviews/avatarTwo.png";
// import avatarThree from "media/reviews/avatarThree.png";
// import reviewsIllustration from "media/reviews/reviews.png";

// const Reviews = ({ content }) => {
//     const settings = {
//         dots: true,
//         arrows: true,
//         slidesToShow: 1,
//         infinite: false
//     };
//     return (
//         <section>
//             <div className="__reviewsCmp bg-[#F5F5F5] py-10 md:py-20 relative overflow-hidden">
//                 <div className="container">
//                     <div className="flex gap-5 items-center flex-wrap md:flex-nowrap">
//                         <div className="basis-full md:basis-2/4 overflow-hidden">
//                             <Image src={quote} alt={quote} className="mb-10" />
//                             <h2 className="text-4xl lg:text-5xl font-megat text-black font-normal mb-5">Our Client`s Review</h2>
//                             {content && <Slider {...settings} className="pb-8">
//                                 {
//                                     content.map((e, i) => (
//                                         <div key={i}>
//                                             <p className="text-sm lg:text-[16px] leading-[24px] font-light  text-gray-600 shadow-md bg-white p-3 rounded-xl">
//                                                 {e.message}
//                                             </p>
//                                             <div className="flex items-center gap-5 mt-5">
//                                                 {e.profile && <Image src={e.profile} alt="profile" className="shadow-md rounded-full" width={50} height={50} />}
//                                                 <div >
//                                                     <h5 className="text-lg text-black font-sans font-bold leading-none mb-1">{e.name}</h5>
//                                                     {e.jd && <p className="text-sm text-black font-light">{e.jd}</p>}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))
//                                 }
//                             </Slider>}
//                             {!content && <Slider {...settings} className="pb-8">
//                                 <div>
//                                     <p className="text-sm lg:text-[16px] leading-[24px] font-light  text-gray-600 shadow-md bg-white p-3 rounded-xl">"Creative Logo Designs created a special and eye-catching custom logo design that perfectly shows what our financial consulting firm is about. Our team and clients love it, thanks to their amazing logo design skills."</p>
//                                     <div className="flex items-center gap-5 mt-5">
//                                         <Image src={avatarOne} alt={avatarOne} className="shadow-md rounded-full" />
//                                         <div >
//                                             <h5 className="text-lg text-black font-sans font-bold leading-none mb-2">Jennifer Mitchell</h5>
//                                             <p className="text-sm text-black font-light mb-2">Senior Financial Advisor</p>
//                                             <h5 className="text-sm text-black font-sans font-bold leading-none">Wealth Vision Consultants</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm lg:text-[16px] leading-[24px] font-light  text-gray-600 shadow-md bg-white p-3 rounded-xl">“Their UI/UX web design service has significantly improved the visual appeal and functionality of our ecommerce website across devices. The user engagement on our website has increased a lot as well. Creative Logo Designs is the best web design company I have ever worked with.”</p>
//                                     <div className="flex items-center gap-5 mt-5">
//                                         <Image src={avatarTwo} alt={avatarTwo} className="shadow-md rounded-full" />
//                                         <div>
//                                             <h5 className="text-lg text-black font-sans font-bold leading-none mb-2">Sarah Johnson</h5>
//                                             <p className="text-sm text-black font-light mb-2">E-commerce Manager</p>
//                                             <h5 className="text-sm text-black font-sans font-bold leading-none">Urban Bloom Boutique</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm lg:text-[16px] leading-[24px] font-light  text-gray-600 shadow-md bg-white p-3 rounded-xl">“Hiring Creative Logo Designs for our tech startup web design and development has been one of the best decisions. It's not just about aesthetics; the functionality and user experience they delivered are nothing short of exceptional.”</p>
//                                     <div className="flex items-center gap-5 mt-5">
//                                         <Image src={avatarThree} alt={avatarThree} className="mt-5 shadow-md rounded-full" />
//                                         <div>
//                                             <h5 className="text-lg text-black font-sans font-bold leading-none mb-2">Emily Parker</h5>
//                                             <p className="text-sm text-black font-light mb-2">Co-founder</p>
//                                             <h5 className="text-sm text-black font-sans font-bold leading-none">InnovateTech Solutions</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Slider>}
//                         </div>
//                         <div className="basis-full md:basis-2/4">
//                             <Image src={reviewsIllustration} alt="reviewsIllustration" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Reviews;