import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GetStartedButton } from "@/components/buttons/GetStartedButton";
import { BusinessLine } from "@/components/dashboard/businessline";
import CallToActionComponent from "@/components/dashboard/calltoaction";
import Featuressection from "@/components/dashboard/feautressection";
import { Icons } from "@/components/shared/icons";
import {VideoCameraIcon} from '@heroicons/react/24/outline';
import { ChevronRightIcon } from "@radix-ui/react-icons";

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container flex max-w-[70rem] flex-col items-center gap-5 text-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "animate-fade-up opacity-0",
            )}
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            target="_blank"
          >
            Whitelabel support available for agencies
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Link>

          <h1
            className="animate-fade-up font-urban text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Automate Document Workflows{" "}
              <span className="relative bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text font-extrabold text-transparent">
                in&nbsp;Minutes
              </span>
              {" "}with No-Code
            </Balancer>
          </h1>

          <p
            className="max-w-[42rem] animate-fade-up leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Extract data from any document with our AI powered OCR models, and automate business processes with simple no-code workflow builder.
            </Balancer>
          </p>

          <div
            className="flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <GetStartedButton />
            <Link
              href={"/signin"}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "px-4",
              )}
            >
              <VideoCameraIcon className="mr-2 h-4 w-4" />
              <p>
                Watch{" "}
                <span className="hidden sm:inline-block">Demo</span>{" "}
                Video
              </p>
            </Link>
          </div>
        </div>
      </section>
      <BusinessLine />
      <section>
        <Featuressection />
      </section>
      <section>
        <CallToActionComponent />
      </section>
      {/* <section>
        <FeatureSection1 />
      </section> */}
    </>
  );
}
