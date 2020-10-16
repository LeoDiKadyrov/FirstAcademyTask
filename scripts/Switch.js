const yearlyBtn = document.getElementById("price__year");
const monthlyBtn = document.getElementById("price__month");
const monthId = monthlyBtn.getAttribute("id");
const yearId = yearlyBtn.getAttribute("id");
const monthPrice = document.getElementById("price__cost-month");
const yearPrice = document.getElementById("price__cost-year");

monthlyBtn.classList.add("active__btn");

yearlyBtn.addEventListener("click", switchPrice);
monthlyBtn.addEventListener("click", switchPrice);

function switchPrice(e) {
    e = e || window.event;
    e.preventDefault();

    if (e.target.classList.contains("active__btn")) {
        return;
    }
    else if (e.target.id == monthId) {
        monthlyBtn.classList.toggle("active__btn");
        yearlyBtn.classList.toggle("active__btn");
        monthPrice.innerHTML = "$19.00";
        yearPrice.innerHTML = "$49.00";
    } else {
        monthlyBtn.classList.toggle("active__btn");
        yearlyBtn.classList.toggle("active__btn");
        monthPrice.innerHTML = "$200";
        yearPrice.innerHTML = "$500";
    }
}

