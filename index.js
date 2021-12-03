//calculate button function
function incomeTax() 
{
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var income = document.getElementById("income").value;

    //verify income is postive
    if (income >= 0) 
    {
        //start the output string with the greeting
        var output = "Hello " + first + " " + last + "<br/>";
        
        //find the date and time and add it to the output
        var date = new Date();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        output += "The current date and time is: " + month + "/" + day + '/' + year + " " + time + "<br/>";
        
        //add income amount
        output += "Your taxable income is: " + dollarFormatter.format(income) + "<br/>";
        
        //add taxable income
        var tax = calculate(income);
        output += "You owe " + dollarFormatter.format(tax) + " in taxes <br/>";

        //show output
        output += "Thank you"
        document.getElementById("output").innerHTML = output;
    } 
    else 
    {
        document.getElementById("output").innerHTML = "Please enter a positive taxable income.";
    }
}

//calculate tax function
function calculate(income)
{
    //tax variable
    var tax;

    //find bracket and calculate
    if (income <= 9950)
    {
        tax = .1 * income;
    }
    else if (income <= 40525)
    {
        tax =  (.12 * income) - 204.4;
    }
    else if (income <= 86375)
    {
        tax = (.22 * income) - 4251.5;
    }
    else if (income <= 164925)
    {
        tax = (.24 * income) - 5979;
    }
    else if (income <= 209425)
    {
        tax = (.32 * income) - 19173;
    }
    else if (income <= 523600)
    {
        tax = (.35 * income) - 25455.75;
    }
    else
    {
        tax = (.37 * income) - 35927.75;
    }
    //return the tax amount
    return tax;
}

//reset button
function reset()
{
    //clear input boxes and output
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("income").value = "";
    document.getElementById("output").innerHTML = "";
}

//for formatting dollar amounts
const dollarFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
