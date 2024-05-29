import { Component, OnInit } from '@angular/core';
import { BirdService } from './birdservice';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Bird {
  id: number;
  name: string;
  species: string;
  family: string;
  habitat: string;
  place_of_found: string;
  diet: string;
  description: string;
  weight_kg: number;
  height_cm: number;
  image: string;
}

@Component({
  selector: 'app-bird',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './bird.component.html',
  styleUrl: './bird.component.css',
  providers: [BirdService]
})
export class BirdComponent implements OnInit {
  birds: Bird[] = [];
  selectedBird: Bird | null = null;
  searchQuery: string = '';


  constructor(private birdService: BirdService) {}

  
  ngOnInit(): void {
    this.getBirds();
  }

  getBirds(): void {
    this.birdService.getBird().subscribe(data => {
      this.birds = data;
    });
  }

  openModal(bird: Bird): void {
    this.selectedBird = bird;
  }

  searchBirds(query: string): void {
    this.birdService.searchBirds(query).subscribe(data => {
      this.birds = data;
    });
  }
  reload() {
    this.getBirds();

  }
}
