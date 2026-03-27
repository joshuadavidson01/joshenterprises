import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-widgets',
    standalone: true,
    imports: [CommonModule],
    template: `
    <!-- Floating Widgets -->
    <a href="https://wa.me/919092929958" class="float-btn whatsapp" target="_blank">
        <i class="fa-brands fa-whatsapp"></i>
    </a>
    <a href="#home" class="float-btn back-to-top" [class.show]="showBackToTop" (click)="scrollToTop($event)">
        <i class="fa-solid fa-arrow-up"></i>
    </a>
  `,
    styles: [`
    .float-btn {
        position: fixed;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        color: white;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        transition: transform 0.3s, box-shadow 0.3s;
        cursor: pointer;
        text-decoration: none;
    }

    .float-btn:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }

    .whatsapp {
        bottom: 30px;
        right: 30px;
        background-color: #25D366;
    }

    .back-to-top {
        bottom: 30px;
        right: 100px;
        background-color: var(--secondary-color);
        font-size: 20px;
        width: 50px;
        height: 50px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.4s, transform 0.3s, background-color 0.3s;
    }

    .back-to-top.show {
        opacity: 1;
        pointer-events: all;
    }
    
    .back-to-top:hover {
        background-color: var(--primary-color);
    }
  `]
})
export class WidgetsComponent {
    showBackToTop = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.showBackToTop = window.scrollY > 500;
    }

    scrollToTop(event: Event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
