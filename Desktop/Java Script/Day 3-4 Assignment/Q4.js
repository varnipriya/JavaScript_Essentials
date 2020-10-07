let details=
[
    {
        name:"varni",
        age :20,
        country:"london",
        hobbies:[ "Dance","Study","Play"],
    },
    {
        name:"priya",
        age :21,
        country:"Australia",
        hobbies:[ "Singing","Books","Cooking"],
    },
    {
        name:"chilakapati",
        age :35,
        country:"India",
        hobbies:[ "Study","Exploring","Adventures"],
    }
]

for(let i=0;i<details.length;i++)
{
   if(details[i].age<30)
       console.log(details[i]);
}
for(let i=0;i<details.length;i++)
{
   if(details[i].country="India")
       console.log(details[i]);
}