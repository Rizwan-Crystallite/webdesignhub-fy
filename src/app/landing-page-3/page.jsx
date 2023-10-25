// Components
import Header from "./components/header";
import Hero from "./components/hero";
import SubHeader from "./components/subheader";

const Page = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <SubHeader />
            </main>
        </>
    )
}

export default Page;