/* 애니메이션-1 js */
// item1에 마우스올리면 다른이미지로 img태그 경로 변경
//변수
const item1 = document.querySelector('.item');
const item1Img = document.querySelector('.item img');
//변수테스트
console.log(item1);
console.log(item1Img);

//이벤트
item1.addEventListener('mouseover',item1ImgSrc);
item1.addEventListener('mouseout',item1ImgSrcOut);

//함수
function item1ImgSrc() {
    item1Img.src = 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/475647/item/krgoods_00_475647_3x4.jpg?width=300';
}
function item1ImgSrcOut() {
    item1Img.src = 'https://image.uniqlo.com/UQ/ST3/kr/imagesgoods/483869/item/krgoods_63_483869_3x4.jpg?width=300';
}
/* ----------------------쇼핑몰 연습2 */
const sale1 = document.querySelector('.sale');
const sale1Img = document.querySelector('.sale img');

console.log(sale1, sale1Img);

function sale1ImgOver() {
    sale1Img.src = 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/487394/item/goods_10_487394_3x4.jpg?width=300';
}
function sale1ImgOut() {
    sale1Img.src = 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/487394/item/goods_02_487394_3x4.jpg?width=300';
}

sale1.addEventListener('mouseover',sale1ImgOver);
sale1.addEventListener('mouseout',sale1ImgOut);