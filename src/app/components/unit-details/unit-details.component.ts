import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitsService } from '../../shared/services/units.service';
import { Unit } from '../../shared/interfaces/unit';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrl: './unit-details.component.css',
})
export class UnitDetailsComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private UnitsService: UnitsService,
    private FormBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}

  unit: Unit = {} as Unit;
  imgs: any[] = [];
  curImg = 0;
  token = this.UnitsService.token;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe({
      next: (data) => {
        this.UnitsService.getUnitById(data['id']).subscribe({
          next: (res) => {
            this.unit = res;
            this.imgs = res.images;
          },
        });
      },
    });
  }
  ubdateForm: FormGroup = this.FormBuilder.group({
    university: [this.unit.university],
    address: [this.unit.address],
    details: [this.unit.details],
    price: [this.unit.price],
    region: [this.unit.region],
  });

  delete(id: number) {
    this.UnitsService.ubdateUnit(id, { id: null }).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.error('Deleted succefully');
      },
    });
    // this.UnitsService.deleteUnit(id).subscribe({
    //   next: (res) => {
    //     this.toastr.error('Deleted succefully');
    //   },
    // });
  }
  ubdate(id: number) {
    this.toastr.info('Updated succefully');
    let baseBody = this.unit;
    baseBody.university =
      this.ubdateForm.value.university || this.unit.university;
    baseBody.address = this.ubdateForm.value.address || this.unit.address;
    baseBody.price = this.ubdateForm.value.price || this.unit.price;
    baseBody.details = this.ubdateForm.value.details || this.unit.details;
    baseBody.region = this.ubdateForm.value.region || this.unit.region;
    this.UnitsService.ubdateUnit(id, baseBody).subscribe({
      next: (res) => {
        console.log(res);
        this.unit = res;
        this.toastr.info('Updated succefully');
      },
    });
  }
}
