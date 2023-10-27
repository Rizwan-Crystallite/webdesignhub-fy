// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/motion-graphics/services/services";
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
        page: "motionGraphics",
        subtitle: "Experience Motion Magic With",
        title: "Top Motion Graphic Design Company",
        desc: "Our creative motion graphics designers, with a strong combination of skills and innovative equipment create attractive, profitable 3D animations that will enrich your business with success.",
        img: {
            src: "/motion-graphics/hero/hero.png",
            width: "486",
            height: "750",
        },
        form: true
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "power of Visual by our Motion Graphics Designers.",
        desc: "We use animation, 3D modeling, and fascinating effects to give your stories a twist of practical life. Our work captivates the audience by enduring narratives.",
        img: {
            src: "/motion-graphics/smallBanner.png",
            width: "380",
            height: "420",
        },
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That <span class='text-red'>Fits</span> Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 4,
        name: "Motion Graphics"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Discuss with us and let us design motion graphics for you without facing any hassles."
    }
    // Array for Portfolio Component Props
    const portfolio = {
        title: "See it. You Must Have Faith",
        desc: "Creative Logo Designs counts itself incredibly fortunate to have worked with such wonderful customers and provided them with excellent service.",
        tabs: [
            {
                value: "2d-animation",
                label: "2D Animation",
                images: [
                    "/portfolios/motion-graphics/2d-animation/1.png",
                    "/portfolios/motion-graphics/2d-animation/2.png",
                    "/portfolios/motion-graphics/2d-animation/3.png",
                    "/portfolios/motion-graphics/2d-animation/4.png",
                    "/portfolios/motion-graphics/2d-animation/5.png",
                    "/portfolios/motion-graphics/2d-animation/6.png",
                    "/portfolios/motion-graphics/2d-animation/7.png",
                    "/portfolios/motion-graphics/2d-animation/8.png",
                    "/portfolios/motion-graphics/2d-animation/9.png",
                ],
            },
            {
                value: "3d-animation",
                label: "3D Animation",
                images: [
                    "/portfolios/motion-graphics/3d-animation/1.png",
                    "/portfolios/motion-graphics/3d-animation/2.png",
                    "/portfolios/motion-graphics/3d-animation/3.png",
                    "/portfolios/motion-graphics/3d-animation/4.png",
                    "/portfolios/motion-graphics/3d-animation/5.png",
                    "/portfolios/motion-graphics/3d-animation/6.png",
                    "/portfolios/motion-graphics/3d-animation/7.png",
                    "/portfolios/motion-graphics/3d-animation/8.png",
                    "/portfolios/motion-graphics/3d-animation/9.png",
                ],
            },
            {
                value: "enviornment",
                label: "Enviornment",
                images: [
                    "/portfolios/motion-graphics/enviornment/1.png",
                    "/portfolios/motion-graphics/enviornment/2.png",
                    "/portfolios/motion-graphics/enviornment/3.png",
                    "/portfolios/motion-graphics/enviornment/4.png",
                    "/portfolios/motion-graphics/enviornment/5.png",
                    "/portfolios/motion-graphics/enviornment/6.png",
                    "/portfolios/motion-graphics/enviornment/7.png",
                    "/portfolios/motion-graphics/enviornment/8.png",
                    "/portfolios/motion-graphics/enviornment/9.png",
                ],
            },
            {
                value: "informative",
                label: "Informative",
                images: [
                    "/portfolios/motion-graphics/informative/1.png",
                    "/portfolios/motion-graphics/informative/2.png",
                    "/portfolios/motion-graphics/informative/3.png",
                    "/portfolios/motion-graphics/informative/4.png",
                    "/portfolios/motion-graphics/informative/5.png",
                    "/portfolios/motion-graphics/informative/6.png",
                    "/portfolios/motion-graphics/informative/7.png",
                    "/portfolios/motion-graphics/informative/8.png",
                    "/portfolios/motion-graphics/informative/9.png",
                ],
            }
        ]
    };
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "Excellent work and exceptional services! With incredible logo animation and appealing motion graphics for our marketing campaigns, the team brought our brand to life. They definitely stand out due to their inventiveness and attention to detail.",
            name: "Kylie Madonna",
            jd: false,
            profile: "/motion-graphics/reviews/1.png"
        },
        {
            message: "I don’t have words to describe the services offered by Creative Logo Designs. I just want to state, “Mind Blowing Visual Effects!” The whole team gave their 101% with us on a high-profile event, and their visual effects were just amazing. They turned the event visuals we provided into something extraordinary. I would personally recommend each one of you to get your services from this Company.",
            name: "Ellen Brown",
            jd: false,
            profile: "/motion-graphics/reviews/2.png"
        },
        {
            message: "I am glad I chose Creative Logo Designs for character animation services. They were ideal for the animated figures we required for our educational materials program. Our audience likes the cartoons because they are engaging and attractive. Their crew is unmatched in terms of talent and professionalism.",
            name: "John Lennon",
            jd: false,
            profile: "/motion-graphics/reviews/3.png"
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
                            "name": "Motion Graphic Design Company",
                            "description": "Creative Logo Designs is your cutting-edge motion graphic design company, producing captivating animations that engage, entertain, and effectively convey your brand message.",
                            "brand": {
                                "@type": "brand",
                                "name": "Creative Logo Designs"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "147"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;