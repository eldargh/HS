const $=s=>document.querySelector(s),K='hackstart_v1';
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const seed=()=>[
 {id:1,name:'EcoTech Qazaq',tag:'Экология',desc:'Қоқысты сұрыптау және қайта өңдеу идеяларын жасайтын команда.',members:['Aigerim S.','Nurlan B.','Dana K.'],chat:[{a:'Aigerim S.',t:'Сәлем! Бүгін прототипті талқылайық.'}],plan:[{t:'Нарықты зерттеу',d:1},{t:'MVP жасау',d:0}],tasks:[{t:'Сауалнама жүргізу',d:1}],projects:[]},
 {id:2,name:'EduSpark',tag:'Білім',desc:'Оқушыларға арналған ИИ-тьютор платформасы.',members:['Madi T.','Aruzhan N.'],chat:[{a:'Madi T.',t:'Дизайн макеті дайын.'}],plan:[{t:'Прототип',d:0}],tasks:[{t:'Логотип',d:0}],projects:[]},
 {id:3,name:'MedAI Steppe',tag:'Медицина',desc:'Ауылдық жерлерге қашықтан диагностика көмекшісі.',members:['Timur A.','Zarina M.','Yerlan O.','Saltanat K.'],chat:[],plan:[],tasks:[],projects:[]},
 {id:4,name:'AgroSmart',tag:'Агро',desc:'Дрон мен датчиктер арқылы егіс мониторингі.',members:['Bauyrzhan E.'],chat:[],plan:[],tasks:[],projects:[]}];
const POOL=['Aigerim S.','Nurlan B.','Dana K.','Madi T.','Aruzhan N.','Timur A.','Zarina M.','Yerlan O.','Saltanat K.','Daulet R.','Aliya Z.','Ermek D.','Kamila B.','Arman S.','Asem T.','Bekzat M.','Gulnara I.','Rustem K.','Ainur Sh.','Azamat L.'];
const XG=[['SpaceQaz','Ғарыш','Шағын жерсерік (CubeSat) жасап, деректерді оқушылармен бөлісеміз.'],['NeuroKids','Жасанды интеллект','Балалардың сөйлеу дамуын бақылайтын ИИ қолданба.'],['SolarSteppe','Энергетика','Дала аймақтарына арналған шағын күн станциялары.'],['AquaSave','Су ресурстары','Су шығынын бақылайтын ақылды датчиктер.'],['TurkTrip','Туризм','Қазақстан бойынша экотуризм маршруттарының платформасы.'],['FitQazaq','Спорт','Ұлттық ойындар негізіндегі фитнес қолданба.'],['DombyraTech','Музыка','Домбыра үйренуге арналған интерактивті жаттықтырушы.'],['ArtBridge','Өнер','Жас суретшілер үшін онлайн галерея мен маркетплейс.'],['QazLogistics','Логистика','Шағын бизнеске арналған жеткізу маршрутын оңтайландыру.'],['CyberShield KZ','Кибер қауіпсіздік','Мектеп оқушыларына киберқауіпсіздік оқыту ойыны.'],['BuildSmart','Құрылыс','3D жоспарлау және құрылыс шығынын есептеу құралы.'],['StyleSteppe','Мода','Ұлттық оюларды қолданатын тұрақты мода бренді.'],['FoodRescue','Тамақ','Артық тамақты кафелерден аз бағаға сатып алу қолданбасы.'],['CareCircle','Әлеуметтік','Қарт адамдарға еріктілер көмегін ұйымдастыру платформасы.'],['RoboAul','Робототехника','Ауыл шаруашылығына арналған шағын робот-көмекші.'],['ChainQaz','Блокчейн','Дипломдар мен сертификаттарды блокчейнмен растау.'],['EpicSteppe','GameDev','Қазақ эпосына негізделген приключения ойыны.'],['SmartAstana','Ақылды қала','Қоғамдық көлік кептелісін болжайтын жүйе.'],['MentalMate','Медицина','Жасөспірімдерге психологиялық қолдау чат-боты.'],['LinguaKZ','Білім','Қазақ тілін ойын арқылы үйрететін қолданба.'],['GreenRoof','Экология','Қала шатырларын көгалдандыру жобасы.'],['PayEasy','FinTech','Студенттерге арналған шағын бюджет және жинақ қолданбасы.'],['VetCare','Агро','Мал денсаулығын бақылайтын тагтар және қолданба.'],['LabKids','Ғылым','Мектеп оқушыларына арналған виртуалды зертхана.'],['EventHub','Әлеуметтік','Студенттік іс-шараларды ұйымдастыру платформасы.'],['AirClean','Экология','Ауа сапасын өлшейтін арзан датчиктер желісі.'],['CodeAul','Білім','Ауыл мектептеріне бағдарламалауды үйрететін еріктілер бағдарламасы.']];
const extraGroups=()=>XG.map((x,i)=>({id:101+i,name:x[0],tag:x[1],desc:x[2],members:[0,1,2,3].slice(0,1+(i*3)%5>4?4:1+(i*3)%5).map(k=>POOL[(i*3+k*2)%POOL.length]),chat:[{a:POOL[(i*3)%POOL.length],t:'Сәлем, команда! Жаңа мүшелерге есік ашық 🚀'}],plan:i%3?[]:[{t:'Идеяны нақтылау',d:1},{t:'Прототип',d:0}],tasks:i%4?[]:[{t:'Нарықты зерттеу',d:0}],projects:[]}));
let S=JSON.parse(localStorage.getItem(K)||'null')||{users:[],me:null,groups:seed(),pub:[],nid:10};
extraGroups().forEach(g=>{if(!S.groups.some(x=>x.id==g.id))S.groups.push(g)});S.nid=Math.max(S.nid||0,200);
const save=()=>localStorage.setItem(K,JSON.stringify(S));
let gf='Барлығы',view='home',gid=null,gtab='chat',authTab='reg',chat=[{b:1,t:'Сәлем! Мен Hack-көмекшімін 🚀 Идеяңды айт — бірге дамытамыз.'}];
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),2200)};
const mine=()=>S.groups.filter(g=>g.members.includes(S.me.name));
const ini=n=>n.split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase();

/* ---------- Auth ---------- */
function authView(){
 const reg=authTab=='reg';
 $('#app').innerHTML=`<div class="auth"><div class="L"><div class="logo"><i></i>HackStart</div>
 <h1>Идеяңды тап.<br><span class="grad">Командаңды жина.</span></h1><p class="muted" style="font-size:18px">Болашақты бірге құр!</p>
 <ul class="feat"><li>Топтар құр, тапсырма бөл</li><li>Hack-көмекші ИИ-мен идеяңды дамыт</li><li>100 баллдық әділ бағалау</li><li>Жобаңды инвесторларға жария ет</li></ul></div>
 <div class="R"><div class="box card"><div class="tabs"><button class="${reg?'on':''}" data-act="atab" data-v="reg">Тіркелу</button><button class="${reg?'':'on'}" data-act="atab" data-v="log">Кіру</button></div>
 <form id="af">${reg?`<label>Аты-жөні</label><input name="name" required placeholder="Мысалы: Айгерім Сәрсен">`:''}
 <label>Эл. пошта</label><input name="email" type="email" required placeholder="name@mail.kz">
 ${reg?`<label>Рөлің</label><select name="role"><option>Әзірлеуші</option><option>Дизайнер</option><option>Маркетолог</option><option>Идея авторы</option><option>Инвестор</option></select>`:''}
 <label>Құпиясөз</label><input name="pw" type="password" minlength="4" required placeholder="Кемінде 4 таңба">
 ${reg?`<label>Құпиясөзді қайталаңыз</label><input name="pw2" type="password" required>`:''}
 <button class="btn" style="width:100%">${reg?'Тіркелу':'Кіру'}</button></form></div></div></div>`;
 $('#af').onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target));
  if(reg){if(f.pw!==f.pw2)return toast('Құпиясөздер сәйкес емес');
   if(S.users.some(u=>u.email==f.email))return toast('Бұл пошта тіркелген');
   S.users.push({name:f.name.trim(),email:f.email,pw:f.pw,role:f.role});S.me=S.users.at(-1)}
  else{const u=S.users.find(u=>u.email==f.email&&u.pw==f.pw);if(!u)return toast('Пошта немесе құпиясөз қате');S.me=u}
  save();view='home';render()}}

/* ---------- Shell ---------- */
const NAV=[['home','⌂','Басты бет'],['groups','◎','Топтар'],['bot','✦','Hack-көмекші'],['score','◉','HackStart Score'],['publish','↗','Жариялау']];
function shell(){
 const n=([k,i,t])=>`<button class="nav ${view==k?'on':''}" data-act="go" data-v="${k}"><span>${i}</span>${t}</button>`;
 $('#app').innerHTML=`<div class="shell"><aside class="side"><div class="logo"><i></i>HackStart</div>
 ${NAV.map(n).join('')}<div class="sep">Жылдам</div>
 ${[['profile','☺','Профиль'],['create','＋','Топ құру'],['search','⌕','Іздеу']].map(n).join('')}</aside><main class="main"><div class="view" id="v"></div></main></div>`;
 const V={home,groups,bot,score,publish,profile,create,search}[view]||home;$('#v').innerHTML=V();
 if(view=='bot')botScroll()}
function render(){if(!S.me)return authView();shell();window.scrollTo(0,0)}

/* ---------- Home ---------- */
function home(){
 const gp=S.groups.reduce((a,g)=>a+g.projects.length,0);
 return `<section class="sec hero"><div class="hgrid"><div class="hl"><span class="tag" style="width:fit-content">● HackStart · инновация платформасы</span>
 <h1>Идеяңды тап.<br>Командаңды жина.<br><span class="grad">Болашақты бірге құр!</span></h1>
 <p class="muted">Идеядан инвесторға дейінгі жол бір жерде: топ, тапсырма, ИИ-көмекші, баға және жариялау.</p>
 <div class="row"><button class="btn" data-act="go" data-v="groups">Топтарды қарау →</button><button class="btn ghost" data-act="go" data-v="create">Топ құру</button></div>
 <div class="ticker">${['Экология','Білім','Медицина','Агро','FinTech','GameDev'].map(t=>`<span class="tag">${t}</span>`).join('')}</div></div><div class="card mock"><div class="row sp"><b>Hack-көмекші жобасы</b><span class="tag g">Дайын ✓</span></div><div class="gauge" style="margin:14px auto"><svg width="200" height="200" viewBox="0 0 260 260"><circle cx="130" cy="130" r="112" stroke="#235a4b" stroke-width="16" fill="none"/><circle cx="130" cy="130" r="112" stroke="#86efac" stroke-width="16" fill="none" stroke-linecap="round" stroke-dasharray="704" stroke-dashoffset="92" style="filter:drop-shadow(0 0 10px #86efac)"/></svg><div class="num"><b>87</b><span class="muted">/ 100</span></div></div>
 <div class="item done"><input type="checkbox" checked disabled><span>MVP жасау</span></div><div class="item done"><input type="checkbox" checked disabled><span>Нарықты зерттеу</span></div><div class="item"><input type="checkbox" disabled><span>Инвесторға питч</span></div>
 <div class="row"><div class="ava">ЕТ</div><div class="ava">ДТ</div><div class="ava">АС</div><span class="muted">+2 қатысушы</span></div></div></div></section>
 <section class="sec"><h2>Төрт қадамда — идеядан жобаға</h2><p class="muted">Әр қадам — жеке құрал.</p>
 <div class="steps">${[['01','Идея','Hack-көмекшіден идеяңды дамыт.'],['02','Команда','Топқа қосыл немесе өз тобыңды құр.'],['03','Баға','Score 80+ болса — жоба дайын.']].map(s=>`<div class="card step hv"><b>${s[0]}</b><h3>${s[1]}</h3><p class="muted">${s[2]}</p></div>`).join('')}</div></section>
 <section class="sec"><h2>Бір жүйеде бәрі</h2><div class="grid">
 ${[['◎','Топтар','Талқылау, жоспар, тапсырма, қатысушылар және жобалар.','groups'],['✦','Hack-көмекші','Кез келген сұраққа жауап беретін ИИ-бот.','bot'],['◉','HackStart Score','100 баллдық әділ бағалау жүйесі.','score'],['↗','Жариялау','Дайын жобаны инвесторларға ұсын.','publish']].map(c=>`<div class="card hv" style="cursor:pointer" data-act="go" data-v="${c[3]}"><div style="font-size:26px;color:var(--ac)">${c[0]}</div><h3>${c[1]}</h3><p class="muted">${c[2]}</p></div>`).join('')}</div></section>
 <section class="sec"><h2>Неге HackStart?</h2><p class="muted">Идеяны жүзеге асыруға қажеттінің бәрі бір жерде.</p><div class="g3">
 ${[['⚡','Жылдам бастау','Бір минутта тіркеліп, топ құрасың немесе даяр топқа қосыласың.'],['🤝','Дұрыс команда','Әзірлеуші, дизайнер, маркетолог — идеяңа сай адамдарды тап.'],['🧠','ИИ көмекші','Hack-көмекші идеяны, MVP мен питчті дамытуға көмектеседі.'],['📊','Әділ баға','100 баллдық жүйе нақты деректерге сүйенеді, жасырын критерий жоқ.'],['🗂','Жобалар сақталады','Әр топтың жобасы, жоспары мен тапсырмасы бір жерде тұрады.'],['💸','Инвесторға жол','80+ балл жинаған жоба инвесторлар витринасына шығады.']].map(c=>`<div class="card hv"><div style="font-size:26px">${c[0]}</div><h3>${c[1]}</h3><p class="muted">${c[2]}</p></div>`).join('')}</div></section>
 <section class="sec"><h2>Жол картасы: идеядан инвесторға дейін</h2><div class="tl">
 ${[['1. Идея туады','Hack-көмекшімен мәселені және аудиторияны нақтыла.'],['2. Команда жиналады','Топтар бөлімінен қосыл немесе өз тобыңды құр.'],['3. Жоспар мен тапсырма','Талқылау, жоспар және тапсырмалар арқылы жұмысты бөліңдер.'],['4. Score алу','Жобаңды 100 баллмен бағала. 80+ — жоба дайын.'],['5. Жариялау','Питч пен сұрайтын соманы жазып, инвесторларға көрсет.']].map(t=>`<div><h3>${t[0]}</h3><span class="muted">${t[1]}</span></div>`).join('')}</div></section>
 <section class="sec"><h2>Score қалай есептеледі?</h2><p class="muted">5 критерий, әрқайсысы 20 балл.</p><div class="card">
 ${[['Идея сипаттамасы',92],['Мәселенің нақтылығы',78],['Аудитория',85],['Команда күші',70],['Орындалу',88]].map(x=>`<div style="margin-bottom:14px"><div class="row sp"><span>${x[0]}</span><b>20 балл</b></div><div class="bar"><i style="width:${x[1]}%"></i></div></div>`).join('')}<p class="muted">Мысал көрсеткіш. Нақты баға сенің жобаңның деректеріне байланысты.</p></div></section>
 <section class="sec"><h2>Қатысушылар не дейді</h2><div class="g3">
 ${[['Бір аптада команда таптық, екі аптада MVP шығардық.','Дана, дизайнер'],['Score бізге қай жерді күшейту керегін нақты көрсетті.','Мади, әзірлеуші'],['Hack-көмекші питчті құруға керемет көмектесті.','Аружан, маркетолог']].map(q=>`<div class="card"><div class="big">“</div><p class="quote">${q[0]}</p><p class="muted" style="margin-top:10px">— ${q[1]}</p></div>`).join('')}</div></section>
 <section class="sec"><h2>Жиі қойылатын сұрақтар</h2>
 ${[['HackStart тегін бе?','Иә, топ құру, талқылау және бағалау тегін.'],['Кім топ құра алады?','Тіркелген кез келген пайдаланушы.'],['Жоба қашан дайын болады?','HackStart Score 80 баллдан асқанда.'],['Инвесторлар жобаны қалай көреді?','Жариялау бөліміндегі витринада, сомасы мен питчімен бірге.']].map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('')}</section>
 <section class="sec"><h2>Қандай бағыттар бар?</h2><p class="muted">Кез келген салада команда мен идея табылады.</p><div class="tiles">
 ${[['🌿','Экология'],['🎓','Білім'],['🩺','Медицина'],['🚜','Агро'],['💳','FinTech'],['🎮','GameDev'],['🛰','Ғарыш'],['🤖','Жасанды интеллект']].map(t=>`<div class="tile" data-i="${t[0]}"><h3>${t[1]}</h3><span class="muted">Топтарды қарау →</span></div>`).join('')}</div></section>
 <section class="sec"><h2>Жұмыс кеңістігі ішінде не бар?</h2><p class="muted">Әр топ үшін бөлек толыққанды орта.</p><div class="g3">
 ${[['💬','Талқылау','Чат арқылы идеялар мен шешімдерді бірден талқылаңдар.'],['🗓','Жоспар','Жобаның қадамдарын құрып, орындалғанын белгілеңдер.'],['✅','Тапсырмалар','Әр адамға міндет бөліп, прогресті көріңдер.'],['👥','Қатысушылар','Команда құрамы мен рөлдері бір жерде.'],['📁','Жобалар','Барлық жоба сақталады және баға алады.'],['🔔','Прогресс','Орындалу пайызы Score-ға әсер етеді.']].map(c=>`<div class="card hv"><div style="font-size:30px">${c[0]}</div><h3>${c[1]}</h3><p class="muted">${c[2]}</p></div>`).join('')}</div></section>
 <section class="sec"><h2>HackStart пен жалғыз жұмыс</h2><p class="muted">Неге команда мен жүйе маңызды?</p><div class="card" style="padding:14px 20px"><table class="cmp"><tr><th>Мүмкіндік</th><th>Жалғыз</th><th>HackStart</th></tr>
 ${[['Команда табу','Қиын','Топтар бөлімі'],['Идеяны дамыту','Өзіңше','ИИ-көмекші'],['Объективті баға','Жоқ','100 баллдық Score'],['Инвестор табу','Байланыс керек','Жариялау витринасы'],['Жұмысты ұйымдастыру','Бытыраңқы','Жоспар + тапсырма']].map(r=>`<tr><td>${r[0]}</td><td class="muted">${r[1]}</td><td><b>${r[2]}</b></td></tr>`).join('')}</table></div></section>
 <section class="sec"><h2>Жетістік тарихы</h2><p class="muted">HackStart-та жобалар осылай өседі.</p><div class="steps">
 ${[['EcoTech Qazaq','3 мүше · Score 86','Қоқыс сұрыптау қолданбасы инвесторға жарияланды.'],['EduSpark','2 мүше · Score 81','ИИ-тьютор прототипі мектепте сыналды.'],['MedAI Steppe','4 мүше · Score 90','Ауылдарға қашықтан диагностика көмекшісі.']].map(x=>`<div class="card hv step"><span class="tag g">${x[1]}</span><h3 style="margin-top:14px">${x[0]}</h3><p class="muted">${x[2]}</p></div>`).join('')}</div></section>
 <section class="sec"><h2>Қауымдастық санамен</h2><div class="stats card">
 <div><b>${S.groups.length}</b><span class="muted">топ</span></div><div><b>${S.groups.reduce((a,g)=>a+g.members.length,0)}</b><span class="muted">қатысушы</span></div><div><b>${gp}</b><span class="muted">жоба</span></div><div><b>${S.pub.length}</b><span class="muted">жарияланған</span></div></div>
 <div class="card cta" style="text-align:center"><h2>Бастауға дайынсың ба?</h2><p class="muted" style="margin-bottom:16px">Бірінші тобыңды бүгін құр.</p><button class="btn" data-act="go" data-v="create">Бастау ✦</button></div></section>
 <footer class="authors"><p class="muted">Авторлар</p><b>Toleubay Eldar · Toleubay Dildar</b><p class="muted" style="margin-top:6px">HackStart © 2026</p></footer>`}

/* ---------- Groups ---------- */
function groups(){
 if(gid) return groupDetail(S.groups.find(g=>g.id==gid));
 const tags=['Барлығы',...new Set(S.groups.map(g=>g.tag))],L=gf=='Барлығы'?S.groups:S.groups.filter(g=>g.tag==gf);
 return `<h2>Топтар</h2><p class="muted" style="margin-bottom:18px">${S.groups.length} топ · ${tags.length-1} бағыт. Қосыл, жоспарла, жоба жаса.</p><div class="chips" style="margin-bottom:20px">${tags.map(t=>`<button style="${t==gf?'background:var(--ac);color:#04281a;font-weight:600':''}" data-act="gf" data-v="${t}">${t}</button>`).join('')}</div><div class="grid">${L.map(g=>gcard(g)).join('')}</div><div class="g3" style="margin-top:28px">${[['💬','Талқылау','Командамен идеяларды нақты уақытта талқыла.'],['🗓','Жоспар','Қадамдарды белгіле, орындалғанын тіліп отыр.'],['✅','Тапсырма','Жұмысты бөліп, орындалуын бақыла.']].map(c=>`<div class="card"><div style="font-size:24px">${c[0]}</div><h3>${c[1]}</h3><p class="muted">${c[2]}</p></div>`).join('')}</div>`}
const gcard=g=>{const j=g.members.includes(S.me.name);return `<div class="card hv"><div class="row sp"><span class="tag">${esc(g.tag)}</span><span class="muted">${g.members.length} 👤</span></div>
 <h3 style="margin-top:10px">${esc(g.name)}</h3><p class="muted" style="min-height:48px">${esc(g.desc)}</p>
 <div class="row" style="margin-top:12px"><button class="btn sm" data-act="open" data-v="${g.id}">Ашу</button>${j?'<span class="tag g">Қатысушысың</span>':`<button class="btn sm ghost" data-act="join" data-v="${g.id}">Қосылу</button>`}</div></div>`};
function groupDetail(g){
 const j=g.members.includes(S.me.name),T=[['chat','Талқылау'],['plan','Жоспар'],['tasks','Тапсырма'],['mem','Қатысушылар'],['proj','Жобалар']];
 let b='';
 if(!j) b=`<div class="card muted">Мазмұнды көру үшін топқа қосылыңыз.</div>`;
 else if(gtab=='chat') b=`<div class="card"><div class="chat" id="ch">${g.chat.map(m=>`<div class="msg ${m.a==S.me.name?'me':''}"><small>${esc(m.a)}</small>${esc(m.t)}</div>`).join('')||'<p class="muted">Әзірге хабарлама жоқ.</p>'}</div>
  <form data-form="chat" class="row"><input name="t" placeholder="Хабарлама жазу..." style="flex:1;margin:0" required><button class="btn">Жіберу</button></form></div>`;
 else if(gtab=='plan'||gtab=='tasks'){const k=gtab;b=`<div class="card">${g[k].map((x,i)=>`<div class="item ${x.d?'done':''}"><input type="checkbox" ${x.d?'checked':''} data-act="tick" data-k="${k}" data-v="${i}"><span style="flex:1">${esc(x.t)}</span></div>`).join('')||'<p class="muted">Бос. Төменнен қос.</p>'}
  <form data-form="item" data-k="${k}" class="row" style="margin-top:10px"><input name="t" placeholder="${k=='plan'?'Жаңа қадам':'Жаңа тапсырма'}" style="flex:1;margin:0" required><button class="btn">Қосу</button></form></div>`}
 else if(gtab=='mem') b=`<div class="grid">${g.members.map(m=>`<div class="card row"><div class="ava">${ini(m)}</div><div><b>${esc(m)}</b><div class="muted" style="font-size:13px">${m==S.me.name?'Сен':'Қатысушы'}</div></div></div>`).join('')}</div>`;
 else b=`<div class="grid">${g.projects.map(p=>`<div class="card"><h3>${esc(p.name)}</h3><p class="muted">${esc(p.desc)}</p>${p.score!=null?`<span class="tag ${p.score>=80?'g':''}">Score: ${p.score}</span>`:'<span class="tag">Бағаланбаған</span>'}</div>`).join('')}</div>
  <div class="card" style="margin-top:16px"><h3>＋ Жаңа жоба сақтау</h3><form data-form="proj"><label>Атауы</label><input name="name" required><label>Сипаттама (жоба не істейді?)</label><textarea name="desc" required></textarea><label>Шешілетін мәселе</label><textarea name="problem"></textarea><label>Мақсатты аудитория</label><input name="aud"><button class="btn">Жобаны сақтау</button></form></div>`;
 return `<button class="btn ghost sm" data-act="back">← Барлық топ</button><div class="row sp" style="margin:14px 0"><div><h2>${esc(g.name)}</h2><span class="muted">${esc(g.desc)}</span></div>${j?'':`<button class="btn" data-act="join" data-v="${g.id}">Қосылу</button>`}</div>
 <div class="tabs" style="overflow:auto">${T.map(t=>`<button class="${gtab==t[0]?'on':''}" data-act="gtab" data-v="${t[0]}">${t[1]}</button>`).join('')}</div>${b}`}

/* ---------- Hack-көмекші ---------- */
const KB=[[/сәлем|привет|hello|салем/i,'Сәлем! Қандай идея бойынша жұмыс істейміз? Қысқаша жазсаң — мәселе, аудитория, шешімді бірге нақтылаймыз.'],
[/идея|ой|не істеу/i,'Идеяны дамыту жолы: 1) Кімнің қандай мәселесі бар? 2) Қазіргі шешім не? 3) Сенің артықшылығың қандай? 4) Бір сөйлеммен: «[Аудитория] үшін [мәселені] [жолмен] шешеміз». Осыны жазып жіберші, талдап берем.'],
[/команд|топ|мүше/i,'Тамаша команда: әзірлеуші + дизайнер + маркетолог/сатушы. 3–5 адам жеткілікті. «Топтар» бөлімінен қосыл немесе «Топ құру» арқылы өз командаңды жина.'],
[/инвестор|ақша|қаржы|грант/i,'Инвесторға: мәселе, шешім, нарық көлемі, команда және сұрайтын сома керек. Алдымен Score 80+ жина, сосын «Жариялау» бөлімінде жарияла.'],
[/score|балл|баға|бағала/i,'Score 5 критерийден тұрады (әрқайсысы 20 балл): сипаттама, мәселе, аудитория, команда, орындалу. 80+ болса жоба дайын деп саналады.'],
[/mvp|прототип|бастау/i,'MVP — ең аз функциясы бар жұмыс нұсқасы. Тек 1 негізгі мәселені шеш, 2 аптада жаса, 5 адамға көрсетіп пікір ал.'],
[/маркет|сату|клиент|пайдаланушы/i,'Алғашқы 10 клиентті қолмен тап: достар, Telegram/Instagram қауымдастықтары, университеттер. Олардан кері байланыс алып, өнімді жақсарт.'],
[/pitch|питч|презентац/i,'Питч құрылымы: Мәселе → Шешім → Нарық → Өнім → Команда → Не сұраймыз. Әр слайдқа 1 ой, барлығы 5 минутқа симсын.'],
[/код|сайт|қолданба|технолог/i,'Бастау үшін No-code (Tilda, Bubble, Glide) немесе HTML/JS/Python қолдануға болады. Ең бастысы — тез тексеру.']];
function bot(){return `<h2>Hack-көмекші</h2><p class="muted" style="margin-bottom:14px">Идеяңды дамытуға көмектесетін ИИ-бот</p><div class="card bot"><div class="chat" id="bc">${chat.map(m=>`<div class="msg ${m.b?'':'me'}">${esc(m.t)}</div>`).join('')}</div>
 <div class="chips">${['Идеяны қалай дамытамын?','MVP деген не?','Инвесторға не керек?','Питч құрылымы'].map(c=>`<button data-act="ask" data-v="${c}">${c}</button>`).join('')}</div>
 <form data-form="bot" class="row"><input name="t" placeholder="Кез келген сұрақ қой..." style="flex:1;margin:0" required><button class="btn">Жіберу</button></form></div>`}
const botScroll=()=>{const c=$('#bc');if(c)c.scrollTop=c.scrollHeight};
function ask(q){
 chat.push({t:q});const hit=KB.find(k=>k[0].test(q));
 const r=hit?hit[1]:`Қызық сұрақ! «${q.slice(0,60)}» бойынша: алдымен мақсатты аудиторияны анықта, мәселені бір сөйлеммен жаз, содан кейін ең кіші шешімді (MVP) 2 аптада тексер. Қосымша деректер жазсаң, нақтырақ кеңес беремін.`;
 chat.push({b:1,t:'…'});render();
 setTimeout(()=>{chat.at(-1).t=r;if(view=='bot'){$('#v').innerHTML=bot();botScroll()}},700)}

/* ---------- Score ---------- */
let sc={g:'',p:''},res=null;
function calcScore(g,p){
 const c=(v,m)=>Math.round(Math.min(m,v)*10)/10;
 const tot=g.plan.length+g.tasks.length,dn=[...g.plan,...g.tasks].filter(x=>x.d).length;
 const R=[['Идея сипаттамасы',c(p.desc.length/10,20)],['Мәселенің нақтылығы',c((p.problem||'').length/7,20)],['Аудитория',c((p.aud||'').length/3.5,20)],['Команда күші',c(g.members.length*4,20)],['Орындалу (жоспар/тапсырма)',tot?c(4+16*dn/tot+Math.min(tot,6)/3,20):0]];
 return {R,total:Math.round(R.reduce((a,x)=>a+x[1],0))}}
const TIPS=['Сипаттаманы кеңейт (≈200 таңба).','Шешілетін мәселені нақты жаз (≈140 таңба).','Аудиторияны нақтыла.','Командаға көбірек адам қос (5 адам).','Жоспар мен тапсырмаларды қос және орында.'];
function score(){
 const ms=mine(),g=ms.find(x=>x.id==sc.g),ps=g?g.projects:[];
 const ring=r=>`<div class="gauge"><svg width="260" height="260"><defs><linearGradient id="gr" x1="0" x2="1"><stop offset="0" stop-color="#86efac"/><stop offset="1" stop-color="#5eead4"/></linearGradient></defs><circle cx="130" cy="130" r="112" stroke="#235a4b" stroke-width="16" fill="none"/><circle id="arc" cx="130" cy="130" r="112" stroke="url(#gr)" stroke-width="16" fill="none" stroke-linecap="round" stroke-dasharray="704" stroke-dashoffset="704" style="filter:drop-shadow(0 0 10px #86efac)"/></svg><div class="num"><b id="sn">0</b><span class="muted">/ 100</span></div></div>`;
 return `<h2>HackStart Score</h2><p class="muted" style="margin-bottom:16px">Тобыңды және жобаңды таңда — жүйе 100 балмен бағалайды. 80+ = жоба дайын.</p>
 <div class="grid"><div class="card"><label>Топ</label><select data-act="scg"><option value="">— таңдаңыз —</option>${ms.map(x=>`<option value="${x.id}" ${x.id==sc.g?'selected':''}>${esc(x.name)}</option>`).join('')}</select>
 <label>Жоба</label><select data-act="scp" ${g?'':'disabled'}><option value="">— таңдаңыз —</option>${ps.map(p=>`<option value="${p.id}" ${p.id==sc.p?'selected':''}>${esc(p.name)}</option>`).join('')}</select>
 <button class="btn" style="width:100%" data-act="run" ${sc.p?'':'disabled'}>◉ Бағалауды бастау</button>
 ${!ms.length?'<p class="muted" style="margin-top:10px">Алдымен топқа қосылып, жоба сақта.</p>':''}
 <p class="muted" style="margin-top:12px;font-size:13px">Әділдік: баға тек нақты деректерге (мәтін көлемі, команда, орындалған тапсырма) негізделеді — қайталағанда нәтиже бірдей.</p></div>
 <div class="card">${ring()}<div class="think" id="th">Нәтиже осында шығады</div><div id="bk"></div></div></div><h3 style="margin:26px 0 10px">Критерийлер</h3><div class="g3">${[['Идея сипаттамасы','Жоба не істейтіні нақты, толық жазылған ба.'],['Мәселе мен аудитория','Кімнің қандай мәселесі шешіледі.'],['Команда мен орындалу','Мүшелер саны, жоспар және тапсырма орындалуы.']].map(c=>`<div class="card"><h3>${c[0]}</h3><p class="muted">${c[1]}</p></div>`).join('')}</div>`}
function runScore(){
 const g=S.groups.find(x=>x.id==sc.g),p=g.projects.find(x=>x.id==sc.p),r=calcScore(g,p),th=$('#th'),arc=$('#arc'),sn=$('#sn');
 const st=['Идея талданып жатыр…','Мәселе мен аудитория тексерілуде…','Команда әлеуеті есептелуде…','Орындалу деңгейі бағалануда…','Түпкілікті балл шығарылуда…'];let i=0;
 $('#bk').innerHTML='';th.classList.add('pulse');th.textContent=st[0];
 const iv=setInterval(()=>{th.textContent=st[++i]||st.at(-1)},700);
 setTimeout(()=>{clearInterval(iv);th.classList.remove('pulse');arc.style.transition='stroke-dashoffset 1.8s cubic-bezier(.2,.8,.2,1)';arc.style.strokeDashoffset=704*(1-r.total/100);
  let n=0;const t=setInterval(()=>{n=Math.min(r.total,n+2);sn.textContent=n;if(n>=r.total)clearInterval(t)},25);
  p.score=r.total;save();const ok=r.total>=80,w=r.R.reduce((a,x,k)=>x[1]<r.R[a][1]?k:a,0);
  th.innerHTML=ok?'<b style="color:var(--ok)">✓ Жоба дайын! Жариялауға болады.</b>':`<b style="color:var(--bad)">Дайын емес — ${80-r.total} балл жетіспейді</b>`;
  $('#bk').innerHTML=r.R.map(x=>`<div style="margin-top:10px"><div class="row sp"><span style="font-size:13px">${x[0]}</span><b>${x[1]}/20</b></div><div class="bar"><i style="width:${x[1]*5}%"></i></div></div>`).join('')+(ok?'':`<p class="muted" style="margin-top:14px">💡 Кеңес: ${TIPS[w]}</p>`)},3800)}

/* ---------- Жариялау ---------- */
function publish(){
 const ready=[];S.groups.forEach(g=>g.members.includes(S.me.name)&&g.projects.forEach(p=>p.score>=80&&ready.push([g,p])));
 const any=[];S.groups.forEach(g=>g.members.includes(S.me.name)&&g.projects.forEach(p=>any.push(p)));
 return `<h2>Жариялау</h2><p class="muted" style="margin-bottom:16px">Score 80+ жобаны инвесторларға көрсет.</p>
 <div class="card"><h3>＋ Жоба жариялау</h3>${ready.length?`<form data-form="pub"><label>Жоба</label><select name="k">${ready.map(([g,p])=>`<option value="${g.id}|${p.id}">${esc(p.name)} (${esc(g.name)}) — ${p.score} балл</option>`).join('')}</select>
 <label>Қанша инвестиция керек (₸)</label><input name="sum" type="number" min="0" required placeholder="5000000"><label>Қысқаша питч</label><textarea name="pitch" required></textarea><button class="btn">↗ Жариялау</button></form>`:`<p class="muted">${any.length?'Жобаларың 80 баллға жетпеген. «HackStart Score» бөлімінде бағала.':'Әзірге бағаланған жоба жоқ.'}</p><button class="btn ghost sm" style="margin-top:10px" data-act="go" data-v="score">Score-ға өту</button>`}</div>
 <div class="g3" style="margin-top:20px">${[['1','Score 80+','Алдымен жобаны бағалап, 80 баллдан асыр.'],['2','Питч жаз','Мәселе, шешім және сұрайтын соманы көрсет.'],['3','Инвестор табу','Витринада жобаңды инвесторлар көреді.']].map(c=>`<div class="card step"><b>${c[0]}</b><h3>${c[1]}</h3><p class="muted">${c[2]}</p></div>`).join('')}</div><h3 style="margin:24px 0 10px">Инвесторларға арналған витрина</h3><div class="grid">${S.pub.map((x,i)=>`<div class="card hv"><div class="row sp"><span class="tag g">${x.score} балл</span><span class="tag">${esc(x.tag)}</span></div><h3 style="margin-top:10px">${esc(x.name)}</h3><p class="muted">${esc(x.pitch)}</p>
 <div class="row sp" style="margin-top:12px"><div><b>${Number(x.sum).toLocaleString('ru')} ₸</b><div class="muted" style="font-size:12px">${esc(x.team)} · ${x.likes} қызығушы</div></div><button class="btn sm" data-act="like" data-v="${i}">Қызығамын</button></div></div>`).join('')||'<p class="muted">Әзірге ешкім жарияламады. Бірінші бол!</p>'}</div>`}

/* ---------- Профиль / Топ құру / Іздеу ---------- */
function profile(){const m=S.me;return `<h2>Профиль</h2><div class="card row" style="margin:16px 0"><div class="ava" style="width:60px;height:60px;font-size:22px">${ini(m.name)}</div><div><h3>${esc(m.name)}</h3><span class="muted">${esc(m.email)}</span><br><span class="tag">${esc(m.role)}</span></div></div>
 <h3>Менің топтарым</h3><div class="grid" style="margin:10px 0 20px">${mine().map(gcard).join('')||'<p class="muted">Әзірге топ жоқ.</p>'}</div><button class="btn ghost" data-act="out">Шығу</button>`}
function create(){return `<h2>Топ құру</h2><p class="muted" style="margin-bottom:16px">Командаңды бір минутта жина.</p><div class="card" style="max-width:520px"><form data-form="grp"><label>Топ атауы</label><input name="name" required><label>Бағыты</label><select name="tag">${['Технология','Экология','Білім','Медицина','Агро','FinTech','GameDev','Ғарыш','Жасанды интеллект','Туризм','Спорт','Өнер','Энергетика','Әлеуметтік','Басқа'].map(t=>`<option>${t}</option>`).join('')}</select><label>Сипаттама</label><textarea name="desc" required></textarea><button class="btn">Топты құру</button></form></div>`}
let q='';
function search(){const r=q?S.groups.filter(g=>(g.name+g.desc+g.tag).toLowerCase().includes(q.toLowerCase())):[];
 return `<h2>Іздеу</h2><input id="q" value="${esc(q)}" placeholder="Топ, бағыт немесе жоба іздеу..." style="margin:14px 0" autofocus><div class="grid" id="sr">${sres(r)}</div>`}
const sres=r=>q?(r.map(gcard).join('')||'<p class="muted">Ештеңе табылмады.</p>'):'<p class="muted">Іздеу сөзін енгіз: мысалы «білім» немесе «агро».</p>';

/* ---------- Events ---------- */
document.addEventListener('click',e=>{
 const el=e.target.closest('[data-act]');if(!el)return;const a=el.dataset.act,v=el.dataset.v,g=S.groups.find(x=>x.id==(gid||v));
 if(a=='atab'){authTab=v;authView()}
 else if(a=='go'){view=v;gid=null;render()}
 else if(a=='open'){view='groups';gid=+v;gtab='chat';render()}
 else if(a=='gf'){gf=v;render()}
 else if(a=='back'){gid=null;render()}
 else if(a=='gtab'){gtab=v;render()}
 else if(a=='join'){const t=S.groups.find(x=>x.id==v);t.members.push(S.me.name);save();toast('Топқа қосылдың ✓');view!='groups'||gid?render():render()}
 else if(a=='tick'){const x=g[el.dataset.k][v];x.d=el.checked?1:0;save();render()}
 else if(a=='ask')ask(v);
 else if(a=='run')runScore();
 else if(a=='like'){S.pub[v].likes++;save();toast('Инвестор ретінде қызығушылық білдірілді');render()}
 else if(a=='out'){S.me=null;save();authTab='log';render()}});
document.addEventListener('change',e=>{const a=e.target.dataset.act;
 if(a=='scg'){sc={g:+e.target.value||'',p:''};render()}
 if(a=='scp'){sc.p=+e.target.value||'';render()}});
document.addEventListener('input',e=>{if(e.target.id=='q'){q=e.target.value;$('#sr').innerHTML=sres(q?S.groups.filter(g=>(g.name+g.desc+g.tag).toLowerCase().includes(q.toLowerCase())):[])}});
document.addEventListener('submit',e=>{
 const f=e.target,k=f.dataset.form;if(!k)return;e.preventDefault();const d=Object.fromEntries(new FormData(f)),g=S.groups.find(x=>x.id==gid);
 if(k=='chat'){g.chat.push({a:S.me.name,t:d.t});save();render();const c=$('#ch');if(c)c.scrollTop=1e5}
 if(k=='item'){g[f.dataset.k].push({t:d.t,d:0});save();render()}
 if(k=='proj'){g.projects.push({id:S.nid++,name:d.name,desc:d.desc,problem:d.problem,aud:d.aud,score:null});save();toast('Жоба сақталды ✓');render()}
 if(k=='bot')ask(d.t);
 if(k=='grp'){const n={id:S.nid++,name:d.name,tag:d.tag,desc:d.desc,members:[S.me.name],chat:[],plan:[],tasks:[],projects:[]};S.groups.unshift(n);save();toast('Топ құрылды 🎉');view='groups';gid=n.id;gtab='chat';render()}
 if(k=='pub'){const[gi,pi]=d.k.split('|').map(Number),G=S.groups.find(x=>x.id==gi),P=G.projects.find(x=>x.id==pi);
  S.pub.unshift({name:P.name,tag:G.tag,score:P.score,sum:d.sum,pitch:d.pitch,team:G.name,likes:0});save();toast('Жоба жарияланды ↗');render()}});
render();
