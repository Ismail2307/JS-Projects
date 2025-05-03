async function getQuote() {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes',{
        method:'GET',
        headers:{'X-Api-Key':'w/l+c56V7dnvcyZkWUmyvA==Du92N36s9HqPtLhd'},
    })

    const data = await response.json()
    document.getElementById('quote').innerText = data[0].quote;
}

getQuote()