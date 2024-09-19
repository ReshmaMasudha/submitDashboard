import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../components/services/data.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  outcomes: any;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.outcomes = this.dataService.getProgramOutcomesData();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
