import React from "react";
import ArticleSummary from "./components/ArticleSummary";
import Navigation from "./components/Navigation";
import NewHighlight from "./components/NewHighlight";

function App() {
  return (
    <>
      <header>
        <h1 className="font-fontOuter">W.</h1>
        <Navigation />
      </header>
      <section>
        <div>
          <img src="\assets\images\image-web-3-desktop.jpg" alt="image" />
        </div>
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>Read More</button>
        </div>
      </section>
      <aside>
        <h2>New</h2>
        <NewHighlight
          highlightHead="Hydrogen VS Electric Cars"
          highlightSummary="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <hr />
        <NewHighlight
          highlightHead="The Downsides of AI Artistry"
          highlightSummary="What are the possible adverse effects of on-demand AI Image generation"
        />
        <hr />
        <NewHighlight
          highlightHead="Is VC Funding Drying Up"
          highlightSummary="Private funding by VC firms is down by 50% YOY. We take a look at what that means."
        />
      </aside>
      <summary>
        <ArticleSummary
          articleNumber="01"
          articleImg={"assets/images/image-retro-pcs.jpg"}
          articleTitle="Reviving Retro PC"
          articleSummary="What happens when old PCs are given modern upgrades?"
        />
        <ArticleSummary
          articleNumber="02"
          articleImg={"assets/images/image-tops-laptops.jpg"}
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
    </>
  );
}

export default App;
