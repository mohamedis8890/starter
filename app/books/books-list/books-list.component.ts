import { Component } from "@angular/core";

@Component({
	moduleId: module.id,
	selector: 'bs-books-list',
	templateUrl: 'books-list.component.html'
})
export class BooksListComponent{
	imageWidth: number = 100;
	booksInStock: number = 2;
	showImage: boolean = true;

	books: any[] = [{
		bookAuthor: "Tom Jones",
		bookTitle: "War and Peace II",
		bookPrice: 29.99,
		bookDescription: "Book of historical fiction.",
		bookReviews: 15,
		bookImageUrl: "app/assets/images/656.jpg",
		publishedOn: new Date('02/05/1995'),
		inStock: "yes"
	}]

	toggleImage(): void{
		this.showImage = !this.showImage;
	}
}