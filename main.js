const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// $$, $ sẽ đại diện cho document
let tab__item = $$(".tab-item");
let tab__pane = $$(".tab-pane");
let tabActive = $(".tab-item.active");
let line = $(".tabs .line");
line.style.left = tabActive.offsetLeft + "px";
//Lấy ra vị trí bên trái của tabActive
line.style.width = tabActive.offsetWidth + "px";
//Lấy ra chiều dài của tabActive, gán vào line

tab__item.forEach((element, index)=>{
    const pane = tab__pane[index];
    element.onclick = ()=>{
        tabActive.classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        line.style.left = element.offsetLeft + "px";
        line.style.width = element.offsetWidth + "px";

        element.classList.add("active");
        pane.classList.add("active");
    }
});

//9. Lấy ra thẻ đang có class "active" để xóa nó đi trước, sau đó add lại class "active" vào thẻ không chứa class "active";
