import { Component, OnInit } from '@angular/core';
import { LTOformProcessService } from 'src/app/services/ltoform-process.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  alert = ""

  constructor(public formService: LTOformProcessService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.formService.formGroup.valid) {
      this.alert = "All fields are required"
    }
    this.formService.saveInfo();
    this.alert = ''
  }

}
