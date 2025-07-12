function pack(tab){
    const monthlypack = document.getElementById("monthlypack");
    const yearlypack = document.getElementById("yearlypack");
    const annual = document.querySelectorAll(".sub-btn");

    monthlypack.classList.add("off");
    yearlypack.classList.add("off");
    annual.forEach(btn => btn.classList.remove("onn"));

    if (tab === "month"){
        monthlypack.classList.remove("off");
        annual[0].classList.add("onn");
    } else{
        yearlypack.classList.remove("off");
        annual[1].classList.add("onn");
    }
}