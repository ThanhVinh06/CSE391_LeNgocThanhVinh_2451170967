function showWidgetLoading(index){

    document.querySelector(
        `#widget${index} .content`
    ).innerHTML =
    `<p class="loading">Loading...</p>`;
}
function renderWidgetError(
    index,
    message
){

    document.querySelector(
        `#widget${index} .content`
    ).innerHTML =
    `<p class="error">${message}</p>`;
}
function renderWidget(index,data){

    const container =
        document.querySelector(
            `#widget${index} .content`
        );

    if(index === 0){

        container.innerHTML = `
            <h3>${data[0].name}</h3>
            <p>${data[0].email}</p>
        `;
    }

    if(index === 1){

        container.innerHTML = `
            <p>
                Temperature:
                ${data.current_weather.temperature}°C
            </p>

            <p>
                Wind Speed:
                ${data.current_weather.windspeed}
            </p>
        `;
    }

    if(index === 2){

        container.innerHTML = `
            <h3>${data[0].name.common}</h3>

            <p>
                Population:
                ${data[0].population.toLocaleString()}
            </p>

            <img
                src="${data[0].flags.png}"
            >
        `;
    }
}
async function loadDashboard(){

    const startTime =
        Date.now();

    document
        .getElementById("globalLoading")
        .style.display = "block";

    showWidgetLoading(0);
    showWidgetLoading(1);
    showWidgetLoading(2);

    const results =
        await Promise.allSettled([

            fetch(
                "https://jsonplaceholder.typicode.com/users"
            )
            .then(r => r.json()),

            fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true"
            )
            .then(r => r.json()),

            fetch(
                "https://restcountries.com/v3.1/name/vietnam"
            )
            .then(r => r.json())

        ]);

    results.forEach((result,index)=>{

        if(
            result.status ===
            "fulfilled"
        ){

            renderWidget(
                index,
                result.value
            );

        }
        else{

            renderWidgetError(
                index,
                result.reason.message
            );

        }

    });

    document
        .getElementById("globalLoading")
        .style.display = "none";

    const totalTime =
        Date.now() - startTime;

    document
        .getElementById("loadTime")
        .textContent =
        `Data loaded in ${totalTime} ms`;
}
document
.getElementById("refreshBtn")
.addEventListener(
    "click",
    loadDashboard
);
loadDashboard();