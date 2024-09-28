import Image from "next/image";
import { Button } from "../ui/button";
export default function Hero() {
  return (
    <section className="  bg-section w-full lg:h-[40rem] ">
      {/* content */}
      <div className="container flex flex-col  lg:flex-row  lg:gap-20  gap-10 items-center  justify-center ">
        <div
          className="flex flex-col items-center justify-center text-center  
                   text-grey font-medium sm:font-bold  -tracking-tight
                   md:px-10
                   lg:items-start lg:text-left lg:mb-28"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-6 mb-8">
            The association of citizenship and sustainable development
          </h1>
          <p
            className="text-xs text-gray-600 
                      sm:text-lg
                      lg:text-base"
          >
            A nation dedicated to the principles of the Sustainable Development
            Goals and a better future for the next generations.
          </p>
          <div className="flex gap-4 lg:gap-8 mt-10">
            <Button className="md:text-xl md:h-12 md:px-6 ">
              Get Involved
            </Button>
            <Button
              className="md:text-xl md:h-12 md:px-6 "
              variant={"secondary"}
            >
              Learn More &darr;
            </Button>
          </div>
        </div>

        <Image
          src="/img/Hero.webp"
          alt="hero image"
          width="250"
          height="250"
          // fill={true}
          sizes="(max-width : 768px) 50vw, 50vw"
          className="w-full h-auto md:w-[50%] md:h-[50%]  lg:w-full  2xl:w-[50%] object-cover"
        />
      </div>
    </section>
  );
}
