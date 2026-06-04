var carro = [];
var spTotal = document.getElementById("Total");
var listaCarro = document.getElementById("carrito");
var carroSinRepetidos = JSON.parse(productos);
var productosHTML = document.getElementById("productos");
mostrarProductos();

function mostrarProductos(){
    for(var pro of carroSinRepetidos){
        var unNodo = document.createElement("div");
        unNodo.classList.add=('card','col-sm-4');

        var unNodocardbody = document.createElement('div');
        unNodocardbody.classList.add('card-body');


        var unNodoTitle = document.createElement('h5');
        unNodoTitle.classList.add('card-title');
        unNodoTitle.textContent = pro.nombre;

        var unNodoImagen=document.createElement('img');
        unNodoImagen.classList.add('img-fluid');
        unNodoImagen.setAttribute('src',pro.imagen);

        var unNodoPrecio = document.createElement('p');
        unNodoPrecio.classList.add('card-text');
        unNodoPrecio.textContent = '$' + pro.precio;

        var unNodoButton = document.createElement('button')
        unNodoButton.classList.add('btn','btn-primary');
        unNodoButton.textContent= '+';
        unNodoButton.setAttribute('marcador',pro.id);
        unNodoButton.addEventListener('click', agregarCarro);

        unNodocardbody.appendChild(unNodoImagen);
        unNodocardbody.appendChild(unNodoTitle);
        unNodocardbody.appendChild(unNodoPrecio);
        unNodocardbody.appendChild(unNodoButton);
        unNodo.appendChild(unNodocardbody);
        productosHTML.appendChild(unNodo);


    }
}

function agregarCarro(){
    carroSinRepetidos[(this.getAttribute("marcador")-1)].cantidad++;
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
                    elboton.addEventListener('click',borrarProductoEnCarro);
                    nodoProductoEnCarro.appendChild(elboton);

                    listaCarro.appendChild(nodoProductoEnCarro);
                }
        }
}

function borrarProductoEnCarro(){
    carroSinRepetidos[(this.getAttribute("item")-1)].cantidad--;
    calcularTotal();
    mostrarEnCarro();
}







//append child: agregar un icono
