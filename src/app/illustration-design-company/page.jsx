// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/illustration-design/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Packages from "@/components/packages/packages";
import Script from "next/script";
import Portfolio from "@/components/services/services";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "illustrationDesign",
        subtitle: "Best Illustration Designers",
        title: "5-Star Rated Top Illustration Design Company",
        desc: "When you hire Creative Logo Designs,  you gain access to the best character illustrators, and gaming artwork. We make custom character designs, immersive gaming illustrations, and any related creative illustrations. Our skill in illustration design combines unique qualities that make us a distinctive illustration company.",
        img: {
            src: "/illustration-design/hero/hero.png",
            width: "638",
            height: "707",
        },
        form: true
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "Let us develop a responsive website to help you attract more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        img: {
            src: "/illustration-design/smallBanner.png",
            width: "424",
            height: "480",
        },
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That <span class='text-red'>Fits</span> Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 1,
        name: "Illustration Design"
    }
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
                value: "all",
                label: "All",
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
            }
        ]
    };
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "Creative Logo Designs created a special and eye-catching custom logo design that perfectly shows what our financial consulting firm is about. Our team and clients love it, thanks to their amazing logo design skills.",
            name: "Jennifer Mitchell",
            jd: "Senior Financial Advisor",
            profile: "/illustration-design/reviews/1.png"
        },
        {
            message: "Their UI/UX web design service has significantly improved the visual appeal and functionality of our ecommerce website across devices. The user engagement on our website has increased a lot as well. Creative Logo Designs is the best web design company I have ever worked with.",
            name: "Sarah Johnson",
            jd: "E-commerce Manager",
            profile: "/illustration-design/reviews/2.png"
        },
        {
            message: "Hiring Creative Logo Designs for our tech startup web design and development has been one of the best decisions. It's not just about aesthetics; the functionality and user experience they delivered are nothing short of exceptional.",
            name: "Emily Parker",
            jd: "Co-founder",
            profile: "/illustration-design/reviews/3.png"
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
                <Packages content={packages} />
                <Reviews content={reviews} />
                <Weare />
                <Contact />
                <Footer />
                <Script id="general-schema" type="application/ld+json">
                    {`
                        {
                            "@context": "http://schema.org/",
                            "@type": "Product",
                            "name": "Illustration Design Company",
                            "description": "Creative Logo Designs top premium illustration design Company, crafting bespoke artwork tailored to capture the essence of brands and bring creative ideas to life.",
                            "brand": {
                                "@type": "brand",
                                "name": "Creative Logo Designs"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "289"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;