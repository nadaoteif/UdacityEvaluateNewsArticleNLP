
function handleSubmit(event) {
    event.preventDefault()
    err.innerHTML = ''
    let urlInput = document.getElementById('url').value
    let input = { url: encodeURI(urlInput) }
    console.log(input)
    if (Client.checkForUrl(urlInput)) {
        postData('/analysis', input).then((data)=>displayAnalysis(data));
    } 
    else {
        console.log('invalid URL')
        ErrorMsg()
    }
};
function ErrorMsg() {
    let message = "URL is invalid."
    let err = document.getElementById("err");
    err.innerHTML = message;
};

async function postData(url, data) {
    const response = await fetch('http://localhost:8081' + url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const analysis = await response.json();
    return analysis;
    }

function displayAnalysis(data) {
    console.log(data)
    console.log(data.model);
    console.log(data.score_tag);
    console.log(data.agreement);
    console.log(data.confidence);
    console.log(data.irony);
    
    document.getElementById("model").innerHTML = `Model: ${data.model}`;
    document.getElementById("score_tag").innerHTML = `Score tag: ${data.score_tag}`;
    document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
}
export { handleSubmit };
