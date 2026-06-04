//arreglo anterior
//var carro = [];

var spTotal= document.getElementById("total");
var listaCarro = document.getElementById("carrito");
var carroSinRepetidos = JSON.parse(productos);
// para poder tener acceso al main de html
var productosXML = document.getElementById("productos");
mostrarProductos();
function mostrarProductos()
{
    for(var pro of carroSinRepetidos)
        {
            var unNodo = document.createElement('div');
            unNodo.classList.add('card','col-sm-4');

            var unNodoCardBody=document.createElement('div');
            unNodoCardBody.classList.add('card-body');

            var unNodoTitle = document.createElement('h5');
            unNodoTitle.classList.add('card-title');
            unNodoTitle.textContent = pro.nombre;


            var unNodoImagen = document.createElement('img');
            unNodoImagen.classList.add('img-fluid');
            unNodoImagen.setAttribute('src',pro.imagen);

            var unNodoPrecio =document.createElement('p');
            unNodoPrecio.classList.add('card-text');
            unNodoPrecio.textContent ='$'+ pro.precio;

            var unNodoBoton = document.createElement('button');
            unNodoBoton.classList.add('btn','btn-primary'); 
            unNodoBoton.textContent ='+';
            unNodoBoton.setAttribute('marcador',pro.id);
            unNodoBoton.addEventListener('click',agregarcarro);

            unNodoCardBody.appendChild(unNodoImagen);
            unNodoCardBody.appendChild(unNodoTitle);
            unNodoCardBody.appendChild(unNodoPrecio);
            unNodoCardBody.appendChild(unNodoBoton);
            unNodo.appendChild(unNodoCardBody);
            productosXML.appendChild(unNodo);

        }
}
function agregarcarro()
{
    carroSinRepetidos[this.getAttribute("marcador")-1].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}
// esto se resume en el codigo de arriba


// function agregarcarro1()
// {
//     carroSinRepetidos[0].cantidad++;
//     calcularTotal();
//     mostrarEnCarro();
// }
// function agregarcarro2()
// {
//     carroSinRepetidos[1].cantidad++;
//     calcularTotal();
//     mostrarEnCarro();
// }
// function agregarcarro3()
// {
//     carroSinRepetidos[2].cantidad++;
//     calcularTotal();
//     mostrarEnCarro();
// }
function calcularTotal()
{
    var elTotal =0;
    for(var p of carroSinRepetidos)
        {
            elTotal+= (p.precio * p.cantidad);
        }
        spTotal.textContent = elTotal;
}
function mostrarEnCarro()
{
    listaCarro.textContent = "";
    for ( var objP of carroSinRepetidos)
        {
            if(objP.cantidad > 0)
                {
                    var nodoProductoEnCarro = document.createElement("li");
                    nodoProductoEnCarro.classList.add("list-group-item","text-right","mx-2");
                    nodoProductoEnCarro.textContent =objP.cantidad + " - " + objP.nombre + " - $" + objP.precio;
                    //appendchild agregar un hijo, que esta en un modo arbol 
                    var elBoton =document.createElement('button');
                    elBoton.classList.add('btn','btn-danger','mx-5');
                    elBoton.textContent='X';
                    elBoton.setAttribute('item',objP.id);
                    elBoton.addEventListener('click',borrarProductoEnCarro);
                    nodoProductoEnCarro.appendChild(elBoton);
                    listaCarro.appendChild(nodoProductoEnCarro);

                }
        }
}
function borrarProductoEnCarro()
{
    

}