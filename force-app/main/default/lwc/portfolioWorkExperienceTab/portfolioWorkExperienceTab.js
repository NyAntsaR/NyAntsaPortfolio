import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class PortfolioWorkExperienceTab extends LightningElement {
    @api recordId; 

    @wire( getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'WorkExperience__r',
        fields: ['Work_Experience__c.Job_Start_Date__c', 
                'Work_Experience__c.Company_Name__c', 
                'Work_Experience__c.Description__c', 
                'Work_Experience__c.Is_Current__c',
                'Work_Experience__c.Job_End_Date__c',
                'Work_Experience__c.Title__c',
                'Work_Experience__c.Work_Location__c']
    }) workExperienceHandler({data, error}) {
        if(data) {
            console.log('WorkingExperience Data', JSON.stringify(data));
        }
        if(error) {
            console.error(error);
        }
    }
}