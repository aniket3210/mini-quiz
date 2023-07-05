let user_name = sessionStorage.getItem("name");
let user_Points = sessionStorage.getItem("Points");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.Points").innerHTML = user_Points;
document.querySelector("span.time_taken").innerHTML = user_time;

