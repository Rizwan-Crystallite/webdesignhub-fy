// Import Page Components
import Hero from "@/components/hero/hero";
import Services from "@/components/about-us/services/services";
import SmallBanner from "@/components/smallbanner/smallbanner";
import Reviews from "@/components/reviews/reviews";
import Weare from "@/components/weare/weare";
import Contact from "@/components/contact/contact";
import Letstalk from "@/components/letstalk/letstalk";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "single",
        subtitle: "Creative Logo Designs Where Brands",
        title: "Are Recognized & Businesses are Boosted",
        desc: "Welcome to Creative Logo Designs, the meeting place of creativity and expertise. We are your dependable partner in creating outstanding digital experiences, growing businesses, and making sure your brand stands out in the constant competitive environment.",
        img: {
            src: "/about-us/hero/hero.png",
            width: "453",
            height: "678",
        },
        form: true
    }; 
    // Array for Small Banner Component Props
    const smallbanner = {
        page: "home",
        title: "Allow us to assist you in developing a web presence.",
        desc: "Our web development team is here to assist you in reaching your business goals through the creation of an interesting and functional website.",
        img: {
            src: "/about-us/smallBanner.png",
            width: "430",
            height: "419",
            css: "absolute right-0 bottom-0"
        },
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
                <Services />
                <SmallBanner content={smallbanner} />
                <Letstalk content={letstalk} />
                <Reviews />
                <Weare />
                <Contact />
                <Footer />
            </main>
        </>
    );
}

export default Page;