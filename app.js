let count = 0
const btns = document.querySelectorAll('.btn')
const value  = document.querySelector('#value')

btns.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
            count++
        } else if(styles.contains('reset')){
            count = 0;
        }

        if(count>0){
            value.style.color = 'green'
        } else if(count<0){
            value.style.color = 'red'
        } else if(count === 0 ){
            value.style.color = '#102a42'
        }
        value.textContent = count
    })
})