let Employeedetails=[
    {
        name:"Varni",
        age:20,
        city:"Nellore",
        salary:35000,
    },
    {
        name:"Priya",
        age:21,
        city:"Vijayawada",
        salary:20000,
    },
    {
        name:"Dileep",
        age:25,
        city:"Australia",
        salary:350000,
    },
    {
        name:"Kumar",
        age:26,
        city:"Bangalore",
        salary:50000,
    },
    {
        name:"Bharathi",
        age:40,
        city:"Hyderabad",
        salary:100000,
    },
];
    function display(detailsofemployee)
    {
        let details="";
        Srno=1;
        detailsofemployee.forEach(function(ele,index)
        {
          let individualdetail=`<tr>
          <td>${Srno}</td>
          <td>${ele.name}</td>
          <td>${ele.age}</td>
          <td>${ele.city}</td>
          <td>${ele.salary}</td>
          <td><button style="color:white;background-color:black"  onclick="deleterow(${index})">delete</button></td>
          </tr>` ;
          details +=individualdetail;
          Srno++;
        });
        document.getElementById("tdata").innerHTML=details;
    }
    display(Employeedetails);


    function deleterow(index)
    {
        Employeedetails.splice(index, 1);
        display(Employeedetails);
    }

    function search(){
    let element=document.getElementById("inputfield").value;
    console.log(element);
    let aftersearch=Employeedetails.filter(function(ele)
    {
        let a=ele.name.toLowerCase().indexOf(element.toLowerCase());
        let b=ele.city.toLowerCase().indexOf(element.toLowerCase());
         if(a!=-1)
          return a!=-1;
         else if(b1=-1)
          return b!=-1;
               
    });   

display(aftersearch);
}
