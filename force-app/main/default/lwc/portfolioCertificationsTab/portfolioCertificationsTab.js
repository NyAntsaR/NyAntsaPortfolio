import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SF_CERT_FIEDLS from '@salesforce/schema/Portfolio__c.Salesforce_Certifications__c';
import OTHER_CERT_FIEDLS from '@salesforce/schema/Portfolio__c.Other_Certifications__c';
import portfolioAssets from '@salesforce/resourceUrl/portfolioAssets';

export default class PortfolioCertificationsTab extends LightningElement {
    @api recordId;
    certlogo = `${portfolioAssets}/portfolioAssets/cert_logo.png`
    sfCertsList = [];
    otherCertList = [];

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [SF_CERT_FIEDLS, OTHER_CERT_FIEDLS]
    })certHandler({data, error}) {
        if(data) {
            console.log("certification handler data", JSON.stringify(data));
            this.formatData(data);
        }
        if(error) {
            console.error("certification Handler error", error);
        }
    }

    formatData(data) {
        const{	Salesforce_Certifications__c, Other_Certifications__c} = data.fields;
        this.sfCertsList = Salesforce_Certifications__c && Salesforce_Certifications__c.value ? Salesforce_Certifications__c.value.split(';').map(item => {
            return `Salesforce certified ${item}`
        }) : [];

        this.otherCertList = Other_Certifications__c && Other_Certifications__c.value ? Other_Certifications__c.value.split(',') : [];
    }
}