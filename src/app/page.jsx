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
                    "/portfolios/logo-design/combination/1.png",
                    "/portfolios/logo-design/combination/2.png",
                    "/portfolios/logo-design/combination/3.png",
                    "/portfolios/logo-design/emblem/1.png",
                    "/portfolios/logo-design/emblem/2.png",
                    "/portfolios/logo-design/emblem/3.png",
                    "/portfolios/logo-design/mascot/1.png",
                    "/portfolios/logo-design/mascot/2.png",
                    "/portfolios/logo-design/mascot/3.png",
                ],
            },
            {
                value: "websiteDesign",
                label: "website design",
                images: [
                    "/portfolios/website-design/dark/1.jpg",
                    "/portfolios/website-design/dark/2.jpg",
                    "/portfolios/website-design/dark/3.jpg",
                    "/portfolios/website-design/feminine/1.jpg",
                    "/portfolios/website-design/feminine/2.jpg",
                    "/portfolios/website-design/feminine/3.jpg",
                    "/portfolios/website-design/light/1.jpg",
                    "/portfolios/website-design/light/2.jpg",
                    "/portfolios/website-design/light/3.jpg",
                ],
            },
            {
                value: "illustrationDesign",
                label: "illustration design",
                images: [
                    "/portfolios/illustration-design/dark/1.png",
                    "/portfolios/illustration-design/dark/2.png",
                    "/portfolios/illustration-design/dark/3.png",
                    "/portfolios/illustration-design/dark/4.png",
                    "/portfolios/illustration-design/dark/5.png",
                    "/portfolios/illustration-design/dark/6.png",
                    "/portfolios/illustration-design/dark/7.png",
                    "/portfolios/illustration-design/dark/8.png",
                    "/portfolios/illustration-design/dark/9.png",
                ],
            },
            {
                value: "applicationDesign",
                label: "application design",
                images: [
                    "/portfolios/app-design/dark/1.png",
                    "/portfolios/app-design/dark/2.png",
                    "/portfolios/app-design/dark/3.png",
                    "/portfolios/app-design/feminine/1.png",
                    "/portfolios/app-design/feminine/2.png",
                    "/portfolios/app-design/feminine/3.png",
                    "/portfolios/app-design/light/1.png",
                    "/portfolios/app-design/light/2.png",
                    "/portfolios/app-design/light/3.png",
                ],
            },
            {
                value: "branding",
                label: "Branding",
                images: [
                    "/portfolios/branding/dark/1.png",
                    "/portfolios/branding/dark/2.png",
                    "/portfolios/branding/dark/3.png",
                    "/portfolios/branding/dark/4.png",
                    "/portfolios/branding/dark/5.png",
                    "/portfolios/branding/dark/6.png",
                    "/portfolios/branding/dark/7.png",
                    "/portfolios/branding/dark/8.png",
                    "/portfolios/branding/dark/9.png",
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
                            "name": "Creative Logo Designs",
                            "url": "https://www.creativelogodesigns.io",
                            "logo": "https://www.creativelogodesigns.io/_next/static/media/logo.0278bd76.svg",
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