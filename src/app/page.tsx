import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import { HeroParallax } from "@/components/global/connect-parallax";
import { ContainerScroll } from "@/components/global/container-scoll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { CardDemo } from "@/components/ui/carddemo";
import { Contact } from "@/components/ui/contact";
import { clients, products } from "@/lib/constant";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section
        className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible 
      relative flex flex-col items-center antialiased">
        {/* gradient */}
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        {/* huge animation */}
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] 
                  hover:bg-white group transition-all flex items-center justify-center gap-4 
                  hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span
                    className=" bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans 
                  group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black"
                  >Start Now</span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Axalya
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <section id="experience">
        <div className="flex items-center justify-center">
          <InfiniteMovingCards
            className="md:mt-[18rem] xl:mt-[30rem] mt-[-100px]"
            items={clients}
            direction="right"
            speed="slow"
          />
        </div>
      </section>
      <section className="relative z-10" id="about">
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="relative z-0 pt-24" id="services">
        <LampComponent />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 -mt-72 max-w-7xl mx-auto px-4">
          {/* Large card - 2x2 */}
          <div className="md:col-span-2 row-span-2 h-[600px]">
            <CardDemo 
              title="AI-Powered Revenue Recovery & Optimization" 
              description="Minimize lost sales and maximize revenue with intelligent cart abandonment detection and personalized, multi-channel recovery campaigns via SMS, emails, and ads to re-engage customers and convert abandoned carts into completed purchases." 
              image="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2xnbTBobTc5eXhkNHQ1M2VjM2VhOWFrZW11aWFpZGQ4cTBnbzdhciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RlwF2vFb4y7bDnWvcO/giphy.gif"
              className="h-full"
            />
          </div>
          
          {/* Medium cards - 1x1 */}
          <div className="md:col-span-1 h-[288px]">
            <CardDemo 
              title="Automated Customer Loyalty" 
              description="Automated, personalized post-purchase communications." 
              image="https://media.giphy.com/media/l4FsmpXJlu0VSteLe/giphy.gif?cid=ecf05e47cf311fnfkmuf8zvzrd5memapvp5pw9m7oh53gl7z&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              className="h-full"
            />
          </div>
          
          <div className="md:col-span-1 h-[288px]">
            <CardDemo 
              title="Inventory Management" 
              description="Product information synchronization and content publishing across all sales channels." 
              image="https://media.giphy.com/media/xUOwGdwxqXCukhgUmY/giphy.gif?cid=ecf05e475z0kas8v706ylmq9g8ea6tdajuqamfsk9jxjsxbx&ep=v1_gifs_related&rid=giphy.gif&ct=g"
              className="h-full"
            />
          </div>
          
          {/* Wide card - 2x1 */}
          <div className="md:col-span-3 lg:col-span-2 h-[288px]">
            <CardDemo 
              title="Dynamic Pricing & Competitive Edge" 
              description="Stay ahead and optimize margins with real-time competitor price monitoring and automated dynamic pricing. " 
              image="https://media.giphy.com/media/fSRQtBAzrPokPCItuu/giphy.gif?cid=ecf05e479djctztx4aqgob7ugws0yq4zpkh3e55k8vi9058x&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              className="h-full"
            />
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
