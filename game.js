const LAUNCH=new Date('2026-04-18');

function getDayNumber(){
  const today=new Date();today.setHours(0,0,0,0);
  const diff=Math.floor((today-LAUNCH)/86400000);
  return((diff%GAME_DATA.length)+GAME_DATA.length)%GAME_DATA.length;
}
function getPuzzle(){return GAME_DATA[getDayNumber()];}

function getState(){try{return JSON.parse(localStorage.getItem('pp_game')||'{}');}catch{return{};}}
function saveState(s){try{localStorage.setItem('pp_game',JSON.stringify(s));}catch{}}

function initState(){
  const s=getState();
  if(!s.streak)s.streak=0;if(!s.best)s.best=0;
  if(!s.played)s.played=0;if(!s.won)s.won=0;
  if(!s.lastPlayed)s.lastPlayed=null;if(!s.lastResult)s.lastResult=null;
  if(!s.lastChoice)s.lastChoice=null;
  return s;
}
function alreadyPlayedToday(s){return s.lastPlayed===new Date().toISOString().slice(0,10);}
function evaluate(choice,prob){
  if(prob>0.5)return['none','light'].includes(choice);
  return['none','light','moderate'].includes(choice);
}
function ensoStyle(enso){
  if(enso.includes('Strong El'))return'background:rgba(255,80,80,.15);color:#ff6b6b;border:1px solid rgba(255,80,80,.3)';
  if(enso.includes('El Ni'))return'background:rgba(255,150,0,.12);color:#ffaa44;border:1px solid rgba(255,150,0,.25)';
  if(enso.includes('Strong La'))return'background:rgba(0,180,255,.12);color:#44aaff;border:1px solid rgba(0,180,255,.25)';
  if(enso.includes('La Ni'))return'background:rgba(0,150,220,.1);color:#66bbff;border:1px solid rgba(0,150,220,.2)';
  return'background:rgba(100,180,180,.1);color:#88cccc;border:1px solid rgba(100,180,180,.2)';
}
function anom(val,inv=false){
  const pos=inv?'#44cc88':'#ff6b6b',neg=inv?'#ff8844':'#44aaff';
  if(val>0)return`<span style="color:${pos}">+${val.toFixed(3)}</span>`;
  if(val<0)return`<span style="color:${neg}">${val.toFixed(3)}</span>`;
  return`<span style="color:var(--text2)">0.000</span>`;
}
function riskLabel(prob){
  if(prob>=.7)return['🔴 Very High','#ff4444'];
  if(prob>=.5)return['🟠 High','#ff8800'];
  if(prob>=.3)return['🟡 Moderate','#ffcc00'];
  return['🟢 Low','#44cc44'];
}

function renderGame(){
  const puzzle=getPuzzle(),s=initState(),today=new Date().toISOString().slice(0,10);
  const played=alreadyPlayedToday(s);
  const root=document.getElementById('game-root');
  if(!root)return;
  const winRate=s.played>0?Math.round(s.won/s.played*100)+'%':'—';
  root.innerHTML=`
  <div class="game-wrap">
    <div class="game-header">
      <div class="game-title">🐟 Save the Anchovy</div>
      <div class="game-subtitle">Puzzle #${getDayNumber()+1} of ${GAME_DATA.length} · Real CalCOFI Data · Sequential from Q1 1990</div>
    </div>
    <div class="streak-bar">
      <div class="streak-item"><div class="streak-num">🔥 ${s.streak}</div><div class="streak-label">Streak</div></div>
      <div class="streak-item"><div class="streak-num">${s.best}</div><div class="streak-label">Best</div></div>
      <div class="streak-item"><div class="streak-num">${s.played}</div><div class="streak-label">Played</div></div>
      <div class="streak-item"><div class="streak-num">${winRate}</div><div class="streak-label">Win Rate</div></div>
    </div>
    <div class="puzzle-card">
      <div class="puzzle-date">${puzzle.quarter_name} ${puzzle.year} · Q${puzzle.quarter} · Southern California Bight</div>
      <div class="puzzle-season">${puzzle.season_desc}</div>
      <div class="condition-row"><span class="cond-label">🌡️ Temperature anomaly</span><span class="cond-val">${anom(puzzle.temp_anom)}°C</span></div>
      <div class="condition-row"><span class="cond-label">💧 Oxygen anomaly</span><span class="cond-val">${anom(puzzle.oxy_anom,true)} ml/L</span></div>
      <div class="condition-row"><span class="cond-label">🌿 Chlorophyll anomaly</span><span class="cond-val">${anom(puzzle.chlora_anom)}</span></div>
      <div class="condition-row"><span class="cond-label">🌊 El Niño / La Niña</span><span class="cond-val"><span class="enso-badge" style="${ensoStyle(puzzle.enso)}">${puzzle.enso} (MEI ${puzzle.mei>0?'+':''}${puzzle.mei.toFixed(2)})</span></span></div>
      <div class="condition-row"><span class="cond-label">🐠 Species richness</span><span class="cond-val" style="color:var(--text2)">${puzzle.richness} species</span></div>
      <div class="condition-row"><span class="cond-label">📊 Shannon diversity</span><span class="cond-val" style="color:var(--text2)">${puzzle.shannon.toFixed(3)}</span></div>
    </div>
    ${played?renderResult(puzzle,s):renderChoice()}
  </div>`;

  if(!played){
    document.querySelectorAll('.choice-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        document.querySelectorAll('.choice-btn').forEach(b=>b.classList.remove('selected'));
        btn.classList.add('selected');
        const cb=document.getElementById('cast-btn');
        cb.disabled=false;cb.dataset.choice=btn.dataset.choice;
      });
    });
    document.getElementById('cast-btn').addEventListener('click',function(){
      const choice=this.dataset.choice;if(!choice)return;
      const won=evaluate(choice,puzzle.collapse_prob);
      const ns=getState();
      ns.played+=1;ns.lastPlayed=today;ns.lastChoice=choice;ns.lastResult=won;
      if(won){ns.won+=1;ns.streak+=1;ns.best=Math.max(ns.streak,ns.best||0);}
      else{ns.streak=0;}
      saveState(ns);renderGame();
    });
  }
}

function renderChoice(){
  return`
  <div class="choice-section">
    <div class="choice-label">How much fishing do you allow this quarter?</div>
    <div class="choice-grid">
      <button class="choice-btn" data-choice="none">🚫 No fishing — full protection</button>
      <button class="choice-btn" data-choice="light">🟢 Light — 25% of quota</button>
      <button class="choice-btn" data-choice="moderate">🟡 Moderate — 50% of quota</button>
      <button class="choice-btn" data-choice="heavy">🔴 Heavy — full quota</button>
    </div>
    <div class="hint-box">💡 El Niño weakens upwelling → fewer nutrients → higher collapse risk.<br>Warm + low oxygen quarters are danger signs. Fish conservatively on bad days.</div>
  </div>
  <button class="cast-btn" id="cast-btn" disabled>🎣 Cast Your Net</button>
  <hr class="divider">
  <span class="section-label">How to Play</span>
  <div class="callout"><strong>🌡️ Read conditions</strong> — Real ocean data from a historical CalCOFI quarter.</div>
  <div class="callout"><strong>🎯 Make your call</strong> — Bad conditions → fish conservatively to keep the streak alive.</div>
  <div class="callout"><strong>🔥 Build your streak</strong> — One right call per day. One wrong call resets it to zero.</div>
  <div class="callout"><strong>📅 Sequential</strong> — Starts Q1 1990, advances one quarter per day through 2021.</div>`;
}

function renderResult(puzzle,s){
  const won=s.lastResult,choice=s.lastChoice;
  const labels={none:'No fishing',light:'Light fishing',moderate:'Moderate fishing',heavy:'Heavy fishing'};
  const[rl,rc]=riskLabel(puzzle.collapse_prob);
  const safe=puzzle.collapse_prob>0.5?'No fishing or Light fishing':'No fishing, Light, or Moderate fishing';
  const outcome=puzzle.actual_collapse
    ?`Anchovy larvae fell to <strong>${puzzle.actual_larvae.toFixed(0)} / 10m²</strong> — below the collapse threshold of ${puzzle.threshold.toFixed(0)} / 10m². ${puzzle.enso} conditions created unfavorable spawning conditions.`
    :`Anchovy larvae reached <strong>${puzzle.actual_larvae.toFixed(0)} / 10m²</strong> — above the collapse threshold of ${puzzle.threshold.toFixed(0)} / 10m². The population remained healthy despite conditions.`;
  const share=`🐟 Save the Anchovy — Puzzle #${getDayNumber()+1}\n${puzzle.quarter_name} ${puzzle.year} · ${puzzle.enso}\nRisk: ${puzzle.collapse_prob>.5?'HIGH':'LOW'} · I chose: ${labels[choice]}\n${won?'🟢 Anchovy saved!':'🔴 Collapsed.'} Streak: ${s.streak} 🔥\npacificpulse.app`;
  return`
  <div class="result-card ${won?'result-win':'result-lose'}">
    <div class="result-emoji">${won?'🐟':'💀'}</div>
    <div class="result-title">${won?'Anchovy Saved!':'Population Collapsed'}</div>
    <div class="result-subtitle">You chose <strong>${labels[choice]}</strong> — ${won?'the right call given conditions.':'too much pressure on a stressed population.'}</div>
    <div class="result-streak">${won?'🔥 Streak: '+s.streak+' days':'Streak reset to 0'}</div>
    <div class="result-stats">
      <div class="result-stat"><div class="result-stat-val" style="color:${rc}">${Math.round(puzzle.collapse_prob*100)}%</div><div class="result-stat-lbl">Collapse Risk</div></div>
      <div class="result-stat"><div class="result-stat-val">${puzzle.actual_larvae.toFixed(0)}</div><div class="result-stat-lbl">Actual Larvae / 10m²</div></div>
      <div class="result-stat"><div class="result-stat-val">${puzzle.threshold.toFixed(0)}</div><div class="result-stat-lbl">Collapse Threshold</div></div>
    </div>
  </div>
  <span class="section-label">What actually happened</span>
  <div class="outcome-box" style="background:${puzzle.actual_collapse?'rgba(220,50,50,0.07);border:1px solid rgba(220,50,50,0.2)':'rgba(0,180,80,0.06);border:1px solid rgba(0,180,80,0.2)'}">${outcome}</div>
  <span class="section-label">What the ML model saw</span>
  <div class="callout">Assigned <strong>${Math.round(puzzle.collapse_prob*100)}% collapse probability</strong> based on chemistry + El Niño signals.<br><br>Risk: <strong style="color:${rc}">${rl}</strong> · Safe choice: <strong>${safe}</strong></div>
  <hr class="divider">
  <span class="section-label">Share your result</span>
  <div class="share-box">${share}</div>
  <div class="next-puzzle">Next puzzle tomorrow at midnight 🌊</div>`;
}

document.addEventListener('DOMContentLoaded',renderGame);