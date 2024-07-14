import Hero from "../components/Hero/page";
import MainContent from "@/components/MainContent/page";
import BackToTop from "@/components/BackToTop/page";

export default function Home() {
    return (
        <section className="flex flex-col justify-center items-center">
            <Hero />
            <MainContent />
            <BackToTop />
        </section>
    );
}
