$(document).ready(function () {
    $(".burger").click(function (event) {
      $('.sidenavpage').css('display','block');
    });
    $(".sidenavpage").click(function (event) {
      $('.sidenavpage').css('display','none');
    });
  
  // 新增產品
    $(".create_product").click(function (event) {
      $('.prdjp_bg').css('display','block');
    });
    $("#prdjp-closebtn").click(function (event) {
      $('.prdjp_bg').css('display','none');
    });
  });





  let addButton = document.querySelector(".add");
console.log(addButton);
   addButton.addEventListener("click",() =>{
    let addDiv = document.createElement("div");
  
    addDiv.classList.add("allinputs");


    let newInput1 = document.createElement("input");
    newInput1.setAttribute("type", "text");
    newInput1.setAttribute("name", "product");
    newInput1.setAttribute("list","product-list");
    newInput1.classList.add("product");
    
    let newInput2= document.createElement("input");
    newInput2.setAttribute("type", "text");
    newInput2.setAttribute("name", "qty");
    newInput2.setAttribute("list","qty-list");
    newInput2.classList.add("qty");

    let newprice = document.createElement("input");
     newprice.setAttribute("type", "text");
       newprice.setAttribute("name", "price");
      newprice.setAttribute("readonly","true");
    newprice.classList.add("price");

    let newButton = document.createElement("button");
    newButton.classList.add("remove");
    let newDiv = document.createElement("div");
    newDiv.classList.add("remove1");
    newDiv.innerText += ("-");
    newButton.appendChild(newDiv);
    
    newButton.addEventListener("click",(e) =>{
      e.preventDefault();
      // console.log( e.target.parentElement.parentElement);
      // console.log(e.target);
      // e.target.parentElement.parentElement.remove();
    });
    addDiv.appendChild(newInput1);
    addDiv.appendChild(newInput2);
    addDiv.appendChild(newprice);
    addDiv.appendChild(newButton);
  
 

  document.querySelector(".file_product").appendChild(addDiv);
  addDiv.style.animation="scaleUp 0.5s ease forwards";

   
    $(document).ready(function (){
    $(".remove").click(function(event){
      (this).stopPropagation;
      console.log(this);
      console.log(this.parentElement);
      (this).parentElement.remove();
    })
  });

    
 

});

