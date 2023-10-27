// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/website-development/services/services";
import Portfolio from "@/components/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Packages from "@/components/packages/packages";
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
        page: "websiteDevelopment",
        subtitle: "Website Design & Development",
        title: "100% Custom Websites By Top Website Development Company",
        desc: "Tired of generic websites that don't make an impact? Experience the difference with our top design and website development company where we uniquely represent your brand and drive results.",
        img: {
            src: "/website-development/hero/hero.png",
            width: "395",
            height: "805",
        },
        form: true
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "websiteDevelopment",
        title: "Let us develop a responsive website to help you attract more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        img: {
            src: "/website-development/smallBanner.png",
            width: "623",
            height: "466",
        },
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Web Development Packages",
        title: "Budget-Friendly Website Development Company",
        desc: "Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.",
        key: 2,
        name: "Website Development"
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
                value: "dark",
                label: "Dark",
                images: [
                    "/portfolios/website-design/dark/1.jpg",
                    "/portfolios/website-design/dark/2.jpg",
                    "/portfolios/website-design/dark/3.jpg",
                    "/portfolios/website-design/dark/4.jpg",
                    "/portfolios/website-design/dark/5.jpg",
                    "/portfolios/website-design/dark/6.jpg",
                    "/portfolios/website-design/dark/7.jpg",
                    "/portfolios/website-design/dark/8.jpg",
                    "/portfolios/website-design/dark/9.jpg",
                ],
            },
            {
                value: "feminine",
                label: "Feminine",
                images: [
                    "/portfolios/website-design/feminine/1.jpg",
                    "/portfolios/website-design/feminine/2.jpg",
                    "/portfolios/website-design/feminine/3.jpg",
                    "/portfolios/website-design/feminine/4.jpg",
                    "/portfolios/website-design/feminine/5.jpg",
                    "/portfolios/website-design/feminine/6.jpg",
                    "/portfolios/website-design/feminine/7.jpg",
                    "/portfolios/website-design/feminine/8.jpg",
                    "/portfolios/website-design/feminine/9.jpg",
                ],
            },
            {
                value: "light",
                label: "Light",
                images: [
                    "/portfolios/website-design/light/1.jpg",
                    "/portfolios/website-design/light/2.jpg",
                    "/portfolios/website-design/light/3.jpg",
                    "/portfolios/website-design/light/4.jpg",
                    "/portfolios/website-design/light/5.jpg",
                    "/portfolios/website-design/light/6.jpg",
                    "/portfolios/website-design/light/7.jpg",
                    "/portfolios/website-design/light/8.jpg",
                    "/portfolios/website-design/light/9.jpg",
                ],
            },
            {
                value: "masculine",
                label: "Masculine",
                images: [
                    "/portfolios/website-design/masculine/1.jpg",
                    "/portfolios/website-design/masculine/2.jpg",
                    "/portfolios/website-design/masculine/3.jpg",
                    "/portfolios/website-design/masculine/4.jpg",
                    "/portfolios/website-design/masculine/5.jpg",
                    "/portfolios/website-design/masculine/6.jpg",
                    "/portfolios/website-design/masculine/7.jpg",
                    "/portfolios/website-design/masculine/8.jpg",
                    "/portfolios/website-design/masculine/9.jpg",
                ],
            }
        ]
    };
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "The experience of working with Creative Logo Designs has been wonderful. They have surpassed our expectations at every turn, starting with the initial consultation and ending with the launch. Their team's dedication to detail, originality, and technological expertise were essential to realizing our vision. Due to their dedication to quality, our website not only looks amazing but also runs without a hitch. Anyone looking for top-notch web development services should get in contact with them immediately.",
            name: "John Mitchell",
            jd: false,
            profile: "/website-development/reviews/1.png"
        },
        {
            message: "For years, Creative Logo Designs has been our dependable website development partner, and they never cease to wow us. It's amazing how well they can translate complicated concepts into web pages that are easy to use. The team's commitment to comprehending our brand and goals has produced websites that are an ideal representation of us. Their superb post-launch assistance makes them the ideal long-term partner. I am quite pleased with their services.",
            name: "Sarah Anderson",
            jd: false,
            profile: "/website-development/reviews/2.png"
        },
        {
            message: "Our website development agency is the best ally we discovered who actually cared about our success. Every project exhibits innovation, technical mastery, and attention to detail. The unique features and perfect operation of our website have increased user interaction and conversion rates. We appreciate their spirit of cooperation and persistent commitment to our objectives. Contact Creative Logo Designs and get yourself on a journey of success.",
            name: "Michael George",
            jd: false,
            profile: "/website-development/reviews/3.png"
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
                            "@context": "http://schema.org",
                            "@type": "Product",
                            "name": "Website Development Company",
                            "description": "Creative Logo Designs provides top-tier website development services, leveraging the latest technologies to build scalable, responsive, and user-friendly websites tailored to meet the unique needs of businesses.",
                            "brand": {
                                "@type": "brand",
                                "name": "Creative Logo Designs"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "141"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;