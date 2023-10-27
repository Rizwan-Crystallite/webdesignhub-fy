// Import Page Components
import Hero from "@/components/hero/hero";
import Letstalk from "@/components/letstalk/letstalk";
import Contact from "@/components/contact/contact";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Page = () => {
    // Array for Hero Component Props
    const hero = {
        page: "single",
        subtitle: "Top Web Designers",
        title: "Let's Create Your Dream Website Together",
        desc: "At Creative Logo Designs, we drive your business to success. From logo and website design to SEO and motion graphics, we offer top-quality services at affordable prices.",
        img: {
            src: "/contact-us/hero.png",
            width: "538",
            height: "591",
        },
        form: false
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
                <Letstalk content={letstalk} />
                <Contact />
                <Footer />
            </main>
        </>
    );
}

export default Page;