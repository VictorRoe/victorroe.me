import { humaneFont, enigmaFont } from "@/app/styles/fonts"
import Image from "next/image"
import { Dock } from "@/app/components/dock";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      <header className="absolute top-0 right-0 p-6 md:p-8 lg:p-12">
        <Image src="/logo.svg" alt="Logo VictorRoe" width={250} height={250}/>
      </header>

      
      <main className="h-screen flex flex-col justify-center">
        <div className="px-6 md:px-12 lg:px-24">
          
          <div className="lg:ml-12">
            
            <div className={humaneFont.className}>
              <h1 className="text-4xl md:text-8xl lg:text-[200px] xl:text-10xl leading-38 ">
                HELLO.
                <br />
                I'M VICTOR
              </h1>
            </div>

            <div className="flex items-start gap-6 md:gap-8 mt-4 md:mt-6 lg:mt-8 ">
              
              <div className="flex-shrink-0">
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
