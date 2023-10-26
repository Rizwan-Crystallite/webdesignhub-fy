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
                            {img && <Image src={img.src} alt="hero" proprity="true" className={`${img.css}`} width={img.width} height={img.height} />}
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