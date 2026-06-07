const cityInput =
    document.getElementById("cityInput");

const searchBtn =
    document.getElementById("searchBtn");

const weatherResult =
    document.getElementById("weatherResult");

const historyDiv =
    document.getElementById("history");

let history =
    JSON.parse(
        localStorage.getItem("weatherHistory")
    ) || [];

renderHistory();

searchBtn.addEventListener("click", () => {

    const city =
        cityInput.value.trim();

    if(city){
        getWeather(city);
    }

});

async function getWeather(city){

    showLoading();

    try{

        const response =
            await fetch(
                `https://wttr.in/${city}?format=j1`
            );

        if(!response.ok){

            throw new Error(
                "Không tìm thấy thành phố"
            );

        }

        const data =
            await response.json();

        displayWeather(data, city);

        saveHistory(city);

    }
    catch(error){

        showError(error.message);

    }

}

function showLoading(){

    weatherResult.innerHTML = `
        <p class="loading">
            Đang tải...
        </p>
    `;

}

function showError(message){

    weatherResult.innerHTML = `
        <p class="error">
            ${message}
        </p>
    `;

}

function displayWeather(data, city){

    const current =
        data.current_condition[0];

    weatherResult.innerHTML = `
        <div class="success">
            <h2>${city}</h2>

            <p>
                Nhiệt độ:
                ${current.temp_C} °C
            </p>

            <p>
                Độ ẩm:
                ${current.humidity} %
            </p>

            <p>
                Thời tiết:
                ${current.weatherDesc[0].value}
            </p>

            <img
                src="${current.weatherIconUrl[0].value}"
                alt="Weather Icon"
            >
        </div>
    `;

}

function saveHistory(city){

    history =
        history.filter(item =>
            item.toLowerCase() !==
            city.toLowerCase()
        );

    history.unshift(city);

    history = history.slice(0,5);

    localStorage.setItem(
        "weatherHistory",
        JSON.stringify(history)
    );

    renderHistory();

}

function renderHistory(){

    historyDiv.innerHTML =
        "<h3>Lịch sử tìm kiếm</h3>";

    history.forEach(city => {

        const btn =
            document.createElement("button");

        btn.textContent = city;

        btn.className =
            "history-btn";

        btn.addEventListener(
            "click",
            () => getWeather(city)
        );

        historyDiv.appendChild(btn);

    });

}