$(document).ready(function () {

    let locked = false;

    const $game = $("#game");
    const $empty = $("#empty");

    // shuffle tiles
    function shuffle() {
        let items = $("#game img").toArray();

        for (let i = items.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }

        $("#game").empty();

        items.forEach(el => {
            $("#game").append(el);
        });

        $("#game").append($empty);
    }

    // check if two tiles are adjacent
    function isAdjacent(a, b) {
        let posA = $(a).index();
        let posB = $(b).index();

        let rowA = Math.floor(posA / 3);
        let colA = posA % 3;

        let rowB = Math.floor(posB / 3);
        let colB = posB % 3;

        return (
            (Math.abs(rowA - rowB) === 1 && colA === colB) ||
            (Math.abs(colA - colB) === 1 && rowA === rowB)
        );
    }

    // check win condition
    function checkWin() {
        let win = true;

        $("#game img").each(function (i) {
            if ($(this).data("order") != i + 1) {
                win = false;
            }
        });

        if (win) {
            locked = true;

            $("#game").after(`
                <div id="winMessage">Vous avez gagné </div>
                <button id="restart">Recommencer</button>
            `);
        }
    }

    // click on tiles
    $("#game").on("click", "img", function () {
        if (locked) return;

        if (isAdjacent(this, $empty[0])) {
            $(this).insertAfter($empty);
            checkWin();
        }
    });

    // restart
    $(document).on("click", "#restart", function () {
        locked = false;
        $("#winMessage").remove();
        $("#restart").remove();
        shuffle();
    });

    // Initial shuffle
    shuffle();
});