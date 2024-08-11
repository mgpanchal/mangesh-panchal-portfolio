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
            <h1 className="mb-4">
              <span className="h2">Hello I&apos;m</span> <br />
              <span className="h1 text-accent">Mg Panchal</span>
            </h1>

            <span className="text-xl">Sr. Full-Stack, .NET Developer</span>

            <div class="card-wrapper h-[120px] w-[550px] mt-4 mb-4">
              <div class="card-content flex items-center justify-center text-xs">
                <div class="text-center p-5">
                I’m a <strong>Sr. Full-Stack Developer</strong> with strong skills in .NET MVC, .NET Core, React, and Node.js. 
                I excel in full-stack development and database management (MSSQL, PostgreSQL), and have 
                experience with AWS and Azure for cloud solutions. My focus is on delivering high-quality, 
                scalable applications.
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
                  containerStyles="flex gap-4"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base 
                  hover:bg-orange-400 hover:text-accent hover:border-none hover:transition-all duration-500"
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
