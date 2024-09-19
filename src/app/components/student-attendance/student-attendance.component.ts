import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss'],
})
export class StudentAttendanceComponent  implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    const ctx = document.getElementById('studentAttendanceChart') as HTMLCanvasElement;
    const data = this.dataService.getAttendanceData();

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.weeks,
        datasets: [
          { label: 'Attendance', data: data.attendance, backgroundColor: 'rgba(153, 102, 255, 0.5)' },
        ],
      },
    });
  }
}