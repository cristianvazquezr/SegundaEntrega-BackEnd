//hago la multiplicacion de dos campos para el total

window.onload=function () {
    countItemCart()
    let totalPrice=document.getElementsByClassName('totalPrice')
    console.log(document.getElementsByClassName('price'))
    for (i in totalPrice){
        let idProducto=totalPrice[i].id
        let precio=document.getElementById(`p${idProducto}`)
        let cantidad=document.getElementById(`q${idProducto}`)
        totalPrice[i].innerHTML=Number(precio.innerHTML)*Number(cantidad.innerHTML)
    }
    
}


//cosulto al session storage si hay carrito, y con un get veo cuantos productos tiene 

let countItem=0
let cantidadCarrito=document.getElementById("numerito")

async function countItemCart(){

    let cartUser= await JSON.parse(sessionStorage.getItem('carrito'))
    let idCart=''
    if(cartUser){
        idCart=await cartUser
       let getCart= await fetch(`/api/carts/${idCart}`, {
            method:'get',
            headers: {
                "Content-Type": "application/json",
            }
        })
        let objCart=await getCart.json()
        let productList=await objCart[0].products
        countItem=productList.length
    }
    else{
        idCart=window.location.pathname.split('/')[2]
        let getCart= await fetch(`/api/carts/${idCart}`, {
            method:'get',
            headers: {
                "Content-Type": "application/json",
            }
        })
        let objCart=await getCart.json()
        let productList=await objCart[0].products
        countItem=productList.length
    }
    cantidadCarrito.innerHTML=countItem

}


