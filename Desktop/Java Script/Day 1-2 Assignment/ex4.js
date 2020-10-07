let array=["Violet","Indigo","Blue","Green","Yellow","Orange","Red"];
for(let i=0;i<array.length;i++)
{
    if(array[i].includes("a"))
    {
        console.log(array[i]);
    }
}


array.forEach(function (array)
{
    if(array.includes("a"))                 
    {
        console.log(array);
    }
});