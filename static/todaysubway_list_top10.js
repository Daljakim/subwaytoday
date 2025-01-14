

//이것은 "최신순" 리스트를 위한 ajax

$(document).ready(function () {
                showPopular();
            });

 function showPopular() {
                $.ajax({
                    type: 'GET',
                    url: '/listing',
                    data: {},
                    success: function (response) {
                        let recipes = response['all_mychoices']
                        for (let i = 0; i < recipes.length; i++) {
                            // let userid = recipes[i]['userid']
                            let sandwich = recipes[i]['sandwich']
                            let bread = recipes[i]['bread']
                            let sauce = recipes[i]['sauce']
                            let cheese = recipes[i]['cheese']
                            let comment = recipes[i]['comment']
                            let img = recipes[i]['img']

                            // 여기에 최신순 탭 리스트에 들어갈 html뼈대 붙이면 됩니다
                            let temp_html = `<div class="white-cards">
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
            <span class="name">${sandwich}</span>
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
            ${bread}
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
            ${sauce}
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
            ${cheese}
          </div>
          <div style="position: absolute; left: 5vw; top: 2vw">
            <img
              class="img-sdw"
              id="img-sdw"
              src="${img}"
            />
          </div>

          


          <div style="position: absolute; left: 6vw; top: 19vw; z-index: +1;">
            <img
                    class="img-tip"
                    src="https://drive.google.com/uc?id=1G5_vQiPjjTp_I5aMpe8ZZ5ITvSmIAqPU"
            />
          </div>

          <div class="input-tip" style="position: absolute; left: 8vw; top: 22vw">
          </div>

          <div id="input-tip" class="input-tip2" style="position: absolute; left: 8vw; top: 22.8vw">  
            <span>${comment}</span> 
          </div>

          
          <button
                        style="position: absolute; top: 22vw; left: 66vw;"
                        class="btn-like"
                        id="btn-like"
                        type="submit"
                >
                    <img style="position: absolute; bottom: -2vw; left: -0.6vw;"
                            class="img-like"
                            src="https://drive.google.com/uc?id=1607K8hfTAfjaBIxlhuNpSv7m-YIXQh38"/>
          </button>

          <div class="nb-like"
                    style="position: absolute; top: 23vw; left: 68.5vw; z-index: +1">
                    <span id="nb-like">${like}</span></div>
        </div>
      </div>`


                            $("#popularSandwich").append(temp_html);
                        }
                    }

                });
 }
