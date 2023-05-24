export function products(img, productNames, sales, productPercent) {
    for (let i = 0; i < 2; i++) {

        document.querySelector(".products").innerHTML += `
        <div class="item">
        <img src="./images/${img[i]}">

        <h1>${productNames[i]}</h1>
        <div class="wallpaper-list">
            <ul>
                <li>
                    <p>${sales[i][0]}</p>
                    <b>${productPercent[i][0]}</b>
                </li>
                <li>
                    <p>${sales[i][1]}</p>
                    <b>${productPercent[i][1]}</b>
                </li>
                <li>
                    <p>${sales[i][2]}</p>
                    <b>${productPercent[i][2]}</b>
                </li>
                <li>
                    <p>${sales[i][3]}</p>
                    <b>${productPercent[i][3]}</b>
                </li>
            </ul>
        </div>
    </div>
        `
    }
}