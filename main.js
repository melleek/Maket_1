// main.js
const root = document.getElementById("root");

// NAVBAR

const navbar = document.createElement("div");
const firstDiv = document.createElement("div");
const secondDiv = document.createElement("div");
const userIcons = document.createElement("img");
const account = document.createElement("p");
const about = document.createElement("p");
const delivery = document.createElement("p");
const news = document.createElement("p");
const contact = document.createElement("p");

userIcons.src = "icons/navbar/user.png";
account.textContent = "Личный кабинет";
about.textContent = "О нас";
delivery.textContent = "Оплата и доставка";
news.textContent = "Новости";
contact.textContent = "Контакты";

delivery.classList.add("p");
news.classList.add("p");
contact.classList.add("p");
about.classList.add("p");
firstDiv.classList.add("firstDiv");
secondDiv.classList.add("secondDiv");
account.classList.add("account");
navbar.classList.add("navbar");

firstDiv.append(about, delivery, news, contact);
secondDiv.append(userIcons, account);
navbar.append(firstDiv, secondDiv);

//NAVBAR_LOGO

const navbarLogo = document.createElement("div");
const divLogo = document.createElement("div");
const orderDiv = document.createElement("div");
const loca = document.createElement("div");

const locationOrder = document.createElement("div");
const locaIcons = document.createElement("img");
const locaName = document.createElement("p");

const divText = document.createElement("div");
const textDiv = document.createElement("div");
const number = document.createElement("p");
const txt = document.createElement("p");
const strelka = document.createElement("img");

const heart = document.createElement("img");
const order = document.createElement("div");

const addCards = document.createElement("div");
const basket = document.createElement("img");
const count = document.createElement("div");

const addText = document.createElement("div");
const price = document.createElement("p");
const priceText = document.createElement("p");

const leftDiv = document.createElement("div");
const logoName = document.createElement("h1");
const logoDiv = document.createElement("div");
const logoTyp = document.createElement("p");
const logoIcons = document.createElement("img");
const logoText = document.createElement("p");
const searchDiv = document.createElement("div");
const searchIcons = document.createElement("img");
const inputSearch = document.createElement("input");

count.textContent = 0; // add count
price.textContent = "0 p."; // add price
priceText.textContent = "Оформить заказ";
basket.src = "icons/navbar/Иконка_корзины.png";
heart.src = "icons/navbar/Иконка_Избранное.png";
strelka.src = "icons/navbar/стрелка.png";
number.textContent = "8-800-777-49-67";
txt.textContent = "Заказать звонок";
locaIcons.src = "icons/navbar/Иконка_Локации.png";
locaName.textContent = "Москва";
logoName.textContent = "ZLATMAX";
logoTyp.textContent = "ЗЛAТОУСТОВСКИЕ";
logoIcons.src = "icons/navbar/logo_knife.png";
logoText.textContent = "НОЖИ";
searchIcons.src = "icons/navbar/search.svg";
inputSearch.placeholder = "Поиск";

count.classList.add("count");
priceText.classList.add("priceText");
price.classList.add("price");
addCards.classList.add("addCards");
locationOrder.classList.add("locationOrder");
textDiv.classList.add("textDiv");
locaName.classList.add("locaName");
number.classList.add("number");
txt.classList.add("txt");
logoName.classList.add("logoName");
logoTyp.classList.add("logo");
logoText.classList.add("logo");
divLogo.classList.add("divLogo");
orderDiv.classList.add("orderDiv");
logoDiv.classList.add("logoDiv");
searchDiv.classList.add("searchDiv");
inputSearch.classList.add("inputSearch");
navbarLogo.classList.add("navbarLogo");
order.classList.add("order");
loca.classList.add("loca");

addCards.append(basket, count);
addText.append(price, priceText);
order.append(addCards, addText);
textDiv.append(number, strelka);
divText.append(textDiv, txt);
locationOrder.append(locaIcons, locaName);
loca.append(locationOrder, divText);
orderDiv.append(loca, heart, order);
searchDiv.append(searchIcons, inputSearch);
logoDiv.append(logoTyp, logoIcons, logoText);
leftDiv.append(logoName, logoDiv);
divLogo.append(leftDiv, searchDiv);
navbarLogo.append(divLogo, orderDiv);

//NAVBAR navigation

const secText = document.createElement("div");
const hr = document.createElement("div");
const divTxt = document.createElement("div");
const text1 = document.createElement("p");
const text2 = document.createElement("p");
const text3 = document.createElement("p");
const text4 = document.createElement("p");
const text5 = document.createElement("p");

text1.textContent = "Каталог ножей";
text2.textContent = "Клинковое оружие";
text3.textContent = "Сувенирные изделия";
text4.textContent = "Фонари ARMYTEK";
text5.textContent = "Сопуствующие товары";

divTxt.classList.add("divTxt");
hr.classList.add("hr");
secText.classList.add("secText");
text1.classList.add("firstText");
text2.classList.add("txtAll");
text3.classList.add("txtAll");
text4.classList.add("txtAll");
text5.classList.add("txtAll");

divTxt.append(text1, text2, text3, text4, text5);
secText.append(divTxt, hr);

// SECTION 1

const section1 = document.createElement("div");

// SectionText

const sectionTxt = document.createElement("div");
const txt1 = document.createElement("p");
const str = document.createElement("img");
const txt2 = document.createElement("p");
const str1 = document.createElement("img");
const txt3 = document.createElement("p");

str.src = "icons/section_1/strelka_right.png";
str1.src = "icons/section_1/strelka_right.png";
txt1.textContent = "Главная";
txt2.textContent = "Разделочные ножи";
txt3.textContent = "Нож Снегирь";

sectionTxt.classList.add("sectionTxt");
txt3.classList.add("txt3");
txt1.classList.add("textAll");
txt2.classList.add("textAll");
section1.classList.add("section1");

// ImgDiv

const sectionDivImg = document.createElement("div");
const divAllImg = document.createElement("div");
const firstImg = document.createElement("img");
const imgAllDiv = document.createElement("div");

const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
const img4 = document.createElement("img");

firstImg.src = "images/main-foto.png";
img1.src = "images/sec-foto_1.png";
img2.src = "images/sec-foto_2.png";
img3.src = "images/sec-foto_3.png";
img4.src = "images/sec-foto_4.png";

imgAllDiv.classList.add("imgAllDiv");
divAllImg.classList.add("divAllImg");

imgAllDiv.append(img1, img2, img3, img4);
divAllImg.append(firstImg, imgAllDiv);
sectionDivImg.append(divAllImg);
sectionTxt.append(txt1, str, txt2, str1, txt3);

// tovar

const catalog = document.createElement("div");
const knifeDiv = document.createElement("div");
const knifeText = document.createElement("div");
const knifeStart = document.createElement("div");
const knifeName = document.createElement("p");
const star1 = document.createElement("img");
const star2 = document.createElement("img");
const star3 = document.createElement("img");
const star4 = document.createElement("img");
const star5 = document.createElement("img");
const knifeIcons = document.createElement("div");
const iconScale = document.createElement("img");
const iconHeart = document.createElement("img");
const nameCato = document.createElement("p");
const hr1 = document.createElement("div");
const hr2 = document.createElement("div");
const hr3 = document.createElement("div");

nameCato.textContent = "В наличии";
knifeName.textContent = "Нож Снегирь";
star1.src = "icons/section_1/start.png";
star2.src = "icons/section_1/start.png";
star3.src = "icons/section_1/start.png";
star4.src = "icons/section_1/start.png";
star5.src = "icons/section_1/start.png";
iconScale.src = "icons/section_1/scales.png";
iconHeart.src = "icons/section_1/Иконка_Избранное (1).png";

hr1.classList.add("hrAll");
hr2.classList.add("hrAll");
hr3.classList.add("hrAll");
nameCato.classList.add("nameCato");
knifeName.classList.add("knifeName");
knifeStart.classList.add("knifeStart");
knifeText.classList.add("knifeText");
knifeIcons.classList.add("knifeIcons");
knifeDiv.classList.add("knifeDiv");
catalog.classList.add("catalog");

knifeStart.append(star1, star2, star3, star4, star5);
knifeText.append(knifeName, knifeStart);
knifeIcons.append(iconScale, iconHeart);
knifeDiv.append(knifeText, knifeIcons);

const divTextObj = document.createElement("div");
const keyText = document.createElement("div");
const propertyText = document.createElement("div");

const keyText1 = document.createElement("p");
const keyText2 = document.createElement("p");
const keyText3 = document.createElement("p");
const keyText4 = document.createElement("p");

const propertyText1 = document.createElement("p");
const propertyText2 = document.createElement("p");
const propertyText3 = document.createElement("p");
const propertyText4 = document.createElement("p");
const keyTxt1 = document.createElement("p");
const keyTxt2 = document.createElement("p");
const keyTxt3 = document.createElement("p");
const keyTxt4 = document.createElement("p");
const textAndInputDiv = document.createElement("div");
const keyTxt = document.createElement("div");
const divInput = document.createElement("div");

keyTxt1.textContent = "Сталь";
keyTxt2.textContent = "Рукоять";
keyTxt3.textContent = "Гарда и тыльник";
keyTxt4.textContent = "Обработка клинка";

keyText1.textContent = "Артикул:";
keyText2.textContent = "Торговая марка:";
keyText3.textContent = "Серия:";
keyText4.textContent = "Бонусные баллы:";

propertyText1.textContent = "AF0000001952";
propertyText2.textContent = "WUESTHOF (Германия)";
propertyText3.textContent = "Ножи серии Classic Ikon";
propertyText4.textContent = "38";

keyText.classList.add("keyTextDiv");
propertyText.classList.add("propertyTextDiv");
divTextObj.classList.add("divTextObj");
textAndInputDiv.classList.add("textAndInputDiv");
keyTxt.classList.add("keyTxtDiv");

// Dropdown 1

const dropDown = document.createElement("div");
const txtBtn = document.createElement("p");
const button = document.createElement("button");
const arrow = document.createElement("img");

arrow.src = "icons/section_1/arrow-right.png";
txtBtn.textContent = "Выбрать сталь";

button.append(arrow);
txtBtn.classList.add("txtBtn");
dropDown.classList.add("dropdown");
button.classList.add("button");
arrow.classList.add("arrow");

button.append(arrow);
dropDown.append(txtBtn, button);

const dropdownContent = document.createElement("div");
dropdownContent.classList.add("dropdown-content");
const steelOptions = [
  "100X13M",
  "110X18M-ШД",
  "40Х10С2М (ЭИ-107)",
  "50Х14МФ",
  "95Х18",
  "AUS-8",
  "ELMAX",
  "RWL-34"
];

steelOptions.forEach((steel) => {
  const option = document.createElement("p");
  option.textContent = steel;
  dropdownContent.appendChild(option);

  option.addEventListener("click", () => {
    txtBtn.textContent = steel;
    txtBtn.style.color = "#141414";
    dropdownContent.classList.remove("show");
    arrow.classList.remove("arrow-down");
  });
});

dropDown.appendChild(dropdownContent);

button.addEventListener("click", () => {
  dropdownContent.classList.toggle("show");
  arrow.classList.toggle("arrow-down");
});

// Dropdown 2
const dropDown2 = document.createElement("div");
const txtBtn2 = document.createElement("p");
const button2 = document.createElement("button");
const arrow2 = document.createElement("img");

arrow2.src = "icons/section_1/arrow-right.png";
txtBtn2.textContent = "Выбрать рукоять";

txtBtn2.classList.add("txtBtn");
dropDown2.classList.add("dropdown");
button2.classList.add("button");
arrow2.classList.add("arrow");

button2.append(arrow2);
dropDown2.append(txtBtn2, button2);

// Dropdown 3
const dropDown3 = document.createElement("div");
const txtBtn3 = document.createElement("p");
const button3 = document.createElement("button");
const arrow3 = document.createElement("img");

arrow3.src = "icons/section_1/arrow-right.png";
txtBtn3.textContent = "Выбрать гарда и тыльник";

txtBtn3.classList.add("txtBtn");
dropDown3.classList.add("dropdown");
button3.classList.add("button");
arrow3.classList.add("arrow");

button3.append(arrow3);
dropDown3.append(txtBtn3, button3);

// Dropdown 4
const dropDown4 = document.createElement("div");
const txtBtn4 = document.createElement("p");
const button4 = document.createElement("button");
const arrow4 = document.createElement("img");

arrow4.src = "icons/section_1/arrow-right.png";
txtBtn4.textContent = "Выбрать обработку клинка";

txtBtn4.classList.add("txtBtn");
dropDown4.classList.add("dropdown");
button4.classList.add("button");
arrow4.classList.add("arrow");

button4.append(arrow4);
dropDown4.append(txtBtn4, button4);

divInput.classList.add("divInput");

// 3 chast

const divTxtEnd = document.createElement("div");
const txtEnd = document.createElement("h3");
const txtAndBtnEnd = document.createElement("div");
const btnEnd = document.createElement("button");
const tooltip = document.createElement("div");
const pEnd = document.createElement("p");

btnEnd.textContent = "?";
txtEnd.textContent = "3 865 ₽";
pEnd.textContent = "+ 449 баллов за покупку";
tooltip.textContent =
  "Вам будут начислены баллы в размере 5% от стоимости покупки. Их можно будет использовать на оплату последующих заказов.";

tooltip.classList.add("tooltip");
txtAndBtnEnd.classList.add("txtAndBtnEnd");
txtEnd.classList.add("txtEnd");
btnEnd.classList.add("btnEnd");
pEnd.classList.add("pEnd");
divTxtEnd.classList.add("divTxtEnd");

// buttons

const divAllButtons = document.createElement("div");

const divButtons = document.createElement("div");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

btn1.textContent = "-";
btn2.textContent = 0;
btn3.textContent = "+";

let countBtn = 0;

btn3.onclick = () => {
  countBtn++;
  btn2.textContent = countBtn;
  count.textContent = countBtn;
};

btn1.onclick = () => {
  if (countBtn > 0) {
    countBtn--;
    btn2.textContent = countBtn;
    count.textContent = countBtn;
  }
};
divButtons.classList.add("divButtons");

// buttons buy and add
const btnBuyAndAdd = document.createElement("div");
const btnBuy = document.createElement("button");
const btnBuyIcon = document.createElement("img");

const btnAdd = document.createElement("button");
btnBuyAndAdd.classList.add("btnBuyAndAdd");
divAllButtons.classList.add("divAllButtons");
btnBuyIcon.src = "icons/section_1/Иконка_корзины (1).png";
btnBuy.textContent = "В корзину";
btnAdd.textContent = "Купить в 1 клик";

btnBuy.appendChild(btnBuyIcon);
btnBuyAndAdd.append(btnBuy, btnAdd);
divButtons.append(btn1, btn2, btn3);
divAllButtons.append(divButtons, btnBuyAndAdd);
btnEnd.appendChild(tooltip);
txtAndBtnEnd.append(pEnd, btnEnd);
divTxtEnd.append(txtEnd, txtAndBtnEnd);
divInput.append(dropDown, dropDown2, dropDown3, dropDown4);
keyTxt.append(keyTxt1, keyTxt2, keyTxt3, keyTxt4);
textAndInputDiv.append(keyTxt, divInput);
keyText.append(keyText1, keyText2, keyText3, keyText4);
propertyText.append(propertyText1, propertyText2, propertyText3, propertyText4);
divTextObj.append(keyText, propertyText);
catalog.append(
  knifeDiv,
  nameCato,
  hr1,
  divTextObj,
  hr2,
  textAndInputDiv,
  hr3,
  divTxtEnd,
  divAllButtons
);
section1.append(sectionDivImg, catalog);

root.append(navbar, navbarLogo, secText, sectionTxt, section1);

// EVENTS

// arrow right down
let isDown = false;

button.onclick = () => {
  isDown = !isDown;

  if (isDown) {
    arrow.src = "icons/section_1/arrow-down.png";
  } else {
    arrow.src = "icons/section_1/arrow-right.png";
  }
};

btnEnd.addEventListener("mouseover", () => {
  tooltip.style.display = "block";
});

btnEnd.addEventListener("mouseout", () => {
  tooltip.style.display = "none";
});
