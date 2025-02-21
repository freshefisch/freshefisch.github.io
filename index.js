(async function(){
    let loadingText = document.getElementById("loading");
    
    let response;
    try {
        response = await axios.get("https://api.github.com/users/freshefisch/repos");

    }
    catch(err){
        loadingText.innerHTML = err.message;
        return;
    }

    const reposData = response.data;

    let container = document.getElementById("button-container");

    container.removeChild(loadingText);

    for (let repo of reposData) {
        console.log(repo.name, repo.homepage);

        if (!repo.homepage || repo.name == "freshefisch.github.io") continue;

        let button = document.createElement("a");

        button.innerHTML = repo.name;
        button.href = repo.homepage.replace("http://", "https://");

        container.appendChild(button);
    }
})();
