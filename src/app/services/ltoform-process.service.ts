import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LTOForm } from '../class/ltoform.model';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LTOformProcessService {
  formData: LTOForm = {
    uid: "",
    familyName: "",
    firstName: "",
    middleName: "",
    presentAddress: "",
    contactNumber: "",
    TIN: "",
    nationality: "",
    sex: "",
    birthday: "",
    height: "",
    weight: "",
    licenseNumber: "",
    status: "",
    birthplace: "",
    fatherName: "",
    motherName: "",
    spouseName: "",
    employersBusinessName: "",
    employerTelNo: "",
    employerAddress: "",
    emergencyPerson: "",
    emergencyAddress: "",
    emergencyContact: "",
    agencyCode: "",
    issueDate: "",
    expiryDate: "",
    lca: "",
    drivingSkill: "",
    EA: "",
    bloodType: "",
    organDonor: "",
    TOA: ""
  }

  formGroup = new FormGroup({
    firstName: new FormControl(this.formData.firstName, [Validators.required]),
    familyName: new FormControl(this.formData.familyName, [Validators.required]),
    middleName: new FormControl(this.formData.middleName, [Validators.required]),
    presentAddress: new FormControl(this.formData.presentAddress, [Validators.required]),
    contactNumber: new FormControl(this.formData.contactNumber, [Validators.required]),
    TIN: new FormControl(this.formData.TIN, [Validators.required]),
    nationality: new FormControl(this.formData.nationality, [Validators.required]),
    sex: new FormControl(this.formData.sex, [Validators.required]),
    birthday: new FormControl(this.formData.birthday, [Validators.required]),
    height: new FormControl(this.formData.height, [Validators.required]),
    weight: new FormControl(this.formData.weight, [Validators.required]),
    licenseNumber: new FormControl(this.formData.licenseNumber, [Validators.required]),
    status: new FormControl(this.formData.status, [Validators.required]),
    birthplace: new FormControl(this.formData.birthplace, [Validators.required]),
    fatherName: new FormControl(this.formData.fatherName, [Validators.required]),
    motherName: new FormControl(this.formData.motherName, [Validators.required]),
    spouseName: new FormControl(this.formData.spouseName, [Validators.required]),
    employersBusinessName: new FormControl(this.formData.employersBusinessName, [Validators.required]),
    employerTelNo: new FormControl(this.formData.employerTelNo, [Validators.required]),
    employerAddress: new FormControl(this.formData.employerAddress, [Validators.required]),
    emergencyPerson: new FormControl(this.formData.emergencyPerson, [Validators.required]),
    emergencyAddress: new FormControl(this.formData.emergencyAddress, [Validators.required]),
    emergencyContact: new FormControl(this.formData.emergencyContact, [Validators.required]),
    agencyCode: new FormControl(this.formData.agencyCode, [Validators.required]),
    issueDate: new FormControl(this.formData.issueDate, [Validators.required]),
    expiryDate: new FormControl(this.formData.expiryDate, [Validators.required]),
    lca: new FormControl(this.formData.lca, [Validators.required]),
    drivingSkill: new FormControl(this.formData.drivingSkill, [Validators.required]),
    EA: new FormControl(this.formData.EA, [Validators.required]),
    bloodType: new FormControl(this.formData.bloodType, [Validators.required]),
    organDonor: new FormControl(this.formData.organDonor, [Validators.required]),
    TOA: new FormControl(this.formData.TOA, [Validators.required]),
  })

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthServiceService
  ) {
  }

  getUserList() {
    return this.firestore
      .collection("APPLICATION")
      .snapshotChanges();
  }

  saveInfo() {
    console.log(this.formGroup.value)
    let data = {
      uid: this.authService.userData.uid,
      familyName: this.formGroup.get('familyName').value,
      firstName: this.formGroup.get('firstName').value,
      middleName: this.formGroup.get('middleName').value,
      presentAddress: this.formGroup.get('presentAddress').value,
      contactNumber: this.formGroup.get('contactNumber').value,
      TIN: this.formGroup.get('TIN').value,
      nationality: this.formGroup.get('nationality').value,
      sex: this.formGroup.get('sex').value,
      birthday: this.formGroup.get('birthday').value,
      height: this.formGroup.get('height').value,
      weight: this.formGroup.get('weight').value,
      licenseNumber: this.formGroup.get('licenseNumber').value,
      status: this.formGroup.get('status').value,
      birthplace: this.formGroup.get('birthplace').value,
      fatherName: this.formGroup.get('fatherName').value,
      motherName: this.formGroup.get('motherName').value,
      spouseName: this.formGroup.get('spouseName').value,
      employersBusinessName: this.formGroup.get('employersBusinessName').value,
      employerTelNo: this.formGroup.get('employerTelNo').value,
      employerAddress: this.formGroup.get('employerAddress').value,
      emergencyPerson: this.formGroup.get('emergencyPerson').value,
      emergencyAddress: this.formGroup.get('emergencyAddress').value,
      emergencyContact: this.formGroup.get('emergencyContact').value,
      agencyCode: this.formGroup.get('agencyCode').value,
      issueDate: this.formGroup.get('issueDate').value,
      expiryDate: this.formGroup.get('expiryDate').value,
      lca: this.formGroup.get('lca').value,
      drivingSkill: this.formGroup.get('drivingSkill').value,
      EA: this.formGroup.get('EA').value,
      bloodType: this.formGroup.get('bloodType').value,
      organDonor: this.formGroup.get('organDonor').value,
      TOA: this.formGroup.get('TOA').value
    }
    this.firestore.collection('APPLICATION').add(data).then((result) => {
      window.alert('Your form submitted successfully');
    }).catch((error) => {
      window.alert(error);
    })
  }
}
