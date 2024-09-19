import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getCourseData() {
    return {
      code: 'BA3102',
      name: 'Quantitative Techniques',
      type: 'Program Elective',
      credits: '4',
      outcomes: ['C02', 'C04', 'C05', 'C07', 'C13', 'C014'],
    };
  }

  // Assessment Progress Data
  getAssessmentProgressData() {
    return {
      pending: [10, 5, 2, 7],
      completed: [20, 15, 10, 18],
    };
  }

  // Student Attendance Data
  getAttendanceData() {
    return {
      weeks: ['1/7', '8/7', '15/7', '22/7', '29/7'],
      attendance: [80, 85, 75, 90, 88],
    };
  }

  getProgramOutcomesData(){
    return [
      {
        code: 'PO1',
        title: 'Decision Making Skill',
        evaluation: 5,
        evaluationPercentage: 80,
        description: 'Application of tools & techniques relevant to management theories and practices...',
        mappedPEOs: 'PEO 5'
      },
      {
        code: 'PO2',
        title: 'Communication Skill',
        evaluation: 5,
        evaluationPercentage: 80,
        description: 'Ability to effectively communicate in professional and personal settings...',
        mappedPEOs: 'PEO 3'
      },
      {
        code: 'PO3',
        title: 'Employability Skill',
        evaluation: 5,
        evaluationPercentage: 80,
        description: 'Skills that enhance employability and ability to perform effectively in various roles...',
        mappedPEOs: 'PEO 4'
      }
    ]
  }
}
