import { Component, OnInit } from '@angular/core';
import { CatService } from './catservice';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Cat {
  id: number;
  name: string;
  origin: string;
  temperament: string;
  colors: string[];
  description: string;
  image: string;
}

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [HttpClientModule,CommonModule, FormsModule],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css',
  providers: [CatService]

})
export class CatComponent implements OnInit {
  cats: Cat[] = [];
  selectedCat: Cat | null = null;
  searchQuery: string = '';

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCat().subscribe(data => {
      this.cats = data;
    });
  }

  openModal(cat: Cat): void {
    this.selectedCat = cat;
  }

  searchCats(query: string): void {
    this.catService.searchCat(query).subscribe(data => {
      this.cats = data;
    });
  }
  reload() {
    this.getCats();

  }

}
