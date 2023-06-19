function moreInformation(){

    window.addEventListener('resize', () => {
        showInformation('.hideBtn', '.products__item');
    });

    function showInformation(btnSelector,itemsSelector){
        const   btn = document.querySelector(btnSelector),
        items = document.querySelectorAll(itemsSelector);

        if(window.innerWidth <= 800){

            btn.style.display = 'flex'; 
            items.forEach((item) => {
                item.style.display = 'none';
            });
            
            items[0].style.display = 'block';
            items[1].style.display = 'block';
            
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                items.forEach((item) => {
                    item.style.display = 'block';
                });
                btn.style.display = 'none';
            });

        }else {
            items.forEach((item) => {
                item.style.display = 'block';
            });
            btn.style.display = 'none';
        }
    }
    showInformation('.hideBtn', '.products__item');
}
export default moreInformation;