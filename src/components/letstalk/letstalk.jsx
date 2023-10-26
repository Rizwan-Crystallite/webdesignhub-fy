// Imports Components
import Image from "next/image";
// Import Images
import One from "media/join-family/1.gif";
import Two from "media/join-family/2.gif";
import Three from "media/join-family/3.gif";
import Four from "media/join-family/4.gif";
import Five from "media/join-family/5.gif";
import Six from "media/join-family/6.gif";
import Seven from "media/join-family/7.gif";
import Eight from "media/join-family/8.gif";

const Letstalk = () => {
    return (
        <section>
            <div className="hidden md:block py-[100px] lg:py-[200px] overflow-hidden">
                <div className="container relative">
                    <div className="hidden md:grid grid-cols-1 grid-flow-col">
                        <div className="rotate-[3deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] mt-[4rem] relative z-[1] ml-[0rem] bg-black">
                            <Image src={One} alt="gif" className="w-full h-full opacity-60" />
                        </div>
                        <div className="rotate-[11deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[0] ml-[-35rem] lg:ml-[-58rem] 2xl:ml-[-68rem] mt-[6rem] bg-black">
                            <Image src={Two} alt="gif" className="w-full h-full opacity-60" />
                        </div>
                        <div className="rotate-[-8deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[2] ml-[-35rem] lg:ml-[-50rem] 2xl:ml-[-60rem] bg-black">
                            <Image src={Three} alt="gif" className="w-full h-full opacity-60" />
                        </div>
                        <div className="rotate-[-11deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[3] ml-[-25rem] lg:ml-[-40rem] mt-[8rem] 2xl:ml-[-50rem] bg-black">
                            <Image src={Four} alt="gif" className="w-full h-full opacity-60" />
                        </div>
                        <div className="rotate-[11deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[0] ml-[-25rem] lg:ml-[-32rem] lg:mt-[-3rem] 2xl:ml-[-42rem] bg-black">
                            <Image src={Five} alt="gif" className="w-full h-full opacity-60" />
                        </div>
                        <div className="rotate-[5deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[2] ml-[-22rem] mt-[6rem] 2xl:ml-[-32rem] bg-black">
                            <Image src={Six} alt="gif" className="w-full h-full opacity-60" />
                        </div>
                        <div className="rotate-[-10deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[3] ml-[-12rem] mt-[3rem] 2xl:ml-[-22rem] bg-black">
                            <Image src={Seven} alt="gif" className="w-full h-full opacity-60" />
                        </div>
                        <div className="rotate-[5deg] w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] xl:w-[18rem] xl:h-[18rem] relative z-[0] ml-[-12rem] mt-[3rem] bg-black">
                            <Image src={Eight} alt="gif" className="w-full h-full opacity-60" />
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 flex-col">
                        <h2 className="text-[60px] lg:text-[80px] font-megat tracking-wider font-extrabold text-transparent lett" style={{
                            "WebkitTextStrokeWidth": "0.1rem", "WebkitTextStrokeColor": "#fff"
                        }}>JOIN THE</h2>
                        <h2 className="text-[40px] lg:text-[60px] text-black md:text-white font-normal">
                            WebDesignHub <span className="font-megat font-extrabold">Family</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Letstalk;
// // Imports Components
// import Button from "@/components/button/button";
// import Image from "next/image";
// import Link from "next/link";
// // Import Images
// import letstalk from "media/letstalk.png";

// const Letstalk = ({ content }) => {
//     const { title, desc } = content;
//     return (
//         <section>
//             <div className="__homeHeroGradientBg py-10 lg:py-20 xl:py-24 relative overflow-hidden z-[1]">
//                 <div className="container">
//                     <div className="flex items-end lg:items-center lg:gap-5 flex-wrap lg:flex-nowrap">
//                         <div className="basis-full lg:basis-[40%] mb-8 lg:mb-0">
//                             <h3 className="text-2xl lg:text-4xl leading-none xltext-5xl font-megat text-white font-normal">{title}</h3>
//                             <p className="text-base text-white font-normal">{desc}</p>
//                         </div>
//                         <div className="basis-[50%] lg:basis-[35%] mb-8 md:mb-0">
//                             <Link href="tel:(855)888-8399" className="text-2xl lg:text-4xl leading-none xltext-5xl font-normal font-megat  text-white block mb-4">(855) 888-8399</Link>
//                             <div className="flex items-center gap-3">
//                                 <Button text="Start Live Chat"
//                                     icon={true}
//                                     color="bg-[#AE86F9] text-white"
//                                     hover="hover:bg-[#000000]"
//                                     link="javascript:$zopim.livechat.window.show();" />
//                                 <Button text="(855) 888-8399"
//                                     color="bg-transparent text-white"
//                                     border="border-2 border-[#AE86F9]"
//                                     hover="hover:bg-[#AE86F9]"
//                                     link="tel:(855)888-8399" />
//                             </div>
//                         </div>
//                         <div className="basis-[50%] lg:basis-[25%]">
//                             <Link href="mailto:info@webdesignhub.co" className="text-xl lg:text-2xl font-medium font-sans text-white">Discuss Your Ideas <br />Info@WebDesignHub.Co</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="absolute top-0 lg:bottom-0 lg:top-auto left-0 z-[-1]">
//                     <Image src={letstalk} alt="letstalk" />
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Letstalk;