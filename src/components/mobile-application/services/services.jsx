// Import Components
import Image from "next/image";
import Button from "@/components/button/button";
// Import Images
import screens from "media/mobile-application/services/screens.png";
import CTA from "C/CTA";

const Services = () => {
    return (
        <section>
            <div className="pb-[60px] md:pb-[100px]">
                <div className="container">
                    <div className="lg:w-2/3 mb-10">
                        <span className="text-base font-normal text-red">Mobile App Development</span>
                        <h2 className="text-[20px] sm:text-[25px] xl:text-[35px] font-megat font-extrabold leading-tight text-black mb-2">
                            Agile Mobile Application Development &
                            Design Company
                        </h2>
                        <p className="text-base text-black font-normal">At Creative Logo Designs, our app developers utilize an Agile approach to build mobile apps through close collaboration with our clients, ensuring timely delivery of the mobile app design and prototype, while constantly improving the development process.</p>
                    </div>
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
                    <Image src={screens} alt="screens" className="block m-auto mt-10" />
                </div>
            </div>
        </section>
    )
}

export default Services;