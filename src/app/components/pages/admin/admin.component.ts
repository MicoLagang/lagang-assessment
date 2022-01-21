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
  showUser: LTOForm;
  alert = ""

  public empData: Object;
  public temp: Object = false;

  constructor(
    public userService: LTOformProcessService,
    public ltoForm: LTOformProcessService,
    public formService: LTOformProcessService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe((res: any[]) => {
      this.Users = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as LTOForm,
        };
      })
    });
  }

  setUser(user: any) {
    this.ltoForm.formData = user;
    console.log(this.ltoForm.formData);
  }

}
