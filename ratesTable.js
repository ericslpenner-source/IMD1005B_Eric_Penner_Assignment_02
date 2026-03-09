const ratesTitleRow = document.createElement("tr");
const titles = ["Service", "Weekday", "Weekend"];
const titleElements = [];
for (let i = 0; i < titles.length; i++)
{
    titleElements[i] = document.createElement("th");
    titleElements[i].innerText = titles[i];
    ratesTitleRow.appendChild(titleElements[i]);
}
const services = [
    {name:"Events", wDay:"$20/hr", wEnd:"$40/hr"},
    {name:"Pets", wDay:"$20/photo", wEnd:"$25/photo"},
    {name:"Portraits", wDay:"$25/photo", wEnd:"$30/photo"},
    {name:"Home staging", wDay:"$40/hr", wEnd:"$50/hr"},
    {name:"Land photography", wDay:"$45/hr", wEnd: "$60/hr"},
    {name:"Exhibit", wDay: "$50/photo", wEnd: "$60/photo"}
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
    ratesRowElements[i][1].innerText = services[i].wDay;
    ratesRowElements[i][2].innerText = services[i].wEnd;
    for(let j = 0; j < titles.length; j++)
    {
        ratesRows[i].appendChild(ratesRowElements[i][j]);
    }
    document.getElementById("ratesTable").appendChild(ratesRows[i]);
}


