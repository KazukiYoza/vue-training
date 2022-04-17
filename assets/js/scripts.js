"use strict";

// ページ読み込み時フェードインでサイトを表示する
const body = document.querySelector('body');
window.onload =  () => {
    body.style.display = 'block';
    body.animate([{opacity: '0'}, {opacity: '1'}], 2000)
}
//jQuery使用時
// $(window).on('load',function () {
//     $('body').fadeIn(2000);
// });


// ハンバーガーメニュー
let navFunc = () => {
    // $('html').toggleClass('is-open'); //jQuery使用時
    document.querySelector('html').classList.toggle('is-open');
}