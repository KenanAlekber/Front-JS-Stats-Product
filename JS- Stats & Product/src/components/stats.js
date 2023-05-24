export function stats(names, nums, percents) {
    for (let i = 0; i < 3; i++) {
        document.querySelector(".stats-box").innerHTML += `
         <div class="sales stats">
         <p>${names[i]}</p>
         <h1>${nums[i]}</h1>
         <b class="green ${"stats-box" + i}">${percents[i]}% MOM</b>
     </div>`
    }
    document.querySelector(".stats-box2").classList.add("red");
}