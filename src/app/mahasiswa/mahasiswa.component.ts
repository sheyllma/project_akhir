import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from './mahasiswa.service';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css'],
  providers:[MahasiswaService],
})
export class MahasiswaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
