// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/creative-copywriting/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Packages from "@/components/packages/packages";
import Script from "next/script";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "creativeCopywriting",
        subtitle: "Top Copywriters For Hire",
        title: "Dominate Your Market with Our Creative Copywriting Company",
        desc: "Creative Logo Designs shapes your words and ideas into perfectly persuasive tales and narratives. As a highly competitive copywriting company, we grab the attention of your audience, driving positive outcomes. Our team comprises of experienced;",
        img: {
            src: "/creative-copywriting/hero/hero.png",
            width: "590",
            height: "672",
        },
        form: true
    };
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "creativeCopywriting",
        title: "Weave Your Digital Dreams with Our Professional Copywriters",
        desc: "Top copywriters at Creative Logo Designs write the best content distinguishing your business from others. Our strategic finesse helps create the web presence everyone wishes for.",
        img: {
            src: "/creative-copywriting/smallBanner.png",
            width: "400",
            height: "399",
        },
    };
    // Array for Packages Component Props
    const packages = {
        subtitle: "Reasonable Prices",
        title: "That <span class='text-red'>Fits</span> Your Budget",
        desc: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        key: 9,
        name: "Creative Copy Writing"
    }
    // Array for Letstalk Component Props
    const letstalk = {
        title: "Let’s Talk.",
        desc: "Connect with us and let our professional copywriters help you to achieve your business goals without facing any hassles."
    }
    // Array for Reviews Component Props
    const reviews = [
        {
            message: "I'm pleased with the authoring assistance I got from Creative Logo Designs. They immediately demonstrated a profound grasp of my business and goals when I got in touch with them. The content that they provided was not only interesting, but it also precisely reflected the tone and values of my brand. They exceeded my expectations and improved the way I communicated with my target audience. You need to look no further than Creative Logo Designs for excellent copywriting services!",
            name: "Emily Thompson",
            jd: false,
            profile: "/creative-copywriting/reviews/1.png"
        },
        {
            message: "Our top-secret tool for creating intriguing material is Creative Logo Designs. Our brand's soul was brilliantly captured by their copywriters, who translated it into the language that connects with our target audience. Their work has improved our brand's reputation and increased our online visibility, from website text to social media postings. They certainly deserve praise for their commitment to quality. This copywriting agency is a wonderful copywriting partner, and we appreciate them",
            name: "Karen Roberts",
            jd: false,
            profile: "/creative-copywriting/reviews/2.png"
        },
        {
            message: "The copywriting services offered by Creative Logo Designs are priceless. Their team has a special aptitude for transforming concepts into compelling and interesting material. They regularly provide outstanding outcomes, whether they are building engaging landing sites or writing catchy headlines. Since joining forces with Creative Logo Designs, we've noticed a huge improvement in both our conversion rates and consumer engagement. They truly provide value to our company",
            name: "Laura Turner",
            jd: false,
            profile: "/creative-copywriting/reviews/3.png"
        },

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
                            "@context": "http://schema.org/",
                            "@type": "Product",
                            "name": "Creative Copywriting Company",
                            "description": "Creative Logo Designs offers expert creative copywriting services, delivering persuasive and captivating content that engages audiences and drives brand success.",
                            "brand": {
                                "@type": "brand",
                                "name": "Creative Logo Designs"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "450"
                            }
                        }
                    `}
                </Script>
            </main>
        </>
    );
}

export default Page;