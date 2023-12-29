    function updateScore(team, points) {
      var currentScore = document.getElementById(team + 'Score').innerText;
      var newScore = parseInt(currentScore) + points;
      document.getElementById(team + 'Score').innerText = newScore;

      // Check for the winner
      var homeScore = parseInt(document.getElementById('homeScore').innerText);
      var guestScore = parseInt(document.getElementById('guestScore').innerText);

      if (homeScore > guestScore) {
        highlightWinner('homeTeam');
      } else if (guestScore > homeScore) {
        highlightWinner('guestTeam');
      } else {
        resetWinnerHighlight();
      }
    }

    function highlightWinner(teamId) {
      resetWinnerHighlight();
      document.getElementById(teamId).classList.add('winner');
    }

    function resetWinnerHighlight() {
      document.getElementById('homeTeam').classList.remove('winner');
      document.getElementById('guestTeam').classList.remove('winner');
    }