"use client";
import { executiveCommittee, regionalPresident, Marketing, InformationTechnology, HumanCapital, Learning } from "./Data";
import { PersonCard } from "./PersonCard";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Structure() {
  return (
    <main>
      <header className="mx-10 md:mx-30 my-10">
        <h6 className="text-aqua font-tangerine">Organization Structure</h6>
        <h1 className="text-3xl font-bold py-3">Let's Meet our Team</h1>
        <p>kindly click picture for contact information</p>
      </header>

      <div className="mt-10 mb-40">
        {/* Executive Committee */}
        <section className="flex w-full relative h-auto md:h-[55rem] overflow-hidden pt-20 md:pt-50 mb-10 md:mb-20">
          <ParallaxProvider>
            <div className="relative w-full h-full">
              <Parallax speed={-30} className="absolute inset-0 z-0">
                <div
                  className="w-full h-full bg-no-repeat"
                  style={{
                    backgroundImage: "url('/assets/structure-bg/ExecutiveCommittee.svg')",
                    backgroundSize: "55%",
                    backgroundPosition: "center 5%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </Parallax>

              <div className="relative z-10 w-full h-full flex items-center justify-center py-10 md:py-0">
                <div className="container mx-auto px-4 py-8">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-10 xl:gap-40 justify-center items-center">
                    <div className="md:mt-30 order-2 md:order-1">
                      <PersonCard person={executiveCommittee[1]} />
                    </div>
                    <div className="order-1 md:order-2">
                      <PersonCard person={executiveCommittee[0]} />
                    </div>
                    <div className="md:mt-30 order-3 md:order-3">
                      <PersonCard person={executiveCommittee[2]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxProvider>
        </section>

        {/* Regional Presidents */}
        <section className="flex w-full relative h-auto md:h-[45rem] overflow-hidden mb-10 py-10">
          <ParallaxProvider>
            <div className="relative w-full h-full">
              <Parallax speed={-30} className="absolute inset-0 z-0">
                <div
                  className="w-full h-full bg-no-repeat"
                  style={{
                    backgroundImage: "url('/assets/structure-bg/RegionalPresident.svg')",
                    backgroundSize: "40%",
                    backgroundPosition: "center 15%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </Parallax>

              <div className="relative z-10 w-full h-full flex items-end justify-center py-10 md:py-0">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-30 xl:gap-70 w-full">
                    {regionalPresident.map((person) => (
                      <PersonCard key={person.id} person={person} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ParallaxProvider>
        </section>

        {/* Marketing */}
        <section className="flex w-full relative h-auto md:h-[40rem] overflow-hidden mb-10">
          <ParallaxProvider>
            <div className="relative w-full h-full">
              <Parallax speed={-30} className="absolute inset-0 z-0">
                <div
                  className="w-full h-full bg-no-repeat"
                  style={{
                    backgroundImage: "url('/assets/structure-bg/Marketing.svg')",
                    backgroundSize: "40%",
                    backgroundPosition: "left 20%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </Parallax>

              <div className="relative z-10 w-full h-full flex items-end justify-center py-10 md:py-0">
                <div className="container mx-auto px-4 md:px-10 xl:px-40 py-8">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                    {Marketing.map((person, index) => (
                      <div key={person.id} className={`${index > 0 ? "mt-10 md:mt-15" : ""}`}>
                        <PersonCard person={person} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ParallaxProvider>
        </section>

        {/* Learning */}
        <section className="flex w-full relative h-auto md:min-h-[40rem] overflow-hidden mb-10">
          <ParallaxProvider>
            <div className="relative w-full h-full">
              <Parallax speed={-30} className="absolute inset-0 z-0">
                <div
                  className="w-full h-full bg-no-repeat"
                  style={{
                    backgroundImage: "url('/assets/structure-bg/Learning.svg')",
                    backgroundSize: "35%",
                    backgroundPosition: "right 20%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </Parallax>

              <div className="relative z-10 w-full h-full flex items-end justify-center py-10 md:py-0">
                <div className="container mx-auto px-4 md:px-10 xl:px-40 py-8">
                  <div className="flex flex-col md:flex-wrap md:flex-row-reverse md:pt-40 md:gap-10">
                    {Learning.map((person, index) => (
                      <div key={person.id} className={`${index > 0 ? "mt-10 md:mt-15" : ""}`}>
                        <PersonCard person={person} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ParallaxProvider>
        </section>

        {/* Human Capital  */}
        <section className="flex w-full relative h-auto md:h-[40rem] overflow-hidden mb-10">
          <ParallaxProvider>
            <div className="relative w-full h-full">
              <Parallax speed={-30} className="absolute inset-0 z-0">
                <div
                  className="w-full h-full bg-no-repeat"
                  style={{
                    backgroundImage: "url('/assets/structure-bg/HumanCapital.svg')",
                    backgroundSize: "50%",
                    backgroundPosition: "left 20%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </Parallax>

              <div className="relative z-10 w-full h-full flex items-end justify-center py-10 md:py-0">
                <div className="container mx-auto px-4 md:px-10 xl:px-40 py-8">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                    {HumanCapital.map((person, index) => (
                      <div key={person.id} className={`${index > 0 ? "mt-10 md:mt-15" : ""}`}>
                        <PersonCard person={person} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ParallaxProvider>
        </section>

        {/* Information & Technology  */}
        <section className="flex w-full relative h-auto md:h-[40rem] overflow-hidden mb-20">
          <ParallaxProvider>
            <div className="relative w-full h-full">
              <Parallax speed={-30} className="absolute inset-0 z-0">
                <div
                  className="w-full h-full bg-no-repeat"
                  style={{
                    backgroundImage: "url('/assets/structure-bg/Information&Technology.svg')",
                    backgroundSize: "50%",
                    backgroundPosition: "right 20%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </Parallax>

              <div className="relative z-10 w-full h-full flex items-end justify-center py-10 md:py-0">
                <div className="container mx-auto px-4 :px-10 xl:px-40 py-8">
                  <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-10">
                    {InformationTechnology.map((person, index) => (
                      <div key={person.id} className={`${index > 0 ? "mt-10 md:mt-15" : ""}`}>
                        <PersonCard person={person} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ParallaxProvider>
        </section>
      </div>
    </main>
  );
}
