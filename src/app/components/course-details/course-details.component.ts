import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent  implements OnInit {
  course: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.course = this.dataService.getCourseData();
  }

}
