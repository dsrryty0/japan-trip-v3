const $ = (q, root = document) => root.querySelector(q);
const $$ = (q, root = document) => Array.from(root.querySelectorAll(q));

const STORE = {
  settings: 'jpPlanner_settings_v2',
  wishes: 'jpPlanner_wishes_v2',
  expenses: 'jpPlanner_expenses_v2',
  photo: 'jpPlanner_photo_v2'
};

const trip = {
  title: 'Japan Route Remix',
  start: '2026-07-24',
  end: '2026-08-02',
  route: [
    ['大阪', '24/7–26/7'], ['名古屋', '26/7–28/7'], ['河口湖', '28/7–30/7'], ['千葉船橋', '30/7–2/8'], ['東京市區', '31/7']
  ],
  days: [
    {day:1,date:'24/7',city:'大阪',stay:'大阪西成區 松 1-chōme-9-19',route:'抵達關西機場 → 取車 → 入住大阪 Airbnb',focus:'19:40 降落後出關取車，直接開車到民宿；安頓後可到附近 24 小時「玉出超市」買日本蜜瓜、零食和飲品，或去附近吃深夜拉麵。',timeline:[['晚上','抵達關西機場','19:40 降落，出關、取行李、取車。'],['晚上','前往大阪住宿','開車到西成區民宿，先安頓行李。'],['深夜','補給 / 宵夜','玉出超市、便利店、拉麵作為輕鬆收尾。']],wants:['玉出超市','深夜拉麵','便利店補給']},
    {day:2,date:'25/7',city:'大阪',stay:'大阪西成區 松 1-chōme-9-19',route:'勝尾寺 → 萬博紀念公園 → Lalaport EXPOCITY → 天下茶屋/阿倍野晚餐',focus:'上午去勝尾寺拍攝達摩不倒翁；下午到萬博紀念公園看太陽之塔及搭摩天輪，在 Lalaport EXPOCITY 逛街；晚上回民宿附近吃串炸或大阪燒。',timeline:[['上午','勝尾寺','拍達摩不倒翁，建議預留足夠拍照時間。'],['下午','萬博紀念公園','太陽之塔、園區散步。'],['下午','Lalaport EXPOCITY','Shopping、摩天輪、休息補給。'],['晚上','天下茶屋 / 阿倍野晚餐','串炸、大阪燒、居酒屋候選。']],wants:['勝尾寺','萬博紀念公園','Lalaport EXPOCITY','天下茶屋美食','阿倍野晚餐']},
    {day:3,date:'26/7',city:'大阪 → 琵琶湖 → 名古屋',stay:'名古屋 中村區大正町 2-31',route:'大阪 Check-out → 琵琶湖一帶打卡 → 入住名古屋',focus:'上午收拾行李 Check-out，開車往滋賀縣；下午到白鬚神社看湖中鳥居，再去 La Collina 吃年輪蛋糕兼拍照；晚上到名古屋 Check-in，晚餐可去名古屋站附近「世界之山」吃手羽先。',timeline:[['上午','大阪 Check-out','收拾行李、檢查民宿、開車出發。'],['下午','白鬚神社','湖中鳥居打卡，注意停車及安全。'],['下午','La Collina','年輪蛋糕、甜點、建築打卡。'],['晚上','名古屋 Check-in','入住後到名古屋站附近覓食。']],wants:['白鬚神社','La Collina','世界之山手羽先','名古屋站商圈']},
    {day:4,date:'27/7',city:'名古屋',stay:'名古屋 中村區大正町 2-31',route:'犬山城下町 → 榮商圈 → Oasis 21 夜景',focus:'上午到國寶犬山城與城下町；下午回市區，把車停在榮商圈，逛 Oasis 21；晚上可吃矢場炸豬排或名古屋鰻魚飯。',timeline:[['上午','犬山城下町','城下町散步、犬山城外觀/入場。'],['下午','榮商圈','購物、咖啡、街區散步。'],['晚上','Oasis 21','夜景與拍照，晚餐在市區解決。']],wants:['犬山城下町','榮商圈','Oasis 21','矢場炸豬排','名古屋鰻魚飯']},
    {day:5,date:'28/7',city:'名古屋 → 河口湖',stay:'河口湖 Royal Hotel Kawaguchiko',route:'名古屋出發 → ぬくもりの森 → 御殿場 Premium Outlets → 河口湖酒店',focus:'上午由名古屋出發，先停靜岡「溫暖之森」；下午到御殿場 Premium Outlets Shopping；晚上入住河口湖 Royal Hotel，浸溫泉並可在酒店或附近吃饌飪。',timeline:[['上午','名古屋出發','長途車程日，早點出發會比較舒服。'],['中午','ぬくもりの森','童話風建築、輕食、拍照。'],['下午','御殿場 Premium Outlets','Shopping，可望富士山。'],['晚上','Royal Hotel Kawaguchiko','入住、溫泉、河口湖附近晚餐。']],wants:['ぬくもりの森','御殿場 Premium Outlets','河口湖溫泉','酒店晚餐']},
    {day:6,date:'29/7',city:'河口湖',stay:'河口湖 Royal Hotel Kawaguchiko',route:'新倉山淺間公園 → 大石公園 → 日川時計店 → MaxValu 晚餐',focus:'全日走富士五湖經典打卡位；晚上如酒店不包餐，可到 MaxValu 買和牛、生果、刺身、壽司和清酒，帶回房間享用。',timeline:[['上午','新倉山淺間公園','富士山 + 五重塔經典角度，注意樓梯。'],['下午','大石公園','湖景、花田、富士山視野。'],['下午','日川時計店','街景打卡位，注意不要阻礙交通。'],['晚上','MaxValu 採購','和牛、生果、刺身、壽司、清酒。']],wants:['新倉山淺間公園','大石公園','日川時計店','富士五湖拍照','MaxValu']},
    {day:7,date:'30/7',city:'河口湖 → 千葉船橋',stay:'千葉船橋市 三山 2-chōme-16-6',route:'忍野八海 → 鎌倉/江之島海岸線 → 入住千葉',focus:'上午先到忍野八海，再由富士山一帶出發；下午沿湘南海岸開車，必停鎌倉高校前拍江之電平交道；傍晚經灣岸線前往千葉船橋入住。',timeline:[['上午','忍野八海','清水池、商店街、富士山視野。'],['下午','鎌倉 / 江之島海岸線','湘南海邊開車與打卡。'],['下午','鎌倉高校前','江之電平交道，留意人流和交通。'],['晚上','千葉船橋 Check-in','經灣岸線入住，先補給休息。']],wants:['忍野八海','鎌倉高校前','江之島海岸線','灣岸線夜景']},
    {day:8,date:'31/7',city:'東京市區',stay:'千葉船橋市 三山 2-chōme-16-6',route:'東京市區電車遊',focus:'車留在民宿，全家坐電車進東京；白天去原宿竹下通、表參道、澀谷；晚上到東京都廳觀景台看夜景，再坐車回船橋。',timeline:[['上午','電車進東京','不用開車進市區，減少泊車壓力。'],['白天','原宿 / 表參道 / 澀谷','逛街、甜品、打卡。'],['晚上','東京都廳觀景台','免費夜景候選，之後返回船橋。']],wants:['原宿竹下通','表參道','澀谷','東京都廳觀景台']},
    {day:9,date:'1/8',city:'千葉船橋',stay:'千葉船橋市 三山 2-chōme-16-6',route:'LaLaport TOKYO-BAY → Giga DAISO → 船橋晚餐',focus:'全天留在船橋 Shopping；第一站 LaLaport TOKYO-BAY，第二站全日本最大的 DAISO；晚上在當地居酒屋或和牛燒肉店吃晚餐，整理戰利品。',timeline:[['上午','LaLaport TOKYO-BAY','大型商場，適合集中購物。'],['下午','Giga DAISO','大型百円店，買手信與生活小物。'],['晚上','船橋晚餐','居酒屋或和牛燒肉，整理戰利品。']],wants:['LaLaport TOKYO-BAY','Giga DAISO','船橋居酒屋','和牛燒肉']},
    {day:10,date:'2/8',city:'千葉 → 機場 → 香港',stay:'無住宿',route:'千葉 → 機場還車 → 香港',focus:'上午整理行李與戰利品；下午開車前往成田或羽田機場還車，然後推行李登機回港，結束行程。',timeline:[['上午','整理行李','戰利品分類、檢查房間、預留重量。'],['下午','機場還車','前往機場，預留還車與安檢時間。'],['晚上','回香港','完成10日旅程。']],wants:['機場還車','行李整理','最後手信']}
  ],
  stays: [
    {id:'osaka',city:'大阪',dates:'24/7 - 26/7',name:'大阪西成區民宿',address:'大阪西成區 松 1-chōme-9-19',phone:'未提供（民宿 / Airbnb）',booking:'Airbnb',facilities:['鄰近花園町 / 天下茶屋生活圈','附近 24 小時玉出超市','可作深夜補給點','生活機能佳','廚房/洗衣資料待確認'],photos:['🏮','🍜','🛒'],tone:'bg-osaka',note:'Day 1–2 使用，主要功能是落機後安頓與大阪市區/近郊行程。'},
    {id:'nagoya',city:'名古屋',dates:'26/7 - 28/7',name:'名古屋中村區住宿',address:'名古屋 中村區大正町 2-31',phone:'未提供（住宅 / 民宿）',booking:'待補充（民宿平台 / 朋友資料）',facilities:['靠近名古屋站商圈方向','適合作為中部中轉點','住宅區相對安靜','停車/洗衣資料待確認'],photos:['🏯','🍗','🌃'],tone:'bg-nagoya',note:'Day 3–4 使用，連接琵琶湖、犬山城、名古屋市區。'},
    {id:'kawaguchi',city:'河口湖',dates:'28/7 - 30/7',name:'Royal Hotel Kawaguchiko',address:'6713-22 Funatsu, Fujikawaguchiko, Minamitsuru District, Yamanashi 401-0301, Japan',phone:'+81 555-73-2228',booking:'Trip.com / 酒店官網',facilities:['天然溫泉','室內浴池','庭園露天風呂','便利店 / 自助入住系統','日式房間 / 榻榻米','近河口湖'],photos:['🗻','♨️','🌊'],tone:'bg-fuji',note:'Day 5–6 使用，富士五湖打卡與溫泉休息核心住宿。'},
    {id:'chiba',city:'千葉船橋',dates:'30/7 - 2/8',name:'千葉船橋市住宿',address:'千葉船橋市 三山 2-chōme-16-6',phone:'未提供（民宿 / 固定住宿）',booking:'待補充（民宿平台 / 朋友資料）',facilities:['適合最後購物與整理行李','往東京可用電車','前往機場還車較方便','附近生活機能待確認'],photos:['🛍️','🚃','✈️'],tone:'bg-chiba',note:'Day 7–9 使用，東京市區電車遊、船橋 Shopping、最後還車前基地。'}
  ]
};

const defaultSettings = {person:'A', rate:20, apiUrl:'', accessCode:'', currency:'HKD'};
let chart;
let editingExpenseId = null;

function load(key, fallback){try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}}
function save(key, value){localStorage.setItem(key, JSON.stringify(value))}
function settings(){return {...defaultSettings, ...load(STORE.settings,{})}}
function setSettings(next){save(STORE.settings, {...settings(), ...next})}
function formatMoney(hkd){const s=settings(); if(s.currency==='JPY') return `¥${Math.round(Number(hkd||0)*Number(s.rate||20)).toLocaleString()}`; return `HK$${Number(hkd||0).toLocaleString(undefined,{maximumFractionDigits:2})}`}
function escapeHTML(str=''){return String(str).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function go(route){location.hash = route === 'home' ? '#/' : `#/${route}`}
function todayStatus(index){
  const start = new Date(trip.start+'T00:00:00'); const now = new Date();
  const current = Math.floor((new Date(now.getFullYear(),now.getMonth(),now.getDate()) - start)/86400000)+1;
  if(current === index) return ['今日','status-today'];
  if(current > index) return ['已完成','status-done'];
  return ['未開始','status-upcoming'];
}
function toast(message){const el=document.createElement('div');el.className='toast';el.textContent=message;document.body.appendChild(el);setTimeout(()=>el.remove(),2200)}

function render(){
  const hash = location.hash.replace(/^#\/?/,'') || 'home';
  const [page,arg] = hash.split('/');
  $$('.nav-item').forEach(btn=>btn.classList.toggle('active', btn.dataset.route===page || (page==='day' && btn.dataset.route==='itinerary') || (!page && btn.dataset.route==='home')));
  if(page==='itinerary') return renderItinerary();
  if(page==='day') return renderDay(Number(arg));
  if(page==='stays') return renderStays();
  if(page==='budget') return renderBudget();
  return renderHome();
}

function renderHome(){
  const missions=['今晚找一間最地道居酒屋','每人選一個必吃便利店新品','今日至少拍一張全員合照','找一個不用排隊但好吃的地方','買一樣只有日本才有的小物'];
  const mission = missions[Math.floor(Math.random()*missions.length)];
  $('#app').innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <div class="kicker">OSAKA → NAGOYA → FUJI → TOKYO</div>
        <h1>十日日本<br>路線實驗室</h1>
        <p>這裡不是普通行程表，而是一個可以打開每日任務、住宿卡、Shopping 方向和旅費記錄的旅行控制台。</p>
        <div class="hero-actions">
          <button class="secondary-btn" data-route="itinerary">打開10日行程</button>
          <button class="secondary-btn" id="randomDayBtn">今日抽一日</button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head"><div><h2>旅行靈感卡</h2><p>每次打開都給你一個小任務。</p></div></div>
      <div class="card"><span class="tag">🎲 Random Mission</span><h2 style="margin:10px 0 0">${mission}</h2></div>
    </section>

    <section class="section">
      <div class="section-head"><div><h2>路線膠囊</h2><p>由關西一路玩到關東。</p></div></div>
      <div class="route-ribbon">${trip.route.map(s=>`<div class="route-stop"><strong>${s[0]}</strong><small>${s[1]}</small></div>`).join('')}</div>
    </section>

    <section class="section mosaic">
      <button class="fun-card bg-osaka" data-day="2"><div><span class="big-emoji">🏮</span><h3>大阪：達摩、太陽之塔、深夜美食</h3><p>勝尾寺 + EXPOCITY + 天下茶屋。</p></div></button>
      <button class="fun-card bg-nagoya" data-day="4"><div><span class="big-emoji">🏯</span><h3>名古屋：城下町與夜景</h3><p>犬山城、榮商圈、Oasis 21。</p></div></button>
      <button class="fun-card bg-fuji" data-day="6"><div><span class="big-emoji">🗻</span><h3>河口湖：富士山打卡日</h3><p>新倉山、大石公園、溫泉。</p></div></button>
      <button class="fun-card bg-tokyo" data-day="8"><div><span class="big-emoji">🌃</span><h3>東京：電車進城</h3><p>原宿、表參道、澀谷、都廳夜景。</p></div></button>
    </section>
  `;
  $('#randomDayBtn').onclick = () => go(`day/${Math.ceil(Math.random()*10)}`);
  $$('[data-day]').forEach(btn=>btn.onclick=()=>go(`day/${btn.dataset.day}`));
  $$('[data-route]').forEach(btn=>btn.onclick=()=>go(btn.dataset.route));
}

function renderItinerary(){
  $('#app').innerHTML = `
    <section class="section-head"><div><h2>10日行程</h2><p>按入每一天，會進入獨立頁面，不用一直向下滑。</p></div></section>
    <div class="day-list">${trip.days.map(d=>{const [label, cls]=todayStatus(d.day);return `<button class="day-row ${cls==='status-done'?'done':''}" data-day="${d.day}"><div class="day-num">D${d.day}</div><div><div class="day-title">Day ${d.day}｜${d.date}｜${d.city}</div><div class="day-summary">${d.route}</div></div><span class="status-pill ${cls}">${label}</span></button>`}).join('')}</div>
  `;
  $$('.day-row').forEach(btn=>btn.onclick=()=>go(`day/${btn.dataset.day}`));
}

function renderDay(n){
  const d=trip.days.find(x=>x.day===n) || trip.days[0];
  const [label, cls]=todayStatus(d.day);
  const wishes = getWishes().filter(w=>Number(w.day)===d.day);
  $('#app').innerHTML = `
    <section class="day-detail-hero">
      <button class="back-btn" id="backToDays">← 返回行程</button>
      <h1>Day ${d.day}</h1>
      <p>${d.date}｜${d.city}</p>
      <div style="margin-top:12px"><span class="status-pill ${cls}">${label}</span></div>
    </section>
    <section class="section grid two">
      <div class="card info-table">
        <div class="info-line"><b>住宿</b><span>${escapeHTML(d.stay)}</span></div>
        <div class="info-line"><b>路線</b><span>${escapeHTML(d.route)}</span></div>
        <div class="info-line"><b>重點</b><span>${escapeHTML(d.focus)}</span></div>
      </div>
      <div class="card">
        <h2 style="margin-top:0">今日節奏</h2>
        <div class="timeline">${d.timeline.map(t=>`<div class="timeline-item"><div class="timeline-time">${t[0]}</div><div class="timeline-card"><h3>${escapeHTML(t[1])}</h3><p>${escapeHTML(t[2])}</p></div></div>`).join('')}</div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><h2>今日想去 / 候選</h2><p>原本「想去の地」移到每日行程內，避免兩邊走。</p></div></div>
      <div class="chip-row" style="margin-bottom:12px">${d.wants.map(w=>`<span class="chip">📍 ${escapeHTML(w)}</span>`).join('')}</div>
      <div class="wish-list">${wishes.length?wishes.map(wishCard).join(''):'<div class="empty">這一天暫時未有人新增額外想去地方。</div>'}</div>
      <div class="card" style="margin-top:14px">
        <h3 style="margin-top:0">＋ 加入這一天想去的地方</h3>
        <form id="wishForm" class="form-grid">
          <input name="name" placeholder="地方 / 餐廳名稱" required />
          <select name="type"><option>景點</option><option>餐廳</option><option>購物</option><option>交通</option><option>活動</option><option>其他</option></select>
          <select name="priority"><option>必去</option><option>想去</option><option>可去</option></select>
          <textarea name="note" placeholder="備註，例如：最好下午去 / 要預約 / 想拍照"></textarea>
          <button class="primary-btn">新增到 Day ${d.day}</button>
        </form>
      </div>
    </section>
  `;
  $('#backToDays').onclick=()=>go('itinerary');
  $('#wishForm').onsubmit=(e)=>{e.preventDefault();const fd=new FormData(e.currentTarget);addWish({day:d.day,name:fd.get('name'),type:fd.get('type'),priority:fd.get('priority'),note:fd.get('note')});renderDay(d.day);toast('已加入今日想去清單')};
  $$('.vote-wish').forEach(btn=>btn.onclick=()=>{voteWish(btn.dataset.id);renderDay(d.day)});
  $$('.delete-wish').forEach(btn=>btn.onclick=()=>{deleteWish(btn.dataset.id);renderDay(d.day)});
}
function wishCard(w){return `<div class="wish-card"><div class="wish-top"><div><div class="wish-title">${escapeHTML(w.name)}</div><div class="wish-meta">${escapeHTML(w.type)}｜${escapeHTML(w.priority)}｜by ${escapeHTML(w.person)}</div></div><span class="tag">❤️ ${w.votes||0}</span></div>${w.note?`<p class="small-note">${escapeHTML(w.note)}</p>`:''}<div class="chip-row" style="margin-top:10px"><button class="chip vote-wish" data-id="${w.id}">想去 +1</button><button class="chip delete-wish" data-id="${w.id}">刪除</button></div></div>`}
function getWishes(){return load(STORE.wishes,[])}
function addWish(w){const list=getWishes();list.push({...w,id:crypto.randomUUID(),person:settings().person,votes:0,createdAt:new Date().toISOString()});save(STORE.wishes,list)}
function voteWish(id){save(STORE.wishes,getWishes().map(w=>w.id===id?{...w,votes:(w.votes||0)+1}:w));toast('已投票')}
function deleteWish(id){save(STORE.wishes,getWishes().filter(w=>w.id!==id));toast('已刪除')}

function renderStays(){
  $('#app').innerHTML = `
    <section class="section-head"><div><h2>住宿資訊</h2><p>住宿已固定，所以這裡只展示資料，不設「加住宿」。</p></div></section>
    <div class="grid two">${trip.stays.map(stayCard).join('')}</div>
  `;
  $$('.photo-prev').forEach(btn=>btn.onclick=()=>shiftPhoto(btn.dataset.stay,-1));
  $$('.photo-next').forEach(btn=>btn.onclick=()=>shiftPhoto(btn.dataset.stay,1));
}
function stayCard(s){const photoIndex=getPhotoIndex(s.id);const emoji=s.photos[photoIndex%s.photos.length];return `<article class="card stay-card"><div class="stay-cover ${s.tone}"><div class="photo-layer"><span>${emoji}</span></div><div class="carousel-controls"><button class="photo-prev" data-stay="${s.id}">‹</button><button class="photo-next" data-stay="${s.id}">›</button></div><h2>${escapeHTML(s.city)}</h2><p>${escapeHTML(s.dates)}｜${escapeHTML(s.name)}</p></div><div class="stay-body"><div class="detail-list"><div><b>地址</b><span>${escapeHTML(s.address)}<br><a class="map-link" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.address)}">打開 Google Maps</a></span></div><div><b>電話</b><span>${escapeHTML(s.phone)}</span></div><div><b>預訂</b><span>${escapeHTML(s.booking)}</span></div><div><b>備註</b><span>${escapeHTML(s.note)}</span></div></div><div><b>設施 / 優點</b><div class="amenities">${s.facilities.map(f=>`<span>${escapeHTML(f)}</span>`).join('')}</div></div><p class="small-note">目前使用主題圖片卡作為相片位；之後你可以把真實酒店/民宿相片給我替換。</p></div></article>`}
function getPhotoIndex(id){return (load(STORE.photo,{})[id] || 0)}
function shiftPhoto(id,step){const obj=load(STORE.photo,{});const stay=trip.stays.find(s=>s.id===id);obj[id]=((obj[id]||0)+step+stay.photos.length)%stay.photos.length;save(STORE.photo,obj);renderStays()}

function getExpenses(){return load(STORE.expenses,[])}
function setExpenses(list){save(STORE.expenses,list)}
function renderBudget(){
  const list=getExpenses(); const total=list.reduce((s,e)=>s+Number(e.amountHKD||0),0); const s=settings();
  $('#app').innerHTML = `
    <section class="section-head"><div><h2>資金</h2><p>原始輸入用港幣，按一下可切換日圓顯示。</p></div></section>
    <section class="grid two">
      <div class="card">
        <div class="money-toolbar"><span class="tag">${s.currency==='HKD'?'HKD 原始':'JPY 換算'}</span><button class="chip" id="toggleCurrency">切換 ${s.currency==='HKD'?'日圓':'港幣'}</button></div>
        <h1 class="amount-big">${formatMoney(total)}</h1>
        <p class="small-note">目前匯率：HK$1 = ¥${Number(s.rate||20).toLocaleString()}。可在右上角設定更改。</p>
        <div class="canvas-wrap"><canvas id="expenseChart"></canvas></div>
      </div>
      <div class="card">
        <h3 style="margin-top:0">${editingExpenseId?'修改項目':'加入項目'}</h3>
        <form id="expenseForm" class="form-grid">
          <input name="item" placeholder="項目，例如：御殿場 Outlet 交通" required />
          <select name="category"><option>住宿</option><option>交通</option><option>餐飲</option><option>門票</option><option>購物</option><option>其他</option></select>
          <input name="amountHKD" type="number" min="0" step="0.01" placeholder="金額 HKD" required />
          <input name="payer" placeholder="付款人，例如 A / B / C" />
          <textarea name="note" placeholder="備註"></textarea>
          <button class="primary-btn">${editingExpenseId?'儲存修改':'新增支出'}</button>
          ${editingExpenseId?'<button type="button" id="cancelEdit" class="secondary-btn">取消修改</button>':''}
        </form>
      </div>
    </section>
    <section class="section"><div class="section-head"><div><h2>支出列表</h2><p>可新增、修改、刪除。</p></div></div><div class="expense-list">${list.length?list.map(expenseItem).join(''):'<div class="empty">暫時未有支出項目。</div>'}</div></section>
  `;
  $('#toggleCurrency').onclick=()=>{setSettings({currency:s.currency==='HKD'?'JPY':'HKD'});renderBudget()};
  const edit = list.find(e=>e.id===editingExpenseId);
  if(edit){const f=$('#expenseForm');f.item.value=edit.item;f.category.value=edit.category;f.amountHKD.value=edit.amountHKD;f.payer.value=edit.payer||'';f.note.value=edit.note||'';$('#cancelEdit').onclick=()=>{editingExpenseId=null;renderBudget()}}
  $('#expenseForm').onsubmit=(e)=>{e.preventDefault();const fd=new FormData(e.currentTarget);const data={item:fd.get('item'),category:fd.get('category'),amountHKD:Number(fd.get('amountHKD')),payer:fd.get('payer'),note:fd.get('note')};if(editingExpenseId){setExpenses(getExpenses().map(x=>x.id===editingExpenseId?{...x,...data,updatedAt:new Date().toISOString()}:x));editingExpenseId=null;toast('已修改支出')}else{setExpenses([...getExpenses(),{...data,id:crypto.randomUUID(),createdAt:new Date().toISOString()}]);toast('已新增支出')}renderBudget()};
  $$('.edit-expense').forEach(btn=>btn.onclick=()=>{editingExpenseId=btn.dataset.id;renderBudget()});
  $$('.delete-expense').forEach(btn=>btn.onclick=()=>{setExpenses(getExpenses().filter(e=>e.id!==btn.dataset.id));toast('已刪除支出');renderBudget()});
  drawChart(list);
}
function expenseItem(e){return `<div class="expense-item"><div><h3>${escapeHTML(e.item)}</h3><p>${escapeHTML(e.category)}｜${formatMoney(e.amountHKD)}${e.payer?`｜付款：${escapeHTML(e.payer)}`:''}</p>${e.note?`<p>${escapeHTML(e.note)}</p>`:''}</div><div class="expense-actions"><button class="edit-expense" data-id="${e.id}">改</button><button class="delete-expense" data-id="${e.id}">刪</button></div></div>`}
function drawChart(list){const canvas=$('#expenseChart'); if(!canvas || !window.Chart) return; const categories=['住宿','交通','餐飲','門票','購物','其他']; const values=categories.map(c=>list.filter(e=>e.category===c).reduce((s,e)=>s+Number(e.amountHKD||0),0)); if(chart) chart.destroy(); chart=new Chart(canvas,{type:'pie',data:{labels:categories,datasets:[{data:values}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}}}})}

function initSettings(){
  const dialog=$('#settingsDialog');
  $('#settingsBtn').onclick=()=>{const s=settings();$('#personSelect').value=s.person;$('#rateInput').value=s.rate;$('#apiUrlInput').value=s.apiUrl;$('#accessCodeInput').value=s.accessCode;dialog.showModal()};
  $('#saveSettings').onclick=(e)=>{e.preventDefault();setSettings({person:$('#personSelect').value,rate:Number($('#rateInput').value||20),apiUrl:$('#apiUrlInput').value.trim(),accessCode:$('#accessCodeInput').value.trim()});dialog.close();toast('設定已儲存');render()};
}
function initNav(){
  $$('[data-route]').forEach(btn=>btn.addEventListener('click',()=>go(btn.dataset.route)));
  addEventListener('hashchange',render);
}
initSettings();initNav();render();
