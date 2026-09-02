const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const price = document.querySelectorAll(".price");
	let total = 0;
	for (let p of price) { total += Number(p.textContent);
						 }
	console.log(total);
	const row = document.createElement("tr");
	const cell = document.createElement("td"); 
	cell.textContent = total; row.appendChild(cell);
	document.querySelector("table").appendChild(row)
  
};

getSumBtn.addEventListener("click", getSum);

