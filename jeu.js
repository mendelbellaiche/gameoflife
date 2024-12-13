let jeu = document.querySelector("#jeu");
let playBtn = document.querySelector("#playBtn");

let NBR_CASES_PER_ROW = 40, newJeuHTML;

function initJeuContent() {
    let jeuHTML = "";

    jeuHTML = "<table>";
    for (let i = 0; i < NBR_CASES_PER_ROW; i++) {
        jeuHTML += "<tr class='row' data-i='"+i+"'>";
        for (let j = 0; j < NBR_CASES_PER_ROW; j++) {
            let oneOrZero = (Math.random()>=0.75)? 1 : 0;

            jeuHTML += "<td class='case "+(oneOrZero ? 'alive' : 'dead')+"' data-i='"+i+"' data-j='"+j+"'>";
            jeuHTML += "</td>";
        }
        jeuHTML += "</tr>";
    }
    jeuHTML += "</table>";

    jeu.innerHTML = jeuHTML;
}

function nextStep() {

    var newJeuHTML = "<table>";
    for (let i = 0; i < NBR_CASES_PER_ROW; i++) {
        newJeuHTML += "<tr class='row' data-i='"+i+"'>";
        for (let j = 0; j < NBR_CASES_PER_ROW; j++) {

            let nbCellsAlives = 0;
            let cell = jeu.querySelector(".case[data-i='"+i+"'][data-j='"+j+"']");

            if (i === 0 && j === 0) {
                // CASE HAUT - GAUCHE

                let cell1 = jeu.querySelector(".case[data-i='0'][data-j='1']");
                let cell2 = jeu.querySelector(".case[data-i='1'][data-j='0']");
                let cell3 = jeu.querySelector(".case[data-i='1'][data-j='1']");

                if (cell1.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell2.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell3.classList.contains('alive')) {
                    nbCellsAlives++;
                }


            }
            else if (i === 0 && j === NBR_CASES_PER_ROW - 1) {
                // CASE HAUT - DROITE

                let cell1 = jeu.querySelector(".case[data-i='0'][data-j='"+(NBR_CASES_PER_ROW-2)+"']");
                let cell2 = jeu.querySelector(".case[data-i='1'][data-j='"+(NBR_CASES_PER_ROW-2)+"']");
                let cell3 = jeu.querySelector(".case[data-i='1'][data-j='"+(NBR_CASES_PER_ROW-1)+"']");

                if (cell1.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell2.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell3.classList.contains('alive')) {
                    nbCellsAlives++;
                }

            }
            else if (i === NBR_CASES_PER_ROW - 1 && j === 0) {
                // CASE BAS - GAUCHE

                let cell1 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 2)+"'][data-j='0']");
                let cell2 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 2)+"'][data-j='1']");
                let cell3 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 1)+"'][data-j='1']");

                if (cell1.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell2.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell3.classList.contains('alive')) {
                    nbCellsAlives++;
                }

            }
            else if (i === NBR_CASES_PER_ROW - 1 && j === NBR_CASES_PER_ROW - 1) {
                // CASE BAS - DROITE

                let cell1 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 2)+"'][data-j='"+(NBR_CASES_PER_ROW - 2)+"']");
                let cell2 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 2)+"'][data-j='"+(NBR_CASES_PER_ROW - 1)+"']");
                let cell3 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 1)+"'][data-j='"+(NBR_CASES_PER_ROW - 2)+"']");

                if (cell1.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell2.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell3.classList.contains('alive')) {
                    nbCellsAlives++;
                }

            }
            else if (i === 0) {
                // CASE DU HAUT SANS BORD

                let cell1 = jeu.querySelector(".case[data-i='0'][data-j='"+(j - 1)+"']");
                let cell2 = jeu.querySelector(".case[data-i='0'][data-j='"+(j + 1)+"']");
                let cell3 = jeu.querySelector(".case[data-i='1'][data-j='"+(j - 1)+"']");
                let cell4 = jeu.querySelector(".case[data-i='1'][data-j='"+j+"']");
                let cell5 = jeu.querySelector(".case[data-i='1'][data-j='"+(j + 1)+"']");

                if (cell1.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell2.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell3.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell4.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell5.classList.contains('alive')) {
                    nbCellsAlives++;
                }
            }
            else if (j === 0) {
                // CASE DU COTE GAUCHE

                let cell1 = jeu.querySelector(".case[data-i='"+(i - 1)+"'][data-j='0']");
                let cell2 = jeu.querySelector(".case[data-i='"+(i + 1)+"'][data-j='0']");
                let cell3 = jeu.querySelector(".case[data-i='"+(i - 1)+"'][data-j='1']");
                let cell4 = jeu.querySelector(".case[data-i='"+i+"'][data-j='1']");
                let cell5 = jeu.querySelector(".case[data-i='"+(i + 1)+"'][data-j='1']");

                if (cell1.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell2.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell3.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell4.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell5.classList.contains('alive')) {
                    nbCellsAlives++;
                }
            }
            else if (i === NBR_CASES_PER_ROW - 1) {
                // CASE DU BAS SANS BORD

                let cell1 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 1)+"'][data-j='"+(j - 1)+"']");
                let cell2 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 1)+"'][data-j='"+(j + 1)+"']");
                let cell3 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 2)+"'][data-j='"+(j - 1)+"']");
                let cell4 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 2)+"'][data-j='"+j+"']");
                let cell5 = jeu.querySelector(".case[data-i='"+(NBR_CASES_PER_ROW - 2)+"'][data-j='"+(j + 1)+"']");

                if (cell1.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell2.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell3.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell4.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell5.classList.contains('alive')) {
                    nbCellsAlives++;
                }
            }
            else if (j === NBR_CASES_PER_ROW - 1 ) {
                // CASE DU COTE GAUCHE

                let cell1 = jeu.querySelector(".case[data-i='"+(i - 1)+"'][data-j='"+(NBR_CASES_PER_ROW - 1)+"']");
                let cell2 = jeu.querySelector(".case[data-i='"+(i + 1)+"'][data-j='"+(NBR_CASES_PER_ROW - 1)+"']");
                let cell3 = jeu.querySelector(".case[data-i='"+(i - 1)+"'][data-j='"+(NBR_CASES_PER_ROW - 2)+"']");
                let cell4 = jeu.querySelector(".case[data-i='"+(i)+"'][data-j='"+(NBR_CASES_PER_ROW - 2)+"']");
                let cell5 = jeu.querySelector(".case[data-i='"+(i + 1)+"'][data-j='"+(NBR_CASES_PER_ROW - 2)+"']");

                if (cell1.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell2.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell3.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell4.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell5.classList.contains('alive')) {
                    nbCellsAlives++;
                }

            }
            else {
                // CASE CENTRAL

                let cell1 = jeu.querySelector(".case[data-i='"+(i - 1)+"'][data-j='"+(j - 1)+"']");
                let cell2 = jeu.querySelector(".case[data-i='"+(i - 1)+"'][data-j='"+j+"']");
                let cell3 = jeu.querySelector(".case[data-i='"+(i - 1)+"'][data-j='"+(j + 1)+"']");
                let cell4 = jeu.querySelector(".case[data-i='"+(i)+"'][data-j='"+(j - 1)+"']");
                let cell5 = jeu.querySelector(".case[data-i='"+(i)+"'][data-j='"+(j + 1)+"']");
                let cell6 = jeu.querySelector(".case[data-i='"+(i + 1)+"'][data-j='"+(j - 1)+"']");
                let cell7 = jeu.querySelector(".case[data-i='"+(i + 1)+"'][data-j='"+j+"']");
                let cell8 = jeu.querySelector(".case[data-i='"+(i + 1)+"'][data-j='"+(j + 1)+"']");

                if (cell1.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell2.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell3.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell4.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell5.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell6.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell7.classList.contains('alive')) {
                    nbCellsAlives++;
                }

                if (cell8.classList.contains('alive')) {
                    nbCellsAlives++;
                }
            }

            if (cell.classList.contains('alive')) {
                if (nbCellsAlives !== 2 && nbCellsAlives !== 3) {
                    newJeuHTML += "<td class='case " + ("dead") + "' data-i='" + i + "' data-j='" + j + "'>";
                    newJeuHTML += "</td>";
                } else {
                    newJeuHTML += "<td class='case " + ("alive") + "' data-i='" + i + "' data-j='" + j + "'>";
                    newJeuHTML += "</td>";
                }
            } else if (cell.classList.contains('dead')) {
                if (nbCellsAlives === 3) {
                    newJeuHTML += "<td class='case "+("alive")+"' data-i='"+i+"' data-j='"+j+"'>";
                    newJeuHTML += "</td>";
                } else {
                    newJeuHTML += "<td class='case "+("dead")+"' data-i='"+i+"' data-j='"+j+"'>";
                    newJeuHTML += "</td>";
                }
            }


        }
        newJeuHTML += "</tr>";
    }
    newJeuHTML += "</table>";

    jeu.innerHTML = newJeuHTML;

    setTimeout(() => nextStep(), 0.001);
}

playBtn.addEventListener("click", (e) => {
    e.preventDefault();
    playBtn.setAttribute("disabled", "disabled");
    nextStep();
});

initJeuContent();