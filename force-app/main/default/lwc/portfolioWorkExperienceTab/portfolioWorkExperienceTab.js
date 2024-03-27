import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class PortfolioWorkExperienceTab extends LightningElement {
    @api recordId; 
    workExperienceList = [];

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
            this.formatExperience(data);
        }
        if(error) {
            console.error(error);
        }
    }

    formatExperience(data) {
        this.workExperienceList = [...data.records].reverse().map(item  => {
            let id = item.id;
            const {Job_Start_Date__c, Company_Name__c, Description__c, Is_Current__c, Job_End_Date__c, Title__c, Work_Location__c} = item.fields;

            let JobStartDate = this.getValue(Job_Start_Date__c);
            let CompanyName = this.getValue(Company_Name__c);
            let Description = this.getValue(Description__c);
            let IsCurrent = this.getValue(Is_Current__c);
            let JobEndDate = this.getValue(Job_End_Date__c);
            let Title = this.getValue(Title__c);
            let WorkLocation = this.getValue(Work_Location__c);

            return {id, JobStartDate, CompanyName, Description, IsCurrent, JobEndDate, Title, WorkLocation};
        });

        console.log("This is work Experience List:", JSON.stringify(this.workExperienceList));
    }

    getValue(data) {
        return data && (data.displayValue || data.value);
    }
}