function compute()
{
    var principal = document.getElementById("principal").value;
	if(parseInt(principal) <= 0 || principal == "") {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return;
	}
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * rate * years / 100;
	var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit \<mark\>" + principal + "\</mark\>\<br\>at an interest rate of \<mark\>" + rate + "\</mark\>%,\<br\>you will receive an amount of \<mark\>" + amount + "\</mark\>\<br\>in the year \<mark\>" + year + "\</mark\>.\<br\>";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
