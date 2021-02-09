// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './search.pipe';
// Core Module
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage.component';
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: HomepageComponent
			},
		]),
		FormsModule,
	],
	providers: [],
	declarations: [SearchPipe, HomepageComponent],
	exports: [
	]
})
export class HomepageModule {
}
