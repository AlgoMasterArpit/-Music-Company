
import FeaturedCourses from './components/FeaturedCourses';
import HeroSection from './components/Hero-Section'
import WhyChooseUs from './components/WhyChooseUs'
import { GridBackgroundDemo } from './components/gridbackground';
import { UpcomingWebinars } from './components/UpcomingWebinars'
import { Instructors } from './components/Instructors'
 import {Footer} from './components/Footer'
export default function Home() {
  return (

    <>
      <main className=" min-h-screen bg-black/[0.96] anitialiased bg-grid-white/[0.02]">

        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <GridBackgroundDemo />
        <UpcomingWebinars />
        <Instructors />
         <Footer/>

      </main>

    </>
  );
}
