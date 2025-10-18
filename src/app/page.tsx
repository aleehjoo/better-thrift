import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopByCategory from "@/components/ShopByCategory";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <div>
            <Navbar/>
            <main>
                <HeroSection/>
                <ShopByCategory />
            </main>
            <Footer/>
        </div>
    );
}
