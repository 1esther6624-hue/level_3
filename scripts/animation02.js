// 애니메이션-2 js
//1. 서브메뉴 초기 숨기기
//2. 메인메뉴를 클릭하면 서브메뉴 보이기
//변수
const sub = document.querySelector('.gnb .sub');
const li = document.querySelector('.gnb > ul > li:nth-child(2)');

console.log(li, sub);

// 서브메뉴숨기기
sub.style.display = 'none';

// 메인메뉴클릭하면 나오기
li.addEventListener('click',subShow)
function subShow(){
    sub.style.display = 'flex';
}