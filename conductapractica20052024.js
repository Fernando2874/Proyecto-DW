var carro = [];
var spTotal = document.getElementById("Total");
var listaCarro = document.getElementById("carrito");

function agregarCarro1(){
    var objProducto={
        id:1,
        nombre:"Producto1",
        precio:384,
        
    };
    carro.push(objProducto);
    calcularTotal();
    mostrarEnCarro();
    
}


function calcularTotal(){
    var elTotal = 0;
    for(var p of carro)
        {
            elTotal += p.precio;
        }
        spTotal.textContent= elTotal;
}

function mostrarEnCarro(){
    listaCarro.textContent = "";
    for(var objP of carro)
        {
            var nodoProductoEnCarro = document.createElement("li");
            nodoProductoEnCarro.classList.add("list-group-item","text-right","mx-2");
            nodoProductoEnCarro.textContent = objP.nombre + " - $" + objP.precio;
            listaCarro.appendChild(nodoProductoEnCarro);
        }
}

//append child: agregar un icono
