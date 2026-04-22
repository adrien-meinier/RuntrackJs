$(document).ready(function () {

    let locked = false;

    const $game = $("#game");
    const empty = $("#empty")[0];

    let grid = [];

    function init() {

        grid = [];

        $("#game img").each(function () {
            grid.push(this);
        });

        grid.push(empty);

        shuffle();
        render();
    }

    function shuffle() {

        for (let i = grid.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [grid[i], grid[j]] = [grid[j], grid[i]];
        }
    }

    function render() {

        $game.empty();

        for (let i = 0; i < grid.length; i++) {
            $game.append(grid[i]);
        }
    }

    function indexOf(el) {
        return grid.indexOf(el);
    }

    function isAdjacent(a, b) {

        const p1 = indexOf(a);
        const p2 = indexOf(b);

        const r1 = Math.floor(p1 / 3);
        const c1 = p1 % 3;

        const r2 = Math.floor(p2 / 3);
        const c2 = p2 % 3;

        return (
            (Math.abs(r1 - r2) === 1 && c1 === c2) ||
            (Math.abs(c1 - c2) === 1 && r1 === r2)
        );
    }

    function checkWin() {

        for (let i = 0; i < 8; i++) {
            if ($(grid[i]).data("order") != i + 1) return;
        }

        locked = true;

        $game.after("<div id='winMessage'>Vous avez gagné</div>");
        $game.after("<button id='restart'>Recommencer</button>");
    }

    $("#game").on("click", "img", function () {

        if (locked) return;

        if (isAdjacent(this, empty)) {

            const i1 = grid.indexOf(this);
            const i2 = grid.indexOf(empty);

            grid[i1] = empty;
            grid[i2] = this;

            render();
            checkWin();
        }
    });

    $(document).on("click", "#restart", function () {

        locked = false;

        $("#winMessage").remove();
        $("#restart").remove();

        init();
    });

    init();
});