import { aboutAccordion } from "@/lib/data-placeholders";
import Container from "@/components/shared-components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { aboutAccordionType } from "@/lib/types/global-types";

import type { Metadata } from "next";
import BackLink from "@/components/shared-components/BackLink";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const accordionsCategory = aboutAccordion.filter(
    (item) => item.slug === params.slug
  );
  const accordions = accordionsCategory[0].accordions;
  return {
    title: accordions[0].title,
  };
}

export async function generateStaticParams() {
  return aboutAccordion.map((item: aboutAccordionType) => ({
    slug: item.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const accordionsCategory = aboutAccordion.filter(
    (item) => item.slug === params.slug
  );
  const accordions = accordionsCategory[0].accordions;
  return (
    <Container className="flex flex-col gap-10 ">
      <BackLink />
      <h1 className="text-2xl text-shade-strong font-medium sm:text-3xl lg:text-4xl">
        {accordionsCategory[0].title}
      </h1>
      <div className="">
        <Accordion type="single" collapsible className="w-full lg:w-[80%]  ">
          {accordions.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-xl font-medium text-left ">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-secondary">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
