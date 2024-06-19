import { Component, OnInit } from '@angular/core';
import { UnitsService } from '../../shared/services/units.service';
import { Unit } from '../../shared/interfaces/unit';

@Component({
  selector: 'app-ubdate',
  templateUrl: './ubdate.component.html',
  styleUrl: './ubdate.component.css',
})
export class UbdateComponent implements OnInit {
  constructor(private UnitsService: UnitsService) {}

  units: Unit[] = [];

  ngOnInit(): void {
    this.UnitsService.getAllUnits().subscribe({
      next: (res: Unit[]) => {
        this.units = res.filter((cur) => cur.address);
      },
    });
  }
}
