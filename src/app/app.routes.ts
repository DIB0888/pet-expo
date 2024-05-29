import { Route, Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { BirdComponent } from './bird/bird.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
 
    {
        path: 'home-component',
        component: HomeComponent
    }, 
    {
        path: 'cat-component',
        component: CatComponent
    }, 
    {
        path: 'dog-component',
        component: DogComponent
    }, 
    {
        path: 'bird-component',
        component: BirdComponent
    }, 
]
