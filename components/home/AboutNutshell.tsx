import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function AboutNutshell() {
  return (
    <section className="bg-section md:bg-background">
      <div
        className="container md:bg-section md:rounded-3xl md:mx-auto md:px-12 md:py-10
       md:w-[80%] 2xl:px-28 2xl:py-20    flex flex-col items-center justify-center"
      >
        <h1 className="text-sm text-center font-medium uppercase tracking-widest mb-10 text-shade">
          About Us
        </h1>
        <p
          className="text-center text-sm md:text-lg text-grey font-medium md:font-normal 
            lg:text-xl xl:text-3xl xl:px-10 leading-relaxed"
        >
          Momtan organization has developed a strategic and forward-looking
          plan, to simulate the sustainable development goals of economic,
          social and environmental dimensions. It extends from 2021 to 2030.
        </p>
        <div className="flex gap-4 lg:gap-8 mt-10">
          <Link
            href={"/about-us"}
            className={`${buttonVariants({
              variant: "default",
            })} md:text-xl md:h-12 md:px-6`}
          >
            Our mission
          </Link>
          <Link
            href={"/about-us"}
            className={`${buttonVariants({
              variant: "secondary",
            })} md:text-xl md:h-12 md:px-6`}
          >
            Our team &darr;
          </Link>
        </div>
      </div>
    </section>
  );
}
