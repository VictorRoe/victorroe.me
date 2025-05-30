import { humaneFont, enigmaFont } from "@/app/styles/fonts"
import Image from "next/image"
import { Dock } from "@/app/components/dock";
import { Header } from "@/app/components/header";
export default function Home() {
  return (
    <>
      <div className="text-white px-32 min-h-screen">
        <Header />
        <main className="h-screen flex flex-col justify-center">
          <div>
            <div className="">

              <div className={humaneFont.className}>
                <h1 className="text-4xl md:text-8xl lg:text-[200px] xl:text-10xl leading-38">
                  HELLO.
                  <br />
                  {"I'M VICTOR"}
                </h1>
              </div>

              <div className="flex items-start gap-6 md:gap-8 justify-start ">

                <div className="flex-shrink-0 ml-77">
                  <Image
                    src="/arrow.svg"
                    alt="diagonal-arrow"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px]"
                  />
                </div>


                <div className={enigmaFont.className + " flex flex-col gap-1 md:gap-2 relative top-25"}>
                  <div className="text-sm md:text-base lg:text-lg leading-5">WEB DEVELOPER</div>
                  <div className="text-sm md:text-base lg:text-lg leading-5">SOFTWARE ENGINEER</div>
                  <div className="text-sm md:text-base lg:text-lg leading-5">CLOUD ENGINEER</div>
                </div>
              </div>
            </div>
          </div>
          <Dock />
        </main>
      </div>
    </>
  );
}
