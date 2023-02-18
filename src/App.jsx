import React from "react";
import ArticleSummary from "./components/ArticleSummary";
import Navigation from "./components/Navigation";
import NewHighlight from "./components/NewHighlight";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <>
      <div className="flex flex-col text-veryDarkBlue bg-offWhite px-16 sm:px-2 sm:pb-8 text-sm">
        <header className="flex justify-between my-4 max-w-full overflow-hidden">
          <h1 className="font-fontOuter w-3/5 text-4xl font-extrabold">
            W.
          </h1>
          <Navigation />
        </header>

        <main className="flex sm:flex-col mb-5">
          <section className=" w-2/3 sm:w-full sm:mb-8">
            <div className="mb-4">
              {isMobile ? (
                <img src="\assets\images\image-web-3-mobile.jpg" alt="image" />
              ) : (
                <img src="\assets\images\image-web-3-desktop.jpg" alt="image" />
              )}
            </div>
            <div className="flex sm:flex-col">
              <h1 className="flex items-center text-4xl font-extrabold w-1/2 sm:w-full sm:mb-4 pr-4">
                The Bright Future of Web 3.0?
              </h1>
              <div className="w-1/2 sm:w-full">
                <p className="text-sm mb-6 text-darkGrayishBlue">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="bg-softRed text-offWhite hover:bg-veryDarkBlue transition duration-150 py-3 px-6 tracking-widest	font-semibold">
                  READ MORE
                </button>
              </div>
            </div>
          </section>

          <aside className="bg-veryDarkBlue ml-6 sm:ml-0 w-1/3 text-white px-5 sm:w-full">
            <h2 className="my-6 font-semibold text-2xl text-orange">New</h2>
            <NewHighlight
              highlightHead="Hydrogen VS Electric Cars"
              highlightSummary="Will hydrogen-fueled cars ever catch up to EVs?"
            />
            <hr className="text-darkGrayishBlue" />
            <NewHighlight
              highlightHead="The Downsides of AI Artistry"
              highlightSummary="What are the possible adverse effects of on-demand AI Image generation"
            />
            <hr className="text-darkGrayishBlue" />
            <NewHighlight
              highlightHead="Is VC Funding Drying Up"
              highlightSummary="Private funding by VC firms is down by 50% YOY. We take a look at what that means."
            />
          </aside>
        </main>

        <summary className="flex sm:flex-col justify-between max-w-full overflow-hidden">
          <ArticleSummary
            articleNumber="01"
            articleImg={"assets/images/image-retro-pcs.jpg"}
            articleTitle="Reviving Retro PC"
            articleSummary="What happens when old PCs are given modern upgrades?"
          />
          <ArticleSummary
            articleNumber="02"
            articleImg={"assets/images/image-top-laptops.jpg"}
            articleTitle="Top 10 Laptops of  2022"
            articleSummary="Our best picks for various needs and budgets"
          />
          <ArticleSummary
            articleNumber="03"
            articleImg={"assets/images/image-gaming-growth.jpg"}
            articleTitle="The Growth of Gaming"
            articleSummary="How the Pandemic has sparked fresh opportunities"
          />
        </summary>
      </div>
    </>
  );
}

export default App;
