const pricingColumns = document.querySelectorAll('.pricing-column');

pricingColumns.forEach(column => {
    const btn = column.querySelector('.btn');
    btn.addEventListener('click', () => {
        pricingColumns.forEach(column => {
            column.classList.remove('selected');
            column.style.background = 'none';
        });
        column.classList.add('selected');
        changeColor('grey', column);
    });
});

function changeColor(color, element) {
    element.style.background = color;
}
