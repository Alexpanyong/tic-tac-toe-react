import React from 'react';
import './App.css';

const App = () => {
  const x = "x"
  const o = "o"
  let count = 0;
  let o_win = 0;
  let x_win = 0;

  const handleClickRestart = () => {
    const elm = document.querySelectorAll('#game li');
    for (let i = 0; i < elm.length; i++) {
      elm[i].innerHTML = "+";
      elm[i].classList.remove('disable');
      elm[i].classList.remove('o');
      elm[i].classList.remove('x');
      elm[i].classList.remove('btn-primary');
      elm[i].classList.remove('btn-info');
    }
    count = 0;
  };

  const hanedleClickItem = (e) => {
    const elm = document.querySelectorAll('#game li');
    if (elm["#one"].classList.contains('o') && elm["#two"].classList.contains('o') && elm["#three"].classList.contains('o') 
      || elm["#four"].classList.contains('o') && elm["#five"].classList.contains('o') && elm["#six"].classList.contains('o') 
      || elm["#seven"].classList.contains('o') && elm["#eight"].classList.contains('o') && elm["#nine"].classList.contains('o') 
      || elm["#one"].classList.contains('o') && elm["#four"].classList.contains('o') && elm["#seven"].classList.contains('o') 
      || elm["#two"].classList.contains('o') && elm["#five"].classList.contains('o') && elm["#eight"].classList.contains('o') 
      || elm["#three"].classList.contains('o') && elm["#six"].classList.contains('o') && elm["#nine"].classList.contains('o') 
      || elm["#one"].classList.contains('o') && elm["#five"].classList.contains('o') && elm["#nine"].classList.contains('o') 
      || elm["#three"].classList.contains('o') && elm["#five"].classList.contains('o') && elm["#seven"].classList.contains('o')) {
        alert('O has won the game. Start a new game');
        for (let i = 0; i < elm.length; i++) {
          elm[i].innerHTML = "+";
          elm[i].classList.remove('disable');
          elm[i].classList.remove('o');
          elm[i].classList.remove('x');
          elm[i].classList.remove('btn-primary');
          elm[i].classList.remove('btn-info');
        }
      }
      else if (elm["#one"].classList.contains('x') && elm["#two"].classList.contains('x') && elm["#three"].classList.contains('x') 
      || elm["#four"].classList.contains('x') && elm["#five"].classList.contains('x') && elm["#six"].classList.contains('x') 
      || elm["#seven"].classList.contains('x') && elm["#eight"].classList.contains('x') && elm["#nine"].classList.contains('x') 
      || elm["#one"].classList.contains('x') && elm["#four"].classList.contains('x') && elm["#seven"].classList.contains('x') 
      || elm["#two"].classList.contains('x') && elm["#five"].classList.contains('x') && elm["#eight"].classList.contains('x') 
      || elm["#three"].classList.contains('x') && elm["#six"].classList.contains('x') && elm["#nine"].classList.contains('x') 
      || elm["#one"].classList.contains('x') && elm["#five"].classList.contains('x') && elm["#nine"].classList.contains('x') 
      || elm["#three"].classList.contains('x') && elm["#five"].classList.contains('x') && elm["#seven"].classList.contains('x')) {
        alert('X wins has won the game. Start a new game');
        for (let i = 0; i < elm.length; i++) {
          elm[i].innerHTML = "+";
          elm[i].classList.remove('disable');
          elm[i].classList.remove('o');
          elm[i].classList.remove('x');
          elm[i].classList.remove('btn-primary');
          elm[i].classList.remove('btn-info');
        }
      }
      else if (count === 9) {
        alert('Its a tie. It will restart.');
        for (let i = 0; i < elm.length; i++) {
          elm[i].innerHTML = "+";
          elm[i].classList.remove('disable');
          elm[i].classList.remove('o');
          elm[i].classList.remove('x');
          elm[i].classList.remove('btn-primary');
          elm[i].classList.remove('btn-info');
        }
        count = 0;
      }
      else if (e.classList.contains('disable')) {
        alert('Already selected');
      }
      else if (count % 2 === 0) {
        count++;
        e.innerHTML = "o";
        e.classList.add('disable', 'o', 'btn-primary');
      if (elm["#one"].classList.contains('o') && elm["#two"].classList.contains('o') && elm["#three"].classList.contains('o') 
        || elm["#four"].classList.contains('o') && elm["#five"].classList.contains('o') && elm["#six"].classList.contains('o') 
        || elm["#seven"].classList.contains('o') && elm["#eight"].classList.contains('o') && elm["#nine"].classList.contains('o') 
        || elm["#one"].classList.contains('o') && elm["#four"].classList.contains('o') && elm["#seven"].classList.contains('o') 
        || elm["#two"].classList.contains('o') && elm["#five"].classList.contains('o') && elm["#eight"].classList.contains('o') 
        || elm["#three"].classList.contains('o') && elm["#six"].classList.contains('o') && elm["#nine"].classList.contains('o') 
        || elm["#one"].classList.contains('o') && elm["#five"].classList.contains('o') && elm["#nine"].classList.contains('o') 
        || elm["#three"].classList.contains('o') && elm["#five"].classList.contains('o') && elm["#seven"].classList.contains('o')) {
          alert('O wins');
          count = 0;
          o_win++;
          elm['#o_win'].innerHTML = "o_win";
        }
      }
      else {
        count++;
        e.innerHTML = "x";
        e.classList.add('disable', 'x', 'btn-info');
      if (elm["#one"].classList.contains('x') && elm["#two"].classList.contains('x') && elm["#three"].classList.contains('x') 
        || elm["#four"].classList.contains('x') && elm["#five"].classList.contains('x') && elm["#six"].classList.contains('x') 
        || elm["#seven"].classList.contains('x') && elm["#eight"].classList.contains('x') && elm["#nine"].classList.contains('x') 
        || elm["#one"].classList.contains('x') && elm["#four"].classList.contains('x') && elm["#seven"].classList.contains('x') 
        || elm["#two"].classList.contains('x') && elm["#five"].classList.contains('x') && elm["#eight"].classList.contains('x') 
        || elm["#three"].classList.contains('x') && elm["#six"].classList.contains('x') && elm["#nine"].classList.contains('x') 
        || elm["#one"].classList.contains('x') && elm["#five"].classList.contains('x') && elm["#nine"].classList.contains('x') 
        || elm["#three"].classList.contains('x') && elm["#five"].classList.contains('x') && elm["#seven"].classList.contains('x')) {
          alert('X wins');
          count = 0;
          x_win++;
          elm['#x_win'].innerHTML = "x_win";
        }
      }
  };

    return (
      <div id="tic-tac-toe">
        <div className="span3 new_span">
          <div className="row">
            <h1 className="span3">Tic Tac Toe</h1>
            <div className="span3">
              <div className="input-prepend input-append">
                <span className="add-on win_text">O won</span>
                <strong id="o_win" className="win_times add-on">0</strong>
                <span className="add-on">time(s)</span>
              </div>
              <div className="input-prepend input-append">
                <span className="add-on win_text">X won</span>
                <strong id="x_win" className="win_times add-on">0</strong>
                <span className="add-on">time(s)</span>
              </div>
            </div>
          </div>
          <ul className="row" id="game">
            <li id="one" className="btn span1" onClick={(e) => hanedleClickItem(e.target)}>+</li>
            <li id="two" className="btn span1" onClick={(e) => hanedleClickItem(e.target)}>+</li>
            <li id="three" className="btn span1" onClick={(e) => hanedleClickItem(e.target)}>+</li>
            <li id="four" className="btn span1" onClick={(e) => hanedleClickItem(e.target)}>+</li>
            <li id="five" className="btn span1" onClick={(e) => hanedleClickItem(e.target)}>+</li>
            <li id="six" className="btn span1" onClick={(e) => hanedleClickItem(e.target)}>+</li>
            <li id="seven" className="btn span1" onClick={(e) => hanedleClickItem(e.target)}>+</li>
            <li id="eight" className="btn span1" onClick={(e) => hanedleClickItem(e.target)}>+</li>
            <li id="nine" className="btn span1" onClick={(e) => hanedleClickItem(e.target)}>+</li>
          </ul>
          <div className="clr">&nbsp;</div>
            <div className="row">
            <span id="reset" className="btn-success btn span3" onClick={() => handleClickRestart()}>
                Restart
              </span>
            </div>
        </div>
      </div>
    );
}

export default App;
