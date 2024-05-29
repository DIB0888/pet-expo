import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DogService } from './dogservice';
import { FormsModule } from '@angular/forms';

interface Dog {
  id: number;
  name: string;
  breed_group: string;
  size: string;
  lifespan: string;
  origin: string;
  temperament: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [HttpClientModule,CommonModule, FormsModule],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css',
  providers: [DogService]

})
export class DogComponent implements OnInit{
  dogs: Dog[] = [];
  selectedDog: Dog | null = null;
  searchQuery: string = '';


  constructor(private dogService: DogService) {}

  
  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDog().subscribe(data => {
      this.dogs = data;
    });
  }

  openModal(dog: Dog): void {
    this.selectedDog = dog;
  }

  searchDogs(query: string): void {
    this.dogService.searchDogs(query).subscribe(data => {
      this.dogs = data;
    });
  }
  reload() {
    this.getDogs();

  }
}
