import { Component, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
    @ViewChildren('statCount') statCounts!: QueryList<ElementRef>;

    ngAfterViewInit() {
        const observerOptions = {
            threshold: 0.5
        };

        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = +entry.target.getAttribute('data-target')!;
                    const duration = 2000; // ms
                    const increment = target / (duration / 16); // 60fps

                    let current = 0;
                    const element = entry.target as HTMLElement;

                    const updateCount = () => {
                        current += increment;
                        if (current < target) {
                            element.innerText = Math.ceil(current).toString();
                            requestAnimationFrame(updateCount);
                        } else {
                            element.innerText = target.toString();
                        }
                    };
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        this.statCounts.forEach(stat => {
            statsObserver.observe(stat.nativeElement);
        });
    }
}
