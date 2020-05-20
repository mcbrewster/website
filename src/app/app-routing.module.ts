import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardLayoutComponent } from './card/cardlayout.component';
import { GraphComponent } from './graph/graph.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [{ path: '', component: CardLayoutComponent },{ path: 'projects', component: CardLayoutComponent },{ path: 'graph', component: GraphComponent },{path:"links", component: LinksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
