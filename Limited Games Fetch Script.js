let data = {};
data.banned={};
data.FOD={};
data.limited={};
data.cards={};

//被Ban游戏数据来源 https://steam-tracker.com/apps/banned
document.querySelectorAll("#delisted-apps > tbody > tr").forEach(row=>{
    let appid = row.dataset.appid;
    let name = row.querySelector(".truncate").innerText;
    data.banned[appid]=name.trim();
})

//正在了解游戏数据来源 https://steamdb.info/search/?a=app&q=&type=1&category=777&all=1
document.querySelectorAll("#table-sortable > tbody > tr").forEach(row=>{
    let appid = row.dataset.appid;
    let name = row.querySelector("td:nth-child(3)").innerText;
    data.learning[appid]=name;
})

//受限游戏数据来源 https://steamdb.info/search/?a=app&q=&type=1&category=776&all=1
document.querySelectorAll("#table-sortable > tbody > tr").forEach(row=>{
    let appid = row.dataset.appid;
    let name = row.querySelector("td:nth-child(3)").innerText;
    data.limited[appid]=name;
})

//免费游戏数据来源 https://steamdb.info/tag/113/?all
document.querySelectorAll("#table-apps > tbody > tr").forEach(row=>{
    let appid = row.dataset.appid;
    let name = row.querySelector("td:nth-child(3)").innerText;
    data[appid]=name;
})

//卡牌游戏数据来源 https://steamdb.info/search/?a=app&q=&type=1&category=29&all=1
document.querySelectorAll("#table-sortable > tbody > tr").forEach(row=>{
    let appid = row.dataset.appid;
    let name = row.querySelector("td:nth-child(3)").innerText;
    data.cards[appid]=name;
})