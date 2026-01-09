
// currency api website link is here=https://app.currencyapi.com/   

const apiKey = window.API_KEY || "demo-key-for-testing";

const populate = async (value, currency) => {
    let myStr = ""

    // url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_1sT4wvNBJC7qGRssE9TAWcsbKxEoBZbalKiJ83O5&base_currency=" + currency
    url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${currency}`
    let response = await fetch(url)
    let rJson = await response.json()
      document.querySelector(".output").style.display = "block"
    for (let key of Object.keys(rJson["data"])) {
        myStr += `
                     <tr>
                        <td>${key}</td>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
       
                            `

    }
    const table = document.querySelector("tbody");
    table.innerHTML = myStr;
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault();
    

    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency)
})

