function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("btn-top10");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// 인기순 정렬 및 검색 기능
const popularSandwich = [
  {
    img: "https://www.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png",
    name: "에그마요",
    sauce: "스모크 바비큐",
    cheese: "모짜렐라 치즈",
    kcal: "450kcal",
    tip: "아보카도를 넣어 먹으세요",
    like: 5,
  },
  {
    name: "에그마요",
    sauce: "핫칠리",
    cheese: "모짜렐라 치즈",
    kcal: "450kcal",
    tip: "아보카도를 넣어 먹으세요",
    like: 3,
  },
  {
    name: "BLT",
    sauce: "스위트 어니언",
    cheese: "모짜렐라 치즈",
    kcal: "450kcal",
    tip: "아보카도를 넣어 먹으세요",
    like: 7,
  },
  {
    name: "BMT",
    sauce: "스모크 바비큐",
    cheese: "모짜렐라 치즈",
    kcal: "450kcal",
    tip: "아보카도를 넣어 먹으세요",
    like: 20,
  },
];
const Pop = popularSandwich.sort(function (a, b) {
  return b.like - a.like;
});

const PopularRank = Pop.splice(0, 10);

const popular = document.getElementById("popularSandwich");

function popularList(val = "") {
  popular.innerHTML = "";
  const res = PopularRank.forEach((sandwich) => {
    if (sandwich.name.includes(val)) {
      const li = document.createElement("li");
      li.innerHTML = `
      <div class="white-cards">
        <div class="result-box" style="position: relative">
          <div style="position: absolute; left: 31vw; top: 5vw">
            <img
              class="bar-bread"
              id="bar-bread"
              src="https://drive.google.com/uc?id=11X3DD4jXWBJqg5lp-qdYaDb8L7wFyOeu"
            />
          </div>
          <div style="position: absolute; left: 32vw; top: 11vw">
            <img
              class="bar-sauce"
              id="bar-sauce"
              src="https://drive.google.com/uc?id=1xgMJMT19UtQnUmG96rKRvSOjFwJX4kOt"
            />
          </div>
          <div style="position: absolute; left: 31.5vw; top: 16vw">
            <img
              class="bar-cheese"
              id="bar-cheese"
              src="https://drive.google.com/uc?id=1UmUNlUiUlHS6l1RxTEHImZwlBogi_olA"
            />
          </div>

          <div
            id="menu"
            class="name-div"
            style="position: absolute; left: 4.5vw; top: 3vw"
          >
            <span class="name">${sandwich.name}</span>
          </div>
          <div
            id="bread"
            style="
              position: absolute;
              left: 43vw;
              top: 4.4vw;
              font-size: 2vw;
              font-weight: bold;
            "
          >
            플랫브래드
          </div>
          <div
            id="sauce"
            style="
              position: absolute;
              left: 45vw;
              top: 11vw;
              font-size: 1.8vw;
              font-weight: bold;
            "
          >
            스위트 칠리, 허니머스타드
          </div>
          <div
            id="cheese"
            style="
              position: absolute;
              left: 41vw;
              top: 16.5vw;
              font-size: 2vw;
              font-weight: bold;
            "
          >
            아메리칸 치즈
          </div>
          <div style="position: absolute; left: 5vw; top: 2vw">
            <img
              class="img-sdw"
              id="img-sdw"
              src="https://www.subway.co.kr/upload/menu/%EC%95%B1%EC%9A%A9_%EB%A1%9C%ED%8B%B0%EC%84%B8%EB%A6%AC_%EB%B0%94%EB%B9%84%ED%81%90_%EC%B9%98%ED%82%A8_%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84_15cm_%EB%8B%A8%ED%92%88_20220228055941893.png"
            />
          </div>

          <div style="position: absolute; left: 8vw; top: 19vw; z-index: +1;">
            <img
                    class="img-tip"
                    src="https://drive.google.com/uc?id=1G5_vQiPjjTp_I5aMpe8ZZ5ITvSmIAqPU"
            />
          </div>
          <div style="position: absolute; left: 11vw; top: 22vw">
            <input
                    id="input-tip"
                    class="input-tip"
                    type="text"
                    placeholder=" 당신만의 추가 팁이 있다면?(25자이내)"
            />
          </div>
        </div>
      </div>
        `;
      popular.appendChild(li);
    }
  });
}
popularList();

const PopularSearchInput = document.getElementById("PopularSearch");
const PopularSearchBtn = document.getElementById("PopularBtn");

PopularSearchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = PopularSearchInput.value;
  console.log(val);
  popularList(val);
});

// 최선순 정렬
const newSandwich = [
  {
    name: "에그마요",
    like: 3,
    date: "2020-01-02",
  },
  {
    name: "미트볼",
    like: 5,
    date: "2020-01-04",
  },
  {
    name: "로스트 치킨",
    like: 20,
    date: "2020-01-05",
  },
];
const NewMake = newSandwich.sort(); // 지우지 마세요

const NewMaking = NewMake.splice(0, 10);

const newdate = document.getElementById("newSandwich");

function newList(val = "") {
  newdate.innerHTML = "";
  const res = NewMaking.forEach((NewSandwich) => {
    if (NewSandwich.name.includes(val)) {
      const li = document.createElement("li");
      li.innerHTML = `
      <div class="white-cards">
        <div class="result-box" style="position: relative">
          <div style="position: absolute; left: 31vw; top: 5vw">
            <img
              class="bar-bread"
              id="bar-bread"
              src="https://drive.google.com/uc?id=11X3DD4jXWBJqg5lp-qdYaDb8L7wFyOeu"
            />
          </div>
          <div style="position: absolute; left: 32vw; top: 11vw">
            <img
              class="bar-sauce"
              id="bar-sauce"
              src="https://drive.google.com/uc?id=1xgMJMT19UtQnUmG96rKRvSOjFwJX4kOt"
            />
          </div>
          <div style="position: absolute; left: 31.5vw; top: 16vw">
            <img
              class="bar-cheese"
              id="bar-cheese"
              src="https://drive.google.com/uc?id=1UmUNlUiUlHS6l1RxTEHImZwlBogi_olA"
            />
          </div>

          <div
            id="menu"
            class="name-div"
            style="position: absolute; left: 4.5vw; top: 3vw"
          >
            <span class="name">${NewSandwich.name}</span>
          </div>
          <div
            id="bread"
            style="
              position: absolute;
              left: 43vw;
              top: 4.4vw;
              font-size: 2vw;
              font-weight: bold;
            "
          >
            플랫브래드
          </div>
          <div
            id="sauce"
            style="
              position: absolute;
              left: 45vw;
              top: 11vw;
              font-size: 1.8vw;
              font-weight: bold;
            "
          >
            스위트 칠리, 허니머스타드
          </div>
          <div
            id="cheese"
            style="
              position: absolute;
              left: 41vw;
              top: 16.5vw;
              font-size: 2vw;
              font-weight: bold;
            "
          >
            아메리칸 치즈
          </div>
          <div style="position: absolute; left: 5vw; top: 2vw">
            <img
              class="img-sdw"
              id="img-sdw"
              src="https://www.subway.co.kr/upload/menu/%EC%95%B1%EC%9A%A9_%EB%A1%9C%ED%8B%B0%EC%84%B8%EB%A6%AC_%EB%B0%94%EB%B9%84%ED%81%90_%EC%B9%98%ED%82%A8_%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84_15cm_%EB%8B%A8%ED%92%88_20220228055941893.png"
            />
          </div>

          <div style="position: absolute; left: 8vw; top: 19vw; z-index: +1;">
            <img
                    class="img-tip"
                    src="https://drive.google.com/uc?id=1G5_vQiPjjTp_I5aMpe8ZZ5ITvSmIAqPU"
            />
          </div>
          <div style="position: absolute; left: 11vw; top: 22vw">
            <input
                    id="input-tip"
                    class="input-tip"
                    type="text"
                    placeholder=" 당신만의 추가 팁이 있다면?(25자이내)"
            />
          </div>
        </div>
      </div>
      `;
      newdate.appendChild(li);
    }
  });
}
newList();

const NewSearchInput = document.getElementById("NewSearch");
const NewSearchBtn = document.getElementById("NewBtn");

NewSearchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = NewSearchInput.value;
  console.log(val);
  newList(val);
});