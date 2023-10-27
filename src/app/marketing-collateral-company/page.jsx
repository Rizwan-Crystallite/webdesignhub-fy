// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/marketing-collateral/services/services";
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
        page: "marketingCollateral",
        subtitle: "Top Marketing Collateral Company",
        title: "Hire Marketing Collateral Company For Superior Engagement",
        desc: "Looking for experts to enhance your content and reach your audience effectively? At Creative Logo Designs, our team consists of top-notch content writers and marketers who can create engaging content to grow and retain your customer base with confidence.",
        img: {
            src: "/marketing-collateral/hero/hero.png",
            width: "489",
            height: "642",
        },
        form: true
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "marketingCollateral",
        title: "Hire Us For Powerful Marketing Collateral Service",
        desc: "With the help of effective Marketing Collateral Services at Creative Logo Designs, start your digital adventure. ",
        img: {
            src: "/marketing-collateral/smallBanner.png",
            width: "431",
            height: "460",
        },
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That <span class='text-red'>Fits</span> Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 3,
        name: "Marketing Collateral"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Let’s Talk",
        desc: "Connect with us and let our professional copywriters help you to achieve your business goals without facing any hassles."
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
            },
        ]
    };
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "Working with Creative Logo Designs, the marketing collateral team helped change the game. Every brochure, flyer, and presentation they've created for us demonstrates their limitless ingenuity. Our updated material has left our clients really thrilled, and it surely helped to our recent success. I personally recommend them to each one of you.",
            name: "Emily Kennedy",
            jd: false,
            profile: "/marketing-collateral/reviews/1.png"
        },
        {
            message: "I wanted marketing materials for my small business that would have a huge impact on a tight budget. This marketing collateral team not only got my concept but also made the most of every dollar to produce materials of the highest caliber. Their attention to detail on everything from business cards to fliers has improved the visibility of my brand. Since using their material, I've noticed a substantial rise in inquiries and purchases. Thank you to each team player for helping me throughout everything and for remaining committed.",
            name: "Michael Sherling",
            jd: false,
            profile: "/marketing-collateral/reviews/2.png"
        },
        {
            message: "Event preparation demands attention to detail, and my go-to resource for outstanding promotional materials has been Creative Logo Designs. They've assisted me in turning events into life-changing experiences, with anything from attractive posters to interesting pamphlets. It is just amazing how well they are able to capture the soul of each event and transform it into collateral. Without them, I wouldn't dare attempt to organize a gathering.",
            name: "Sarah Kyle",
            jd: false,
            profile: "/marketing-collateral/reviews/3.png"
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
                            "name": "Marketing Collateral Company",
                            "description": "Creative Logo Designs specializes in creating compelling marketing collateral that effectively communicates your brand's message, engages audiences, and supports sales efforts.",
                            "brand": {
                                "@type": "brand",
                                "name": "Creative Logo Designs"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "567"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;