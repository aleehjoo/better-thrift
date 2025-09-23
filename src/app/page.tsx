import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopByCategory from "@/components/ShopByCategory";

export default function Page() {
    return (
        <div>
            <Navbar/>
            <main>
                <HeroSection/>
                <ShopByCategory />
            </main>
        </div>
    );
}
