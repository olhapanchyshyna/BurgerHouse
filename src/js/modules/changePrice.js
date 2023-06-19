function changePrice(){
    const btn = document.querySelector('.currently'),
    items = document.querySelectorAll('.products__item-price');

    btn.addEventListener('click', () => {
        items.forEach(item => {
            const check  = item.textContent.slice(-1);
            if(check == '$'){
                btn.textContent = `$`;
                const priceNum = item.textContent.slice(0, -1);
                const price =  priceNum * 40;
                item.textContent = `${price} грн`;
            }
            if(check == 'н'){
                btn.textContent = `UAH`;
                const priceNum = item.textContent.slice(0, -3);
                const price =  priceNum / 40;
                item.textContent = `${price} $`
            }
           
        });
    })
}
export default changePrice
