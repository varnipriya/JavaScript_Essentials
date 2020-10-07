window.onload = function () {
    let bus=[];
     if (localStorage.getItem("busstorage") == null) {
       let stringbuses = JSON.stringify(bus);
       localStorage.setItem("busstorage", stringbuses);
    }
   };
   
   
   
   function display(busobj = undefined) {
     let tabledata = "";
     let resultarray;
     if (busobj == undefined) {
       resultarray = JSON.parse(localStorage.getItem("busstorage"));
     } else {
       resultarray = busobj;
     }
   
     resultarray.forEach(function (bus, index) {
       let currentrow = `<tr>
       <td>${index + 1}</td>
       <td>${bus.name}</td>
       <td>${bus.source}</td>
       <td>${bus.destination}</td>
       <td>${bus.number}</td>
       <td>${bus.passengercapacity}</td>
       </tr>`;
   
       tabledata += currentrow;
     });
     document.getElementById("tdata").innerHTML = tabledata;
   }
   function addbus(e) {
     e.preventDefault();
     let bus1 = {};
     let name1 = document.getElementById("nameid").value;
     let src = document.getElementById("sourceid").value;
     let dest = document.getElementById("destid").value;
     let num = document.getElementById("numid").value;
     let pc = document.getElementById("pass_capid").value;
     bus1.name = name1;
     bus1.source = src;
     bus1.destination = dest;
     bus1.number = num;
     bus1.passengercapacity = pc;
   
     let busarr = JSON.parse(localStorage.getItem("busstorage"));
    busarr.push(bus1);
    localStorage.setItem("busstorage", JSON.stringify(busarr));
   
    //    let busarr1 = JSON.parse(localStorage.getItem("busstorage"));
     display(busarr);
     
  document.getElementById("nameid").value="";
  document.getElementById("sourceid").value="";
  document.getElementById("destid").value="";
  document.getElementById("numid").value="";
  document.getElementById("pass_capid").value="";
   
   }
   function search() {
     let element = document.getElementById("inputfield").value;
     let busobjarr=JSON.parse(localStorage.getItem("busstorage"));
     let aftersearch = busobjarr.filter(function (ele) {
       let a = ele.source.toLowerCase().indexOf(element.toLowerCase());
       let b = ele.destination.toLowerCase().indexOf(element.toLowerCase());
       if (a != -1) return a != -1;
       else if ((b1 = -1)) return b != -1;
     });
   
     display(aftersearch);
   }
// window.onload=function()
// {
//   let busobj=[];
//   if(localStorage.getItem("blankobject")==null)
//   {
//     localStorage.setItem("blankobject",JSON.stringify(busobj));
//   }
// };

// function display(busobj=undefined)
// {
//   let tabledata = "";
//   let resultarray;
//   if(busobj==undefined)
//   {
//   resultarray=JSON.parse(localStorage.getItem("blankobject"));
//   }
//   else{
//     resultarray=busobj;
//   }

//   resultarray.forEach(function (bus, index) {
//     let currentrow = `<tr>
//     <td>${index + 1}</td>
//     <td>${bus.name}</td>
//     <td>${bus.source}</td>
//     <td>${bus.destination}</td>
//     <td>${bus.number}</td>
//     <td>${bus.passengercapacity}</td>
//     </tr>`;

//     tabledata += currentrow;
//   });
//     document.getElementById("tdata").innerHTML = tabledata;
// }
// function addbus(e)
// {
//   e.preventDefault();
//   let bus={};
//   let name1=document.getElementById("nameid").value;
//   let src=document.getElementById("sourceid").value;
//   let dest=document.getElementById("destid").value;
//   let num=document.getElementById("numid").value;
//   let pc=document.getElementById("pass_capid").value;
//   bus.name=name1;
//   bus.source=src;
//   bus.destination=dest;
//   bus.number=num;
//   bus.passengercapacity=pc;
//   let bussarr=JSON.parse(localStorage.getItem("blankobject"));
//   bussarr.push(bus);
//   localStorage.setItem("blankobject",JSON.stringify(bussarr));
//   display();
// //   document.getElementById("nameid").value="";
// //   document.getElementById("sourceid").value="";
// //   document.getElementById("destid").value="";
// //   document.getElementById("numid").value="";
// //   document.getElementById("pass_capid").value="";

// }
// function search(){
//   let element=document.getElementById("inputfield").value;
//   console.log(element);
//   let aftersearch=blankobject.filter(function(ele)
//   {
//       let a=ele.source.toLowerCase().indexOf(element.toLowerCase());
//       let b=ele.destination.toLowerCase().indexOf(element.toLowerCase());
//        if(a!=-1)
//         return a!=-1;
//        else if(b1=-1)
//         return b!=-1;
             
//   });   

// display(aftersearch);
// }




