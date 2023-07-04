const conteudoPartida = document.getElementById("conteudoPartida");
const url =
  "https://football98.p.rapidapi.com/brasileir%C3%A3os%C3%A9riea/fixtures";

async function FetchAPI() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e4b13c8b03msh0d627d5bdd2801cp198b5cjsnc88d44f1f516",
      "X-RapidAPI-Host": "football98.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    // Verificar se há dados disponíveis
    if (data && data.length > 0) {
      const matchday14 = data[0][" Matchday 14 "][1]; // Acessar a propriedade desejada

      // Criar elementos para exibir os dados da partida
      const divPartida = document.createElement("div");
      const homeLogo = document.createElement("img");
      const homeTeam = document.createElement("h4");
      const awayLogo = document.createElement("img");
      const awayTeam = document.createElement("h4");
      const MatchDay = document.createElement("p");
      const MatchTime = document.createElement("p");

      const DateFormat = new Date(matchday14.MatchDay).toTimeString();
      homeTeam.textContent = ` ${matchday14.homeTeam}`;
      homeLogo.src = matchday14.homeLogo;
      homeLogo.alt = matchday14.homeTeam;

      awayLogo.src = matchday14.awayLogo;
      awayLogo.alt = matchday14.awayTeam;
      awayTeam.textContent = ` ${matchday14.awayTeam}`;
      MatchDay.textContent = `Data da partida: ${matchday14.MatchDay}`;
      MatchTime.textContent = `Horário da partida: ${matchday14.MatchTime}`;

      divPartida.appendChild(MatchDay);
      divPartida.appendChild(MatchTime);
      divPartida.appendChild(homeLogo);
      divPartida.appendChild(homeTeam);
      divPartida.appendChild(awayLogo);
      divPartida.appendChild(awayTeam);

      conteudoPartida.appendChild(divPartida);
    } else {
      console.log("Não há dados disponíveis.");
    }
  } catch (error) {
    console.error("Ocorreu um erro ao carregar os dados:", error);
  }
}

document.querySelector("button").addEventListener("click", FetchAPI);
