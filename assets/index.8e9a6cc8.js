var Ue = (e, s) => () => (s || e((s = { exports: {} }).exports, s), s.exports);
var Ce = (e, s, t) =>
  new Promise((l, i) => {
    var n = (a) => {
        try {
          c(t.next(a));
        } catch (r) {
          i(r);
        }
      },
      o = (a) => {
        try {
          c(t.throw(a));
        } catch (r) {
          i(r);
        }
      },
      c = (a) => (a.done ? l(a.value) : Promise.resolve(a.value).then(n, o));
    c((t = t.apply(e, s)).next());
  });
import {
  c as h,
  a as Ve,
  b as we,
  d as Qe,
  p as K,
  m as Ke,
  u as Re,
  t as p,
  s as de,
  e as q,
  f as E,
  g as oe,
  h as _,
  i as ee,
  o as ve,
  j as u,
  k as U,
  l as P,
  n as se,
  q as Ye,
  N as Se,
  D as Xe,
  r as Je,
  R as Ze,
  v as es,
  L as ss,
  w as be,
  x as as,
  y as rs,
  z as ts,
  A as os,
} from "./vendor.92a689d9.js";
var Ya = Ue((We) => {
  const is = function () {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      l(i);
    new MutationObserver((i) => {
      for (const n of i)
        if (n.type === "childList")
          for (const o of n.addedNodes)
            o.tagName === "LINK" && o.rel === "modulepreload" && l(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(i) {
      const n = {};
      return (
        i.integrity && (n.integrity = i.integrity),
        i.referrerpolicy && (n.referrerPolicy = i.referrerpolicy),
        i.crossorigin === "use-credentials"
          ? (n.credentials = "include")
          : i.crossorigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
        n
      );
    }
    function l(i) {
      if (i.ep) return;
      i.ep = !0;
      const n = t(i);
      fetch(i.href, n);
    }
  };
  is();
  const xe = 2,
    Te = 2,
    X = xe * Te,
    S = 9,
    J = 5,
    te = {
      year: 24 * 60 * 60 * 1e3 * 365,
      month: (24 * 60 * 60 * 1e3 * 365) / 12,
      day: 24 * 60 * 60 * 1e3,
      hour: 60 * 60 * 1e3,
      minute: 60 * 1e3,
      second: 1e3,
    },
    ze = new Date("01/24/2022"),
    _e = te.day,
    Ne = "abdefghijklmnoprstuxyz",
    ls = [
      ["E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["enter", "Z", "X", "B", "N", "M", "bs"],
    ],
    ns = [
      ["E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["bs", "Z", "X", "B", "N", "M", "enter"],
    ],
    Le = !!navigator.vibrate,
    ds =
      [
        "ipad simulator",
        "iphone simulator",
        "ipod simulator",
        "ipad",
        "iphone",
        "ipod",
      ].indexOf(navigator.platform.toLowerCase()) >= 0 ||
      (navigator.userAgent.toLowerCase().includes("mac") &&
        "ontouchend" in document),
    qe = "standalone" in window.navigator && window.navigator.standalone === !0;
  /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
  window.matchMedia("(display-mode: standalone)").matches;
  const us =
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({ text: "test share text" }),
    cs =
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({
        text: "test share text",
        files: [new File([new Blob()], "test.png", { type: "image/png" })],
      }),
    ms = ["gypsy", "gipsy", "mammy", "agora", "slave", "hussy"],
    ce = new Set(ms),
    Y =
      "abade astro bulda amona bagoi barau arasa anana behar akura emari ateri bainu bidoi alper bideo eremu bedel berna akaro belus bekar babes jaitu azido ozono belus likin eztul orban misil malko traza iskin orein lizeo galdu saldu esegi ihesi jatsi tapir sabel terma tiuta xango balin zingo argon biola anioi balbe altze beato eduki edari aurki elite balio adaki dieta bulta debut tempo dorre amama botin brida moila bilur astar bizio doinu polka mosen panpa negel pikoi mutin pitxo poker erres hiato akula jario irten ixuri abonu abeze arbin ahotz flota senar kutxa jeans motor lakio poema kostu leinu etika radio letra diese kultu larri glosa palko ganba legio asiar belar beste ohiko astun busti egosi gaitz landu kappa lorio faila pizza xaboi ipuin kaska inude olana peril xatar trago jenio herri gorri pasta gidoi falta presa ezker ontza pazia zinta ezkur lipar gerla txoko tentu tapiz kutun mando edale ezain lantu sujet hauts deiki erion ezkel fosil geldi izate limoi ilara korta kapot gopor kredo zisku karda hazka lauko solas ostia poeta beltz kaiku torio zarba zeden goren kloro lehia heren masta haste kotxe ideal ozpin gripe tapoi mukur samin hanka lerro txano radar klase iztai purga zemai eztei zotal sarde pasio sokil portu proba zerra erasi izeki joera milia zilio karen zedro feria leiar pilda legen malur hiena exodo muger usain taloi zuntz zurda karpa lasta pusla menpe troka ezpal txalo pipil sekta xarma kolon zetro obulu lonja inozo laiko laket malet maori fauno gutar horda horni humus hunki motel nabar patar akets butoi zibil tenis noble salto freno makar josle kodex kolko malta ukitu zintz mauka landu okitu mindu gurin malba sator ilaje kakao lotsa muzin greko zazpi miope ortoz sakro satsu tente uxter senil kuxin jauzi barne ginga margo pasmo minus narda gaita potin kaoba zatar modem ubera sifoi mahai heldu baina ordea koito fisio harpa espal kobra mafia momia beraz truko behin erosi anega zakil guzti jakin bizar badia abisu aneka eresi eredu azote arima axola garbi gaixo jator lugin eritu gautu hantu usatu zurtu nasai opaku puber sotil sutsu gertu linja kontu pieza piper torax puntu koipe asetu umatu mania etsai oldar gerri ezetz parra hogei kameu huntz kaski galde tribu uzker plano gartu okatu ekain antze aiene erroi tesla erran enara balea azken botoi besta arpoi atiko afera azpil dogma baroi bokal koral azeri erako aditu lauki ozpin kurlo alfer aizto apain errio agure arran bando tailu bonba egoki urdin mando sakon urtsu bantu doble eskas ijito jende moral beltz jende idolo zirta mutxi zifra jaten kinto kinta kanon susmo berde aritu eraso aketz bafle ebaki album handi aratz bakun elkor bilau eskas legoa hurko lagin izain rodeo erran tornu okada eseri ageri erori abaro aneta mitin etnia polen mamut koala galoi linbo sugar plama premu zauri praka polea farol erraz eroso finko harjo hindu basur aroma atalo bable basta berro izaki lauso lupia obalo tasun fluor nausa zabor zango seilu iseka gider termo haril garai nongo gertu itzal makal molar xiita ximen yanki zahar zeken".split(
        " "
      ),
    Ie = new Set(Y),
    hs =
      "zimel apain zuhur erpin toles zelai zikin bemol jakin bigun dorpe eusle ezkor orkoi larre ipotx hegal tango fauna muker tifus marra sepia junta luizi sauna istil karta irain leize paldo ileon janba juzgu kayak kraba lanpo lezka loeri lokia lutxo deitu eratu ahitu izutu lautu patar opalo suite pizar salmo tanda goren olatu ezbai punpa paseo fagot korda panda zuzen beita duelu bujia ameba bingo akuri atzen eliza makur serie lozio hanpa hozki txota ponte txiri gesal parke mizto karel globo kable plomu putre tekla zesta lerde onura meloi piano sorki traje gizon posta malgu kikil kokin leial mehar jaspe igali tanta itaun txapa listu lirio satai txufa zeroi abere aiher datil alfil aieru atari azeri enema fular hatxe zarta trufa zokor ezpel langa klabe krisi finka lehor llama gramo lapur festa toles kosta txita galgo orube menda pertz papar barna kraka rally karga laser ikatz gezur gihar tinko barne totel txiro zelta foral goiti mortu bokal makur muino sagar takoi kerru etapa itzal habia pauso ilaun garro hobby iraka tindu kasko nibel zerri kulpa ilion ilupa izpil kaina lamia mambo marga maior haran talka murru landa munta santa plegu preso zikin tarro aizak atera hustu jarri sartu poztu irail lauki hozte mokor kobre kirol zigor fruta linea hezur libra oreka mural kaier okela plato noria zakil zakur samin edota afari banku eltze bloke buila alaka santu klero kromo mundu lauza fitxa gibel maisu koral zilar jipoi ijito lizun pozoi gorte falka pikor loria aitor agiri diban esale benta aurka borta bular gustu sigla paper kanal grapa grano flexo jotze sabai magia trapu nabar mitre nafta numen palio palma paria penis pezoi pleka rabbi garba etimo friso guano helde imina filum sigma txelo stand sunda tarot traol tropo usaia zirga atzen tulio zesio asaba delta dutxa braza doble bidet ahate blusa barru julis karpo karst kirio kobru kosko kroka leotz malar marro ahoko arren ageri aldra buxon errai zizta kantu kinka donge gauza molde kizki drama buket azaro bulba ekipo bartz adore anodo adats betoi arbel ohitu urdai guata lortu aizan piztu oratu puztu izotz orain aorta egile errei epika arroz aztal burla betun anbar dunba bortu beira dolar broma ahots barra bromo ahari ditxo arreo akain osotu nikel garai koska tropa haltz super felpa pausa salba mitra morse mozal murko okapi patin plebe prima puies osmio tenor ostra esker puska negar xerra zidor baita runba keinu saldo hagun txopa sugai bidun ultra urtar nafar zerio ohatu hunki kendu idoki jauki enbor zaldi froga asiar aditu isuri oskol uraza kedar maite uhate tinta karlo papur buloi dandy bolea bornu burgu iraun isuri hetsi erein jausi irazi ipini goitu keatu ulitu hindi gales joule itrio fakir fuste himen jorra kausa sakan izeko liken zisne tanke kardu forru zirku fusil osoko zakar azkar okitu airos ikasi agudo anuro argal bakar biluz ariar boski demas agata bantu audio ainar berno erail hausi jalgi jarki irasi eraso errun abatz artxo axila adobo artza alelo amelu arkel sanba konde umore gantz lider nazio istmo kotoi zamau forma logia mirto okume olata pisto edema ataza baldo bamba endai balde talio xenon pulpa tosta turbo zalke apeta dardo bilbe abata afixa eltxo fermu hazle onddo leria makal izeba ferry sendi uhuri gizen prosa zirto feudo morbo zerba garau oliba zatar etzan ilaun ustel manex misto pello bakan bipil atono bikun ekido akabu biska auhen brasa arnes asilo akats borda droga apatx ahutz mozio plaza kanta zorri semen zerga saroi laute nozio morru masoi pitoi robot ikono hurko gazte maite jabal lokal maior gorri kurdu polar aulki hordi sumin babil anaia banda aiuta bonet adobe aburu bazar azoka ospel kaixo zimur patio potro zamar lurpe ikusi agitu hoztu ematu leitu laztu ufatu koroa kalte izara txiki goiti misio holtz fideo ments truke kulot putzu mentu trazu fusio zanga maila zebra kargu lizar isats funts kasta xanpu zenit ontzi zorte atlas pinta axuri andre pazko punta zurtz ziztu zotin lehoi gurtu akitu ukatu biztu ziklo kapoi oihal hautu tanto sable garun serum islam sudur etiko hippy inuit izuti kario izadi hagin narra panel txeke jolas moxal tanga danga porro osaba tifoi gerra ninfa motel mahoi ninbo onize ospil otadi pasha umotu izetu lagun lerdo otzan pipor rodio sabot pausu piura psike ratio sport tiket tongo unama kurba lesio opera moral plaka ufako orgia tripa hamar kailu oilar zezen sukar ideia gradu zeren tilet mairu ibili erotu miatu zeinu apatu oritu zendu apote diana abitu aurre belar draga egosi ebagi eregi ideki jaiki jeiki gorde imini ikutu umetu gortu beitu unatu lurtu fluxu mintz kinke manta marka latin mango ziape traba gaitz sasoi soinu oxido gandu kaizu nylon talko ugatz zekor toska kolpe fardo gazur ohoin tronu zorro zakur mendi makar artez jakin lakar largo kainu ipitz irelu klask krepe kulmo kuter laudo liana lezio amitu ibitu bildu eseki jalki zoldu omega molar oritz petxa plexu pibot erion erain ebili perla ireki heste gailu ipuru kupoi kalko final biter borax borne boxer deixi ezune farad fotoi geldo harro galga orbel maina porru klima fobia indar gihar salda ustel tolet totem txara tximu zesar radon abere zapal suhar tonto suabe tipil urkor galai bista barri horma triku jerez flora harri urdin ganga tratu opari berri pista larru joare subil ortzi ubula legar mailu zisma txera sorta uztai zendu urdun bario urten apuko alibi barbo batza gontz zezin motel sakon gazte tigre ultra baino aldiz hartu duntu panti urrun andui birla brusa ahetz batel azkon larri muger muker lehor tarro zerri erkin agian itzel ketsu mazal mizke modal mulko lahar kapar round santu klixe tarte hizki ubide gosna gurbe hazta katar kirri klake indio helio gamma pedal hozka nazka fisko ikara labar troxa zorne golko xafla pubis saski ferra hortz birao akara argot budin hodei ohore linfa harpe herio seiko femur talde litio setio zelai kopia marea foral epoxi fenix gerba gnomo gubia gurma hazil galio hertz epiko flako gelge bioma angio aspis aurri bibak dalia diodo duple areka disko baloi altzo abusu draia edabe ahuku berga zezel zabar serio total txoro uriko zindo heldu egoki erori kutun arrai seiko light doako turko komun kopla golde urlia gorpu izari udare marru barri herra kanoa gorro hoben kanoi berri minor lasai justu nekez maker nasal obatu penal behor leiho galda lista sarda egite amore lasto letoi ziega pitar parte hezle gastu gernu metxa urrun gaitu aletu osatu moztu sortu doitu zertu uxatu opatu barre dukat burko lapur bitxi txiki narra lizun banjo donge jatun ataka ikasi antzu anker galai laido esate teila tamal gurdi marko kiste metro txori isipu litro trapa progu laino korde zumar mirra zurra grina mortu histu arotu boztu himno hotel metal zakar ezkai komun kezka kuria zizpa gutun irudi iloba lehen haitz zunda udara tenia haize zizka izter edota barik biela abegi adaje andel berme ebano boxeo atomo bitxi barna sendo pobre uzkur pinto polit saxoi tamil trial ugari xuhur zital ametz borra alaba ehule beata aditz arotz aisia muzin abako amets berba denda delko akzio banbu jauzi kosta ikuzi irato jagon idoro agabe birus berun arroa bisoi bazka beila aihen dopin arazo areto bufoi borla apaiz drupa erori dinar erbio ezgai ergel fidel esnob hauta kusku uhaga kinki tibia gazta bemol ponpa neska umeki zirri muxar kurio magma irris junko kopau latex lobby samur legal agian zuzen irule onena lokal pegar utero greba zizel urrin flema malda telex harea sumin txima ezten pitin karei untxi zarpa txiza kuota iltze kemen klera pixka haxix mantu hontz xarpa zirin sufre aizun akutu busti hertu findu edeki eutsi renio silex taiga zigar zonbi ireki bitar apatz ospel lauko arnes menia pairu pauma perka prisa museo xixku testu zolda kutsu erpin postu kanpo jatun kofia estra taket larba tarta blues busto bardo barku bilis denge sodio mende mutil taula jabal forja oihan nakar hondo yarda urtze satin jeinu magal sesio tunel heroi krema mutur hosto lerma hartz flash mordo lakre malar berri fardo handi sukoi pitin estra berde ageri zimur bitxi ondra zorna filma ahitu aloka aratz adela belar boxea dilui ebita antza borda geldo baina kutsa senda izutu txiki traba porta jipoi ohora lerro golda kiras zurtu deitu eratu harri garbi irudi aitor ausar froga pausa tinka larru lautu gautu hantu usatu talka abere bisus desea txuka dakit jakik jakin abona jelos hosta itzal indus apeta aztia garba hilko hezur heure kutsu lakra murru dakik dakin kausa dutxa dikta plega antzu apala kanpa tinko zeure adika zerra emiti jasta ustia zafra zakar argal bakan azken zezel urrun ataka preza malgu klona sarri landu okitu txora adora eritu umatu zaude zatar zafla ostea kosta landa osten sinis zanpa ebatz erosi gaude igoko artez xarma hanpa itzar opera aldez hozka xerka aritu lerra margo txalo anima erraz galda gogor otuko otzea otzen okupa zapuz fosil ximen asetu narda hordi mutur beude dagon daude hagon nagon oraka sanea apain zikin pilda bidal sakon zapal zunda agure aiher solda amata bakar kopia oreka treba zarta trufa zuhur azota berba inora lista zurra izeki narra apela zurga txita erasi estal nahas onets beren bipil gosal hoben makal totel uzkal makur libra barka esker leher bihar hauta kausi molda poztu sines indar lotsa akaba araka ezaba munta susta sendo gorri mutil bakun guren airos biluz gogoa gazte limur edade atera hustu jarri sartu tente lauso horni katea pasea beltz kakaz eskia hizka larga migra monta berde eseri ageri erori itzul konta biluz ezets salba autor deslo gartu horra okatu junta pinta puska xurga zimur izotz perma arras dosta alden lagun plaka sagai seila txika eleka jende dobla kamus zarra oxida hotzi malda zapla diegu diete diezu dinat higun ninan nizun zidan zigun zinan zizun zimel azpil eraen lizun urdin festa bilba juzka keina zelai grina merke hisia irisa muila bahie bahio bahit balie balik balit diagu diogu diote diozu hidan diate ditun zaitu zuten diguk digun hieke hioke liake lieke lioke niake nieke nioke didak didan dizue dizut banie banik banin banio dituk ditut duzue haugu haute naute nauzu gaitu inaus irits soros erail hausi jarki irasi errun eraso alfer friji trahi eskas funda herts tenka marra latsa lasta ulitu santu punpa paria zabar torra zehar ixtea ixten haika jitea jingo jiten arrun kalka karia goitu biztu klika akitu grapa galta keatu kista berre baldi kanti ferra forja forra gandu ohatu sista sakea txupa arren atzen itaun ezkon jabal zauri azter berri elkar gerta ikusi senti ukatu gurtu gesal kemen bidal herts ebats hetsi jausi jaits irets jalgi hazka droga sasta ponpa oilar hunki idoki jauki iduri oldar ahora iraun erein irazi isuri ipini ohitu lortu piztu oratu puztu osotu haril gaixo garan labur lokar geure kendu ehoko inozo dorpe langa ardai ezgai zorpe muker mutxi ments urase etsai larra abusa ekoiz ordez aiena josta sofri hunki nahas sendi abisa harro kudea maita zenba marka berda eihar suhar exigi galka oldoz ikatz gihar kezta tonto kobra opari elika gasta susma proba toles axola bezti bulka lauda orraz setia tinda nazka zital muzin beran osten abail zabal ustel gatoz hator dator nator zatoz ekura elaka iltza kalte betor betoz datoz egosi gorde imini urten ematu leitu laztu ufatu umotu ibili agitu erotu hoztu miatu ahatz doake hoake badoa bahoa noake presa barna banoa bihoa oritu ebagi eregi ideki jaiki jeiki zendu burla laido pobre tradi bebil habil balia gusta finka asper gutxi lasai konda zigor agudo arrai minar beila anker izetu kopla dabil apatu edita galga torea tatua bular zerga anula herra xigor karda negar murri nabil estal trika zipla zuzen adaba eraus bitez dadin hadin ledin nadin zedin gizon ozpin bigun otzan banan kokil banda taila draga ikasi pozoi tenta ehiza kurba mamur jauts uspel urren zezen hazan hezan itzak itzan lezan nazak nazan nezan zezan bitza dezan ezazu larri zahar lehor azkar jolas gogai beuka eukak eukan dauka hauka nauka amitu bildu ibitu zoldu altxa bihur paira ikutu gortu umetu unatu hartu duntu erion ebili beitu lurtu fitxa garai basta altza benda xifri troxa alega zozka iseka purga flaka forni manea solei zakur hazta arnas dasta haiza imita uzkur loria eseki jalki erain gaitz astun samin urrin ernal bloka itsus samar zeina menta esets oihan kario gotor jaria koroa kargu horma laino andea broda apaiz motel kikil sumin xaboi tarte bazka ezetz bista eslei juzga korda ahoka ekipa koska dakar ekark hakar nakar histu gaitu aletu osatu moztu sortu doitu zertu uxatu opatu kosta idoro hertu findu arotu boztu glosa papur denda bibra ilaun jabel jauzi busti edeki eutsi ikuzi irato jagon hodei fuera greka txiro azala afina sukar beraz nabar menpe butxa oinka parka priba itsas karga atera goiti adore kurri obedi parti irain sorka uzten uztea lapur gauza jorra ugari kezka bozka honda sufri uztar zizta anitz gosta samur alaba ginen itoko beira desta isola sobra hagin ezpal goren usain askal ergel esnal goral zutun ziren zinen mehar flipa traga aboli ohera ikara kolpa truka \xf1andu baira fundi salta plaza zinez espia zerbi zaigu zaizu onera ameti".split(
        " "
      ),
    Ee = new Set(hs),
    I = (e, s, t) => {
      window.gtag && gtag(e, s, t);
    },
    $ = (e) => {
      Le && e && navigator.vibrate(1);
    },
    gs = (e, s) => {
      if ("RelativeTimeFormat" in Intl) {
        const i = new Intl.RelativeTimeFormat("eu", { numeric: "auto" }),
          n = s.valueOf() - e.valueOf();
        for (const o in te) {
          const c = o;
          if (Math.abs(n) > te[c] || o === "segundo")
            return i.format(Math.round(n / te[c]), c);
        }
        return `${n} ms`;
      }
      const t = s.getTime() - e.getTime();
      let l = Math.floor(t / te.hour);
      return l > 1
        ? l + " ordu barru"
        : ((l = Math.floor(t / te.minute)),
          l > 1
            ? l + " minutu barru"
            : Math.floor(t / te.second) + " segundo barru");
    },
    Oe = (e, s) => {
      const t = s.split(""),
        l = e.split(""),
        i = new Array(J).fill("none"),
        n = {};
      for (let o = 0; o < J; o++) n[l[o]] = 0;
      for (let o = 0; o < J; o++)
        t[o] === l[o] &&
          ((t[o] = " "), (n[l[o]] = 2), (l[o] = " "), (i[o] = "correct"));
      for (let o = 0; o < J; o++)
        t.indexOf(l[o]) !== -1 &&
          t[o] !== l[o] &&
          l[o] !== " " &&
          (n[l[o]] != 2 && (n[l[o]] = 1),
          (t[t.indexOf(l[o])] = " "),
          (i[o] = "diff"));
      return i;
    },
    pe = (e, s) => {
      const t = [[], [], [], []];
      for (let l = 0; l < s.length; l++) {
        const i = e.indexOf(s[l]);
        for (let n = 0; n < e.length; n++)
          (n <= i || i === -1) && t[l].push(Oe(e[n], s[l]));
      }
      return t;
    },
    ne = (e) => {
      let s;
      const t = new Ke(e);
      t.random_int31(), t.random_int31(), t.random_int31(), t.random_int31();
      do
        s = [
          Y[t.random_int31() % Y.length],
          Y[t.random_int31() % Y.length],
          Y[t.random_int31() % Y.length],
          Y[t.random_int31() % Y.length],
        ];
      while (
        s[0] === s[1] ||
        s[0] === s[2] ||
        s[0] === s[3] ||
        s[1] === s[2] ||
        s[1] === s[3] ||
        s[2] === s[3] ||
        ce.has(s[0]) ||
        ce.has(s[1]) ||
        ce.has(s[2]) ||
        ce.has(s[3])
      );
      return s;
    };
  function ys() {
    const e = new Date(),
      s = ((e.getTime() - ze.getTime()) / _e) >> 0,
      t = {
        daily: {
          seed: 0,
          guesses: [],
          answers: [],
          current: "",
          states: [[], [], [], []],
          answersCorrect: [-1, -1, -1, -1],
          history: new Array(S + 4).fill(0),
          currentStreak: 0,
          maxStreak: 0,
        },
        free: {
          seed: 0,
          guesses: [],
          answers: [],
          current: "",
          states: [[], [], [], []],
          answersCorrect: [-1, -1, -1, -1],
          history: new Array(S + 4).fill(0),
          currentStreak: 0,
          maxStreak: 0,
        },
        darkMode: !0,
        colorblind: !1,
        vibration: !0,
        enterBsReversed: !1,
      },
      l = window.matchMedia("(prefers-color-scheme: dark)").matches;
    try {
      const o = window.localStorage.getItem("dark_mode");
      o === null ? (t.darkMode = l) : (t.darkMode = o === "true");
    } catch (o) {
      t.darkMode = l;
    }
    try {
      const o = window.localStorage.getItem("colorblind");
      o === null ? (t.colorblind = !1) : (t.colorblind = o === "true");
    } catch (o) {
      t.colorblind = !1;
    }
    try {
      const o = window.localStorage.getItem("vibration");
      o === null ? (t.vibration = !0) : (t.vibration = o === "true");
    } catch (o) {
      t.vibration = !0;
    }
    try {
      const o = window.localStorage.getItem("enter_bs_reversed");
      o === null
        ? (t.enterBsReversed = !1)
        : (t.enterBsReversed = o === "true");
    } catch (o) {
      t.enterBsReversed = !1;
    }
    ["daily", "free"].forEach((o) => {
      let c;
      try {
        const a = Number(window.localStorage.getItem("last_" + o)),
          r = window.localStorage.getItem(o + "_guesses") || "",
          d = window.localStorage.getItem(o + "_history"),
          m = d ? d.split(",").map(Number) : new Array(S + 4).fill(0),
          g = Number(window.localStorage.getItem(o + "_current_streak") || 0),
          b = Number(window.localStorage.getItem(o + "_max_streak") || 0);
        if (a && (o === "free" || a === s)) {
          const y = r ? r.split(",") : [],
            k = ne(a);
          (c = {
            seed: a,
            guesses: y,
            answers: k,
            current: "",
            states: pe(y, k),
            answersCorrect: [0, 1, 2, 3].map((C) => y.indexOf(k[C])),
            history: m,
            currentStreak: g,
            maxStreak: b,
          }),
            I("event", "restore", {
              mode: o,
              daily_seed: o === "daily" ? a : void 0,
            });
        } else {
          const y = o === "daily" ? s : e.getTime(),
            k = ne(y);
          (c = {
            seed: y,
            guesses: [],
            answers: k,
            current: "",
            states: pe([], k),
            answersCorrect: [-1, -1, -1, -1],
            history: m,
            currentStreak: g,
            maxStreak: b,
          }),
            I("event", "start", {
              mode: o,
              daily_seed: o === "daily" ? y : void 0,
            });
        }
      } catch (a) {
        const r = o === "daily" ? s : e.getTime(),
          d = ne(r);
        (c = {
          seed: r,
          guesses: [],
          answers: d,
          current: "",
          states: pe([], d),
          answersCorrect: [-1, -1, -1, -1],
          history: new Array(S + 4).fill(0),
          currentStreak: 0,
          maxStreak: 0,
        }),
          I("event", "start", {
            mode: o,
            daily_seed: o === "daily" ? r : void 0,
          });
      }
      t[o] = c;
    });
    const [i, n] = Ve(t);
    return (
      we(() => {
        try {
          window.localStorage.setItem("dark_mode", String(i.darkMode)),
            window.localStorage.setItem("colorblind", String(i.colorblind)),
            window.localStorage.setItem("vibration", String(i.vibration)),
            window.localStorage.setItem(
              "enter_bs_reversed",
              String(i.enterBsReversed)
            ),
            ["daily", "free"].forEach((o) => {
              window.localStorage.setItem("last_" + o, String(i[o].seed)),
                window.localStorage.setItem(
                  o + "_guesses",
                  i[o].guesses.join(",")
                ),
                window.localStorage.setItem(
                  o + "_history",
                  i[o].history.join(",")
                ),
                window.localStorage.setItem(
                  o + "_current_streak",
                  String(i[o].currentStreak)
                ),
                window.localStorage.setItem(
                  o + "_max_streak",
                  String(i[o].maxStreak)
                );
            });
        } catch (o) {}
      }),
      [i, n]
    );
  }
  const $e = Qe(),
    bs = (e) => {
      const [s, t] = ys(),
        l = (a) =>
          s[a].guesses.length === S ||
          s[a].answers.filter((r) => s[a].guesses.indexOf(r) >= 0).length === 4,
        i = (a, r) => {
          t(
            K((d) => {
              d[a].current.length < 5 && !l(a) && (d[a].current += r);
            })
          );
        },
        n = (a) => {
          t(
            K((r) => {
              r[a].current.length > 0 &&
                !l(a) &&
                (r[a].current = r[a].current.slice(0, -1));
            })
          );
        },
        o = (a) => {
          t(
            K((r) => {
              if (
                r[a].current.length === 5 &&
                (Ie.has(r[a].current) || Ee.has(r[a].current)) &&
                !l(a)
              ) {
                const d = r[a].current;
                r[a].guesses.push(d), (r[a].current = "");
                for (let m = 0; m < X; m++) {
                  const g = r[a].guesses.indexOf(r[a].answers[m]);
                  (g === -1 || g === r[a].guesses.length - 1) &&
                    r[a].states[m].push(Oe(d, r[a].answers[m])),
                    (r[a].answersCorrect[m] = r[a].guesses.indexOf(
                      r[a].answers[m]
                    ));
                }
                if (
                  (I("event", "guess", {
                    mode: a,
                    daily_seed: a === "daily" ? r[a].seed : void 0,
                    word: d,
                  }),
                  l(a))
                ) {
                  const m = r[a].answersCorrect.reduce(
                    (g, b) => (g += b >= 0 ? 1 : 0),
                    0
                  );
                  if (m === 4) {
                    const g = Math.max(...r[a].answersCorrect);
                    r[a].history[g]++,
                      r[a].currentStreak++,
                      r[a].currentStreak > r[a].maxStreak &&
                        (r[a].maxStreak = r[a].currentStreak),
                      I("event", "win", {
                        mode: a,
                        daily_seed: a === "daily" ? r[a].seed : void 0,
                        guesses: r[a].guesses,
                        num_guesses: g + 1,
                      });
                  } else
                    r[a].history[S + m]++,
                      r[a].currentStreak > 0 &&
                        I("event", "streak_reset", {
                          mode: a,
                          daily_seed: a === "daily" ? r[a].seed : void 0,
                          current_streak: r[a].currentStreak,
                          max_streak: r[a].maxStreak,
                        }),
                      (r[a].currentStreak = 0),
                      I("event", "loss", {
                        mode: a,
                        daily_seed: a === "daily" ? r[a].seed : void 0,
                        guesses: r[a].guesses,
                        total_correct: m,
                      });
                }
              } else r[a].current = "";
            })
          );
        },
        c = [
          s,
          {
            setDarkMode(a) {
              t(
                K((r) => {
                  r.darkMode = a;
                })
              );
            },
            setColorblind(a) {
              t(
                K((r) => {
                  r.colorblind = a;
                })
              );
            },
            setVibration(a) {
              t(
                K((r) => {
                  r.vibration = a;
                })
              );
            },
            setEnterBsReversed(a) {
              t(
                K((r) => {
                  r.enterBsReversed = a;
                })
              );
            },
            sendKey(a, r) {
              if (!r.ctrlKey)
                if (r.key === "Backspace") n(a);
                else if (r.key === "Enter") o(a);
                else {
                  const d = r.key.toLocaleLowerCase();
                  if (Ne.indexOf(d) == -1) return;
                  i(a, d);
                }
            },
            isGameComplete: l,
            addLetter: i,
            deleteLetter: n,
            submitCurrent: o,
            resetDailyIfOld() {
              const r = ((new Date().getTime() - ze.getTime()) / _e) >> 0;
              r !== s.daily.seed &&
                t(
                  K((d) => {
                    (d.daily.seed = r),
                      (d.daily.guesses = []),
                      (d.daily.answers = ne(r)),
                      (d.daily.current = ""),
                      (d.daily.states = [[], [], [], []]),
                      (d.daily.answersCorrect = [-1, -1, -1, -1]);
                  })
                );
            },
            resetFree() {
              const a = new Date().getTime();
              t(
                K((r) => {
                  if (!l("free")) {
                    const d = r.free.answersCorrect.reduce(
                      (m, g) => (m += g >= 0 ? 1 : 0),
                      0
                    );
                    r.free.history[S + d]++,
                      r.free.currentStreak > 0 &&
                        I("event", "streak_reset", {
                          mode: "free",
                          daily_seed: void 0,
                          current_streak: r.free.currentStreak,
                          max_streak: r.free.maxStreak,
                        }),
                      (r.free.currentStreak = 0),
                      I("event", "loss", {
                        mode: "free",
                        daily_seed: void 0,
                        guesses: r.free.guesses,
                        total_correct: d,
                      }),
                      I("event", "reset", {
                        mode: "free",
                        daily_seed: void 0,
                        guesses: r.free.guesses,
                        total_correct: d,
                      });
                  }
                  (r.free.seed = a),
                    (r.free.guesses = []),
                    (r.free.answers = ne(a)),
                    (r.free.current = ""),
                    (r.free.states = [[], [], [], []]),
                    (r.free.answersCorrect = [-1, -1, -1, -1]);
                })
              );
            },
          },
        ];
      return (
        setInterval(() => {
          c[1].resetDailyIfOld();
        }, 1e3),
        h($e.Provider, {
          value: c,
          get children() {
            return e.children;
          },
        })
      );
    },
    V = () => {
      const e = Re($e);
      if (!e || !e.length)
        throw new Error("GamesDataContext has been used outside provider");
      return e;
    },
    ps = p(
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24px" height="24px"><rect x="0" y="0" width="12" height="12" fill="#919191"></rect><rect x="12" y="0" width="12" height="12"></rect><rect x="0" y="12" width="12" height="12"></rect><rect x="12" y="12" width="12" height="12"></rect></svg>'
    ),
    ks = p(
      '<svg xmlns="http://www.w3.org/2000/svg" height="50%" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"></path></svg>'
    ),
    fs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" height="50%" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>'
    ),
    ws =
      p(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor"><g><path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"></path></g></svg>`),
    vs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>'
    ),
    xs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path></svg>'
    ),
    zs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"></path></svg>'
    ),
    _s = p(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>'
    ),
    $s = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    ),
    js = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>'
    ),
    Cs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'
    ),
    Ss = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>'
    ),
    qs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M124 7408.71c0-8.08 10.32-13.186 16.916-6.892 3.532 3.36 4.143 8.902 1.248 12.951-3.591 4.92-8.282 4.193-12.76 4.193v-9.588c.041-2.117.747-3.943 3.324-4.816 2.245-.664 4.863.581 5.653 2.947.832 2.533-.374 4.234-1.787 5.272-1.413 1.039-3.616 1.039-5.07.042v3.279c3.138 1.5 8.105-.303 9.684-4.4 1.08-2.864.332-6.185-1.912-8.26-2.701-2.2-5.653-2.74-8.811-1.204-2.204 1.12-3.741 3.404-4.116 5.894v10.834h-2.327L124 7408.71z" transform="translate(-124 -7399)"></path></svg>'
    ),
    Ms = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>'
    ),
    Bs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" class="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="currentColor"><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M16,5l-1.42,1.42l-1.59-1.59V16h-1.98V4.83L9.42,6.42L8,5l4-4L16,5z M20,10v11c0,1.1-0.9,2-2,2H6c-1.11,0-2-0.9-2-2V10 c0-1.11,0.89-2,2-2h3v2H6v11h12V10h-3V8h3C19.1,8,20,8.89,20,10z"></path></g></svg>'
    ),
    As = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>'
    ),
    Rs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>'
    ),
    Ts = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>'
    ),
    Ns = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>'
    ),
    Ls = (e) =>
      (() => {
        const s = ps.cloneNode(!0),
          t = s.firstChild,
          l = t.nextSibling,
          i = l.nextSibling,
          n = i.nextSibling;
        return (
          de(s, e, !0, !0),
          q(
            (o) => {
              const c = e.colorblind ? "#fb923c" : "#00cc88",
                a = e.colorblind ? "#fb923c" : "#00cc88",
                r = e.colorblind ? "#60a5fa" : "#ffcc00";
              return (
                c !== o._v$ && E(l, "fill", (o._v$ = c)),
                a !== o._v$2 && E(i, "fill", (o._v$2 = a)),
                r !== o._v$3 && E(n, "fill", (o._v$3 = r)),
                o
              );
            },
            { _v$: void 0, _v$2: void 0, _v$3: void 0 }
          ),
          s
        );
      })(),
    Is = (e) => ks.cloneNode(!0),
    Es = (e) => fs.cloneNode(!0),
    De = (e) =>
      (() => {
        const s = ws.cloneNode(!0);
        return q(() => E(s, "height", (e.height ? e.height : 16) + "px")), s;
      })(),
    Os = (e) =>
      (() => {
        const s = vs.cloneNode(!0);
        return (
          q(
            (t) => {
              const l = (e.height ? e.height : 24) + "px",
                i = (e.height ? e.height : 24) + "px";
              return (
                l !== t._v$4 && E(s, "height", (t._v$4 = l)),
                i !== t._v$5 && E(s, "width", (t._v$5 = i)),
                t
              );
            },
            { _v$4: void 0, _v$5: void 0 }
          ),
          s
        );
      })(),
    Ds = (e) =>
      (() => {
        const s = xs.cloneNode(!0);
        return (
          q(
            (t) => {
              const l = (e.height ? e.height : 24) + "px",
                i = (e.height ? e.height : 24) + "px";
              return (
                l !== t._v$6 && E(s, "height", (t._v$6 = l)),
                i !== t._v$7 && E(s, "width", (t._v$7 = i)),
                t
              );
            },
            { _v$6: void 0, _v$7: void 0 }
          ),
          s
        );
      })(),
    Gs = (e) =>
      (() => {
        const s = zs.cloneNode(!0);
        return (
          q(
            (t) => {
              const l = (e.height ? e.height : 24) + "px",
                i = (e.height ? e.height : 24) + "px";
              return (
                l !== t._v$8 && E(s, "height", (t._v$8 = l)),
                i !== t._v$9 && E(s, "width", (t._v$9 = i)),
                t
              );
            },
            { _v$8: void 0, _v$9: void 0 }
          ),
          s
        );
      })(),
    Ps = (e) =>
      (() => {
        const s = _s.cloneNode(!0);
        return (
          q(
            (t) => {
              const l = (e.height ? e.height : 24) + "px",
                i = (e.height ? e.height : 24) + "px";
              return (
                l !== t._v$10 && E(s, "height", (t._v$10 = l)),
                i !== t._v$11 && E(s, "width", (t._v$11 = i)),
                t
              );
            },
            { _v$10: void 0, _v$11: void 0 }
          ),
          s
        );
      })(),
    Fs = () => $s.cloneNode(!0),
    Ws = (e) =>
      (() => {
        const s = js.cloneNode(!0);
        return de(s, e, !0, !0), s;
      })(),
    Hs = (e) =>
      (() => {
        const s = Cs.cloneNode(!0);
        return de(s, e, !0, !0), s;
      })(),
    Us = (e) =>
      (() => {
        const s = Ss.cloneNode(!0);
        return de(s, e, !0, !0), s;
      })(),
    Vs = (e) =>
      (() => {
        const s = qs.cloneNode(!0);
        return de(s, e, !0, !0), s;
      })(),
    Qs = () => Ms.cloneNode(!0),
    Ks = () => Bs.cloneNode(!0),
    Ys = () => As.cloneNode(!0),
    Me = () => Rs.cloneNode(!0),
    Xs = () => Ts.cloneNode(!0),
    Js = () => Ns.cloneNode(!0),
    Zs = p('<button type="button"></button>'),
    ea = p(
      '<div class="p-4 rounded-b-lg text-center bg-gray-300 dark:bg-gray-900 border-b-2 border-white dark:border-gray-800"><div class="text-4xl pb-2"></div></div>'
    ),
    sa = p(
      '<div class="flex items-center justify-center"><div class="ml-2">Praktikako joku berria</div></div>'
    ),
    aa = p("<div>Hurrengo egunerokoa </div>"),
    ra = (e) =>
      (() => {
        const s = Zs.cloneNode(!0);
        return (
          se(s, "click", e.onClick, !0),
          u(s, () => e.children),
          q(
            () =>
              (s.className = `text-lg min-h-[50px] text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 text-center dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:border-gray-800 dark:focus:ring-gray-900 ${e.class}`)
          ),
          s
        );
      })(),
    ta = (e) => {
      const [s, t] = V(),
        l = _(() =>
          s[e.mode].answersCorrect.reduce((a, r) => (a += r >= 0 ? 1 : 0), 0)
        ),
        i = _(() => new Date(ze.getTime() + (s[e.mode].seed + 1) * _e)),
        [n, o] = ee(new Date()),
        c = setInterval(() => o(new Date()), 1e3);
      return (
        ve(() => clearInterval(c)),
        (() => {
          const a = ea.cloneNode(!0),
            r = a.firstChild;
          return (
            u(
              r,
              (() => {
                const d = U(() => l() === 4, !0);
                return () =>
                  d()
                    ? "Zorionak!"
                    : l() === 3
                    ? "Ia-ia!"
                    : "Ea hurrengoan!";
              })()
            ),
            u(
              a,
              (() => {
                const d = U(() => e.mode === "free", !0);
                return () =>
                  d()
                    ? h(ra, {
                        onClick: () => {
                          $(s.vibration), t.resetFree();
                        },
                        get children() {
                          const m = sa.cloneNode(!0),
                            g = m.firstChild;
                          return u(m, h(Xs, {}), g), m;
                        },
                      })
                    : (() => {
                        const m = aa.cloneNode(!0);
                        return m.firstChild, u(m, () => gs(n(), i()), null), m;
                      })();
              })(),
              null
            ),
            q((d) =>
              P(
                r,
                {
                  "text-green-600 dark:text-green-500": l() === 4,
                  "text-amber-600 dark:text-amber-400": l() === 3,
                  "text-orange-600 dark:text-orange-500": l() === 2,
                  "text-rose-600": l() <= 1,
                },
                d
              )
            ),
            a
          );
        })()
      );
    };
  oe(["click"]);
  const G = (e) => {
      if (e < 0) return "\u{1F7E5}";
      if (e === 0) return "1\uFE0F\u20E3";
      if (e === 1) return "2\uFE0F\u20E3";
      if (e === 2) return "3\uFE0F\u20E3";
      if (e === 3) return "4\uFE0F\u20E3";
      if (e === 4) return "5\uFE0F\u20E3";
      if (e === 5) return "6\uFE0F\u20E3";
      if (e === 6) return "7\uFE0F\u20E3";
      if (e === 7) return "8\uFE0F\u20E3";
      if (e === 8) return "9\uFE0F\u20E3";
    },
    me = (e) => {
      let s = "";
      if (!e || e.length === 0) return "\u2B1B\u2B1B\u2B1B\u2B1B\u2B1B";
      for (let t = 0; t < e.length; t++)
        e[t] === "correct"
          ? (s += "\u{1F7E9}")
          : e[t] === "diff"
          ? (s += "\u{1F7E8}")
          : e[t] === "none" && (s += "\u2B1C");
      return s;
    },
    he = (e) =>
      e
        ? e === "correct"
          ? "#00cc88"
          : e === "diff"
          ? "#ffcc00"
          : e === "none"
          ? "#e0e0e0"
          : "#2d2d2d"
        : "#2d2d2d";
  function le(e, s, t, l, i, n) {
    const o = { tl: n, tr: n, br: n, bl: n };
    e.beginPath(),
      e.moveTo(s + o.tl, t),
      e.lineTo(s + l - o.tr, t),
      e.quadraticCurveTo(s + l, t, s + l, t + o.tr),
      e.lineTo(s + l, t + i - o.br),
      e.quadraticCurveTo(s + l, t + i, s + l - o.br, t + i),
      e.lineTo(s + o.bl, t + i),
      e.quadraticCurveTo(s, t + i, s, t + i - o.bl),
      e.lineTo(s, t + o.tl),
      e.quadraticCurveTo(s, t, s + o.tl, t),
      e.closePath(),
      e.fill();
  }
  const Ge = (e, s) => {
      let t = "";
      e === "daily"
        ? (t =
            s.seed.toString(10) + ". eguneko Quordlea" +
            
            `
` +
            G(s.answersCorrect[0]) +
            G(s.answersCorrect[1]) +
            `
` +
            G(s.answersCorrect[2]) +
            G(s.answersCorrect[3]))
        : (t =
            `Praktikatzeko Quordlea
` +
            G(s.answersCorrect[0]) +
            G(s.answersCorrect[1]) +
            (" " +
              s.answers[0].toUpperCase() +
              " - " +
              s.answers[1].toUpperCase()) +
            `
` +
            G(s.answersCorrect[2]) +
            G(s.answersCorrect[3]) +
            (" " +
              s.answers[2].toUpperCase() +
              " - " +
              s.answers[3].toUpperCase())),
        (t += `
quordle.eus`);
      const l = t;
      t += `
`;
      let i = S - 1;
      s.answersCorrect[0] >= 0 &&
        s.answersCorrect[1] >= 0 &&
        (i = Math.max(s.answersCorrect[0], s.answersCorrect[1]));
      let n = S - 1;
      s.answersCorrect[2] >= 0 &&
        s.answersCorrect[3] >= 0 &&
        (n = Math.max(s.answersCorrect[2], s.answersCorrect[3]));
      for (let o = 0; o <= i; o++)
        t +=
          me(s.states[0][o]) +
          " " +
          me(s.states[1][o]) +
          `
`;
      t += `
`;
      for (let o = 0; o <= n; o++)
        t +=
          me(s.states[2][o]) +
          " " +
          me(s.states[3][o]) +
          `
`;
      return [t, l];
    },
    ge = (e, s, t) =>
      Ce(We, null, function* () {
        const [l, i] = Ge(e, s);
        if (
          (I("event", "share", {
            mode: e,
            share_type: t,
            daily_seed: e === "daily" ? s.seed : void 0,
          }),
          t === "clipboard")
        )
          navigator.clipboard
            .writeText(l)
            .then(() => alert("Emaitzak arbelean kopiatu dira!"))
            .catch((n) => {
              console.error(n), alert("Ezin izan dira emaitzak arbelean kopiatu!");
            });
        else if (t === "share")
          navigator.share({ text: l }).catch((n) => console.error(n));
        else if (t === "image" || t === "image_save") {
          const n = document.createElement("canvas");
          n.style.display = "none";
          let o = S - 1;
          s.answersCorrect[0] >= 0 &&
            s.answersCorrect[1] >= 0 &&
            (o = Math.max(s.answersCorrect[0], s.answersCorrect[1]));
          let c = S - 1;
          s.answersCorrect[2] >= 0 &&
            s.answersCorrect[3] >= 0 &&
            (c = Math.max(s.answersCorrect[2], s.answersCorrect[3]));
          const a = 64,
            r = a / 16,
            d = a / 8,
            m = 0.75,
            g = a / 4;
          (n.width = (a + r) * 11 - r),
            (n.height = (a + r) * (o + 1 + c + 1 + 4) - r);
          const b = n.getContext("2d");
          if (!b) return;
          (b.fillStyle = "black"), b.fillRect(0, 0, n.width, n.height);
          let y = 0,
            k = 0;
          for (let v = 0; v <= o; v++) {
            let w = s.states[0][v];
            for (y = 0; y < J; y++)
              (b.fillStyle = he(w == null ? void 0 : w[y])),
                le(b, y * (a + r), k * (a + r), a, a, d);
            for (w = s.states[1][v], y = 6; y < J + 6; y++)
              (b.fillStyle = he(w == null ? void 0 : w[y - 6])),
                le(b, y * (a + r), k * (a + r), a, a, d);
            k++;
          }
          (b.font = a * m + "px Arial"),
            (b.textAlign = "center"),
            (b.textBaseline = "alphabetic"),
            (b.fillStyle = "#ffffff");
          const C =
            e === "daily"
              ? s.seed.toString(10) + ". eguneko Quordlea" 
              : "Praktikatzeko Quordlea";
          let f = b.measureText(C),
            z = f.actualBoundingBoxAscent;
          b.fillText(
            C,
            n.width / 2,
            k * (a + r) + a - (a - z) / 2,
            n.width - g * 2
          ),
            k++;
          for (let v = 0; v < 2; v++) {
            for (let w = 0; w < 2; w++) {
              b.fillStyle =
                s.answersCorrect[w + v * 2] >= 0 ? "#00a6ed" : "#f8312f";
              const O = w * 2 - 1,
                x = n.width / 2 + O * (r / 2) + O * (a / 2);
              if (
                (le(b, x - a / 2, k * (a + r), a, a, d),
                s.answersCorrect[w + v * 2] >= 0)
              ) {
                (b.textAlign = "center"), (b.fillStyle = "#ffffff");
                const j = String(s.answersCorrect[w + v * 2] + 1);
                (f = b.measureText(j)),
                  (z = f.actualBoundingBoxAscent + f.actualBoundingBoxDescent),
                  b.fillText(j, x, k * (a + r) + a - (a - z) / 2, a);
              }
            }
            if (e === "free") {
              (b.textAlign = "right"), (b.fillStyle = "#ffffff");
              let w = s.answers[0 + v * 2].toUpperCase();
              (f = b.measureText(w)),
                (z = f.actualBoundingBoxAscent + f.actualBoundingBoxDescent),
                b.fillText(
                  w,
                  n.width / 2 - r / 2 - a - g,
                  k * (a + r) + a - (a - z) / 2,
                  n.width / 2 - r - a - g * 2
                ),
                (b.textAlign = "left"),
                (w = s.answers[1 + v * 2].toUpperCase()),
                (f = b.measureText(w)),
                (z = f.actualBoundingBoxAscent + f.actualBoundingBoxDescent),
                b.fillText(
                  w,
                  n.width / 2 + r / 2 + a + g,
                  k * (a + r) + a - (a - z) / 2,
                  n.width / 2 - r - a - g * 2
                );
            }
            k++;
          }
          (b.textAlign = "center"),
            (b.textBaseline = "middle"),
            (b.fillStyle = "#ffffff"),
            b.fillText(
              "quordle.eus",
              n.width / 2,
              k * (a + r) + a / 2,
              n.width
            ),
            k++;
          for (let v = 0; v <= c; v++) {
            y = 0;
            let w = s.states[2][v];
            for (y = 0; y < J; y++)
              (b.fillStyle = he(w == null ? void 0 : w[y])),
                le(b, y * (a + r), k * (a + r), a, a, d);
            for (w = s.states[3][v], y = 6; y < J + 6; y++)
              (b.fillStyle = he(w == null ? void 0 : w[y - 6])),
                le(b, y * (a + r), k * (a + r), a, a, d);
            k++;
          }
          const M = yield new Promise((v) => n.toBlob(v));
          if (!M) return;
          const A = `quordle-${e === "daily" ? "daily" : "practice"}-${
              s.seed
            }.png`,
            N = new File([M], A, { type: "image/png" });
          t === "image"
            ? navigator
                .share({ files: [N], text: i })
                .catch((v) => console.error(v))
            : t === "image_save" && Ye.saveAs(N, A);
        }
      }),
    oa = p('<button type="button"></button>'),
    ia = p(
      '<div class="flex flex-col rounded-t-lg text-center bg-gray-300 dark:bg-gray-900 border-t-2 p-4 border-white dark:border-gray-800"><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="mr-4"></span><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span><span class="ml-4"></span></div></div><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="mr-4"></span><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span><span class="ml-4"></span></div></div><div class="flex items-center justify-center mt-2"></div><textarea class="font-[Courier] w-[100%] text-sm text-black dark:text-white bg-white dark:bg-gray-800 text-center rounded-lg mt-2 resize-none" rows="8" readonly></textarea></div>'
    ),
    la = p(
      '<div class="flex items-center justify-center"><div class="ml-2">Partekatu</div></div>'
    ),
    na = p(
      '<div class="inline-flex" role="group"><button type="button" class="ml-2 text-lg min-h-[50px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-l-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-r-[1px] border-gray-400"><div class="flex items-center justify-center"><div class="ml-2">Irudia partekatu</div></div></button><button type="button" class="text-lg min-h-[50px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></button></div>'
    ),
    da = p(
      '<div class="flex items-center justify-center"><div class="ml-2">Save Image</div></div>'
    ),
    ua = p(
      '<div class="flex items-center justify-center"><div class="ml-2">Arbelera kopiatu</div></div>'
    ),
    ca = p('<div class="flex items-center justify-center mt-2"></div>'),
    ke = (e) =>
      (() => {
        const s = oa.cloneNode(!0);
        return (
          se(s, "click", e.onClick, !0),
          u(s, () => e.children),
          q(
            () =>
              (s.className = `text-lg min-h-[50px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${e.class}`)
          ),
          s
        );
      })(),
    ma = (e) => {
      const [s, t] = V(),
        [l, i] = ee(void 0),
        [n, o] = ee(!1),
        c = _(() => Ge(e.mode, s[e.mode])[0]);
      return (() => {
        const a = ia.cloneNode(!0),
          r = a.firstChild,
          d = r.firstChild,
          m = d.firstChild,
          g = m.nextSibling,
          b = d.nextSibling,
          y = b.firstChild,
          k = y.nextSibling,
          C = r.nextSibling,
          f = C.firstChild,
          z = f.firstChild,
          M = z.nextSibling,
          A = f.nextSibling,
          N = A.firstChild,
          v = N.nextSibling,
          w = C.nextSibling,
          O = w.nextSibling;
        return (
          u(m, () => s[e.mode].answers[0].toLocaleUpperCase()),
          u(g, () => G(s[e.mode].answersCorrect[0])),
          u(y, () => G(s[e.mode].answersCorrect[1])),
          u(k, () => s[e.mode].answers[1].toLocaleUpperCase()),
          u(z, () => s[e.mode].answers[2].toLocaleUpperCase()),
          u(M, () => G(s[e.mode].answersCorrect[2])),
          u(N, () => G(s[e.mode].answersCorrect[3])),
          u(v, () => s[e.mode].answers[3].toLocaleUpperCase()),
          u(
            w,
            us &&
              h(ke, {
                onClick: () => {
                  $(s.vibration), ge(e.mode, s[e.mode], "share");
                },
                get children() {
                  const x = la.cloneNode(!0),
                    j = x.firstChild;
                  return u(x, ds ? h(Ks, {}) : h(Qs, {}), j), x;
                },
              }),
            null
          ),
          u(
            w,
            cs
              ? (() => {
                  const x = na.cloneNode(!0),
                    j = x.firstChild,
                    B = j.firstChild,
                    R = B.firstChild,
                    Q = j.nextSibling;
                  return (
                    (j.$$click = () => {
                      $(s.vibration), ge(e.mode, s[e.mode], "image");
                    }),
                    u(B, h(De, {}), R),
                    (Q.$$click = () => {
                      $(s.vibration), ge(e.mode, s[e.mode], "image_save");
                    }),
                    u(Q, h(Me, {})),
                    x
                  );
                })()
              : h(ke, {
                  class: "ml-2",
                  onClick: () => {
                    $(s.vibration), ge(e.mode, s[e.mode], "image_save");
                  },
                  get children() {
                    const x = da.cloneNode(!0),
                      j = x.firstChild;
                    return u(x, h(Me, {}), j), x;
                  },
                }),
            null
          ),
          u(
            a,
            (() => {
              const x = U(() => !!l(), !0);
              return () =>
                x() &&
                (() => {
                  const j = ca.cloneNode(!0);
                  return (
                    u(
                      j,
                      h(ke, {
                        onClick: () => {
                          $(s.vibration),
                            I("event", "share", {
                              mode: e.mode,
                              share_type: "clipboard",
                              daily_seed:
                                e.mode === "daily" ? s[e.mode].seed : void 0,
                            }),
                            o(!0);
                          const B = l();
                          if (B) {
                            B.select(), document.execCommand("copy");
                            const R =
                              window.getSelection && window.getSelection();
                            R && R.removeAllRanges(), B.blur();
                          }
                          alert("Copied results to clipboard!");
                        },
                        get children() {
                          const B = ua.cloneNode(!0),
                            R = B.firstChild;
                          return u(B, h(Ys, {}), R), B;
                        },
                      })
                    ),
                    j
                  );
                })();
            })(),
            O
          ),
          i(O),
          u(O, c),
          q(
            (x) => {
              const j = {
                  "text-green-600 dark:text-green-500":
                    s[e.mode].answersCorrect[0] >= 0,
                  "text-rose-600": s[e.mode].answersCorrect[0] < 0,
                },
                B = {
                  "text-green-600 dark:text-green-500":
                    s[e.mode].answersCorrect[1] >= 0,
                  "text-rose-600": s[e.mode].answersCorrect[1] < 0,
                },
                R = {
                  "text-green-600 dark:text-green-500":
                    s[e.mode].answersCorrect[2] >= 0,
                  "text-rose-600": s[e.mode].answersCorrect[2] < 0,
                },
                Q = {
                  "text-green-600 dark:text-green-500":
                    s[e.mode].answersCorrect[3] >= 0,
                  "text-rose-600": s[e.mode].answersCorrect[3] < 0,
                },
                ie = { "absolute top-[100%]": !n() };
              return (
                (x._v$ = P(m, j, x._v$)),
                (x._v$2 = P(k, B, x._v$2)),
                (x._v$3 = P(z, R, x._v$3)),
                (x._v$4 = P(v, Q, x._v$4)),
                (x._v$5 = P(O, ie, x._v$5)),
                x
              );
            },
            {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
            }
          ),
          a
        );
      })();
    };
  oe(["click"]);
  const ha = p(
      '<div class="quordle-box w-[20%] pb-[calc(20%-0.25rem)]"><div class="quordle-box-content"> </div></div>'
    ),
    Pe = (e) =>
      (() => {
        const s = ha.cloneNode(!0),
          t = s.firstChild,
          l = t.firstChild;
        return (
          q(
            (i) => {
              const n = {
                  "bg-box-correct": e.state === "correct" && !e.colorblind,
                  "bg-box-correct-alt": e.state === "correct" && e.colorblind,
                  "bg-box-diff": e.state === "diff" && !e.colorblind,
                  "bg-box-diff-alt": e.state === "diff" && e.colorblind,
                  "bg-gray-200 dark:bg-gray-700":
                    e.state === "none" && e.rowTemporalState === "past",
                  "bg-gray-300 dark:bg-gray-600":
                    e.rowTemporalState === "present",
                  "bg-gray-100 dark:bg-gray-900":
                    e.rowTemporalState === "future" ||
                    e.rowTemporalState === "never",
                  "text-black": e.state === "correct" || e.state === "diff",
                  "text-rose-600": e.state === "invalid",
                  "text-black dark:text-white": e.state === "none",
                  "quordle-heartbeat-anim dark:quordle-heartbeat-anim-dark":
                    e.activeCol === e.gameCol &&
                    e.rowTemporalState === "present",
                  "quordle-letter-anim":
                    e.letter !== "" && e.rowTemporalState === "present",
                },
                o = e.letter;
              return (
                (i._v$ = P(s, n, i._v$)),
                o !== i._v$2 && (l.data = i._v$2 = o),
                i
              );
            },
            { _v$: void 0, _v$2: void 0 }
          ),
          s
        );
      })(),
    ga = (e) => {
      const s = e.gameX + e.gameY * xe,
        [t] = V(),
        l = _(() => t[e.mode].current.length),
        i = _(() => {
          const a = t[e.mode],
            r = a.current,
            d = a.guesses,
            m = a.answers[s],
            g = d.indexOf(m);
          return (
            e.gameRow <= g ||
            (g === -1 && e.gameRow < d.length) ||
            (g === -1 && e.gameRow === d.length && e.gameCol < r.length)
          );
        }),
        n = _(() => {
          const a = t[e.mode],
            r = a.guesses,
            d = a.current;
          let m = "";
          if (i())
            e.gameRow < r.length
              ? (m = r[e.gameRow][e.gameCol])
              : e.gameRow === r.length && (m = d[e.gameCol]);
          else return m;
          return m.toUpperCase();
        }),
        o = _(() => {
          var g;
          const a = t[e.mode],
            r = a.guesses,
            d = a.states,
            m = a.current;
          if (i()) {
            if (e.gameRow < r.length)
              return (
                ((g = d[s][e.gameRow]) == null ? void 0 : g[e.gameCol]) ||
                "none"
              );
            if (
              e.gameRow === r.length &&
              m.length === 5 &&
              !Ee.has(m) &&
              !Ie.has(m)
            )
              return "invalid";
          }
          return "none";
        }),
        c = _(() => {
          const a = t[e.mode],
            r = a.guesses,
            d = a.answersCorrect[s];
          return d !== -1 && d < e.gameRow
            ? "never"
            : r.length > e.gameRow
            ? "past"
            : e.gameRow === r.length
            ? "present"
            : "future";
        });
      return h(Pe, {
        get state() {
          return o();
        },
        get letter() {
          return n();
        },
        get gameRow() {
          return e.gameRow;
        },
        get gameCol() {
          return e.gameCol;
        },
        get rowTemporalState() {
          return c();
        },
        get activeCol() {
          return l();
        },
        get colorblind() {
          return t.colorblind;
        },
      });
    },
    ya = p(
      '<div class="absolute flex flex-col bg-gray-100 dark:bg-gray-800 text-black dark:text-white z-20 right-4 rounded-lg border-2 border-gray-400"><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all my-4"><div class="mr-3 text-black dark:text-white">Aukerak</div></button><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><div class="mr-3 text-black dark:text-white"> estatistikak</div></button></div>'
    ),
    ba = p(
      '<nav class="bg-slate-300 dark:bg-gray-900 w-screen border-b-2 border-white dark:border-gray-800"><div class="flex items-center max-w-[550px] m-auto px-4 py-2 relative"><span class="ml-3 text-black dark:text-white">Quordle</span><div class="flex-1"><div class=""><div class="flex ml-3"></div></div></div><div class="flex items-center sm:inset-auto sm:ml-6"><button type="button" class="bg-indigo-500 dark:bg-gray-800 p-1 rounded-full text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white ml-2 transition-colors"></button><button type="button" class="bg-indigo-500 dark:bg-gray-800 p-1 rounded-full text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white ml-2 transition"></button></div></div></nav>'
    ),
    pa = (e) => {
      const [s, t] = V(),
        [l, i] = ee(!1),
        [n, o] = ee();
      return (() => {
        const c = ba.cloneNode(!0),
          a = c.firstChild,
          r = a.firstChild,
          d = r.nextSibling,
          m = d.firstChild,
          g = m.firstChild,
          b = d.nextSibling,
          y = b.firstChild,
          k = y.nextSibling;
        return (
          u(
            a,
            h(Ls, {
              get colorblind() {
                return s.colorblind;
              },
            }),
            r
          ),
          u(
            g,
            h(Se, {
              href: "/",
              activeClass: "quordle-nav-active",
              class: "quordle-nav",
              onClick: () => $(s.vibration),
              end: !0,
              children: "Egunerokoa",
            }),
            null
          ),
          u(
            g,
            h(Se, {
              href: "/practice",
              activeClass: "quordle-nav-active",
              class: "quordle-nav",
              onClick: () => $(s.vibration),
              end: !0,
              children: "Praktikatu",
            }),
            null
          ),
          se(y, "click", e.onOpenTutorial, !0),
          u(y, h(Fs, {})),
          (k.$$click = () => $(s.vibration)),
          ((C) => o(C))(k),
          u(k, h(Ws, {})),
          u(
            a,
            h(Xe, {
              class: "z-30",
              menuButton: n,
              open: l,
              setOpen: i,
              animation: { name: "quordle-fade" },
              get children() {
                const C = ya.cloneNode(!0),
                  f = C.firstChild,
                  z = f.firstChild,
                  M = f.nextSibling,
                  A = M.firstChild,
                  N = A.firstChild,
                  v = null,
                  w = null,
                  O = null,
                  x = null,
                  j = null,
                  B = null;
                return (
                  (f.$$click = () => {
                    i(!1), e.onOpenSettings();
                  }),
                  u(f, h(Hs, {}), z),
                  (M.$$click = () => {
                    i(!1), e.onOpenStatistics();
                  }),
                  u(M, h(Js, {}), A),
                  u(A, () => (e.mode === "daily" ? "Eguneroko" : "Praktikako"), N),
                  q(() => {
                    var R;
                    return C.style.setProperty(
                      "top",
                      (((R = n()) == null
                        ? void 0
                        : R.getBoundingClientRect().bottom) || 0) +
                        12 +
                        "px"
                    );
                  }),
                  C
                );
              },
            }),
            null
          ),
          q(() => k.classList.toggle("rotate-180", l())),
          c
        );
      })();
    };
  oe(["click"]);
  const ka = p(
      '<button class="quordle-key pb-[calc(10%-0.25rem)] border-gray-300 dark:border-gray-700"><div class="quordle-box-content"></div></button>'
    ),
    fa = p(
      '<div class="w-full flex-col p-1 pb-1.5 bg-blue-200 dark:bg-cyan-900 rounded-t shadow"></div>'
    ),
    wa = p('<div class="flex w-full justify-center"></div>'),
    va = (e) => {
      const [s, t] = V(),
        l = _(() => e.key.toLocaleLowerCase()),
        i = _(() => {
          if (e.key === "bs" || e.key === "enter") return !1;
          const o = s[e.mode].guesses;
          let c = !1;
          for (let a = 0; a < o.length; a++)
            if (o[a].indexOf(l()) >= 0) {
              c = !0;
              break;
            }
          return c;
        }),
        n = _(() => {
          const o = s[e.mode].guesses;
          if (!i()) return "";
          const c = {
              none: s.darkMode ? "#9ca3af" : "#d1d5db",
              diff: s.colorblind ? "#60a5fa" : "#ffcc00",
              correct: s.colorblind ? "#fb923c" : "#00cc88",
            },
            a = [c.none, c.none, c.none, c.none];
          for (let r = 0; r < a.length; r++) {
            const d = s[e.mode].states[r];
            for (let m = 0; m < d.length; m++)
              for (let g = 0; g < d[m].length; g++)
                l() === o[m][g] &&
                  (d[m][g] === "correct" || d[m][g] === "diff") &&
                  (d[m][g] === "correct"
                    ? (a[r] = c.correct)
                    : d[m][g] === "diff" &&
                      a[r] !== c.correct &&
                      (a[r] = c.diff));
          }
          return a.every((r) => r === c.none)
            ? ""
            : "background: conic-gradient(" +
                a[1] +
                " 0deg 90deg, " +
                a[3] +
                " 90deg 180deg, " +
                a[2] +
                " 180deg 270deg, " +
                a[0] +
                " 270deg 360deg);";
        });
      return (() => {
        const o = ka.cloneNode(!0),
          c = o.firstChild;
        return (
          (o.$$click = () => {
            $(s.vibration),
              t.sendKey(
                e.mode,
                new KeyboardEvent("keydown", {
                  keyCode:
                    e.key === "enter"
                      ? 13
                      : e.key === "bs"
                      ? 8
                      : Ne.indexOf(e.key.toLocaleLowerCase()) + 65,
                  key:
                    e.key === "enter"
                      ? "Enter"
                      : e.key === "bs"
                      ? "Backspace"
                      : e.key.toLocaleLowerCase(),
                })
              );
          }),
          u(
            c,
            (() => {
              const a = U(() => e.key === "enter", !0);
              return () =>
                a()
                  ? h(Is, {})
                  : (() => {
                      const r = U(() => e.key === "bs", !0);
                      return () => (r() ? h(Es, {}) : e.key);
                    })();
            })()
          ),
          q(
            (a) => {
              const r = {
                  "w-[calc(10%-0.25rem)]": e.key !== "enter" && e.key !== "bs",
                  "w-[calc(15%-0.5rem)]": e.key === "enter" || e.key === "bs",
                  "text-black dark:text-black border-gray-400": !!n(),
                  "text-black dark:text-white bg-white dark:bg-gray-500":
                    !n() && !i(),
                  "text-blue-300 dark:text-cyan-600 bg-blue-100 dark:bg-cyan-800 border-blue-200 dark:border-cyan-900":
                    !n() && i(),
                },
                d = n();
              return (a._v$ = P(o, r, a._v$)), (a._v$2 = Je(o, d, a._v$2)), a;
            },
            { _v$: void 0, _v$2: void 0 }
          ),
          o
        );
      })();
    },
    xa = (e) => {
      const [s, t] = V();
      return (() => {
        const l = fa.cloneNode(!0);
        return (
          u(l, () =>
            (s.enterBsReversed ? ns : ls).map((i, n) =>
              (() => {
                const o = wa.cloneNode(!0);
                return (
                  u(o, () =>
                    i.map((c, a) =>
                      h(va, {
                        get mode() {
                          return e.mode;
                        },
                        x: a,
                        y: n,
                        key: c,
                      })
                    )
                  ),
                  o
                );
              })()
            )
          ),
          l
        );
      })();
    };
  oe(["click"]);
  function za(e) {
    const [s, t] = ee([]),
      l = (o) => t((c) => c.concat(o)),
      i = new Map(),
      n = new Ze((o) => {
        if (!!Array.isArray(o))
          for (const c of o) {
            const a = Math.round(c.contentRect.width),
              r = Math.round(c.contentRect.height),
              d = i.get(c.target);
            if (!d || d.width !== a || d.height !== r) {
              const m = { width: a, height: r };
              e.onResize(m, c.target), i.set(c.target, { width: a, height: r });
            }
          }
      });
    return (
      we((o) => {
        let c = [];
        if (e.refs) {
          const a = typeof e.refs == "function" ? e.refs() : e.refs;
          Array.isArray(a) ? (c = c.concat(a)) : c.push(a);
        }
        return (
          (c = c.concat(s())),
          (o = o || []),
          o.forEach((a) => {
            a in c || (n.unobserve(a), i.delete(a));
          }),
          c.forEach((a) => {
            a in o || n.observe(a);
          }),
          c
        );
      }),
      ve(() => n.disconnect()),
      l
    );
  }
  const _a = p(
      '<div class="flex items-center m-4"><label class="flex items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"><div class="block bg-gray-500 dark:bg-gray-600 w-14 h-8 rounded-full"></div><div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div></div><div class="ml-3 text-black dark:text-white"></div></label></div>'
    ),
    $a = p(
      '<div class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><div class="text-4xl mt-2 mb-4 text-center">Aukerak</div><div class="flex flex-col text-base"></div></div></div>'
    ),
    ja = p(
      '<div class="text-center mt-6"><button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Berrezarri oraingo praktika</button><div class="text-center text-base">Kontuz: Berrezarriz gero partida galdutzat hartuko da!</div></div>'
    ),
    ye = (e) =>
      (() => {
        const s = _a.cloneNode(!0),
          t = s.firstChild,
          l = t.firstChild,
          i = l.firstChild,
          n = i.nextSibling,
          o = n.nextSibling,
          c = l.nextSibling;
        return (
          se(i, "change", e.onChange),
          se(i, "click", e.onClick, !0),
          u(c, () => e.text),
          q(
            (a) => {
              const r = e.id,
                d = e.id,
                m = e.checked,
                g = e.checked,
                b = e.checked && !e.colorblind,
                y = e.checked && e.colorblind;
              return (
                r !== a._v$ && E(t, "for", (a._v$ = r)),
                d !== a._v$2 && E(i, "id", (a._v$2 = d)),
                m !== a._v$3 && (i.checked = a._v$3 = m),
                g !== a._v$4 &&
                  o.classList.toggle("translate-x-[100%]", (a._v$4 = g)),
                b !== a._v$5 &&
                  o.classList.toggle("bg-box-correct", (a._v$5 = b)),
                y !== a._v$6 &&
                  o.classList.toggle("bg-box-correct-alt", (a._v$6 = y)),
                a
              );
            },
            {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
            }
          ),
          s
        );
      })(),
    Ca = (e) => {
      const [s, t] = V();
      return (() => {
        const l = $a.cloneNode(!0),
          i = l.firstChild,
          n = i.firstChild,
          o = i.nextSibling,
          c = o.firstChild,
          a = c.nextSibling;
        return (
          se(n, "click", e.onCloseSettings, !0),
          u(
            a,
            h(ye, {
              id: "toggleDarkMode",
              text: "Gai iluna",
              get checked() {
                return s.darkMode;
              },
              get colorblind() {
                return s.colorblind;
              },
              onClick: () => $(s.vibration),
              onChange: (r) => t.setDarkMode(r.currentTarget.checked),
            }),
            null
          ),
          u(
            a,
            h(ye, {
              id: "toggleColorblind",
              text: "Daltonikoentzako modua",
              get checked() {
                return s.colorblind;
              },
              get colorblind() {
                return s.colorblind;
              },
              onClick: () => $(s.vibration),
              onChange: (r) => t.setColorblind(r.currentTarget.checked),
            }),
            null
          ),
          u(
            a,
            Le &&
              h(ye, {
                id: "toggleVibration",
                text: "Bibrazioa",
                get checked() {
                  return s.vibration;
                },
                get colorblind() {
                  return s.colorblind;
                },
                onClick: () => $(s.vibration),
                onChange: (r) => t.setVibration(r.currentTarget.checked),
              }),
            null
          ),
          u(
            a,
            h(ye, {
              id: "toggleEnterBsReversed",
              get text() {
                return `Teklak ordezkatu (${
                  s.enterBsReversed ? "\u23CE" : "\u232B"
                } . . . ${s.enterBsReversed ? "\u232B" : "\u23CE"})`;
              },
              get checked() {
                return s.enterBsReversed;
              },
              get colorblind() {
                return s.colorblind;
              },
              onClick: () => $(s.vibration),
              onChange: (r) => t.setEnterBsReversed(r.currentTarget.checked),
            }),
            null
          ),
          u(
            o,
            (() => {
              const r = U(
                () =>
                  e.mode === "free" &&
                  s.free.guesses.length > 0 &&
                  !t.isGameComplete(e.mode),
                !0
              );
              return () =>
                r() &&
                (() => {
                  const d = ja.cloneNode(!0),
                    m = d.firstChild;
                  return (m.$$click = () => t.resetFree()), d;
                })();
            })(),
            null
          ),
          l
        );
      })();
    };
  oe(["click"]);
  const Sa = p(
	'<div class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><div class="text-4xl mt-2 mb-4 text-center"> estatistikak</div><div class="flex flex-row"><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">Aldiz jokatua</span></div><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">Irabazitako %</span></div><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">Oraingo<br>marka</span></div><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">Marka<br>handiena</span></div></div><div class="text-4xl mt-8 text-center">Irabazitako jokoen banaketa</div><div class="text-lg mb-4 text-center">(guztira 4 hitzak asmatzeko egindako saiakerak)</div><div class="text-lg"></div></div></div>'
    ),
    Be = p(
      '<div class="flex flex-row mb-1"><div class="mr-2"></div><div class="min-w-min text-right px-2"></div></div>'
    ),
    qa = p(
      '<div class="flex flex-row text-base mt-6 mb-1 px-2"><div class="flex-1">Irabazi - </div><div class="flex-1 text-right"> - Galdu</div></div>'
    ),
    Ma = p(
      '<div class="text-base font-bold flex flex-row items-center cursor-pointer rounded-l-xl rounded-r-xl overflow-hidden"><div class="bg-box-correct h-6"></div><div class="bg-rose-600 dark:bg-rose-800 text-right h-6"></div></div>'
    ),
    Ba = p('<div class="text-4xl mt-8 text-center">Loss Distribution</div>'),
    Aa = p('<div class="text-lg mb-4 text-center">(# words missed)</div>'),
    Ra = p('<div class="text-lg"></div>'),
    Ta = [...Array(S - (X - 1)).keys()].map((e) => e + (X - 1)),
    Na = [...Array(X).keys()].map((e) => e + S).reverse(),
    La = (e) => {
      const [s, t] = V(),
        [l, i] = ee(!1),
        n = _(() => Math.max(...s[e.mode].history.slice(X - 1, S), 1)),
        o = _(() => Math.max(...s[e.mode].history.slice(S), 1)),
        c = _(() =>
          s[e.mode].history.slice(X - 1, S).reduce((y, k) => y + k, 0)
        ),
        a = _(() => s[e.mode].history.slice(S).reduce((y, k) => y + k, 0)),
        r = _(() => c() + a()),
        d = _(() =>
          s[e.mode].answersCorrect.reduce((y, k) => (y += k >= 0 ? 1 : 0), 0)
        ),
        m = _(() => Math.max(...s[e.mode].answersCorrect)),
        g = _(() => t.isGameComplete(e.mode) && d() === X),
        b = _(() => t.isGameComplete(e.mode) && d() < X);
      return (() => {
        const y = Sa.cloneNode(!0),
          k = y.firstChild,
          C = k.firstChild,
          f = k.nextSibling,
          z = f.firstChild,
          M = z.firstChild,
          A = z.nextSibling,
          N = A.firstChild,
          v = N.firstChild,
          w = N.nextSibling,
          O = w.firstChild,
          x = w.nextSibling,
          j = x.firstChild,
          B = x.nextSibling,
          R = B.firstChild,
          Q = A.nextSibling,
          ie = Q.nextSibling,
          ue = ie.nextSibling;
        return (
          se(C, "click", e.onCloseStatistics, !0),
          u(z, () => (e.mode === "daily" ? "Eguneroko" : "Praktikako"), M),
          u(v, () => c() + a()),
          u(O, () => Math.round((r() > 0 ? c() / r() : 0) * 100)),
          u(j, () => s[e.mode].currentStreak),
          u(R, () => s[e.mode].maxStreak),
          u(ue, () =>
            Ta.map((F) =>
              (() => {
                const D = Be.cloneNode(!0),
                  L = D.firstChild,
                  W = L.nextSibling;
                return (
                  u(L, F + 1),
                  u(W, () => s[e.mode].history[F]),
                  q(
                    (T) => {
                      const Z = {
                          " text-black bg-box-correct": g() && m() === F,
                          "text-black bg-gray-300 dark:text-white dark:bg-gray-700":
                            !(g() && m() === F),
                        },
                        H = (s[e.mode].history[F] / n()) * 100 + "%";
                      return (
                        (T._v$ = P(W, Z, T._v$)),
                        H !== T._v$2 &&
                          W.style.setProperty("width", (T._v$2 = H)),
                        T
                      );
                    },
                    { _v$: void 0, _v$2: void 0 }
                  ),
                  D
                );
              })()
            )
          ),
          u(
            f,
            (() => {
              const F = U(() => a() > 0, !0);
              return () =>
                F() && [
                  (() => {
                    const D = qa.cloneNode(!0),
                      L = D.firstChild;
                    L.firstChild;
                    const W = L.nextSibling,
                      T = W.firstChild;
                    return u(L, c, null), u(W, a, T), D;
                  })(),
                  (() => {
                    const D = Ma.cloneNode(!0),
                      L = D.firstChild,
                      W = L.nextSibling;
                    return (
                      (D.$$click = () => {
                        $(s.vibration), i(!l());
                      }),
                      q(
                        (T) => {
                          const Z = (c() / r()) * 100 + "%",
                            H = (a() / r()) * 100 + "%";
                          return (
                            Z !== T._v$3 &&
                              L.style.setProperty("width", (T._v$3 = Z)),
                            H !== T._v$4 &&
                              W.style.setProperty("width", (T._v$4 = H)),
                            T
                          );
                        },
                        { _v$3: void 0, _v$4: void 0 }
                      ),
                      D
                    );
                  })(),
                ];
            })(),
            null
          ),
          u(
            f,
            (() => {
              const F = U(() => !!l(), !0);
              return () =>
                F() && [
                  Ba.cloneNode(!0),
                  Aa.cloneNode(!0),
                  (() => {
                    const D = Ra.cloneNode(!0);
                    return (
                      u(D, () =>
                        Na.map((L) =>
                          (() => {
                            const W = Be.cloneNode(!0),
                              T = W.firstChild,
                              Z = T.nextSibling;
                            return (
                              u(T, X - (L - S)),
                              u(Z, () => s[e.mode].history[L]),
                              q(
                                (H) => {
                                  const He = {
                                      "text-white bg-rose-600 dark:bg-rose-800":
                                        b() && d() === L - S,
                                      "text-black bg-gray-300 dark:bg-gray-700 dark:text-white":
                                        !(b() && d() === L - S),
                                    },
                                    je =
                                      (s[e.mode].history[L] / o()) * 100 + "%";
                                  return (
                                    (H._v$5 = P(Z, He, H._v$5)),
                                    je !== H._v$6 &&
                                      Z.style.setProperty(
                                        "width",
                                        (H._v$6 = je)
                                      ),
                                    H
                                  );
                                },
                                { _v$5: void 0, _v$6: void 0 }
                              ),
                              W
                            );
                          })()
                        )
                      ),
                      D
                    );
                  })(),
                ];
            })(),
            null
          ),
          y
        );
      })();
    };
  oe(["click"]);
  const Ia = p(
      `<div class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="max-w-[550px] m-auto w-full px-6"><div class="text-3xl mt-2 mb-1">4 QUORDLE hitzak asmatu 9 saiakeratan.</div><div class="text-base">Saiakera bakoitzean 5 letrako hitz baliodun bat osatu behar da. Enter botoia sakatu zuzentzeko. Saiakera bakoitzaren ostean, letra-kutxen kolorea aldatu egingo da hitz zuzenera noraino gerturatu zaren ikusi ahal izateko.</div><div class="text-3xl mt-4 mb-2">Adibideak</div><div class="flex w-[50%] my-2"></div><div class="text-base mb-6">Hitzak T letra dauka eta posizio berean dago.</div><div class="flex w-[50%] my-2"></div><div class="text-base mb-6">Hitzak A letra dauka baina beste posizio batean.</div><div class="flex w-[50%] my-2"></div><div class="text-base mb-6">B, I, R, U, S letrak ez daude hitzean. QUORDLEn saiakera bat egiten duzun aldiro, asmatu beharreko hitz guztientzat erabiliko da saiakera hori. Aurkitu beharreko 4 hitzak desberdinak dira.</div><div class="flex w-[100%] mb-2"><div class="flex w-[50%] mr-1"></div><div class="flex w-[50%] ml-1"></div></div><div class="flex w-[100%] mt-2 mb-2"><div class="flex w-[50%] mr-1"></div><div class="flex w-[50%] ml-1"></div></div><div class="text-base">KOSTA saiakerentzako:</div><ol class="text-base list-decimal ml-8 mb-6"><li>Goi-ezkerreko hitzak ez dauka letretako bat ere.</li><li>Goi-eskumako hitzak S letra beste posizio batean dauka, eta A letra posizio zuzenean.</li><li>Behe-ezkerreko hitzak T letra beste posizio batean dauka.</li><li>Behe-eskumako hitzak O letra posizio zuzenean dauka, eta A letra beste posizio batean.</li></ol><div class="text-base mb-6">9 saiakera dituzu 4 hitzak asmatzeko. Zorte on!</div><div class="text-base mb-8">QUORDLE berri bat eskuragarri egunero!</div><div class="text-sm mb-2 text-center">Freddie Meyer-ek sortua</div><div class="flex flex-row items-center justify-center mb-8"><a class="px-4" href="https://github.com/fireph/quordle" target="_blank"></a><a class="px-4" href="https://twitter.com/quordle" target="_blank"></a><a class="px-4" href="https://www.facebook.com/quordle" target="_blank"></a><a class="px-4" href="https://www.reddit.com/r/Quordle/" target="_blank"></a><a class="px-4" href="https://www.instagram.com/quordlegame/" target="_blank"></a></div><div class="text-3xl my-4 text-center">History of Quordle</div><div class="text-base mb-6">It all started on January 29, 2022 when I saw an article mentioning <a class="underline" href="https://zaratustra.itch.io/dordle" target="_blank">Dordle</a> by Guilherme S. T&#246;ws and we all started playing it as a group. It was a blast to play something more difficult than Wordle, but we still found it uncommon to fail to guess both words in 7 attempts.<br><br>In a moment of evil and genius, <a class="underline" href="https://github.com/DavidMah" target="_blank">David Mah</a> hacked together the first prototype of Quordle on January 30th and linked it to the group chat. It was truly horrific code (it even had 2 keyboards &#128517;), but I knew that I had to continue the madness. With hindsight, he really baited me into finishing his monstrous creation.<br><br>Over the next 2 days I improved the code, removed the second keyboard, and added the color quadrant keyboard. I even added Google Analytics thinking it would be funny to see the stats for our friend group playing.<br><br>At first it was just a few dozen players (there was a group of 20-30 people in Ohio that were playing constantly the first few days). But then Quordle got written about in an article in <a class="underline" href="https://www.theguardian.com/games/2022/feb/06/worried-about-losing-wordle-here-are-some-alternatives-just-in-case" target="_blank">The Guardian</a> and things exploded quickly from there. Now Quordle has over 300k players daily and has had over 850k total players.<br><br>A shoutout to our friend that plays relentlessly while indoor cycling. You were the drive to create a better version and your passion made me realize it could be popular outside of our friend group. I am so glad the world has been thoroughly cursed by Quordle and can't wait to see how Quordle strategies evolve!<br><br>I have no plans to monetize Quordle, I just enjoy watching everyone enjoy this insane game and couldn't have done it without Guilherme S. T&#246;ws and David Mah. If you have any ideas for Quordle or just want to chat, check out the socials posted above.</div></div></div>`
    ),
    ae = [
		["TXORI", ["correct", "none", "none", "none", "none"]],
		["BARKU", ["none", "diff", "none", "none", "none"]],
		["BIRUS", ["none", "none", "none", "none", "none"]],
		["KOSTA", ["none", "none", "none", "none", "none"]],
		["KOSTA", ["none", "none", "diff", "none", "correct"]],
		["KOSTA", ["none", "none", "none", "diff", "none"]],
		["KOSTA", ["none", "correct", "none", "none", "diff"]],
	  ],
    re = (e) =>
      e.word[0].split("").map((s, t) =>
        h(Pe, {
          get state() {
            return e.word[1][t];
          },
          letter: s,
          gameRow: 0,
          gameCol: t,
          rowTemporalState: "past",
          activeCol: 0,
          get colorblind() {
            return e.colorblind;
          },
        })
      ),
    Ea = (e) => {
      const [s, t] = V();
      return (() => {
        const l = Ia.cloneNode(!0),
          i = l.firstChild,
          n = i.firstChild,
          o = i.nextSibling,
          c = o.firstChild,
          a = c.nextSibling,
          r = a.nextSibling,
          d = r.nextSibling,
          m = d.nextSibling,
          g = m.nextSibling,
          b = g.nextSibling,
          y = b.nextSibling,
          k = y.nextSibling,
          C = k.nextSibling,
          f = C.firstChild,
          z = f.nextSibling,
          M = C.nextSibling,
          A = M.firstChild,
          N = A.nextSibling,
          v = M.nextSibling,
          w = v.nextSibling,
          O = w.nextSibling,
          x = O.nextSibling,
          j = x.nextSibling,
          B = j.nextSibling,
          R = B.firstChild,
          Q = R.nextSibling,
          ie = Q.nextSibling,
          ue = ie.nextSibling,
          F = ue.nextSibling;
        return (
          se(n, "click", e.onCloseTutorial, !0),
          u(
            d,
            h(re, {
              get word() {
                return ae[0];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            g,
            h(re, {
              get word() {
                return ae[1];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            y,
            h(re, {
              get word() {
                return ae[2];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            f,
            h(re, {
              get word() {
                return ae[3];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            z,
            h(re, {
              get word() {
                return ae[4];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            A,
            h(re, {
              get word() {
                return ae[5];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            N,
            h(re, {
              get word() {
                return ae[6];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(R, h(Os, { height: 48 })),
          u(Q, h(De, { height: 36 })),
          u(ie, h(Ds, { height: 48 })),
          u(ue, h(Gs, { height: 40 })),
          u(F, h(Ps, { height: 40 })),
          l
        );
      })();
    };
  oe(["click"]);
  const Oa = p(
      '<div class="absolute w-full h-full text-black dark:text-white bg-white dark:bg-gray-800 overflow-auto transition-all ease-in-out duration-500"></div>'
    ),
    Da = p('<div class="flex flex-col flex-auto p-1"></div>'),
    Fe = p('<div class="flex w-full"></div>'),
    Ga = p(
      '<div class="w-full absolute flex flex-col overflow-hidden"><div class="max-w-[550px] m-auto w-full"></div><div class="quordle-desktop-scrollbar max-w-[550px] m-auto w-full flex-auto"><div class="w-full flex-col"></div></div><div class="max-w-[550px] m-auto w-full"></div></div>'
    ),
    fe = (e) =>
      (() => {
        const s = Oa.cloneNode(!0);
        return (
          u(s, () => e.children),
          q(
            (t) => {
              const l = {
                  "opacity-100 top-0": e.open,
                  "opacity-0 top-[100%]": !e.open,
                },
                i = e.fontSize + "px";
              return (
                (t._v$ = P(s, l, t._v$)),
                i !== t._v$2 && s.style.setProperty("font-size", (t._v$2 = i)),
                t
              );
            },
            { _v$: void 0, _v$2: void 0 }
          ),
          s
        );
      })(),
    Pa = [...Array(xe).keys()],
    Fa = [...Array(Te).keys()],
    Wa = [...Array(S).keys()],
    Ha = [...Array(J).keys()],
    Ua = (e) =>
      (() => {
        const s = Da.cloneNode(!0);
        return (
          u(s, () =>
            Wa.map((t) =>
              (() => {
                const l = Fe.cloneNode(!0);
                return (
                  u(l, () =>
                    Ha.map((i) =>
                      h(ga, {
                        get mode() {
                          return e.mode;
                        },
                        get gameX() {
                          return e.gameX;
                        },
                        get gameY() {
                          return e.gameY;
                        },
                        gameRow: t,
                        gameCol: i,
                      })
                    )
                  ),
                  l
                );
              })()
            )
          ),
          s
        );
      })(),
    Ae = (e) => {
      const [s, t] = V(),
        [l, i] = es(),
        [n, o] = ee(35),
        c = (g) => {
          t.sendKey(e.mode, g);
        };
      document.addEventListener("keydown", c),
        ve(() => document.removeEventListener("keydown", c));
      const a = _(() => l.overlay === "tutorial"),
        r = _(() => l.overlay === "statistics"),
        d = _(() => l.overlay === "settings"),
        m = za({
          onResize: ({ width: g }) => {
            g && o(g / 17);
          },
        });
      return (() => {
        const g = Ga.cloneNode(!0),
          b = g.firstChild,
          y = b.nextSibling,
          k = y.firstChild,
          C = y.nextSibling;
        return (
          P(g, { "h-full": !qe, "h-[calc(100%-25px)] bottom-[25px]": qe }),
          u(
            g,
            h(pa, {
              get mode() {
                return e.mode;
              },
              onOpenTutorial: () => {
                $(s.vibration),
                  I("event", "tutorial", { mode: e.mode }),
                  i({ overlay: "tutorial" });
              },
              onOpenStatistics: () => {
                $(s.vibration),
                  I("event", "statistics", { mode: e.mode }),
                  i({ overlay: "statistics" });
              },
              onOpenSettings: () => {
                $(s.vibration),
                  I("event", "settings", { mode: e.mode }),
                  i({ overlay: "settings" });
              },
            }),
            b
          ),
          u(
            b,
            (() => {
              const f = U(() => !!t.isGameComplete(e.mode), !0);
              return () =>
                f() &&
                h(ta, {
                  get mode() {
                    return e.mode;
                  },
                });
            })()
          ),
          m(y),
          u(k, () =>
            Fa.map((f) =>
              (() => {
                const z = Fe.cloneNode(!0);
                return (
                  u(z, () =>
                    Pa.map((M) =>
                      h(Ua, {
                        get mode() {
                          return e.mode;
                        },
                        gameX: M,
                        gameY: f,
                      })
                    )
                  ),
                  z
                );
              })()
            )
          ),
          u(
            C,
            (() => {
              const f = U(() => !!t.isGameComplete(e.mode), !0);
              return () =>
                f()
                  ? h(ma, {
                      get mode() {
                        return e.mode;
                      },
                    })
                  : h(xa, {
                      get mode() {
                        return e.mode;
                      },
                    });
            })()
          ),
          u(
            g,
            h(fe, {
              get open() {
                return d();
              },
              get fontSize() {
                return n();
              },
              get children() {
                return h(Ca, {
                  get mode() {
                    return e.mode;
                  },
                  onCloseSettings: () => {
                    $(s.vibration), i({ overlay: void 0 });
                  },
                });
              },
            }),
            null
          ),
          u(
            g,
            h(fe, {
              get open() {
                return r();
              },
              get fontSize() {
                return n();
              },
              get children() {
                return h(La, {
                  get mode() {
                    return e.mode;
                  },
                  onCloseStatistics: () => {
                    $(s.vibration), i({ overlay: void 0 });
                  },
                });
              },
            }),
            null
          ),
          u(
            g,
            h(fe, {
              get open() {
                return a();
              },
              get fontSize() {
                return n();
              },
              get children() {
                return h(Ea, {
                  onCloseTutorial: () => {
                    $(s.vibration), i({ overlay: void 0 });
                  },
                });
              },
            }),
            null
          ),
          q(
            (f) => {
              const z = n() + "px",
                M = a() || r(),
                A = !(a() || r()),
                N = n() + "px",
                v = n() + "px";
              return (
                z !== f._v$3 && b.style.setProperty("font-size", (f._v$3 = z)),
                M !== f._v$4 &&
                  y.classList.toggle("overflow-hidden", (f._v$4 = M)),
                A !== f._v$5 &&
                  y.classList.toggle("overflow-auto", (f._v$5 = A)),
                N !== f._v$6 && y.style.setProperty("font-size", (f._v$6 = N)),
                v !== f._v$7 && C.style.setProperty("font-size", (f._v$7 = v)),
                f
              );
            },
            {
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
            }
          ),
          g
        );
      })();
    },
    Va = p(
      '<div class="px-5 absolute flex items-center justify-center w-full h-full bg-gradient-to-r from-indigo-600 to-blue-400"><div class="p-10 bg-white rounded-md shadow-xl"><div class="flex flex-col items-center"><h1 class="font-bold text-blue-600 text-9xl">404</h1><h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"><span class="text-red-500">Oops!</span> Page not found</h6><p class="mb-8 text-center text-gray-500 md:text-lg">The page you\u2019re looking for doesn\u2019t exist.</p></div></div></div>'
    ),
    Qa = (e) =>
      (() => {
        const s = Va.cloneNode(!0),
          t = s.firstChild,
          l = t.firstChild;
        return (
          l.firstChild.nextSibling.nextSibling,
          u(
            l,
            h(ss, {
              href: "/",
              class:
                "px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100",
              children: "Itzuli eguneroko Quordlera",
            }),
            null
          ),
          s
        );
      })(),
    Ka = () => {
      const e = _(() => Re($e));
      return (
        we(() => {
          var s;
          ((s = e()) == null ? void 0 : s[0].darkMode)
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
        }),
        e()
          ? h(as, {
              get children() {
                return [
                  h(be, {
                    path: "/",
                    get element() {
                      return h(Ae, { mode: "daily" });
                    },
                  }),
                  h(be, {
                    path: "/practice",
                    get element() {
                      return h(Ae, { mode: "free" });
                    },
                  }),
                  h(be, {
                    path: "/*all",
                    get element() {
                      return h(Qa, {});
                    },
                  }),
                ];
              },
            })
          : null
      );
    };
  rs(
    () =>
      h(ts, {
        get source() {
          return os();
        },
        get children() {
          return h(bs, {
            get children() {
              return h(Ka, {});
            },
          });
        },
      }),
    document.getElementById("root")
  );
});
export default Ya();
//# sourceMappingURL=index.bfadfc32.js.map
