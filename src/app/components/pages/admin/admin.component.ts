import { Component, OnInit } from '@angular/core';
import { LTOForm } from 'src/app/class/ltoform.model';
import { LTOformProcessService } from 'src/app/services/ltoform-process.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  Users: LTOForm[];

  constructor(private userService: LTOformProcessService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe(res => {
      this.Users = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as LTOForm
        };
      })
    });
  }

}
