// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/mobile-application/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Portfolio from "@/components/services/services";

const page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "mobileApplication",
        subtitle: "Mobile App Design Company",
        title: "Experience Building A Mobile App At Its Finest",
        desc: "Creative Logo Designs is leading the way in mobile app design and development innovation. Our expertise extends beyond  design, and we provide mobile app developers with the essential resources, enabling them to build efficient mobile applications for businesses.",
        img: {
            src: "/mobile-application/hero/hero.png",
            width: "373",
            height: "700",
        },
        form: true
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "mobileApplication",
        title: "Let us develop a responsive website to help you attract more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        img: {
            src: "/mobile-application/smallBanner.png",
            width: "433",
            height: "480",
        },
    };
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    // Array for Portfolio Component Props
    const portfolio = {
        title: "See it. You Must Have Faith",
        desc: "Creative Logo Designs counts itself incredibly fortunate to have worked with such wonderful customers and provided them with excellent service.",
        tabs: [
            {
                value: "dark",
                label: "Dark",
                images: [
                    "/portfolios/app-design/dark/1.png",
                    "/portfolios/app-design/dark/2.png",
                    "/portfolios/app-design/dark/3.png",
                    "/portfolios/app-design/dark/4.png",
                    "/portfolios/app-design/dark/5.png",
                    "/portfolios/app-design/dark/6.png",
                    "/portfolios/app-design/dark/7.png",
                    "/portfolios/app-design/dark/8.png",
                    "/portfolios/app-design/dark/9.png",
                ],
            },
            {
                value: "feminine",
                label: "Feminine",
                images: [
                    "/portfolios/app-design/feminine/1.png",
                    "/portfolios/app-design/feminine/2.png",
                    "/portfolios/app-design/feminine/3.png",
                    "/portfolios/app-design/feminine/4.png",
                    "/portfolios/app-design/feminine/5.png",
                    "/portfolios/app-design/feminine/6.png",
                    "/portfolios/app-design/feminine/7.png",
                    "/portfolios/app-design/feminine/8.png",
                    "/portfolios/app-design/feminine/9.png",
                ],
            },
            {
                value: "light",
                label: "Light",
                images: [
                    "/portfolios/app-design/light/1.png",
                    "/portfolios/app-design/light/2.png",
                    "/portfolios/app-design/light/3.png",
                    "/portfolios/app-design/light/4.png",
                    "/portfolios/app-design/light/5.png",
                    "/portfolios/app-design/light/6.png",
                    "/portfolios/app-design/light/7.png",
                    "/portfolios/app-design/light/8.png",
                    "/portfolios/app-design/light/9.png",
                ],
            },
            {
                value: "masculine",
                label: "Masculine",
                images: [
                    "/portfolios/app-design/masculine/1.png",
                    "/portfolios/app-design/masculine/2.png",
                    "/portfolios/app-design/masculine/3.png",
                    "/portfolios/app-design/masculine/4.png",
                    "/portfolios/app-design/masculine/5.png",
                    "/portfolios/app-design/masculine/6.png",
                    "/portfolios/app-design/masculine/7.png",
                    "/portfolios/app-design/masculine/8.png",
                    "/portfolios/app-design/masculine/9.png",
                ],
            }
        ]
    };
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "Creative Logo Designs created a special and eye-catching custom logo design that perfectly shows what our financial consulting firm is about. Our team and clients love it, thanks to their amazing logo design skills.",
            name: "Jennifer Mitchell",
            jd: "Senior Financial Advisor",
            profile: "/mobile-application/reviews/1.png"
        },
        {
            message: "Their UI/UX web design service has significantly improved the visual appeal and functionality of our ecommerce website across devices. The user engagement on our website has increased a lot as well. Creative Logo Designs is the best web design company I have ever worked with.",
            name: "Sarah Johnson",
            jd: "E-commerce Manager",
            profile: "/mobile-application/reviews/2.png"
        },
        {
            message: "Hiring Creative Logo Designs for our tech startup web design and development has been one of the best decisions. It's not just about aesthetics; the functionality and user experience they delivered are nothing short of exceptional.",
            name: "Emily Parker",
            jd: "Co-founder",
            profile: "/mobile-application/reviews/3.png"
        }
    ]
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Services />
                <SmallBanner content={smallbanner} />
                <Portfolio content={portfolio} />
                <Letstalk content={letstalk} />
                <Reviews content={reviews} />
                <Weare />
                <Contact />
                <Footer />
                <Script id="general-schema" type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org/",
                            "@type": "Product",
                            "name": "Mobile App Design Company",
                            "description": "Creative Logo Designs is at the forefront of mobile app design company, creating innovative and user-centric app interfaces that foster engagement and elevate user experience.",
                            "brand": {
                                "@type": "brand",
                                "name": "Creative Logo Designs"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "660"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default page;