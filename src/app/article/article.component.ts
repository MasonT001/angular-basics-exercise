import { Component } from "@angular/core";

@Component ({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})

export class ArticleComponent {
    title: string = 'Article'
    content: string = "My favorite pie is apple pie"
    isTechRelated: boolean = false
}