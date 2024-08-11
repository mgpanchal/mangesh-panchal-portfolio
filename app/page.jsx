import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-12 xl:pb-20">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="mb-3">
              <span className="h2">Hello I&apos;m</span> <br />
              <span className="h1 text-accent">Mg Panchal</span>
            </h1>

            <span className="text-xl">Full-Stack .NET Developer</span>

            <div class="max-w-[550px] text-[12px] mb-9 mt-3 items-center justify-center">

              <div class="rounded-lg bg-gradient-to-r from-accent via-red-500 to-orange-400 p-[1px]">

                <div class="rounded-lg p-3 h-full w-full bg-primary">

                  I excel at creating elegant digital experiences and I am
                  proficient in various programming languages technology&apos;s

                </div>

              </div>

            </div>


            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="md"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base 
                  hover:bg-accent hover:text-orange-400 hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
