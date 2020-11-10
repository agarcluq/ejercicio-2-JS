// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  console.log("hi");
 //dessde el selected vamos añadiendo las clases 1 a 1 con pero
  //lo suyo sería acceder con parend node hasta el list y de hay recorrer la lista de hijos y añadir a todos una clase recorriendolos

  let childSelected=document.querySelector(".selected")
  let ChildParent1=childSelected.parentNode;
  //Ya tengo al padre
  let parent=ChildParent1.parentNode;

  //hijo 1
  console.log("hijo1")
  var childList1 = parent.childNodes[0].nextSibling;
  console.log(childList1);
  var childSpan1=childList1.childNodes[0]; 
  console.log(childSpan1)
  childSpan1.classList.add('element-1');
  console.log(childSpan1.classList)
   //hijo 2
  console.log("hijo2")
  var childList2 = parent.childNodes[2].nextSibling;
  console.log(childList2)
  var childSpan2=childList2.childNodes[0]; 
  console.log(childSpan2)
  childSpan2.classList.add('element-2');
  console.log(childSpan2.classList)
   //hijo 3
  console.log("hijo3")
  var childList3 = parent.childNodes[4].nextSibling;
  console.log(childList3)
  var childSpan3=childList3.childNodes[0]; 
  console.log(childSpan3)
  childSpan3.classList.add('element-3');
  console.log(childSpan3.classList)
  //hijo 4
  console.log("hijo4")
  var childList4 = parent.childNodes[6].nextSibling;
  console.log(childList4)
  var childSpan4=childList4.childNodes[0]; 
  console.log(childSpan4)
  childSpan4.classList.add('element-4');
  console.log(childSpan4.classList)
//hijo 5
  console.log("hijo5")
  var childList5 = parent.childNodes[8].nextSibling;
  console.log(childList5)
  var childSpan5=childList5.childNodes[0]; 
  console.log(childSpan5)
  childSpan5.classList.add('element-5');
  console.log(childSpan5.classList)

  //    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

  //LISTA
  console.log("lista LI")
  let list=document.querySelectorAll("li:nth-child(even)")

  count=0;
  for (item of list){
    if(count >= 0){
          console.log("Se removerá el div:", item);
          item.remove();
    }  
  }

  //En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)

}
