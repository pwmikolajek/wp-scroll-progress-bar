(function() {
    'use strict';

    function initScrollProgressBar() {
        console.log('🚀 Scroll Progress Bar: Initializing...');

        const progressBars = document.querySelectorAll('.scroll-progress-bar');
        console.log('🔍 Found progress bars:', progressBars.length);

        if (progressBars.length === 0) {
            console.log('❌ No progress bars found on page');
            return;
        }

        console.log('✅ Progress bars found:', progressBars);

        // Position all progress bars at the top of the viewport - force override any theme constraints
        progressBars.forEach(function(bar) {
            bar.style.position = 'fixed';
            bar.style.top = '0';
            bar.style.left = '0';
            bar.style.right = '0';
            bar.style.width = '100vw';
            bar.style.minWidth = '100vw';
            bar.style.maxWidth = 'none';
            bar.style.zIndex = '999999';
            bar.style.margin = '0';
            bar.style.padding = '0';
            bar.style.transform = 'translateX(0)';

            console.log('🔧 Progress bar positioned:', bar.getBoundingClientRect());
        });

        function updateProgress() {
            const windowHeight = window.innerHeight;
            const documentHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            // Calculate scroll percentage
            const scrollableDistance = documentHeight - windowHeight;
            const scrollPercentage = scrollableDistance > 0 ? (scrollTop / scrollableDistance) * 100 : 0;

            // Debug logging (you can remove this later)
            console.log('📊 Progress Debug:', {
                windowHeight,
                documentHeight,
                scrollTop,
                scrollableDistance,
                scrollPercentage: Math.round(scrollPercentage * 10) / 10
            });

            // Update all progress bars
            progressBars.forEach(function(bar) {
                const fill = bar.querySelector('.scroll-progress-bar__fill');
                if (fill) {
                    const finalPercentage = Math.min(100, Math.max(0, scrollPercentage));
                    fill.style.width = finalPercentage + '%';
                    console.log('🎯 Setting width to:', finalPercentage + '%');
                }
            });
        }

        // Throttled scroll handler for better performance
        let ticking = false;
        function handleScroll() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    updateProgress();
                    ticking = false;
                });
                ticking = true;
            }
        }

        // Initial update
        updateProgress();

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateProgress);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollProgressBar);
    } else {
        initScrollProgressBar();
    }

})();