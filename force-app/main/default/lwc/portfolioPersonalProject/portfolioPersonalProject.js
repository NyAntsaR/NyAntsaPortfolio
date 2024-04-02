import { LightningElement } from 'lwc';
import portfolioAssets from '@salesforce/resourceUrl/portfolioAssets';

export default class PortfolioPersonalProject extends LightningElement {
    bmiCalculatorPics = `${portfolioAssets}/portfolioAssets/BMI-Calculator.png`;

    projects = [
        {
            "name":"BMI Calculator App",
            "img": this.bmiCalculatorPics,
            "link": "https://nyantsaportfolio-dev-ed.develop.my.site.com/projects/bmi-calculator"
        }
    ];
}