import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { CatComponent } from "../cat/cat.component";
import { DogComponent } from "../dog/dog.component";
import { BirdComponent } from "../bird/bird.component";


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cat', component: CatComponent },
    { path: 'dog', component: DogComponent },
    { path: 'bird', component: BirdComponent },
    
]