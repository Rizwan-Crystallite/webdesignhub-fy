// Next Components
import Image from "next/image";
// Images
import One from "media/home/new/services/one.svg";
import Two from "media/home/new/services/two.svg";
import Three from "media/home/new/services/three.svg";
import Four from "media/home/new/services/four.svg";
import Five from "media/home/new/services/five.svg";
// Css
import styles from "./services.module.css";
import Link from "next/link";

const Services = () => {
    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-[25px] sm:text-[30px] xl:text-[40px] font-megat font-extrabold leading-tight text-black mb-3">
                            Our Web Design Agency Takes Center <br className="hidden lg:block" /> Stage in <span className="text-red">Every Field of Design</span>
                        </h2>
                        <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal lg:w-2/3 lg:m-auto">
                            Creative Logo Designs has an In-house team of devoted professional web designers and developers, who are dedicated to delivering top-tier websites for businesses. Our website solutions include:
                        </p>
                    </div>
                    <div className="flex justify-evenly md:justify-between mt-10 sm:my-[70px] flex-wrap gap-5 sm:flex-nowrap sm:gap-y-0">
                        <div>
                            <Image src={One} alt="ui/ux" className={`${styles.keyFrame_1}`} />
                            <Link href="/website-development-company">
                                <h3 className="text-[20px] md:text-[30px] lg:text-[35px] xl:text-[40px] tracking-wider font-megat font-extrabold leading-tight text-black mt-3 hover:text-red transition-all">
                                    UI/UX
                                </h3>
                            </Link>
                        </div>
                        <div>
                            <Image src={Two} alt="application" className={`ml-5 md:ml-10 ${styles.keyFrame_2}`} />
                            <Link href="/mobile-app-design-company">
                                <h3 className="text-[20px] md:text-[30px] lg:text-[35px] xl:text-[40px] tracking-wider font-megat font-extrabold leading-tight text-black mt-3 hover:text-red transition-all">
                                    Application
                                </h3>
                            </Link>
                        </div>
                        <div>
                            <Image src={Three} alt="branding" className={`ml-5 md:ml-10 ${styles.keyFrame_1}`} />
                            <Link href="/marketing-collateral-company">
                                <h3 className="text-[20px] md:text-[30px] lg:text-[35px] xl:text-[40px] tracking-wider font-megat font-extrabold leading-tight text-black mt-3 hover:text-red transition-all">
                                    Branding
                                </h3>
                            </Link>
                        </div>
                        <div className="sm:hidden">
                            <Image src={Four} alt="smm" className={`ml-auto ${styles.keyFrame_2}`} />
                            <Link href="/digital-marketing-company">
                                <h3 className="text-[20px] md:text-[30px] lg:text-[35px] xl:text-[40px] tracking-wider font-megat font-extrabold leading-tight text-black mt-3 hover:text-red transition-all">
                                    Social Media
                                </h3>
                            </Link>
                        </div>
                        <div className="sm:hidden">
                            <Image src={Five} alt="brands" className={`ml-5 md:ml-10 ${styles.keyFrame_2}`} />
                            <Link href="/logo-design-company">
                                <h3 className="text-[20px] md:text-[30px] lg:text-[35px] xl:text-[40px] tracking-wider font-megat font-extrabold leading-tight text-black mt-3 hover:text-red transition-all">
                                    Logo Design
                                </h3>
                            </Link>
                        </div>
                    </div>
                    <div className="sm:flex justify-around hidden">
                        <div>
                            <Image src={Four} alt="smm" className={`ml-auto ${styles.keyFrame_2}`} />
                            <Link href="/digital-marketing-company">
                                <h3 className="text-[20px] md:text-[30px] lg:text-[35px] xl:text-[40px] tracking-wider font-megat font-extrabold leading-tight text-black mt-3 hover:text-red transition-all">
                                    Social Media
                                </h3>
                            </Link>
                        </div>
                        <div>
                            <Image src={Five} alt="brands" className={`ml-5 md:ml-10 ${styles.keyFrame_2}`} />
                            <Link href="/logo-design-company">
                                <h3 className="text-[20px] md:text-[30px] lg:text-[35px] xl:text-[40px] tracking-wider font-megat font-extrabold leading-tight text-black mt-3 hover:text-red transition-all">
                                    Logo Design
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;