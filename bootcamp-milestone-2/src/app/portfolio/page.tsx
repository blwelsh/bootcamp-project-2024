import React from "react";
import connectDB from "@/database/db";
import PortfolioModel, { PortfolioObject }from "@/database/portfolioSchema"; 
import PortfolioEntry from "@/components/portfolioEntry";

async function getPortfolio() {
    await connectDB();

    try {
        const portfolios = await PortfolioModel.find().orFail();
        return portfolios;

    } catch (err) {
        console.log(err);
        return [];
    }
}

export default async function Portfolio() {

    const portfolioList: PortfolioObject[] = await getPortfolio();

    return (
        <main>
            <h1 className="page-title">Portfolio</h1>
            <div id="portfolio-container">
               {portfolioList.map(portfolio => 
                <PortfolioEntry
                name={portfolio.name}
                description={portfolio.description}
                image={portfolio.image}
                imageAlt={portfolio.imageAlt}
                url={portfolio.url}
                 key={portfolio.name} />
               )}
            </div> 


        </main>
    );
}