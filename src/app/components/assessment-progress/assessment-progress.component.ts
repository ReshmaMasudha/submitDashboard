import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-assessment-progress',
  templateUrl: './assessment-progress.component.html',
  styleUrls: ['./assessment-progress.component.scss'],
})
export class AssessmentProgressComponent  implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    const ctx = document.getElementById('assessmentProgressChart') as HTMLCanvasElement;
    const data = this.dataService.getAssessmentProgressData();

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Assignment', 'Quiz', 'Presentation', 'Lab'],
        datasets: [
          { label: 'Pending', data: data.pending, backgroundColor: 'rgba(255, 99, 132, 0.5)' },
          { label: 'Completed', data: data.completed, backgroundColor: 'rgba(75, 192, 192, 0.5)' },
        ],
      },
    });
  }
}
