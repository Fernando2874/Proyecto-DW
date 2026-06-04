//arreglo anterior
//var carro = [];
var spTotal= document.getElementById("total");
var listaCarro = document.getElementById("carrito");
var carroSinRepetidos =[];
productos();
    // function agregarcarro1()
    // {
    //     var objProducto =
    //     {
    //         id : 1,
    //         nombre : "Producto 1",
    //         precio : 345,
    //     };
    //     // push es agregar 
    //     carro.push(objProducto);
    //     calcularTotal();
    //     mostrarEnCarro();
    // }
    // function agregarcarro2()
    // {
    //     var obja =
    //     {
    //         id :2,
    //         nombre:"Producto 2",
    //         precio : 375, 
    // };
    // carro.push (obja);
    // calcularTotal();
    // mostrarEnCarro();
    // }
    // function agregarcarro3()
    // {
    //     var obj3 =
    //     {
    //         id :3,
    //         nombre:"Producto 3",
    //         precio : 345,
    //     };
    //     carro.push(obj3);
    //     calcularTotal()
    //     mostrarEnCarro()

    // }
// function calcularTotal()
// {
//     var elTotal = 0;
//     for ( var p of carro)
//         {
//             elTotal += p.precio;
//         }
//         spTotal.textContent = elTotal;
// }
// function mostrarEnCarro()
// {
   
//     listaCarro.textContent = "";
//     for(var objP of carro)
//     {
//         // li agregar elementos en esa lista
//     //classlist 
//         var nodoProductoEnCarro = document.createElement("li");
//     nodoProductoEnCarro.classList.add("list-group-item","text-right","mx-2");
//     nodoProductoEnCarro.textContent = objP.nombre + " - $" + objP.precio;
//     //appendchild agregar un hijo, que esta en un modo arbol 
//     listaCarro.appendChild(nodoProductoEnCarro);
//     }
// }
function productos()
{
    var objProducto =
    {
        id : 1,
        nombre :"Producto 1",
        precio :375,
        cantidad :0
    };
    carroSinRepetidos.push(objProducto);
    var objProducto = 
    {
        id : 2,
        nombre :"Producto 2",
        precio :375,
        cantidad :0
    };
    carroSinRepetidos.push(objProducto);
    var objProducto =
    {
        id : 3,
        nombre :"Producto 3",
        precio :375,
        cantidad :0
    };
    carroSinRepetidos.push(objProducto);
}
function agregarcarro1()
{
    carroSinRepetidos[0].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}
function agregarcarro2()
{
    carroSinRepetidos[1].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}
function agregarcarro3()
{
    carroSinRepetidos[2].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}
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
                    listaCarro.appendChild(nodoProductoEnCarro);
                }
        }
}
