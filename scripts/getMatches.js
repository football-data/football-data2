/* eslint-disable */

// http://futpedia.globo.com/campeonato/campeonato-brasileiro/2003#/fase=fase-unica-brasileiro-2003/rodada=1

const matches = [];
document.querySelectorAll('#lista-jogos > ul > li').forEach(el => {
  const data = el.querySelector('.data-local').textContent.split('\n');
  const date = data[2]
    .replace('-', '')
    .trim()
    .split('/');
  const time = data[3].trim().split('h');
  const stadium = data[4].trim();
  const names = el.querySelectorAll('.nome');

  const match = {
    round: el.dataset.rodada,
    date: new Date(date[2], date[1] - 1, date[0], time[0], time[1]),
    homeTeam: names[0].textContent,
    awayTeam: names[1].textContent,
    homeTeamScore: Number(el.querySelector('.placar > .mandante').textContent),
    awayTeamScore: Number(el.querySelector('.placar > .visitante').textContent),
    stadium,
  };
  matches.push(match);
});
copy(matches);
