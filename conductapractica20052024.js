var carro = [];
var spTotal = document.getElementById("Total");
var listaCarro = document.getElementById("carrito");
var carroSinRepetidos = [];
Productos();

function Productos(){
    var objProducto={
        id:1,
        nombre:"Producto1",
        precio:384,
        cantidad:0  
    };
    carroSinRepetidos.push(objProducto);
    var objProducto={
        id:2,
        nombre:"Producto2",
        precio:456,
        cantidad : 0
        
    };
    carroSinRepetidos.push(objProducto);
    var objProducto={
        id:3,
        nombre:"Producto3",
        precio:356,
        cantidad : 0
    };
    carroSinRepetidos.push(objProducto);
    var objProducto={
        id:4,
        nombre:"Producto4",
        precio:11.249,
        cantidad : 0
    };
    carroSinRepetidos.push(objProducto);
}

function agregarCarro1(){
    carroSinRepetidos[0].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}

function agregarCarro2(){
    carroSinRepetidos[1].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}

function agregarCarro3(){
    carroSinRepetidos[2].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}
function agregarCarro4(){
    carroSinRepetidos[3].cantidad++;
    calcularTotal();
    mostrarEnCarro();
}

function calcularTotal(){
    var elTotal = 0;
    for(var p of carroSinRepetidos)
        {
            elTotal += (p.precio*p.cantidad);
        }
        spTotal.textContent= elTotal;
}


function mostrarEnCarro(){
    listaCarro.textContent = "";
    for(var objP of carroSinRepetidos)
        {
            if(objP.cantidad > 0)
                {
                    var nodoProductoEnCarro = document.createElement("li");
                    nodoProductoEnCarro.classList.add("list-group-item","text-right","mx-2");
                    nodoProductoEnCarro.textContent = objP.cantidad + " - $" + objP.nombre + "- $" + objP.precio;
                    listaCarro.appendChild(nodoProductoEnCarro);
                    var elboton = document.createElement('button');
                    elboton.classList.add('btn','btn-danger','mx-5');
                    elboton.textContent = 'x';
                    elboton.setAttribute('item',objP,id);
                    elboton.addEventListener('click',borrarProductoenCarro);
                    nodoProductoEnCarro.appendChild(elboton);

                    listaCarro.appendChild(nodoProductoEnCarro);
                }
        }
}


function borrarProductoenCarro(){}





//append child: agregar un icono
