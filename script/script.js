let bt1 = document.querySelectorAll(".bt1");
let bt2 = document.querySelectorAll(".bt2");
let bt3 = document.querySelectorAll(".bt3");
let bt4 = document.querySelectorAll(".bt4");
let bt5 = document.querySelectorAll(".bt5");

let listBt1 = [
    "Basic Grammar in Use with Answers",
    "Crying in H Mart",
    "Lessons in Chemistry",
    "Be your Future Self Now",
    "Animal Farm",
    "Numberblocks Annual 2024",
    "Basic Grammar in Use with Answers",
    "Crying in H Mart",
    "Lessons in Chemistry",
    "Be your Future Self Now",
    "Animal Farm",
    "Numberblocks Annual 2024",
    "Basic Grammar in Use with Answers",
    "Crying in H Mart",
    "Lessons in Chemistry",
    "Be your Future Self Now",
    "Animal Farm",
    "Numberblocks Annual 2024",
    "Basic Grammar in Use with Answers",
    "Crying in H Mart",
    "Lessons in Chemistry",
    "Be your Future Self Now",
    "Animal Farm",
    "Numberblocks Annual 2024",
    "Basic Grammar in Use with Answers",
    "Crying in H Mart",
    "Lessons in Chemistry",
    "Be your Future Self Now",
    "Animal Farm",
    "Numberblocks Annual 2024",
    "Basic Grammar in Use with Answers",
    "Crying in H Mart",
    "Lessons in Chemistry",
    "Be your Future Self Now",
    "Animal Farm",
    "Numberblocks Annual 2024",
    "Basic Grammar in Use with Answers",
    "Crying in H Mart",
    "Lessons in Chemistry",
    "Be your Future Self Now",
    "Animal Farm",
    "Numberblocks Annual 2024",
    "Basic Grammar in Use with Answers",
    "Crying in H Mart",
    "Lessons in Chemistry",
    "Be your Future Self Now",
    "Animal Farm",
    "Numberblocks Annual 2024",
    "Be your Future Self Now",
    "Be your Future Self Now",
];

let listBt2 = [
    "Sweet Cherry Publishing · Temple Street Press",
    "Rooney, Sally · Faber & Faber",
    "Benjamin Schultz · 사회평론",
    "Raymond Murphy · CAMBRIDGE",
    "Jeff Kinney · Amulet Books",
    "Johnson, Spencer 외 · Vermillion",
    "Sweet Cherry Publishing · Temple Street Press",
    "Rooney, Sally · Faber & Faber",
    "Benjamin Schultz · 사회평론",
    "Raymond Murphy · CAMBRIDGE",
    "Jeff Kinney · Amulet Books",
    "Johnson, Spencer 외 · Vermillion",
    "Sweet Cherry Publishing · Temple Street Press",
    "Rooney, Sally · Faber & Faber",
    "Benjamin Schultz · 사회평론",
    "Raymond Murphy · CAMBRIDGE",
    "Jeff Kinney · Amulet Books",
    "Johnson, Spencer 외 · Vermillion",
    "Sweet Cherry Publishing · Temple Street Press",
    "Rooney, Sally · Faber & Faber",
    "Benjamin Schultz · 사회평론",
    "Raymond Murphy · CAMBRIDGE",
    "Jeff Kinney · Amulet Books",
    "Johnson, Spencer 외 · Vermillion",
    "Sweet Cherry Publishing · Temple Street Press",
    "Rooney, Sally · Faber & Faber",
    "Benjamin Schultz · 사회평론",
    "Raymond Murphy · CAMBRIDGE",
    "Jeff Kinney · Amulet Books",
    "Johnson, Spencer 외 · Vermillion",
    "Sweet Cherry Publishing · Temple Street Press",
    "Rooney, Sally · Faber & Faber",
    "Benjamin Schultz · 사회평론",
    "Raymond Murphy · CAMBRIDGE",
    "Jeff Kinney · Amulet Books",
    "Johnson, Spencer 외 · Vermillion",
];

for (let i = 0; i < bt1.length; i++) {
    bt1[i].innerHTML = `${listBt1[i]}`;
}
for (let i = 0; i < bt2.length; i++) {
    bt2[i].innerHTML = `${listBt2[i]}`;
}
for (let i = 0; i < bt3.length; i++) {
    bt3[i].innerHTML =
        "<span>오늘의 선택</span><span>사은품</span><span>이벤트</span><span>소득공제</span><span>MD의 선택</span><span>예약판매</span>";
}

for (let i = 0; i < bt4.length; i++) {
    let rdnPer = Math.random() * (50 - 10) + 10;
    let rdnPri1 = Math.random() * (70 - 10) + 10;
    let rdnPri2 = Math.random() * (999 - 100) + 100;
    let dot = ",";
    let rdnPo = Math.random();
    bt4[i].innerHTML = `<span class="green">${rdnPer.toFixed(
        0
    )}%</span><span class="price">${rdnPri1.toFixed(
        0
    )}${dot}${rdnPri2.toFixed(
        0
    )}원</span><span class="point">(${rdnPo.toFixed(2)}p)</span>`;
}