// Next Components
import Image from "next/image";
// Images
import Awards from "media/awards/three.svg";
// Components
import CTA from "C/CTA";
import Form from "C/hero/form/form";

const Hero = ({ content }) => {
    const { subtitle, title, desc, img, form } = content;
    return (
        <section>
            <div className="pt-[120px]">
                <div className="container">
                    <div className="flex items-center gap-x-5">
                        <div className="basis-[100%] md:basis-[60%]">
                            <span className="text-[16px] text-red leading-none block font-bold mb-2">
                                {subtitle}
                            </span>
                            <h1 className="text-[25px] sm:text-[35px] xl:text-[40px] font-megat font-extrabold leading-tight text-black mb-5 hover:text-red transition-all">
                                {title}
                            </h1>
                            <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal mb-5 text-justify sm:text-left">
                                {desc}
                            </p>
                            <Image src={Awards} alt="awards" priority={true} />
                            <div className="flex items-center flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
                                <CTA
                                    text="Start Live Chat"
                                    href="javascript:$zopim.livechat.window.show();"
                                    bg="bg-black"
                                    icon="/icons/chat.svg"
                                    css="hover:bg-light-yellow"
                                />
                                <CTA
                                    text="(855) 888-8399"
                                    href="tel:(855)888-8399"
                                    bg="bg-red"
                                    css="hover:bg-light-yellow"
                                />
                            </div>
                        </div>
                        <div className="hidden md:block md:basis-[40%]">
                            {img && <Image src={img.src} alt="hero" priority={true} className={`${img.css}`} width={img.width} height={img.height} />}
                        </div>
                    </div>
                </div>
            </div>
            {
                form && (<Form />)
            }
        </section>
    )
}

export default Hero;
// "use client"
// // Import Components
// import Image from "next/image";
// import Button from "@/components/button/button";
// import From from "./form/form";
// // Import Css
// import styles from "./hero.module.css";
// // Import Images
// import downArrow from "media/hero/downArrow.svg";
// import circleCheck from "media/hero/circleCheck.svg";
// import reviewPlatforms from "media/hero/reviewPlatforms.svg";

// const Hero = ({ content }) => {
//     const { subtitle, title, desc, points, banner, page, icons, bg, video, isForm, btnBg, btnColor, btnBorder, btnHover, } = content;
//     return (
//         <section>
//             <div className={`${bg ?? "bg-transparent"} pt-28 lg:pt-0 relative z-[1]`}>
//                 {/* For Motion Graphics Page */}
//                 {page === "motionGraphics" ?
//                     <video src={video} autoPlay loop muted
//                         className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-contain object-right-top z-[-2] hidden lg:block"></video> : null}
//                 {/* For Website Development Page */}
//                 {page === "websiteDevelopment" ?
//                     <video src={video} autoPlay loop muted
//                         className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-contain object-right-top z-[-2] hidden lg:block"></video> : null}
//                 {/* For Seo Services Page */}
//                 {page === "seoServices" ?
//                     <div className="bg-[url('../../public/seo-services/hero/handle.png')] bg-contain bg-no-repeat bg-right-top absolute right-0 hidden lg:block bottom-0 w-full h-full"></div> : null}
//                 <div className="container relative z-[1]">
//                     {/* For Home Page */}
//                     {page === "home" ? <div className="absolute bottom-0 md:right-0 lg:right-[-50px] xl:right-[-50px] z-[-1] hidden md:block">
//                         <Image src={banner} alt="banner" priority className="object-cover h-auto md:max-w-xs lg:max-w-lg xl:max-w-screen-sm" />
//                     </div> : null}
//                     {page === "home" ? <>
//                         <div className={`absolute lg:top-[420px] xl:top-[450px] lg:right-[460px] xl:right-[560px] 2xl:right-[580px] hidden lg:block ${styles.__fadeInDown}`}>
//                             <Image src={icons[0]} alt="icon" />
//                         </div>
//                         <div className={`absolute lg:top-[250px] xl:top-[350px] lg:right-[0] xl:right-[50px] hidden lg:block ${styles.__fadeInDown}`}>
//                             <Image src={icons[1]} alt="icon" />
//                         </div>
//                         <div className={`absolute lg:top-[600px] xl:top-[700px] lg:right-[0] xl:right-[50px] hidden lg:block ${styles.__fadeInDown}`}>
//                             <Image src={icons[2]} alt="icon" />
//                         </div></> : null}
//                     {/* For Logo Design Page */}
//                     {page === "logoDesign" ? <div className="absolute right-0 lg:right-[40px] xl:right-[100px] bottom-[50px] z-[-1] hidden md:block">
//                         <Image src={banner} alt="banner" priority className="max-w-[50%] lg:max-w-[80%] xl:max-w-full block ml-auto" />
//                     </div> : null}
//                     {page === "logoDesign" ? <>
//                         <div className={`absolute lg:top-[420px] xl:top-[450px] lg:right-[430px] xl:right-[590px] 2xl:right-[610px] hidden lg:block ${styles.__fadeInDown}`}>
//                             <Image src={icons[0]} alt="icon" />
//                         </div>
//                         <div className={`absolute lg:top-[250px] xl:top-[350px] lg:right-[5px] xl:right-[70px] hidden lg:block ${styles.__fadeInDown}`}>
//                             <Image src={icons[1]} alt="icon" />
//                         </div>
//                         <div className={`absolute lg:top-[550px] xl:top-[600px] lg:right-[-10px] xl:right-[30px] hidden lg:block ${styles.__fadeInDown}`}>
//                             <Image src={icons[2]} alt="icon" />
//                         </div></> : null}
//                     {page === "creativeCopywriting" ? <div className="absolute right-0 bottom-0 z-[-1] hidden md:block">
//                         <Image src={banner} alt="banner" priority className="max-w-[50%] lg:max-w-[70%] block ml-auto xl:max-w-full" />
//                     </div> : null}
//                     {/* For Digital Marketing Page */}
//                     {page === "digitalMarketing" ? <div className="absolute right-0 bottom-0 z-[-1] hidden md:block">
//                         <Image src={banner} alt="banner" priority className="max-w-[50%] lg:max-w-[70%] block ml-auto xl:max-w-full" />
//                     </div> : null}
//                     {/* For Ecommerce Page */}
//                     {page === "ecommerce" ? <div className="absolute right-0 xl:right-[-300px] bottom-0 z-[-1] hidden md:block">
//                         <Image src={banner} alt="banner" priority className="max-w-[50%] lg:max-w-[70%] block ml-auto xl:max-w-full" />
//                     </div> : null}
//                     {/* For Illustration Design Page */}
//                     {page === "illustrationDesign" ? <div className="absolute right-0 bottom-0 z-[-1] hidden md:block">
//                         <Image src={banner} alt="banner" priority className="max-w-[50%] lg:max-w-[70%] block ml-auto xl:max-w-full" />
//                     </div> : null}
//                     {/* For Marketing Collateral Page */}
//                     {page === "marketingCollateral" ? <div className="absolute right-0 bottom-0 lg:bottom-[100px] z-[-1] hidden md:block">
//                         <Image src={banner} alt="banner" priority className="max-w-[50%] lg:max-w-[70%] block ml-auto xl:max-w-full" />
//                     </div> : null}
//                     {/* For Mobile Application Page */}
//                     {page === "mobileApplication" ? <div className="absolute right-0 bottom-0 z-[-1] hidden md:block">
//                         <Image src={banner} alt="banner" priority className="max-w-[50%] lg:max-w-[70%] block ml-auto xl:max-w-full" />
//                     </div> : null}
//                     {/* For Single Page */}
//                     {page === "single" ? <div className="absolute right-0 bottom-[100px] z-[-1] hidden md:block">
//                         <Image src={banner} alt="banner" priority className="max-w-[50%] lg:max-w-[70%] block ml-auto xl:max-w-full" />
//                     </div> : null}
//                     <div className="flex lg:h-[780px] xl:h-[840px] 2xl:h-[870px] lg:items-end lg:pb-20">
//                         <div className="basis-full md:basis-[80%] lg:basis-[60%] xl:basis-[50%]">
//                             {subtitle && <div className="relative w-max mb-10">
//                                 <span className="text-sm sm:text-base xl:text-lg font-normal leading-none text-white inline-block">
//                                     {subtitle}
//                                 </span>
//                                 <Image src={downArrow} alt="downArrow" className="absolute top-2/4 left-full ml-5 sm:ml-10" />
//                             </div>}
//                             <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat text-white font-normal leading-none mb-2">
//                                 {title}
//                             </h1>
//                             <p className="text-sm sm:text-base 2xl:text-lg text-white font-normal mb-3 sm:mb-5">
//                                 {desc}
//                             </p>
//                             {points && <div className="flex mb-5 xl:mb-8">
//                                 <div className="basis-full">
//                                     <div className="flex flex-wrap">
//                                         <div className="basis-6/12 md:basis-[48%] p-3 border-brown-10 px-0 border-r-2 border-b-2">
//                                             <div className="flex items-center gap-x-3">
//                                                 <Image src={circleCheck} alt="circleCheck" />
//                                                 <p className="text-xs sm:text-lg xl:text-xl text-white font-normal">{points[0]}</p>
//                                             </div>
//                                         </div>
//                                         <div className="basis-6/12 md:basis-[48%] p-3 border-brown-100 pr-0 border-b-2">
//                                             <div className="flex items-center gap-x-3">
//                                                 <Image src={circleCheck} alt="circleCheck" />
//                                                 <p className="text-xs sm:text-lg xl:text-xl text-white font-normal">{points[1]}</p>
//                                             </div>
//                                         </div>
//                                         <div className="basis-6/12 md:basis-[48%] p-3 border-brown-100 pl-0 border-r-2">
//                                             <div className="flex items-center gap-x-3">
//                                                 <Image src={circleCheck} alt="circleCheck" />
//                                                 <p className="text-xs sm:text-lg xl:text-xl text-white font-normal">{points[2]}</p>
//                                             </div>
//                                         </div>
//                                         <div className="basis-6/12 md:basis-[48%] p-3 pr-0">
//                                             <div className="flex items-center gap-x-3">
//                                                 <Image src={circleCheck} alt="circleCheck" />
//                                                 <p className="text-xs sm:text-lg xl:text-xl text-white font-normal">{points[3]}</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>}
//                             <Image src={reviewPlatforms} alt="reviewPlatforms" />
//                             <div className="flex items-center gap-3 mt-5 xl:mt-8 pb-8 lg:pb-0">
//                                 {/* <Button text="Start Live Chat"
//                                     icon={true}
//                                     color="bg-[#7E6BC6] text-white"
//                                     hover="hover:bg-[#000000]"
//                                     link="#" />
//                                 <Button text="(123)-000-0000"
//                                     color="bg-transparent text-white"
//                                     border="border-2 border-[#7E6BC6]"
//                                     hover="hover:bg-[#7E6BC6]"
//                                     link="tel:123654789" /> */}
//                                 <Button text="Start Live Chat"
//                                     icon={true}
//                                     color={`${btnBg ?? "bg-transparent"} text-white`}
//                                     hover="hover:bg-[#000000]"
//                                     link="javascript:$zopim.livechat.window.show();" />
//                                 <Button text="(855) 888-8399"
//                                     color={`${btnColor ?? "text-white"} bg-transparent`}
//                                     border={`border-2 ${btnBorder ?? "border-[#ffffff]"}`}
//                                     hover={`hover:text-white ${btnHover ?? "hover:bg-transparent"}`}
//                                     link="tel:(855)888-8399" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {
//                     isForm ? <From /> : null
//                 }
//             </div>
//         </section>
//     );
// }

// export default Hero;