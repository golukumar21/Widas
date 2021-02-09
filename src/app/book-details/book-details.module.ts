// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { FormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details.component';
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: BookDetailsComponent
			},
		]),
		FormsModule,
	],
	providers: [],
	declarations: [],
	exports: [
	]
})
export class BookdetailsModule {
}
