const wrapper = 
document.querySelector('.wrapper');
const question = 
document.querySelector('.question');
const yesbtn = 
document.querySelector('.yes-btn');
const wrapperRect =
wrapper.getBoundingClientRect();
const noBtnRect = 
noBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too!';
});
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() *
(wrapperRect.width - noBtnRect.width))
+ 1;
const j = Math.floor(Math.random() *
(wrapperRect.height - 
noBtnRect.height)) + 1;
noBtn.style.left = 1 + 'px';
noBtn.style.top = j + 'px';

});