import { stats } from "./components/stats.js";
import { products } from "./components/products.js";


export function app() {
    let statsName = ["Sales", "Revanue", "Wievs"]
    let nums = ["2,273", "$46920", "106.4k"]
    let statsPercents = [12, 7, 4]

    // ==================================================

    let img = ["wallpaper.webp", "ios icon pack.jpg"];
    let productNames = ["8k Gradient Wallpapers Pack", "IOS 16 Icon Pack"];
    let sales = [["Sales", "Revanue", "Wievs", "Conversion"], ["Sales", "Revanue", "Wievs", "Conversion"]];
    let productPercent = [[0, 1, 2, 3], [897, "$12,980", "34.2k", "2.59%"]];

    stats(statsName, nums, statsPercents);
    products(img, productNames, sales, productPercent);
}