import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ComunidadeComponent } from './pages/comunidade/comunidade.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';

const routes: Routes = [

  {path: '',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'comunidade',component:ComunidadeComponent},
  {path: 'produtos',component:ProdutosComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
