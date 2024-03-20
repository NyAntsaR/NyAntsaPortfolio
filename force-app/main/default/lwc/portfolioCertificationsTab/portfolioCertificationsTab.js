import { LightningElement, wire, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import SF_CERT_FIEDLS from '@salesforce/schema/Portfolio__c.Salesforce_Certifications__c';
import OTHER_CERT_FIEDLS from '@salesforce/schema/Portfolio__c.Other_Certifications__c';

export default class PortfolioCertificationsTab extends LightningElement {
    @api recordId;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [SF_CERT_FIEDLS, OTHER_CERT_FIEDLS]
    })certificationsDate;
}