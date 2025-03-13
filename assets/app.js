document.querySelectorAll('.magic-btn').forEach(btn => {
    const color1 = btn.dataset.color || '#5e60ce';
    const color2 = btn.dataset.color2 || '#4ea8de';

    // Set gradient background
    btn.style.background = `linear-gradient(145deg, ${color1}, ${color2})`;

    // Set hover shadow colors
    btn.addEventListener('mouseenter', () => {
        btn.style.boxShadow = `0 15px 30px ${color1}66, 0 0 15px ${color2}4D`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
});