/* Global */
const cart = document.querySelector('#cartId')
const button = document.querySelector('#buttonId')
const sedum = document.querySelector('.sedum')


cart.addEventListener("click", ()=> showAlert())
button.addEventListener('click', ()=> handleCookiesClick())
sedum.addEventListener('mouseover', (e)=> handleMouseOver(e))
sedum.addEventListener('mouseout', (e)=> handleMouseOut(e))


const showAlert = () => {
    alert('Your cart is empy')
}

const handleCookiesClick = () => {
    document.getElementById('footerId').style.display = 'none'
    /* 
    setTimeout(()=>{
        document.getElementById('footerId').style.display = 'flex'
    },3000) */
}

const handleMouseOver = (e) => {
   e.target.src = 'assets/succulents-2.jpg' 
}

const handleMouseOut = (e) => {
    e.target.src = 'assets/succulents-1.jpg' 
 }