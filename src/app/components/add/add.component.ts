import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UnitsService } from '../../shared/services/units.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  constructor(
    private UnitsService: UnitsService,
    private FormBuilder: FormBuilder
  ) {}
  /*
  https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
  https://cf2.bstatic.com/xdata/images/hotel/max1024x768/433535492.jpg?k=7c8ebd5494ffc1527fdf08bbef05ab542ec715353a1d7c82d2fad497bc736fa3&o=&hp=1
  https://cf2.bstatic.com/xdata/images/hotel/max1024x768/433535484.jpg?k=bb03e2e7c36d74170cedf541e2ab9d688d59c2d90c54d5b76f17faf96d58a219&o=&hp=1
  https://cf2.bstatic.com/xdata/images/hotel/max1024x768/283036728.jpg?k=4212dde8fa2a221a574dda91ac9d7ceb34d27c8b163e4abce2ab21f5a0ef69f4&o=&hp=1
  https://cf2.bstatic.com/xdata/images/hotel/max1024x768/433535496.jpg?k=babb015901029cba67602ec5c36d9c3a0277c5201e16b93b5263556bb564c6a3&o=&hp=1
  
  */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  images = [
    { URL: '' },
    { URL: '' },
    { URL: '' },
    { URL: '' },
    { URL: '' },
    { URL: '' },
  ];
  previweImages = false;
  transportations = [
    {
      price: 400,
      address: '',
      date: '2024-05-16 15:30:45',
    },
  ];
  formBody: FormGroup = this.FormBuilder.group({
    details: ['', [Validators.required]],
    price: ['', [Validators.required]],
    address: ['', [Validators.required]],
    region: ['', [Validators.required]],
    universty: ['', [Validators.required]],
  });

  AddUnit() {
    let newBody = this.formBody.value;
    newBody.transportations = this.transportations;
    newBody.images = this.images;
    const finalResponse = { departments: [newBody] };
    console.log(finalResponse);

    this.UnitsService.addUnit(newBody).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
