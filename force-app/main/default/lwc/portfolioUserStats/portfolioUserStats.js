import { LightningElement, api } from 'lwc';
import portfolioAssets from '@salesforce/resourceUrl/portfolioAssets';

export default class PortfolioUserStats extends LightningElement {
    trailheadRandBadge = `${portfolioAssets}/portfolioAssets/double-star-ranger.png`;

    @api badges;
    @api points;
    @api trails;

}