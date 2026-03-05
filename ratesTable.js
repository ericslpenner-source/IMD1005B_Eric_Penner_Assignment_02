const ratesTitleRow = document.createElement("tr");
const titles = ["Service", "Rate", "Unit"];
const titleElements = [];
for (let i = 0; i < titles.length; i++)
{
    titleElements[i] = document.createElement("th");
    titleElements[i].innerText = titles[i];
    ratesTitleRow.appendChild(titleElements[i]);
}
const services = [
    {name:"Events", rate:"$20", unit:"/hr"},
    {name:"Pets", rate:"$20", unit:"/photo"},
    {name:"Portraits", rate:"$25", unit:"/photo"},
    {name:"Home staging", rate:"$40", unit:"/hr"},
    {name:"Land photography", rate:"$45", unit: "/hr"},
    {name:"Exhibit", rate: "$50", unit: "/photo"}
];
let ratesRows = [];
let ratesRowElements = [];
document.getElementById("ratesTable").appendChild(ratesTitleRow);
for(let i = 0; i < services.length; i++)
{
    ratesRows[i] = document.createElement("tr");
    ratesRowElements[i] = [];
    for(let j = 0; j < titles.length; j++)
    {
        ratesRowElements[i][j] = document.createElement("td");
    }
    ratesRowElements[i][0].innerText = services[i].name;
    ratesRowElements[i][1].innerText = services[i].rate;
    ratesRowElements[i][2].innerText = services[i].unit;
    for(let j = 0; j < titles.length; j++)
    {
        ratesRows[i].appendChild(ratesRowElements[i][j]);
    }
    document.getElementById("ratesTable").appendChild(ratesRows[i]);
}


