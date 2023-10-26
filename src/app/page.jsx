// Import Page Components
import Hero from "@/components/hero/hero";
import Approach from "@/components/home/Services/Services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Services from "@/components/services/services";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "home",
        subtitle: "Top Web Design Company",
        title: "Creating 100% Original Custom Website Designs",
        desc: "Frustrated by underperforming web designs? It's time for a change and we can help. Website Design Hub is trusted by businesses nationwide. We are a top-rated and affordable web design company, known for creating websites that are:",
        img: {
            src: "/home/new/hero/hero.png",
            width: "508",
            height: "818",
            css: "mb-[-100px]"
        },
        form: false
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "home",
        title: "Let us develop a responsive website to help you attract more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        img: {
            src: "/home/new/smallBanner.png",
            width: "430",
            height: "419",
            css: "absolute right-0 bottom-0"
        },
    };
    // Array for Services Component Props
    const services = {
        title: "Designing & Developing Digital Delights",
        desc: "We specialize in custom logo design, mobile application design and website development. Our diverse team at Web \n Design Hub excels in digital marketing, SEO, and delivering persuasive copywriting. ",
        btnBg: "bg-[#7F6CC7]",
        btnBorder: "border-[#7F6CC7]",
        btnHover: "hover:bg-[#7F6CC7]",
        btnColor: "text-black",
        tabs: [
            {
                value: "logoDesign",
                label: "logo design",
                images: [
                    "/logo-design/services/2d/1.png",
                    "/logo-design/services/3d/1.png",
                    "/logo-design/services/emblem/1.jpg",
                    "/logo-design/services/illustrative/1.jpg",
                    "/logo-design/services/letter/1.jpg",
                    "/logo-design/services/mascot/1.png",
                ],
            },
            {
                value: "websiteDesign",
                label: "website design",
                images: [
                    "/home/services/website-design/1.jpg",
                    "/home/services/website-design/2.png",
                    "/home/services/website-design/3.png",
                    "/home/services/website-design/4.png",
                    "/home/services/website-design/5.png",
                    "/home/services/website-design/6.png",
                ],
            },
            {
                value: "illustrationDesign",
                label: "illustration design",
                images: [
                    "/home/services/illustration-design/1.png",
                    "/home/services/illustration-design/2.png",
                    "/home/services/illustration-design/3.png",
                    "/home/services/illustration-design/4.png",
                    "/home/services/illustration-design/5.png",
                    "/home/services/illustration-design/6.png",
                ],
            },
            {
                value: "applicationDesign",
                label: "application design",
                images: [
                    "/home/services/application-design/1.png",
                    "/home/services/application-design/2.png",
                    "/home/services/application-design/3.png",
                    "/home/services/application-design/4.png",
                    "/home/services/application-design/5.png",
                    "/home/services/application-design/6.png",
                ],
            }
        ]
    };
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Approach />
                <SmallBanner content={smallbanner} />
                <Services content={services} />
                <Letstalk content={letstalk} />
                <Reviews />
                <Weare />
                <Contact />
                <Footer />
                <Script id="general-schema" type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Web Design Hub",
                            "url": "https://www.webdesignhub.co",
                            "logo": "https://www.webdesignhub.co/_next/static/media/logo.0278bd76.svg",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "855 888-8399",
                                "areaServed": "US"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;