import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from '../../course-details/course-details.component';
import { AssessmentProgressComponent } from '../../assessment-progress/assessment-progress.component';
import { StudentAttendanceComponent } from '../../student-attendance/student-attendance.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CourseDetailsComponent, AssessmentProgressComponent, StudentAttendanceComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[CourseDetailsComponent, AssessmentProgressComponent, StudentAttendanceComponent]
})
export class GenericModule { }
