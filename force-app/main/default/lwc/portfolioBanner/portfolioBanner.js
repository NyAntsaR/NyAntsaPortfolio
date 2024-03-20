import { LightningElement, wire, api } from 'lwc';
import portfolioAssets from '@salesforce/resourceUrl/portfolioAssets';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';
import LOCATION from '@salesforce/schema/Portfolio__c.Location__c';
import SUMMARY from '@salesforce/schema/Portfolio__c.Summary__c';
import LINKEDIN from '@salesforce/schema/Portfolio__c.Linkedin__c';
import TRAILHEAD from '@salesforce/schema/Portfolio__c.Trailhead__c';

export default class PortfolioBanner extends LightningElement {
    userPic = `${portfolioAssets}/portfolioAssets/nyantsa-portfolio.png`;

    @api recordId //= 'a00aj000005MWb2AAG';

    @wire(getRecord, {recordId: '$recordId', fields:[FULLNAME, DESIGNATION, LOCATION, SUMMARY, LINKEDIN, TRAILHEAD]})
    portfolioData;

    get fullName() {
        return getFieldValue(this.portfolioData.data, FULLNAME);
    }

    get designation() {
        return getFieldValue(this.portfolioData.data, DESIGNATION);
    }

    get location() {
        return getFieldValue(this.portfolioData.data, LOCATION);
    }

    get summary() {
        return getFieldValue(this.portfolioData.data, SUMMARY);
    }

    get linkedin() {
        return getFieldValue(this.portfolioData.data, LINKEDIN);
    }

    get trailhead() {
        return getFieldValue(this.portfolioData.data, TRAILHEAD);
    }

    handleDownload(){
        window.open("https://github.com/NyAntsaR/nyantsa-resume/raw/main/nyantsa-resume", "_blank");
    }
}