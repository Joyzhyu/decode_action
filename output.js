//Sun Oct 27 2024 07:48:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const lili1 = new il1111l1("广州翼支付抽奖"),
  i11Ilill = "gzyzfcj",
  ii11lll = 1;
let l1iililI = ["@", "\n"],
  i1iI1lI = msg = "",
  lIi1lliI,
  liIiI1ll,
  IllliI11 = (lili1.isNode() ? process.env[i11Ilill] : lili1.getdata(i11Ilill)) || "",
  iliiI1lI = [],
  IIIli11I = 0,
  IIil1lI = 0;
async function lii11IIl() {
  console.log("\n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString());
  console.log("\n发布的脚本文件及其中涉及的任何脚本，仅用于测试和学习研究，禁止用于商业或非法目的的大肆传播，否则后果自负，使用脚本行为均有封号风险，请在24小时内删除---by乔巴");
  await IiiI1Ii();
  taskall = [];
  for (let lllllIli of iliiI1lI) {
    await lllllIli.user_info();
    await lili1.wait(3000);
  }
  await Promise.all(taskall);
  console.log("\n=== 推送 ===\n");
}
class l1IiIiiI {
  constructor(i1IiIilI) {
    this.index = ++IIIli11I;
    this.ck = i1IiIilI.split("&")[0];
    this.sign = i1IiIilI.split("&")[1];
    this.Phone = i1IiIilI.split("&")[2];
    this.host = "yzfyh.mini189.cn";
    this.hostname = "https://" + this.host;
  }
  async ["user_info"]() {
    try {
      let lIlllili = {
        "url": this.hostname + "/api/api/firTicketNew",
        "headers": {
          "Host": "yzfyh.mini189.cn",
          "Content-Type": "application/json",
          "Origin": "https://yzfyh.mini189.cn",
          "Accept-Encoding": "gzip, deflate, br",
          "Connection": "keep-alive",
          "Accept": "application/json, text/plain, */*",
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.37(0x18002528) NetType/4G Language/zh_CN",
          "Referer": "https://yzfyh.mini189.cn/yzf/api/h5/yzfDay?cl=APPtanchuang",
          "Content-Length": "121",
          "Accept-Language": "zh-cn"
        },
        "body": "{\"phone\":\"" + this.ck + "\",\"cl\":\"APPtanchuang\",\"sig\":\"" + this.sign + "\",\"timestamp\":1684029553141}"
      };
      lIlllili = l1liilil(lIlllili);
      let iiIi1IiI = await Iii1iiil(lIlllili);
      if (iiIi1IiI.status == "0") lii11l1l("账号[" + this.index + "][" + this.Phone + "]: 翼支付抽奖成功！获得了" + iiIi1IiI.data.prizeToast);else iiIi1IiI.status == "2" ? console.log("账号[" + this.index + "][" + this.Phone + "]: 翼支付抽奖失败," + iiIi1IiI.msg) : console.log("账号[" + this.index + "][" + this.Phone + "]: 翼支付抽奖失败," + iiIi1IiI.msg);
    } catch (lI1illIl) {
      console.log(lI1illIl);
    }
  }
  async ["lingquwushijingyan"]() {
    try {
      {
        let IllI11II = {
          "url": this.hostname + "/yqt_fans/vipGradeExperienceDetail/receiveExperience?type=3&orderNo=" + this.discountIds,
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            "Cookie": this.ck
          }
        };
        IllI11II = l1liilil(IllI11II);
        let iilII1Il = await Iii1iiil(IllI11II);
        if (iilII1Il.status == "success") lii11l1l("账号[" + this.index + "][" + this.customerNumber + "]: 优惠业务领取经验成功！获得了" + iilII1Il.data.currentGiftExp + "经验");else iilII1Il.status == "error" ? console.log("账号[" + this.index + "][" + this.customerNumber + "]: 优惠业务领取经验失败," + iilII1Il.msg) : console.log("账号[" + this.index + "][" + this.customerNumber + "]: 未登录");
      }
    } catch (il111111) {
      console.log(il111111);
    }
  }
  async ["receiveExperience"]() {
    try {
      {
        let lI11iIii = {
          "url": this.hostname + "/yqt_fans/vipGradeExperienceDetail/receiveExperience",
          "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            "Cookie": this.ck
          },
          "params": {
            "type": "1"
          }
        };
        lI11iIii = l1liilil(lI11iIii);
        let iiiI1lII = await Iii1iiil(lI11iIii);
        if (iiiI1lII.status == "success") lii11l1l("账号[" + this.index + "][" + this.customerNumber + "]: 签到成功！获得了" + iiiI1lII.data.currentGiftExp + "经验");else {
          if (iiiI1lII.status == "error") console.log("账号[" + this.index + "][" + this.customerNumber + "]: " + iiiI1lII.msg);else {
            console.log("账号[" + this.index + "][" + this.customerNumber + "]: 未登录");
          }
        }
      }
    } catch (illi1lI) {
      console.log(illi1lI);
    }
  }
  async ["receiveGradeUpgrade"]() {
    try {
      let ilI1IIlI = {
        "url": this.hostname + "/yqt_fans/vipGradeExperienceInfo/receiveGradeUpgrade",
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          "Cookie": this.ck
        }
      };
      ilI1IIlI = l1liilil(ilI1IIlI);
      let iII11ill = await Iii1iiil(ilI1IIlI);
      if (iII11ill.status == "success") lii11l1l("账号[" + this.index + "][" + this.customerNumber + "]: 升级领取经验值成功！获得" + iII11ill.data + "经验");else {
        if (iII11ill.status == "error") {
          console.log("账号[" + this.index + "][" + this.customerNumber + "]: " + iII11ill.msg);
        } else console.log("账号[" + this.index + "][" + this.customerNumber + "]: 未登录");
      }
    } catch (IIIIlIli) {
      console.log(IIIIlIli);
    }
  }
}
!(async () => {
  if (!(await illIIi11())) return;
  iliiI1lI.length > 0 && (await lii11IIl());
  await iIli111I(msg);
})().catch(l1II1lII => console.log(l1II1lII)).finally(() => lili1.done());
async function illIIi11() {
  if (IllliI11) {
    {
      let l1Il1ilI = l1iililI[0];
      for (let IliiliIl of l1iililI) if (IllliI11.indexOf(IliiliIl) > -1) {
        l1Il1ilI = IliiliIl;
        break;
      }
      for (let Ii1lIii of IllliI11.split(l1Il1ilI)) Ii1lIii && iliiI1lI.push(new l1IiIiiI(Ii1lIii));
      IIil1lI = iliiI1lI.length;
    }
  } else {
    {
      console.log("未找到CK");
      return;
    }
  }
  console.log("共找到" + IIil1lI + "个账号");
  return true;
}
function l1liilil(l11I1IIi) {
  let ll1111iI = new Object(),
    l11iIiIi = ["qs", "params"],
    Iliilili = ["body", "data", "form", "formData"];
  for (let IIli1I1I in l11iIiIi) {
    l11iIiIi[IIli1I1I] in l11I1IIi ? ll1111iI.url = i1IliIlI(l11iIiIi[IIli1I1I]) : ll1111iI.url = l11I1IIi.url;
  }
  "content-type" in l11I1IIi.headers ? ll1111iI.headers = i1iiIII1(l11I1IIi.headers) : ll1111iI.headers = l11I1IIi.headers;
  function i1IliIlI(iIll1lll) {
    url = l11I1IIi.url + "?";
    for (let IiI1lI1i in l11I1IIi[iIll1lll]) {
      url += IiI1lI1i + "=" + l11I1IIi[iIll1lll][IiI1lI1i] + "&";
    }
    url = url.substring(0, url.length - 1);
    return url;
  }
  function i1iiIII1(lliIIiI) {
    {
      let IIli111l = lliIIiI["content-type"];
      delete lliIIiI["content-type"];
      lliIIiI["Content-Type"] = IIli111l;
      return lliIIiI;
    }
  }
  for (let IiiIiIl in Iliilili) {
    if (Iliilili[IiiIiIl] in l11I1IIi) {
      Object.prototype.toString.call(l11I1IIi[Iliilili[IiiIiIl]]) === "[object Object]" ? ll1111iI.body = JSON.stringify(l11I1IIi[Iliilili[IiiIiIl]]) : ll1111iI.body = l11I1IIi[Iliilili[IiiIiIl]];
    }
  }
  return ll1111iI;
}
function Iii1iiil(IIlliIl, iillll1l) {
  typeof iillll1l === "undefined" ? "body" in IIlliIl ? iillll1l = "post" : iillll1l = "get" : iillll1l = iillll1l;
  return new Promise(i1I1iIIi => {
    lili1[iillll1l](IIlliIl, (l1lli1I1, ii1iil1, II1lIlI1) => {
      try {
        {
          if (l1lli1I1) {
            console.log(iillll1l + "请求失败");
            lili1.logErr(l1lli1I1);
          } else {
            II1lIlI1 ? (II1lIlI1 = JSON.parse(II1lIlI1), i1I1iIIi(II1lIlI1)) : console.log("请求api返回数据为空，请检查自身原因");
          }
        }
      } catch (i1llIi1l) {
        lili1.logErr(i1llIi1l, ii1iil1);
      } finally {
        i1I1iIIi();
      }
    });
  });
}
function iI1iiili(iI1Ii1i1, l11Ii1i1 = 3) {
  return new Promise(async (iiIliil, IIIIliii) => {
    {
      function iI1iill1(ll1lliIi) {
        console.log("第" + ll1lliIi + "次重试");
        iI1Ii1i1().then(iIill1II => {
          iiIliil(iIill1II);
        }).catch(l1i11iIi => {
          ll1lliIi > 0 ? (console.log("----第" + ll1lliIi + "次重试"), setTimeout(() => {
            iI1iill1(ll1lliIi - 1);
          })) : IIIIliii(l1i11iIi);
        });
      }
      iI1iill1(l11Ii1i1);
    }
  });
}
function lIIililI(ll1ll111) {
  return new Promise(function (lI1ll1li) {
    setTimeout(lI1ll1li, ll1ll111 * 1000);
  });
}
function lii11l1l(lli11ll1) {
  if (lili1.isNode()) {
    {
      if (lli11ll1) {
        console.log("" + lli11ll1);
        msg += "\n" + lli11ll1;
      }
    }
  } else {
    console.log("" + lli11ll1);
    msg += "\n" + lli11ll1;
  }
}
function IiiI1Ii(l1iIIIi1 = 3000) {
  return new Promise(iI11lll => {
    {
      let i1iI1Il = {
        "url": "https://keai.icu/apiwyy/api"
      };
      lili1.get(i1iI1Il, async (lIlIiil, li1lllII, I11lI1Ii) => {
        try {
          I11lI1Ii = JSON.parse(I11lI1Ii);
          console.log("\n【网抑云时间】: " + I11lI1Ii.content + "  by--" + I11lI1Ii.music + "\n");
        } catch (I1i1I1li) {
          lili1.logErr(I1i1I1li, li1lllII);
        } finally {
          iI11lll();
        }
      }, l1iIIIi1);
    }
  });
}
async function iIli111I(I1lI1Iil) {
  if (!I1lI1Iil) return;
  if (ii11lll > 0) {
    if (lili1.isNode()) {
      {
        var iIiiI1l = require("./sendNotify");
        await iIiiI1l.sendNotify(lili1.name, I1lI1Iil);
      }
    } else lili1.msg(lili1.name, "", I1lI1Iil);
  } else {
    console.log(I1lI1Iil);
  }
}
function il1111l1(ll1lIlIl, ii11IIIi) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class iIiiii1I {
    constructor(lii1Ii) {
      this.env = lii1Ii;
    }
    ["send"](l1IiilIl, i11IIii1 = "GET") {
      l1IiilIl = "string" == typeof l1IiilIl ? {
        "url": l1IiilIl
      } : l1IiilIl;
      let Iii1iII1 = this.get;
      "POST" === i11IIii1 && (Iii1iII1 = this.post);
      return new Promise((I1i1111l, illiII1I) => {
        Iii1iII1.call(this, l1IiilIl, (III1iIIi, iI1ilIi, lllii1) => {
          III1iIIi ? illiII1I(III1iIIi) : I1i1111l(iI1ilIi);
        });
      });
    }
    ["get"](l1Il11ll) {
      return this.send.call(this.env, l1Il11ll);
    }
    ["post"](lll1i1iI) {
      return this.send.call(this.env, lll1i1iI, "POST");
    }
  }
  return new class {
    constructor(IIlI1l11, IilIiIII) {
      this.name = IIlI1l11;
      this.http = new iIiiii1I(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, IilIiIII);
      this.log("", this.name + ", 开始运行!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](ll1Iili, lli1Il1l = null) {
      try {
        return JSON.parse(ll1Iili);
      } catch {
        return lli1Il1l;
      }
    }
    ["toStr"](i1IiIlIl, IiIlIi1i = null) {
      try {
        return JSON.stringify(i1IiIlIl);
      } catch {
        return IiIlIi1i;
      }
    }
    ["getjson"](iIlIll1l, IIl11lI) {
      let lIIlIil1 = IIl11lI;
      const I1IIl1l = this.getdata(iIlIll1l);
      if (I1IIl1l) try {
        lIIlIil1 = JSON.parse(this.getdata(iIlIll1l));
      } catch {}
      return lIIlIil1;
    }
    ["setjson"](iIilIll1, ilIilIi1) {
      try {
        return this.setdata(JSON.stringify(iIilIll1), ilIilIi1);
      } catch {
        return false;
      }
    }
    ["getScript"](llIIiiIi) {
      return new Promise(iIlliI1l => {
        this.get({
          "url": llIIiiIi
        }, (I1I1lili, ll11Iii, lIii11l) => iIlliI1l(lIii11l));
      });
    }
    ["runScript"](I11l1I11, llllI11) {
      return new Promise(i1lII111 => {
        {
          let illliIli = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          illliIli = illliIli ? illliIli.replace(/\n/g, "").trim() : illliIli;
          let lI1Ii11i = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          lI1Ii11i = lI1Ii11i ? 1 * lI1Ii11i : 20;
          lI1Ii11i = llllI11 && llllI11.timeout ? llllI11.timeout : lI1Ii11i;
          const [lllIiIIi, Iii1Iiil] = illliIli.split("@"),
            iIlll1l1 = {
              "url": "http://" + Iii1Iiil + "/v1/scripting/evaluate",
              "body": {
                "script_text": I11l1I11,
                "mock_type": "cron",
                "timeout": lI1Ii11i
              },
              "headers": {
                "X-Key": lllIiIIi,
                "Accept": "*/*"
              }
            };
          this.post(iIlll1l1, (i1ilIll, liii1IiI, i1111I11) => i1lII111(i1111I11));
        }
      }).catch(I1l11i1i => this.logErr(I1l11i1i));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const iIIIIIl = this.path.resolve(this.dataFile),
          II1I1ll1 = this.path.resolve(process.cwd(), this.dataFile),
          lIIlilIl = this.fs.existsSync(iIIIIIl),
          IIIiiIIl = !lIIlilIl && this.fs.existsSync(II1I1ll1);
        if (!lIIlilIl && !IIIiiIIl) return {};
        {
          const l1llill1 = lIIlilIl ? iIIIIIl : II1I1ll1;
          try {
            return JSON.parse(this.fs.readFileSync(l1llill1));
          } catch (Iil1l) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const Ili1liIl = this.path.resolve(this.dataFile),
              i1Il1ll = this.path.resolve(process.cwd(), this.dataFile),
              I1lI1l1i = this.fs.existsSync(Ili1liIl),
              lIiIlll1 = !I1lI1l1i && this.fs.existsSync(i1Il1ll),
              iIIIlIiI = JSON.stringify(this.data);
            I1lI1l1i ? this.fs.writeFileSync(Ili1liIl, iIIIlIiI) : lIiIlll1 ? this.fs.writeFileSync(i1Il1ll, iIIIlIiI) : this.fs.writeFileSync(Ili1liIl, iIIIlIiI);
          }
        }
      }
    }
    ["lodash_get"](i1lIiili, liiI11II, lIi11iIi) {
      {
        const iiI1iIII = liiI11II.replace(/\[(\d+)\]/g, ".$1").split(".");
        let li11ii = i1lIiili;
        for (const iliIl1ll of iiI1iIII) if (li11ii = Object(li11ii)[iliIl1ll], undefined === li11ii) return lIi11iIi;
        return li11ii;
      }
    }
    ["lodash_set"](I1ii1l1I, liii1II, lIliii1i) {
      return Object(I1ii1l1I) !== I1ii1l1I ? I1ii1l1I : (Array.isArray(liii1II) || (liii1II = liii1II.toString().match(/[^.[\]]+/g) || []), liii1II.slice(0, -1).reduce((liiIi1ll, iiIi1Ili, l1lIllii) => Object(liiIi1ll[iiIi1Ili]) === liiIi1ll[iiIi1Ili] ? liiIi1ll[iiIi1Ili] : liiIi1ll[iiIi1Ili] = Math.abs(liii1II[l1lIllii + 1]) >> 0 == +liii1II[l1lIllii + 1] ? [] : {}, I1ii1l1I)[liii1II[liii1II.length - 1]] = lIliii1i, I1ii1l1I);
    }
    ["getdata"](lIiIIll) {
      {
        let ili111Ii = this.getval(lIiIIll);
        if (/^@/.test(lIiIIll)) {
          {
            const [, il1l11Il, lI1l1li] = /^@(.*?)\.(.*?)$/.exec(lIiIIll),
              lll1lI11 = il1l11Il ? this.getval(il1l11Il) : "";
            if (lll1lI11) try {
              const I1II1lil = JSON.parse(lll1lI11);
              ili111Ii = I1II1lil ? this.lodash_get(I1II1lil, lI1l1li, "") : ili111Ii;
            } catch (lIii1Il1) {
              ili111Ii = "";
            }
          }
        }
        return ili111Ii;
      }
    }
    ["setdata"](ilIlI1iI, III1liI1) {
      let ilIiI = false;
      if (/^@/.test(III1liI1)) {
        const [, i11iIiIl, l1lilIiI] = /^@(.*?)\.(.*?)$/.exec(III1liI1),
          liili1lI = this.getval(i11iIiIl),
          l1lIIil1 = i11iIiIl ? "null" === liili1lI ? null : liili1lI || "{}" : "{}";
        try {
          const Ii1I1il = JSON.parse(l1lIIil1);
          this.lodash_set(Ii1I1il, l1lilIiI, ilIlI1iI);
          ilIiI = this.setval(JSON.stringify(Ii1I1il), i11iIiIl);
        } catch (liIili1I) {
          {
            const IIi1l1iI = {};
            this.lodash_set(IIi1l1iI, l1lilIiI, ilIlI1iI);
            ilIiI = this.setval(JSON.stringify(IIi1l1iI), i11iIiIl);
          }
        }
      } else ilIiI = this.setval(ilIlI1iI, III1liI1);
      return ilIiI;
    }
    ["getval"](iilil1l) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(iilil1l) : this.isQuanX() ? $prefs.valueForKey(iilil1l) : this.isNode() ? (this.data = this.loaddata(), this.data[iilil1l]) : this.data && this.data[iilil1l] || null;
    }
    ["setval"](iIill1ll, l111IiiI) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(iIill1ll, l111IiiI) : this.isQuanX() ? $prefs.setValueForKey(iIill1ll, l111IiiI) : this.isNode() ? (this.data = this.loaddata(), this.data[l111IiiI] = iIill1ll, this.writedata(), true) : this.data && this.data[l111IiiI] || null;
    }
    ["initGotEnv"](l1l1iIli) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      l1l1iIli && (l1l1iIli.headers = l1l1iIli.headers ? l1l1iIli.headers : {}, undefined === l1l1iIli.headers.Cookie && undefined === l1l1iIli.cookieJar && (l1l1iIli.cookieJar = this.ckjar));
    }
    ["get"](I1illllI, ililIiIi = () => {}) {
      I1illllI.headers && (delete I1illllI.headers["Content-Type"], delete I1illllI.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (I1illllI.headers = I1illllI.headers || {}, Object.assign(I1illllI.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(I1illllI, (l111I1l1, IiII1iiI, l1I1i1ii) => {
        !l111I1l1 && IiII1iiI && (IiII1iiI.body = l1I1i1ii, IiII1iiI.statusCode = IiII1iiI.status);
        ililIiIi(l111I1l1, IiII1iiI, l1I1i1ii);
      })) : this.isQuanX() ? (this.isNeedRewrite && (I1illllI.opts = I1illllI.opts || {}, Object.assign(I1illllI.opts, {
        "hints": false
      })), $task.fetch(I1illllI).then(llIi111 => {
        const {
          statusCode: IlII1li,
          statusCode: III1i1l,
          headers: i1i11lIi,
          body: llIlli1
        } = llIi111;
        ililIiIi(null, {
          "status": IlII1li,
          "statusCode": III1i1l,
          "headers": i1i11lIi,
          "body": llIlli1
        }, llIlli1);
      }, IIll1Iil => ililIiIi(IIll1Iil))) : this.isNode() && (this.initGotEnv(I1illllI), this.got(I1illllI).on("redirect", (li1iIIiI, l1iIllI) => {
        try {
          if (li1iIIiI.headers["set-cookie"]) {
            {
              const IlIi1Iii = li1iIIiI.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
              IlIi1Iii && this.ckjar.setCookieSync(IlIi1Iii, null);
              l1iIllI.cookieJar = this.ckjar;
            }
          }
        } catch (IlIliI) {
          this.logErr(IlIliI);
        }
      }).then(iIIiil1i => {
        const {
          statusCode: Il1iil1,
          statusCode: llIllI,
          headers: illl1I1i,
          body: i1l1li1l
        } = iIIiil1i;
        ililIiIi(null, {
          "status": Il1iil1,
          "statusCode": llIllI,
          "headers": illl1I1i,
          "body": i1l1li1l
        }, i1l1li1l);
      }, lIIl1Il => {
        {
          const {
            message: l1iliIil,
            response: iiil1iiI
          } = lIIl1Il;
          ililIiIi(l1iliIil, iiil1iiI, iiil1iiI && iiil1iiI.body);
        }
      }));
    }
    ["post"](llI1IiII, IiIiii1I = () => {}) {
      if (llI1IiII.body && llI1IiII.headers && !llI1IiII.headers["Content-Type"] && (llI1IiII.headers["Content-Type"] = "application/x-www-form-urlencoded"), llI1IiII.headers && delete llI1IiII.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (llI1IiII.headers = llI1IiII.headers || {}, Object.assign(llI1IiII.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.post(llI1IiII, (l1Ili11I, ill1Iiil, ll1lI) => {
        !l1Ili11I && ill1Iiil && (ill1Iiil.body = ll1lI, ill1Iiil.statusCode = ill1Iiil.status);
        IiIiii1I(l1Ili11I, ill1Iiil, ll1lI);
      });else {
        if (this.isQuanX()) llI1IiII.method = "POST", this.isNeedRewrite && (llI1IiII.opts = llI1IiII.opts || {}, Object.assign(llI1IiII.opts, {
          "hints": false
        })), $task.fetch(llI1IiII).then(lIllIIli => {
          {
            const {
              statusCode: IIIiiii,
              statusCode: iIiillll,
              headers: iiiiIiIi,
              body: ilIi111l
            } = lIllIIli;
            IiIiii1I(null, {
              "status": IIIiiii,
              "statusCode": iIiillll,
              "headers": iiiiIiIi,
              "body": ilIi111l
            }, ilIi111l);
          }
        }, iiIl1Iil => IiIiii1I(iiIl1Iil));else {
          if (this.isNode()) {
            {
              this.initGotEnv(llI1IiII);
              const {
                url: Ili1liI,
                ...IiIII11l
              } = llI1IiII;
              this.got.post(Ili1liI, IiIII11l).then(i11ilil1 => {
                const {
                  statusCode: IIl11ilI,
                  statusCode: ii1I1il,
                  headers: i1lilI1l,
                  body: I1iiI
                } = i11ilil1;
                IiIiii1I(null, {
                  "status": IIl11ilI,
                  "statusCode": ii1I1il,
                  "headers": i1lilI1l,
                  "body": I1iiI
                }, I1iiI);
              }, lIIi1l => {
                {
                  const {
                    message: li1IlIlI,
                    response: IlIi1Ii
                  } = lIIi1l;
                  IiIiii1I(li1IlIlI, IlIi1Ii, IlIi1Ii && IlIi1Ii.body);
                }
              });
            }
          }
        }
      }
    }
    ["time"](IilIi1i1, Ii1IIIii = null) {
      const IlIIl1l1 = Ii1IIIii ? new Date(Ii1IIIii) : new Date();
      let IIIl1iii = {
        "M+": IlIIl1l1.getMonth() + 1,
        "d+": IlIIl1l1.getDate(),
        "H+": IlIIl1l1.getHours(),
        "m+": IlIIl1l1.getMinutes(),
        "s+": IlIIl1l1.getSeconds(),
        "q+": Math.floor((IlIIl1l1.getMonth() + 3) / 3),
        "S": IlIIl1l1.getMilliseconds()
      };
      /(y+)/.test(IilIi1i1) && (IilIi1i1 = IilIi1i1.replace(RegExp.$1, (IlIIl1l1.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let III1iIl in IIIl1iii) new RegExp("(" + III1iIl + ")").test(IilIi1i1) && (IilIi1i1 = IilIi1i1.replace(RegExp.$1, 1 == RegExp.$1.length ? IIIl1iii[III1iIl] : ("00" + IIIl1iii[III1iIl]).substr(("" + IIIl1iii[III1iIl]).length)));
      return IilIi1i1;
    }
    ["msg"](llliiliI = ll1lIlIl, i111111l = "", lI1IIlil = "", l11lIi1I) {
      {
        const iI1II1II = II1Il11 => {
          if (!II1Il11) return II1Il11;
          if ("string" == typeof II1Il11) return this.isLoon() ? II1Il11 : this.isQuanX() ? {
            "open-url": II1Il11
          } : this.isSurge() ? {
            "url": II1Il11
          } : undefined;
          if ("object" == typeof II1Il11) {
            {
              if (this.isLoon()) {
                let lIiIl1Ii = II1Il11.openUrl || II1Il11.url || II1Il11["open-url"],
                  Ii1i1i1l = II1Il11.mediaUrl || II1Il11["media-url"];
                return {
                  "openUrl": lIiIl1Ii,
                  "mediaUrl": Ii1i1i1l
                };
              }
              if (this.isQuanX()) {
                let IlliI1Ii = II1Il11["open-url"] || II1Il11.url || II1Il11.openUrl,
                  i1li1 = II1Il11["media-url"] || II1Il11.mediaUrl;
                return {
                  "open-url": IlliI1Ii,
                  "media-url": i1li1
                };
              }
              if (this.isSurge()) {
                let iii1i11l = II1Il11.url || II1Il11.openUrl || II1Il11["open-url"];
                return {
                  "url": iii1i11l
                };
              }
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(llliiliI, i111111l, lI1IIlil, iI1II1II(l11lIi1I)) : this.isQuanX() && $notify(llliiliI, i111111l, lI1IIlil, iI1II1II(l11lIi1I))), !this.isMuteLog) {
          let l1IIIIi = ["", "==============📣系统通知📣=============="];
          l1IIIIi.push(llliiliI);
          i111111l && l1IIIIi.push(i111111l);
          lI1IIlil && l1IIIIi.push(lI1IIlil);
          console.log(l1IIIIi.join("\n"));
          this.logs = this.logs.concat(l1IIIIi);
        }
      }
    }
    ["log"](...IliIlIIl) {
      IliIlIIl.length > 0 && (this.logs = [...this.logs, ...IliIlIIl]);
      console.log(IliIlIIl.join(this.logSeparator));
    }
    ["logErr"](il1lI1iI, ii1lIlll) {
      const I1l1lilI = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      I1l1lilI ? this.log("", "❗️" + this.name + ", 错误!", il1lI1iI.stack) : this.log("", "❗️" + this.name + ", 错误!", il1lI1iI);
    }
    ["wait"](iilIII1I) {
      return new Promise(I1li1il1 => setTimeout(I1li1il1, iilIII1I));
    }
    ["done"](IIll1i1i = {}) {
      const iil1Illl = new Date().getTime(),
        IiIl1lIl = (iil1Illl - this.startTime) / 1000;
      this.log("", this.name + ", 运行结束! 🕛 " + IiIl1lIl + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(IIll1i1i);
    }
  }(ll1lIlIl, ii11IIIi);
}