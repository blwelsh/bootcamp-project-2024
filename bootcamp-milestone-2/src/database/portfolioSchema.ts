import mongoose, { Schema } from "mongoose";

export type PortfolioObject = {
    name: string,
    description: string,
    image: string,
    imageAlt: string,
    url: string,
}

const portfolioSchema = new Schema<PortfolioObject>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    imageAlt: {type: String, required: true},
    url: {type: String, required: true},
});

const PortfolioModel = mongoose.models['portfolios'] || mongoose.model('portfolios', portfolioSchema);
export default PortfolioModel;