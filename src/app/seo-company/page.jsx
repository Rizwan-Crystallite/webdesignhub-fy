// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/seo-services/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Packages from "@/components/packages/packages";
import Letstalk from "@/components/letstalk/letstalk";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "seoServices",
        subtitle: "From Rankings to Revenue",
        title: "Turbocharge Your Traffic with Our SEO Company!",
        desc: "Witness the change as our professional SEO company, Creative Logo Designs, moves you from search engine ranks to higher income. We'll boost website traffic using our tested techniques so you can connect with your target market and experience real company success.",
        img: {
            src: "/seo-services/hero/hero.png",
            width: "623",
            height: "462",
            css: "lg:mb-[150px] xl:mb-[100px]"
        },
        form: true
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "ecommerce",
        title: "Dominate Search Engine Results With Our SEO Services",
        desc: "Don't delay your digital success, contact us today and schedule an obligation-free  SEO Consultation with us!",
        img: {
            src: "/seo-services/smallBanner.png",
            width: "597",
            height: "446",
        },
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "SEO Packages",
        title: "Increased <span class='text-red'>Profit on a Budget</span> with Our SEO Agency",
        desc: "Our affordable SEO agency will increase your profit margin without overspending – hire us to rank on search results in 30 days.",
        key: 5,
        name: "SEO"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Design Consultation",
        desc: "Contact us for a free consultation, and let's design your captivating logo, website, and mobile app together!"
    }
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "Words cannot explain how thankful I am that Creative Logo Designs was picked to handle our SEO requirements. They have a very outstanding crew. After we teamed up with them, our website's traffic quickly doubled, and our internet exposure rocketed. Because of their knowledge and commitment, our business is booming like never before. Look no further if you're seeking an SEO company that deliver  real results.",
            name: "Sarah Thomas",
            jd: false,
            profile: "/seo-services/reviews/1.png"
        },
        {
            message: "Our web visibility has changed in ways we could never have predicted because of Creative Logo Designs. Their staff took the time to learn about our company's objectives right away and then customized an SEO plan that was completely in line with them. The outcomes speak for themselves; our website now appears on the top page for a number of difficult-to-rank keywords, and organic traffic is constantly increasing. I strongly recommend anyone looking for top-notch SEO service contact Creative Logo Designs.",
            name: "Johnny Radcliffe",
            jd: false,
            profile: "/seo-services/reviews/2.png"
        },
        {
            message: "I've worked with an SEO Company before, but working with Creative Logo Designs has changed everything. Their team's knowledge exceeds others in every way. They not only raised our website's search engine ranks, but they also offered insightful feedback that helped us better our entire internet approach. Since cooperating with them, we have had incredible ROI. I wouldn't trust anybody else to handle our SEO since Creative Logo Designs is the genuine deal.",
            name: "Emily Madison",
            jd: false,
            profile: "/seo-services/reviews/3.png"
        }
    ]
    return (
        <>
            <main>
                <Header />
                <Hero content={hero} />
                <Services />
                <SmallBanner content={smallbanner} />
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
                            "name": "Seo Company",
                            "description": "Creative Logo Designs world's best SEO Company, employing cutting-edge techniques and strategies to enhance website visibility, drive organic traffic, and boost conversions.",
                            "brand": {
                                "@type": "brand",
                                "name": "Creative Logo Designs"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "641"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;