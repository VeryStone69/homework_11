document.querySelector('#page').addEventListener('click',myEvent)


    let winterIsComing = {
        winter : "pages/north.html",
        satorios : "pages/sotorios.html",
        coldSea: "pages/coldSea.html",
        goldTi: "pages/goldTi.html",
        summerIsland: "pages/summerIsland.html",
        winterfell: "pages/winterfell.html",
        king: "pages/kingLanding.html"
    };

    let arrWinter = ["Винтерфелл", "Соториос","Студеное море", "Золотую Империю И-Ти", "Летние Острова", "Север", "Королевскую гавань"];

     function myEvent(e) {

            if ((e.pageX > 268  && e.pageX < 300 ) && (e.pageY > 561 && e.pageY < 571)) wind(winterIsComing.winterfell);

            else if ((e.pageX > 330  && e.pageX < 370 ) && (e.pageY > 920 && e.pageY < 935)) wind(winterIsComing.king);

            else if ((e.pageX > 860  && e.pageX < 1300 ) && (e.pageY > 1450 && e.pageY < 1650)) wind(winterIsComing.satorios);

            else if ((e.pageX > 100  && e.pageX < 440 ) && (e.pageY > 0 && e.pageY < 650)) wind(winterIsComing.winter);

            else if ((e.pageX > 450  && e.pageX < 2000 ) && (e.pageY > 0 && e.pageY < 740)) wind(winterIsComing.coldSea);

            else if ((e.pageX > 1460  && e.pageX < 1813 ) && (e.pageY > 1080 && e.pageY < 1400)) wind(winterIsComing.goldTi);

            else if ((e.pageX > 387  && e.pageX < 687 ) && (e.pageY > 1330 && e.pageY < 1585)) wind(winterIsComing.summerIsland);

             else alert(`Попробуй найти на карте ${random()}`);

        }

        function random(){
            let x = Math.floor(Math.random() * 6);
            let y = arrWinter[x];
            return y;
        };

     function wind(x) {window.open(x,null, 'width=600, height=700');}



