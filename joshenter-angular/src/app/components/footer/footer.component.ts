import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <footer>
        <div class="container footer-content">
            <div class="footer-logo">JOSH ENTERPRISES</div>
            <p>&copy; 2024 Josh Enterprises. All rights reserved.</p>
            <div class="social-links">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>
    </footer>
  `,
    styles: [`
    footer {
        background: var(--secondary-color);
        color: white;
        padding: 3rem 0;
        text-align: center;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .footer-logo {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .social-links {
        display: flex;
        gap: 1.5rem;
    }

    .social-links a {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: 0.3s;
        color: white;
        text-decoration: none;
    }

    .social-links a:hover {
        background: var(--primary-color);
        transform: translateY(-3px);
    }
  `]
})
export class FooterComponent { }
