import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
    heroText = '';
    words = ["Power Your Life.", "Protect Your Family.", "Secure Your Business."];
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;

    ngOnInit() {
        this.type();
    }

    type() {
        const currentWord = this.words[this.wordIndex];

        if (this.isDeleting) {
            this.heroText = currentWord.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.heroText = currentWord.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.isDeleting ? 100 : 200;

        if (!this.isDeleting && this.charIndex === currentWord.length) {
            this.isDeleting = true;
            typeSpeed = 2000;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}
