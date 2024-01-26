import getBestDestinations from "@/actions/home/actions";
import AboutUs from "@/components/about-us";
import BestDestinations from "@/components/best-destinations";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero-section";
import KnowSummit from "@/components/know-summit";
import Technologies from "@/components/technologies";

export default async function Home() {
  const posts = await getBestDestinations()

  return (
    <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto">
      <HeroSection />
      <KnowSummit />
      <BestDestinations posts={posts} />
      <AboutUs />
      <Contact />
      <Technologies />
    </div>
  )
}
