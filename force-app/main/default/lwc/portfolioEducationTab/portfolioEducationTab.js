import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

const columns = [
    { label: 'Institution Name', fieldName: 'InstitutionName' },
    { label: 'Field of study', fieldName: 'FieldsOfStudy' },
    { label: 'Degree', fieldName: 'Degree' },
    { label: 'Year Graduated', fieldName: 'YearGraduated' }
];

export default class PortfolioEducationTab extends LightningElement {
    @api recordId;
    educationList = [];
    columns = columns;
    

    @wire(getRelatedListRecords, {
        parentRecordId:'$recordId',
        relatedListId:'Educations__r',
        fields: ['Education__c.Institution_Name__c', 'Education__c.Fields_Of_Study__c', 'Education__c.Degree__c', 'Education__c.Year_Graduated__c'],
        sortBy:['Year_Graduated__c']
    })educationHandler({data, error}){
        if(data) {
            console.log('Education data:', JSON.stringify(data));
            this.formatEducation(data);
        }
        if(error) {
            console.error(error);
        }
    }

    formatEducation(data) {
        this.educationList = [...data.records].reverse().map(item  => {
            let id = item.id;
            const {Institution_Name__c, Fields_Of_Study__c, Degree__c, Year_Graduated__c} = item.fields;

            let InstitutionName = this.getValue(Institution_Name__c);
            let FieldsOfStudy = this.getValue(Fields_Of_Study__c);
            let Degree = this.getValue(Degree__c);
            let YearGraduated = this.getValue(Year_Graduated__c);

            return {id, InstitutionName, FieldsOfStudy, Degree, YearGraduated};
        });

        console.log("This is Education List:", JSON.stringify(this.educationList));
    }

    getValue(data) {
        return data && (data.displayValue || data.value);
    }
}