window.addEventListener('scroll', function(){
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const targets = document.querySelectorAll(".fade_item1, .fade_item2, .fade_item3, .fade_item4");
    const lines1 = this.document.querySelectorAll(".line_before1");
    const lines2 = this.document.querySelectorAll(".line_before2");

    // 各モーダルはスクロール時に表示
    targets.forEach(function(target) {
        const distanceToTitle = target.offsetTop;
        if(scroll + windowHeight - 500 > distanceToTitle) {
            target.classList.add("is-active");
        }
    });

    // テキストにラインアニメーション
    lines1.forEach(function(line) {
        const distanceToLine = line.offsetTop;
        if(scroll + windowHeight - 500 > distanceToLine) {
            line.classList.add("line_after1");
        }
    });
    lines2.forEach(function(line) {
        const distanceToLine = line.offsetTop;
        if(scroll + windowHeight - 500 > distanceToLine) {
            line.classList.add("line_after2");
        }
    });
});

// モーダルはフェードイン表示
function modalOpen(name) {
    if(name == family) {
        $("#family_modal").fadeIn();
    }
    else if(name == dog) {
        $("#dog_modal").fadeIn();
    }
    else if(name == beer) {
        $("#beer_modal").fadeIn();
    }
    else if(name == chiikawa) {
        $("#chiikawa_modal").fadeIn();
    }
    else if(name == homeTown) {
        $("#homeTown_modal").fadeIn();
    }
    else if(name == unity) {
        $("#unity_modal").fadeIn();
    }
    else if(name == rubikCube) {
        $("#rubikCube_modal").fadeIn();
    }
    else if(name == ramen) {
        $("#ramen_modal").fadeIn();
    }
    else if(name == book) {
        $("#book_modal").fadeIn();
    }
}

// モーダルはフェードアウトで閉じる
function modalClose() {
    $(".modal").fadeOut();
}