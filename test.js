var Qe = (e, s) => () => (s || e((s = { exports: {} }).exports, s), s.exports);
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
  c as y,
  a as He,
  b as we,
  d as Ke,
  p as J,
  m as Ye,
  u as Ne,
  t as p,
  s as de,
  e as M,
  f as O,
  g as oe,
  h as _,
  i as Z,
  o as ve,
  j as u,
  k as ee,
  l as P,
  n as se,
  q as Ve,
  N as Se,
  D as Xe,
  r as Je,
  R as Ze,
  v as es,
  L as ss,
  w as ge,
  x as as,
  y as rs,
  z as ts,
  A as os,
} from "./vendor.92a689d9.js";
var Pa = Qe((Fe) => {
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
    Ie = 2,
    K = xe * Ie,
    C = 9,
    Y = 5,
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
    Le = "abcdefghijklmnopqrstuvwxyz",
    ls = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L", "enter3"],
      ["bs", "Z", "X", "C", "V", "B", "N", "M", "enter1", "enter2"],
    ],
    Be = !!navigator.vibrate;
  [
    "ipad simulator",
    "iphone simulator",
    "ipod simulator",
    "ipad",
    "iphone",
    "ipod",
  ].indexOf(navigator.platform.toLowerCase()) >= 0 ||
    (navigator.userAgent.toLowerCase().includes("mac") &&
      "ontouchend" in document);
  const qe =
    "standalone" in window.navigator && window.navigator.standalone === !0;
  /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
  window.matchMedia("(display-mode: standalone)").matches;
  const ns =
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({ text: "test share text" }),
    ds =
      navigator.share &&
      navigator.canShare &&
      navigator.canShare({
        text: "test share text",
        files: [new File([new Blob()], "test.png", { type: "image/png" })],
      }),
    us = ["gypsy", "gipsy", "mammy", "agora", "slave", "hussy"],
    ce = new Set(us),
    H =
      "aback abase abate abbey abbot abhor abide abled abode abort about above abuse abyss acorn acrid actor acute adage adapt adept admin admit adobe adopt adore adorn adult affix afire afoot afoul after again agape agate agent agile aging aglow agony agora agree ahead aider aisle alarm album alert algae alibi alien align alike alive allay alley allot allow alloy aloft alone along aloof aloud alpha altar alter amass amaze amber amble amend amiss amity among ample amply amuse angel anger angle angry angst anime ankle annex annoy annul anode antic anvil aorta apart aphid aping apnea apple apply apron aptly arbor ardor arena argue arise armor aroma arose array arrow arson artsy ascot ashen aside askew assay asset atoll atone attic audio audit augur aunty avail avert avian avoid await awake award aware awash awful awoke axial axiom axion azure bacon badge badly bagel baggy baker baler balmy banal banjo barge baron basal basic basil basin basis baste batch bathe baton batty bawdy bayou beach beady beard beast beech beefy befit began begat beget begin begun being belch belie belle belly below bench beret berry berth beset betel bevel bezel bible bicep biddy bigot bilge billy binge bingo biome birch birth bison bitty black blade blame bland blank blare blast blaze bleak bleat bleed bleep blend bless blimp blind blink bliss blitz bloat block bloke blond blood bloom blown bluer bluff blunt blurb blurt blush board boast bobby boney bongo bonus booby boost booth booty booze boozy borax borne bosom bossy botch bough boule bound bowel boxer brace braid brain brake brand brash brass brave bravo brawl brawn bread break breed briar bribe brick bride brief brine bring brink briny brisk broad broil broke brood brook broom broth brown brunt brush brute buddy budge buggy bugle build built bulge bulky bully bunch bunny burly burnt burst bused bushy butch butte buxom buyer bylaw cabal cabby cabin cable cacao cache cacti caddy cadet cagey cairn camel cameo canal candy canny canoe canon caper caput carat cargo carol carry carve caste catch cater catty caulk cause cavil cease cedar cello chafe chaff chain chair chalk champ chant chaos chard charm chart chase chasm cheap cheat check cheek cheer chess chest chick chide chief child chili chill chime china chirp chock choir choke chord chore chose chuck chump chunk churn chute cider cigar cinch circa civic civil clack claim clamp clang clank clash clasp class clean clear cleat cleft clerk click cliff climb cling clink cloak clock clone close cloth cloud clout clove clown cluck clued clump clung coach coast cobra cocoa colon color comet comfy comic comma conch condo conic copse coral corer corny couch cough could count coupe court coven cover covet covey cower coyly crack craft cramp crane crank crash crass crate crave crawl craze crazy creak cream credo creed creek creep creme crepe crept cress crest crick cried crier crime crimp crisp croak crock crone crony crook cross croup crowd crown crude cruel crumb crump crush crust crypt cubic cumin curio curly curry curse curve curvy cutie cyber cycle cynic daddy daily dairy daisy dally dance dandy datum daunt dealt death debar debit debug debut decal decay decor decoy decry defer deign deity delay delta delve demon demur denim dense depot depth derby deter detox deuce devil diary dicey digit dilly dimly diner dingo dingy diode dirge dirty disco ditch ditto ditty diver dizzy dodge dodgy dogma doing dolly donor donut dopey doubt dough dowdy dowel downy dowry dozen draft drain drake drama drank drape drawl drawn dread dream dress dried drier drift drill drink drive droit droll drone drool droop dross drove drown druid drunk dryer dryly duchy dully dummy dumpy dunce dusky dusty dutch duvet dwarf dwell dwelt dying eager eagle early earth easel eaten eater ebony eclat edict edify eerie egret eight eject eking elate elbow elder elect elegy elfin elide elite elope elude email embed ember emcee empty enact endow enema enemy enjoy ennui ensue enter entry envoy epoch epoxy equal equip erase erect erode error erupt essay ester ether ethic ethos etude evade event every evict evoke exact exalt excel exert exile exist expel extol extra exult eying fable facet faint fairy faith false fancy fanny farce fatal fatty fault fauna favor feast fecal feign fella felon femme femur fence feral ferry fetal fetch fetid fetus fever fewer fiber fibre ficus field fiend fiery fifth fifty fight filer filet filly filmy filth final finch finer first fishy fixer fizzy fjord flack flail flair flake flaky flame flank flare flash flask fleck fleet flesh flick flier fling flint flirt float flock flood floor flora floss flour flout flown fluff fluid fluke flume flung flunk flush flute flyer foamy focal focus foggy foist folio folly foray force forge forgo forte forth forty forum found foyer frail frame frank fraud freak freed freer fresh friar fried frill frisk fritz frock frond front frost froth frown froze fruit fudge fugue fully fungi funky funny furor furry fussy fuzzy gaffe gaily gamer gamma gamut gassy gaudy gauge gaunt gauze gavel gawky gayer gayly gazer gecko geeky geese genie genre ghost ghoul giant giddy gipsy girly girth given giver glade gland glare glass glaze gleam glean glide glint gloat globe gloom glory gloss glove glyph gnash gnome godly going golem golly gonad goner goody gooey goofy goose gorge gouge gourd grace grade graft grail grain grand grant grape graph grasp grass grate grave gravy graze great greed green greet grief grill grime grimy grind gripe groan groin groom grope gross group grout grove growl grown gruel gruff grunt guard guava guess guest guide guild guile guilt guise gulch gully gumbo gummy guppy gusto gusty gypsy habit hairy halve handy happy hardy harem harpy harry harsh haste hasty hatch hater haunt haute haven havoc hazel heady heard heart heath heave heavy hedge hefty heist helix hello hence heron hilly hinge hippo hippy hitch hoard hobby hoist holly homer honey honor horde horny horse hotel hotly hound house hovel hover howdy human humid humor humph humus hunch hunky hurry husky hussy hutch hydro hyena hymen hyper icily icing ideal idiom idiot idler idyll igloo iliac image imbue impel imply inane inbox incur index inept inert infer ingot inlay inlet inner input inter intro ionic irate irony islet issue itchy ivory jaunt jazzy jelly jerky jetty jewel jiffy joint joist joker jolly joust judge juice juicy jumbo jumpy junta junto juror kappa karma kayak kebab khaki kinky kiosk kitty knack knave knead kneed kneel knelt knife knock knoll known koala krill label labor laden ladle lager lance lanky lapel lapse large larva lasso latch later lathe latte laugh layer leach leafy leaky leant leapt learn lease leash least leave ledge leech leery lefty legal leggy lemon lemur leper level lever libel liege light liken lilac limbo limit linen liner lingo lipid lithe liver livid llama loamy loath lobby local locus lodge lofty logic login loopy loose lorry loser louse lousy lover lower lowly loyal lucid lucky lumen lumpy lunar lunch lunge lupus lurch lurid lusty lying lymph lynch lyric macaw macho macro madam madly mafia magic magma maize major maker mambo mamma mammy manga mange mango mangy mania manic manly manor maple march marry marsh mason masse match matey mauve maxim maybe mayor mealy meant meaty mecca medal media medic melee melon mercy merge merit merry metal meter metro micro midge midst might milky mimic mince miner minim minor minty minus mirth miser missy mocha modal model modem mogul moist molar moldy money month moody moose moral moron morph mossy motel motif motor motto moult mound mount mourn mouse mouth mover movie mower mucky mucus muddy mulch mummy munch mural murky mushy music musky musty myrrh nadir naive nanny nasal nasty natal naval navel needy neigh nerdy nerve never newer newly nicer niche niece night ninja ninny ninth noble nobly noise noisy nomad noose north nosey notch novel nudge nurse nutty nylon nymph oaken obese occur ocean octal octet odder oddly offal offer often olden older olive ombre omega onion onset opera opine opium optic orbit order organ other otter ought ounce outdo outer outgo ovary ovate overt ovine ovoid owing owner oxide ozone paddy pagan paint paler palsy panel panic pansy papal paper parer parka parry parse party pasta paste pasty patch patio patsy patty pause payee payer peace peach pearl pecan pedal penal pence penne penny perch peril perky pesky pesto petal petty phase phone phony photo piano picky piece piety piggy pilot pinch piney pinky pinto piper pique pitch pithy pivot pixel pixie pizza place plaid plain plait plane plank plant plate plaza plead pleat plied plier pluck plumb plume plump plunk plush poesy point poise poker polar polka polyp pooch poppy porch poser posit posse pouch pound pouty power prank prawn preen press price prick pride pried prime primo print prior prism privy prize probe prone prong proof prose proud prove prowl proxy prude prune psalm pubic pudgy puffy pulpy pulse punch pupal pupil puppy puree purer purge purse pushy putty pygmy quack quail quake qualm quark quart quash quasi queen queer quell query quest queue quick quiet quill quilt quirk quite quota quote quoth rabbi rabid racer radar radii radio rainy raise rajah rally ralph ramen ranch randy range rapid rarer raspy ratio ratty raven rayon razor reach react ready realm rearm rebar rebel rebus rebut recap recur recut reedy refer refit regal rehab reign relax relay relic remit renal renew repay repel reply rerun reset resin retch retro retry reuse revel revue rhino rhyme rider ridge rifle right rigid rigor rinse ripen riper risen riser risky rival river rivet roach roast robin robot rocky rodeo roger rogue roomy roost rotor rouge rough round rouse route rover rowdy rower royal ruddy ruder rugby ruler rumba rumor rupee rural rusty sadly safer saint salad sally salon salsa salty salve salvo sandy saner sappy sassy satin satyr sauce saucy sauna saute savor savoy savvy scald scale scalp scaly scamp scant scare scarf scary scene scent scion scoff scold scone scoop scope score scorn scour scout scowl scram scrap scree screw scrub scrum scuba sedan seedy segue seize semen sense sepia serif serum serve setup seven sever sewer shack shade shady shaft shake shaky shale shall shalt shame shank shape shard share shark sharp shave shawl shear sheen sheep sheer sheet sheik shelf shell shied shift shine shiny shire shirk shirt shoal shock shone shook shoot shore shorn short shout shove shown showy shrew shrub shrug shuck shunt shush shyly siege sieve sight sigma silky silly since sinew singe siren sissy sixth sixty skate skier skiff skill skimp skirt skulk skull skunk slack slain slang slant slash slate slave sleek sleep sleet slept slice slick slide slime slimy sling slink sloop slope slosh sloth slump slung slunk slurp slush slyly smack small smart smash smear smell smelt smile smirk smite smith smock smoke smoky smote snack snail snake snaky snare snarl sneak sneer snide sniff snipe snoop snore snort snout snowy snuck snuff soapy sober soggy solar solid solve sonar sonic sooth sooty sorry sound south sower space spade spank spare spark spasm spawn speak spear speck speed spell spelt spend spent sperm spice spicy spied spiel spike spiky spill spilt spine spiny spire spite splat split spoil spoke spoof spook spool spoon spore sport spout spray spree sprig spunk spurn spurt squad squat squib stack staff stage staid stain stair stake stale stalk stall stamp stand stank stare stark start stash state stave stead steak steal steam steed steel steep steer stein stern stick stiff still stilt sting stink stint stock stoic stoke stole stomp stone stony stood stool stoop store stork storm story stout stove strap straw stray strip strut stuck study stuff stump stung stunk stunt style suave sugar suing suite sulky sully sumac sunny super surer surge surly sushi swami swamp swarm swash swath swear sweat sweep sweet swell swept swift swill swine swing swirl swish swoon swoop sword swore sworn swung synod syrup tabby table taboo tacit tacky taffy taint taken taker tally talon tamer tango tangy taper tapir tardy tarot taste tasty tatty taunt tawny teach teary tease teddy teeth tempo tenet tenor tense tenth tepee tepid terra terse testy thank theft their theme there these theta thick thief thigh thing think third thong thorn those three threw throb throw thrum thumb thump thyme tiara tibia tidal tiger tight tilde timer timid tipsy titan tithe title toast today toddy token tonal tonga tonic tooth topaz topic torch torso torus total totem touch tough towel tower toxic toxin trace track tract trade trail train trait tramp trash trawl tread treat trend triad trial tribe trice trick tried tripe trite troll troop trope trout trove truce truck truer truly trump trunk truss trust truth tryst tubal tuber tulip tulle tumor tunic turbo tutor twang tweak tweed tweet twice twine twirl twist twixt tying udder ulcer ultra umbra uncle uncut under undid undue unfed unfit unify union unite unity unlit unmet unset untie until unwed unzip upper upset urban urine usage usher using usual usurp utile utter vague valet valid valor value valve vapid vapor vault vaunt vegan venom venue verge verse verso verve vicar video vigil vigor villa vinyl viola viper viral virus visit visor vista vital vivid vixen vocal vodka vogue voice voila vomit voter vouch vowel vying wacky wafer wager wagon waist waive waltz warty waste watch water waver waxen weary weave wedge weedy weigh weird welch welsh wench whack whale wharf wheat wheel whelp where which whiff while whine whiny whirl whisk white whole whoop whose widen wider widow width wield wight willy wimpy wince winch windy wiser wispy witch witty woken woman women woody wooer wooly woozy wordy world worry worse worst worth would wound woven wrack wrath wreak wreck wrest wring wrist write wrong wrote wrung wryly yacht yearn yeast yield young youth zebra zesty zonal".split(
        " "
      ),
    Re = new Set(H),
    cs =
      "aahed aalii aargh aarti abaca abaci abacs abaft abaka abamp aband abash abask abaya abbas abbed abbes abcee abeam abear abele abers abets abies abler ables ablet ablow abmho abohm aboil aboma aboon abord abore abram abray abrim abrin abris absey absit abuna abune abuts abuzz abyes abysm acais acari accas accoy acerb acers aceta achar ached aches achoo acids acidy acing acini ackee acker acmes acmic acned acnes acock acold acred acres acros acted actin acton acyls adaws adays adbot addax added adder addio addle adeem adhan adieu adios adits adman admen admix adobo adown adoze adrad adred adsum aduki adunc adust advew adyta adzed adzes aecia aedes aegis aeons aerie aeros aesir afald afara afars afear aflaj afore afrit afros agama agami agars agast agave agaze agene agers agger aggie aggri aggro aggry aghas agila agios agism agist agita aglee aglet agley agloo aglus agmas agoge agone agons agood agria agrin agros agued agues aguna aguti aheap ahent ahigh ahind ahing ahint ahold ahull ahuru aidas aided aides aidoi aidos aiery aigas aight ailed aimed aimer ainee ainga aioli aired airer airns airth airts aitch aitus aiver aiyee aizle ajies ajiva ajuga ajwan akees akela akene aking akita akkas alaap alack alamo aland alane alang alans alant alapa alaps alary alate alays albas albee alcid alcos aldea alder aldol aleck alecs alefs aleft aleph alews aleye alfas algal algas algid algin algor algum alias alifs aline alist aliya alkie alkos alkyd alkyl allee allel allis allod allyl almah almas almeh almes almud almug alods aloed aloes aloha aloin aloos alowe altho altos alula alums alure alvar alway amahs amain amate amaut amban ambit ambos ambry ameba ameer amene amens ament amias amice amici amide amido amids amies amiga amigo amine amino amins amirs amlas amman ammon ammos amnia amnic amnio amoks amole amort amour amove amowt amped ampul amrit amuck amyls anana anata ancho ancle ancon andro anear anele anent angas anglo anigh anile anils anima animi anion anise anker ankhs ankus anlas annal annas annat anoas anole anomy ansae antae antar antas anted antes antis antra antre antsy anura anyon apace apage apaid apayd apays apeak apeek apers apert apery apgar aphis apian apiol apish apism apode apods apoop aport appal appay appel appro appui appuy apres apses apsis apsos apted apter aquae aquas araba araks arame arars arbas arced archi arcos arcus ardeb ardri aread areae areal arear areas areca aredd arede arefy areic arene arepa arere arete arets arett argal argan argil argle argol argon argot argus arhat arias ariel ariki arils ariot arish arked arled arles armed armer armet armil arnas arnut aroba aroha aroid arpas arpen arrah arras arret arris arroz arsed arses arsey arsis artal artel artic artis aruhe arums arval arvee arvos aryls asana ascon ascus asdic ashed ashes ashet asked asker askoi askos aspen asper aspic aspie aspis aspro assai assam asses assez assot aster astir astun asura asway aswim asyla ataps ataxy atigi atilt atimy atlas atman atmas atmos atocs atoke atoks atoms atomy atony atopy atria atrip attap attar atuas audad auger aught aulas aulic auloi aulos aumil aunes aunts aurae aural aurar auras aurei aures auric auris aurum autos auxin avale avant avast avels avens avers avgas avine avion avise aviso avize avows avyze awarn awato awave aways awdls aweel aweto awing awmry awned awner awols awork axels axile axils axing axite axled axles axman axmen axoid axone axons ayahs ayaya ayelp aygre ayins ayont ayres ayrie azans azide azido azine azlon azoic azole azons azote azoth azuki azurn azury azygy azyme azyms baaed baals babas babel babes babka baboo babul babus bacca bacco baccy bacha bachs backs baddy baels baffs baffy bafts baghs bagie bahts bahus bahut bails bairn baisa baith baits baiza baize bajan bajra bajri bajus baked baken bakes bakra balas balds baldy baled bales balks balky balls bally balms baloo balsa balti balun balus bambi banak banco bancs banda bandh bands bandy baned banes bangs bania banks banns bants bantu banty banya bapus barbe barbs barby barca barde bardo bards bardy bared barer bares barfi barfs baric barks barky barms barmy barns barny barps barra barre barro barry barye basan based basen baser bases basho basij basks bason basse bassi basso bassy basta basti basto basts bated bates baths batik batta batts battu bauds bauks baulk baurs bavin bawds bawks bawls bawns bawrs bawty bayed bayer bayes bayle bayts bazar bazoo beads beaks beaky beals beams beamy beano beans beany beare bears beath beats beaty beaus beaut beaux bebop becap becke becks bedad bedel bedes bedew bedim bedye beedi beefs beeps beers beery beets befog begad begar begem begot begum beige beigy beins bekah belah belar belay belee belga bells belon belts bemad bemas bemix bemud bends bendy benes benet benga benis benne benni benny bento bents benty bepat beray beres bergs berko berks berme berms berob beryl besat besaw besee beses besit besom besot besti bests betas beted betes beths betid beton betta betty bever bevor bevue bevvy bewet bewig bezes bezil bezzy bhais bhaji bhang bhats bhels bhoot bhuna bhuts biach biali bialy bibbs bibes biccy bices bided bider bides bidet bidis bidon bield biers biffo biffs biffy bifid bigae biggs biggy bigha bight bigly bigos bijou biked biker bikes bikie bilbo bilby biled biles bilgy bilks bills bimah bimas bimbo binal bindi binds biner bines bings bingy binit binks bints biogs biont biota biped bipod birds birks birle birls biros birrs birse birsy bises bisks bisom bitch biter bites bitos bitou bitsy bitte bitts bivia bivvy bizes bizzo bizzy blabs blads blady blaer blaes blaff blags blahs blain blams blart blase blash blate blats blatt blaud blawn blaws blays blear blebs blech blees blent blert blest blets bleys blimy bling blini blins bliny blips blist blite blits blive blobs blocs blogs blook bloop blore blots blows blowy blubs blude bluds bludy blued blues bluet bluey bluid blume blunk blurs blype boabs boaks boars boart boats bobac bobak bobas bobol bobos bocca bocce bocci boche bocks boded bodes bodge bodhi bodle boeps boets boeuf boffo boffs bogan bogey boggy bogie bogle bogue bogus bohea bohos boils boing boink boite boked bokeh bokes bokos bolar bolas bolds boles bolix bolls bolos bolts bolus bomas bombe bombo bombs bonce bonds boned boner bones bongs bonie bonks bonne bonny bonza bonze booai booay boobs boody booed boofy boogy boohs books booky bools booms boomy boong boons boord boors boose boots boppy borak boral boras borde bords bored boree borel borer bores borgo boric borks borms borna boron borts borty bortz bosie bosks bosky boson bosun botas botel botes bothy botte botts botty bouge bouks boult bouns bourd bourg bourn bouse bousy bouts bovid bowat bowed bower bowes bowet bowie bowls bowne bowrs bowse boxed boxen boxes boxla boxty boyar boyau boyed boyfs boygs boyla boyos boysy bozos braai brach brack bract brads braes brags brail braks braky brame brane brank brans brant brast brats brava bravi braws braxy brays braza braze bream brede breds breem breer brees breid breis breme brens brent brere brers breve brews breys brier bries brigs briki briks brill brims brins brios brise briss brith brits britt brize broch brock brods brogh brogs brome bromo bronc brond brool broos brose brosy brows brugh bruin bruit brule brume brung brusk brust bruts buats buaze bubal bubas bubba bubbe bubby bubus buchu bucko bucks bucku budas budis budos buffa buffe buffi buffo buffs buffy bufos bufty buhls buhrs buiks buist bukes bulbs bulgy bulks bulla bulls bulse bumbo bumfs bumph bumps bumpy bunas bunce bunco bunde bundh bunds bundt bundu bundy bungs bungy bunia bunje bunjy bunko bunks bunns bunts bunty bunya buoys buppy buran buras burbs burds buret burfi burgh burgs burin burka burke burks burls burns buroo burps burqa burro burrs burry bursa burse busby buses busks busky bussu busti busts busty buteo butes butle butoh butts butty butut butyl buzzy bwana bwazi byded bydes byked bykes byres byrls byssi bytes byway caaed cabas caber cabob caboc cabre cacas cacks cacky cadee cades cadge cadgy cadie cadis cadre caeca caese cafes caffs caged cager cages cagot cahow caids cains caird cajon cajun caked cakes cakey calfs calid calif calix calks calla calls calms calmy calos calpa calps calve calyx caman camas cames camis camos campi campo camps campy camus caned caneh caner canes cangs canid canna canns canso canst canto cants canty capas caped capes capex caphs capiz caple capon capos capot capri capul carap carbo carbs carby cardi cards cardy cared carer cares caret carex carks carle carls carns carny carob carom caron carpi carps carrs carse carta carte carts carvy casas casco cased cases casks casky casts casus cates cauda cauks cauld cauls caums caups cauri causa cavas caved cavel caver caves cavie cawed cawks caxon ceaze cebid cecal cecum ceded ceder cedes cedis ceiba ceili ceils celeb cella celli cells celom celts cense cento cents centu ceorl cepes cerci cered ceres cerge ceria ceric cerne ceroc ceros certs certy cesse cesta cesti cetes cetyl cezve chace chack chaco chado chads chaft chais chals chams chana chang chank chape chaps chapt chara chare chark charr chars chary chats chave chavs chawk chaws chaya chays cheep chefs cheka chela chelp chemo chems chere chert cheth chevy chews chewy chiao chias chibs chica chich chico chics chiel chiks chile chimb chimo chimp chine ching chink chino chins chips chirk chirl chirm chiro chirr chirt chiru chits chive chivs chivy chizz choco chocs chode chogs choil choko choky chola choli cholo chomp chons choof chook choom choon chops chota chott chout choux chowk chows chubs chufa chuff chugs chums churl churr chuse chuts chyle chyme chynd cibol cided cides ciels ciggy cilia cills cimar cimex cinct cines cinqs cions cippi circs cires cirls cirri cisco cissy cists cital cited citer cites cives civet civie civvy clach clade clads claes clags clame clams clans claps clapt claro clart clary clast clats claut clave clavi claws clays cleck cleek cleep clefs clegs cleik clems clepe clept cleve clews clied clies clift clime cline clint clipe clips clipt clits cloam clods cloff clogs cloke clomb clomp clonk clons cloop cloot clops clote clots clour clous clows cloye cloys cloze clubs clues cluey clunk clype cnida coact coady coala coals coaly coapt coarb coate coati coats cobbs cobby cobia coble cobza cocas cocci cocco cocks cocky cocos codas codec coded coden coder codes codex codon coeds coffs cogie cogon cogue cohab cohen cohoe cohog cohos coifs coign coils coins coirs coits coked cokes colas colby colds coled coles coley colic colin colls colly colog colts colza comae comal comas combe combi combo combs comby comer comes comix commo comms commy compo comps compt comte comus coned cones coney confs conga conge congo conia conin conks conky conne conns conte conto conus convo cooch cooed cooee cooer cooey coofs cooks cooky cools cooly coomb cooms coomy coons coops coopt coost coots cooze copal copay coped copen coper copes coppy copra copsy coqui coram corbe corby cords cored cores corey corgi coria corks corky corms corni corno corns cornu corps corse corso cosec cosed coses coset cosey cosie costa coste costs cotan coted cotes coths cotta cotts coude coups courb courd coure cours couta couth coved coves covin cowal cowan cowed cowks cowls cowps cowry coxae coxal coxed coxes coxib coyau coyed coyer coypu cozed cozen cozes cozey cozie craal crabs crags craic craig crake crame crams crans crape craps crapy crare craws crays creds creel crees crems crena creps crepy crewe crews crias cribs cries crims crine crios cripe crips crise crith crits croci crocs croft crogs cromb crome cronk crons crool croon crops crore crost crout crows croze cruck crudo cruds crudy crues cruet cruft crunk cruor crura cruse crusy cruve crwth cryer ctene cubby cubeb cubed cuber cubes cubit cuddy cuffo cuffs cuifs cuing cuish cuits cukes culch culet culex culls cully culms culpa culti cults culty cumec cundy cunei cunit cunts cupel cupid cuppa cuppy curat curbs curch curds curdy cured curer cures curet curfs curia curie curli curls curns curny currs cursi curst cusec cushy cusks cusps cuspy cusso cusum cutch cuter cutes cutey cutin cutis cutto cutty cutup cuvee cuzes cwtch cyano cyans cycad cycas cyclo cyder cylix cymae cymar cymas cymes cymol cysts cytes cyton czars daals dabba daces dacha dacks dadah dadas dados daffs daffy dagga daggy dagos dahls daiko daine daint daker daled dales dalis dalle dalts daman damar dames damme damns damps dampy dancy dangs danio danks danny dants daraf darbs darcy dared darer dares darga dargs daric daris darks darky darns darre darts darzi dashi dashy datal dated dater dates datos datto daube daubs dauby dauds dault daurs dauts daven davit dawah dawds dawed dawen dawks dawns dawts dayan daych daynt dazed dazer dazes deads deair deals deans deare dearn dears deary deash deave deaws deawy debag debby debel debes debts debud debur debus debye decad decaf decan decko decks decos dedal deeds deedy deely deems deens deeps deere deers deets deeve deevs defat deffo defis defog degas degum degus deice deids deify deils deism deist deked dekes dekko deled deles delfs delft delis dells delly delos delph delts deman demes demic demit demob demoi demos dempt denar denay dench denes denet denis dents deoxy derat deray dered deres derig derma derms derns derny deros derro derry derth dervs desex deshi desis desks desse devas devel devis devon devos devot dewan dewar dewax dewed dexes dexie dhaba dhaks dhals dhikr dhobi dhole dholl dhols dhoti dhows dhuti diact dials diane diazo dibbs diced dicer dices dicht dicks dicky dicot dicta dicts dicty diddy didie didos didst diebs diels diene diets diffs dight dikas diked diker dikes dikey dildo dilli dills dimbo dimer dimes dimps dinar dined dines dinge dings dinic dinks dinky dinna dinos dints diols diota dippy dipso diram direr dirke dirks dirls dirts disas disci discs dishy disks disme dital ditas dited dites ditsy ditts ditzy divan divas dived dives divis divna divos divot divvy diwan dixie dixit diyas dizen djinn djins doabs doats dobby dobes dobie dobla dobra dobro docht docks docos docus doddy dodos doeks doers doest doeth doffs dogan doges dogey doggo doggy dogie dohyo doilt doily doits dojos dolce dolci doled doles dolia dolls dolma dolor dolos dolts domal domed domes domic donah donas donee doner donga dongs donko donna donne donny donsy doobs dooce doody dooks doole dools dooly dooms doomy doona doorn doors doozy dopas doped doper dopes dorad dorba dorbs doree dores doric doris dorks dorky dorms dormy dorps dorrs dorsa dorse dorts dorty dosai dosas dosed doseh doser doses dosha dotal doted doter dotes dotty douar douce doucs douks doula douma doums doups doura douse douts doved doven dover doves dovie dowar dowds dowed dower dowie dowle dowls dowly downa downs dowps dowse dowts doxed doxes doxie doyen doyly dozed dozer dozes drabs drack draco draff drags drail drams drant draps drats drave draws drays drear dreck dreed dreer drees dregs dreks drent drere drest dreys dribs drice dries drily drips dript droid droil droke drole drome drony droob droog drook drops dropt drouk drows drubs drugs drums drupe druse drusy druxy dryad dryas dsobo dsomo duads duals duans duars dubbo ducal ducat duces ducks ducky ducts duddy duded dudes duels duets duett duffs dufus duing duits dukas duked dukes dukka dulce dules dulia dulls dulse dumas dumbo dumbs dumka dumky dumps dunam dunch dunes dungs dungy dunks dunno dunny dunsh dunts duomi duomo duped duper dupes duple duply duppy dural duras dured dures durgy durns duroc duros duroy durra durrs durry durst durum durzi dusks dusts duxes dwaal dwale dwalm dwams dwang dwaum dweeb dwile dwine dyads dyers dyked dykes dykey dykon dynel dynes dzhos eagre ealed eales eaned eards eared earls earns earnt earst eased easer eases easle easts eathe eaved eaves ebbed ebbet ebons ebook ecads eched eches echos ecrus edema edged edger edges edile edits educe educt eejit eensy eeven eevns effed egads egers egest eggar egged egger egmas ehing eider eidos eigne eiked eikon eilds eisel ejido ekkas elain eland elans elchi eldin elemi elfed eliad elint elmen eloge elogy eloin elops elpee elsin elute elvan elven elver elves emacs embar embay embog embow embox embus emeer emend emerg emery emeus emics emirs emits emmas emmer emmet emmew emmys emoji emong emote emove empts emule emure emyde emyds enarm enate ended ender endew endue enews enfix eniac enlit enmew ennog enoki enols enorm enows enrol ensew ensky entia enure enurn envoi enzym eorls eosin epact epees ephah ephas ephod ephor epics epode epopt epris eques equid erbia erevs ergon ergos ergot erhus erica erick erics ering erned ernes erose erred erses eruct erugo eruvs erven ervil escar escot esile eskar esker esnes esses estoc estop estro etage etape etats etens ethal ethne ethyl etics etnas ettin ettle etuis etwee etyma eughs euked eupad euros eusol evens evert evets evhoe evils evite evohe ewers ewest ewhow ewked exams exeat execs exeem exeme exfil exies exine exing exits exode exome exons expat expos exude exuls exurb eyass eyers eyots eyras eyres eyrie eyrir ezine fabby faced facer faces facia facta facts faddy faded fader fades fadge fados faena faery faffs faffy faggy fagin fagot faiks fails faine fains fairs faked faker fakes fakey fakie fakir falaj falls famed fames fanal fands fanes fanga fango fangs fanks fanon fanos fanum faqir farad farci farcy fards fared farer fares farle farls farms faros farro farse farts fasci fasti fasts fated fates fatly fatso fatwa faugh fauld fauns faurd fauts fauve favas favel faver faves favus fawns fawny faxed faxes fayed fayer fayne fayre fazed fazes feals feare fears feart fease feats feaze feces fecht fecit fecks fedex feebs feeds feels feens feers feese feeze fehme feint feist felch felid fells felly felts felty femal femes femmy fends fendy fenis fenks fenny fents feods feoff ferer feres feria ferly fermi ferms ferns ferny fesse festa fests festy fetas feted fetes fetor fetta fetts fetwa feuar feuds feued feyed feyer feyly fezes fezzy fiars fiats fibro fices fiche fichu ficin ficos fides fidge fidos fiefs fient fiere fiers fiest fifed fifer fifes fifis figgy figos fiked fikes filar filch filed files filii filks fille fillo fills filmi films filos filum finca finds fined fines finis finks finny finos fiord fiqhs fique fired firer fires firie firks firms firns firry firth fiscs fisks fists fisty fitch fitly fitna fitte fitts fiver fives fixed fixes fixit fjeld flabs flaff flags flaks flamm flams flamy flane flans flaps flary flats flava flawn flaws flawy flaxy flays fleam fleas fleek fleer flees flegs fleme fleur flews flexi flexo fleys flics flied flies flimp flims flips flirs flisk flite flits flitt flobs flocs floes flogs flong flops flors flory flosh flota flote flows flubs flued flues fluey fluky flump fluor flurr fluty fluyt flyby flype flyte foals foams foehn fogey fogie fogle fogou fohns foids foils foins folds foley folia folic folie folks folky fomes fonda fonds fondu fones fonly fonts foods foody fools foots footy foram forbs forby fordo fords forel fores forex forks forky forme forms forts forza forze fossa fosse fouat fouds fouer fouet foule fouls fount fours fouth fovea fowls fowth foxed foxes foxie foyle foyne frabs frack fract frags fraim franc frape fraps frass frate frati frats fraus frays frees freet freit fremd frena freon frere frets fribs frier fries frigs frise frist frith frits fritt frize frizz froes frogs frons frore frorn frory frosh frows frowy frugs frump frush frust fryer fubar fubby fubsy fucks fucus fuddy fudgy fuels fuero fuffs fuffy fugal fuggy fugie fugio fugle fugly fugus fujis fulls fumed fumer fumes fumet fundi funds fundy fungo fungs funks fural furan furca furls furol furrs furth furze furzy fused fusee fusel fuses fusil fusks fusts fusty futon fuzed fuzee fuzes fuzil fyces fyked fykes fyles fyrds fytte gabba gabby gable gaddi gades gadge gadid gadis gadje gadjo gadso gaffs gaged gager gages gaids gains gairs gaita gaits gaitt gajos galah galas galax galea galed gales galls gally galop galut galvo gamas gamay gamba gambe gambo gambs gamed games gamey gamic gamin gamme gammy gamps ganch gandy ganef ganev gangs ganja ganof gants gaols gaped gaper gapes gapos gappy garbe garbo garbs garda gares garis garms garni garre garth garum gases gasps gaspy gasts gatch gated gater gates gaths gator gauch gaucy gauds gauje gault gaums gaumy gaups gaurs gauss gauzy gavot gawcy gawds gawks gawps gawsy gayal gazal gazar gazed gazes gazon gazoo geals geans geare gears geats gebur gecks geeks geeps geest geist geits gelds gelee gelid gelly gelts gemel gemma gemmy gemot genal genas genes genet genic genii genip genny genoa genom genro gents genty genua genus geode geoid gerah gerbe geres gerle germs germy gerne gesse gesso geste gests getas getup geums geyan geyer ghast ghats ghaut ghazi ghees ghest ghyll gibed gibel giber gibes gibli gibus gifts gigas gighe gigot gigue gilas gilds gilet gills gilly gilpy gilts gimel gimme gimps gimpy ginch ginge gings ginks ginny ginzo gipon gippo gippy girds girls girns giron giros girrs girsh girts gismo gisms gists gitch gites giust gived gives gizmo glace glads glady glaik glair glams glans glary glaum glaur glazy gleba glebe gleby glede gleds gleed gleek glees gleet gleis glens glent gleys glial glias glibs gliff glift glike glime glims glisk glits glitz gloam globi globs globy glode glogg gloms gloop glops glost glout glows gloze glued gluer glues gluey glugs glume glums gluon glute gluts gnarl gnarr gnars gnats gnawn gnaws gnows goads goafs goals goary goats goaty goban gobar gobbi gobbo gobby gobis gobos godet godso goels goers goest goeth goety gofer goffs gogga gogos goier gojis golds goldy goles golfs golpe golps gombo gomer gompa gonch gonef gongs gonia gonif gonks gonna gonof gonys gonzo gooby goods goofs googs gooks gooky goold gools gooly goons goony goops goopy goors goory goosy gopak gopik goral goras gored gores goris gorms gormy gorps gorse gorsy gosht gosse gotch goths gothy gotta gouch gouks goura gouts gouty gowan gowds gowfs gowks gowls gowns goxes goyim goyle graal grabs grads graff graip grama grame gramp grams grana grans grapy gravs grays grebe grebo grece greek grees grege grego grein grens grese greve grews greys grice gride grids griff grift grigs grike grins griot grips gript gripy grise grist grisy grith grits grize groat grody grogs groks groma grone groof grosz grots grouf grovy grows grrls grrrl grubs grued grues grufe grume grump grund gryce gryde gryke grype grypt guaco guana guano guans guars gucks gucky gudes guffs gugas guids guimp guiro gulag gular gulas gules gulet gulfs gulfy gulls gulph gulps gulpy gumma gummi gumps gundy gunge gungy gunks gunky gunny guqin gurdy gurge gurls gurly gurns gurry gursh gurus gushy gusla gusle gusli gussy gusts gutsy gutta gutty guyed guyle guyot guyse gwine gyals gyans gybed gybes gyeld gymps gynae gynie gynny gynos gyoza gypos gyppo gyppy gyral gyred gyres gyron gyros gyrus gytes gyved gyves haafs haars hable habus hacek hacks hadal haded hades hadji hadst haems haets haffs hafiz hafts haggs hahas haick haika haiks haiku hails haily hains haint hairs haith hajes hajis hajji hakam hakas hakea hakes hakim hakus halal haled haler hales halfa halfs halid hallo halls halma halms halon halos halse halts halva halwa hamal hamba hamed hames hammy hamza hanap hance hanch hands hangi hangs hanks hanky hansa hanse hants haole haoma hapax haply happi hapus haram hards hared hares harim harks harls harms harns haros harps harts hashy hasks hasps hasta hated hates hatha hauds haufs haugh hauld haulm hauls hault hauns hause haver haves hawed hawks hawms hawse hayed hayer hayey hayle hazan hazed hazer hazes heads heald heals heame heaps heapy heare hears heast heats heben hebes hecht hecks heder hedgy heeds heedy heels heeze hefte hefts heids heigh heils heirs hejab hejra heled heles helio hells helms helos helot helps helve hemal hemes hemic hemin hemps hempy hench hends henge henna henny henry hents hepar herbs herby herds heres herls herma herms herns heros herry herse hertz herye hesps hests hetes heths heuch heugh hevea hewed hewer hewgh hexad hexed hexer hexes hexyl heyed hiant hicks hided hider hides hiems highs hight hijab hijra hiked hiker hikes hikoi hilar hilch hillo hills hilts hilum hilus himbo hinau hinds hings hinky hinny hints hiois hiply hired hiree hirer hires hissy hists hithe hived hiver hives hizen hoaed hoagy hoars hoary hoast hobos hocks hocus hodad hodja hoers hogan hogen hoggs hoghs hohed hoick hoied hoiks hoing hoise hokas hoked hokes hokey hokis hokku hokum holds holed holes holey holks holla hollo holme holms holon holos holts homas homed homes homey homie homme homos honan honda honds honed honer hones hongi hongs honks honky hooch hoods hoody hooey hoofs hooka hooks hooky hooly hoons hoops hoord hoors hoosh hoots hooty hoove hopak hoped hoper hopes hoppy horah horal horas horis horks horme horns horst horsy hosed hosel hosen hoser hoses hosey hosta hosts hotch hoten hotty houff houfs hough houri hours houts hovea hoved hoven hoves howbe howes howff howfs howks howls howre howso hoxed hoxes hoyas hoyed hoyle hubby hucks hudna hudud huers huffs huffy huger huggy huhus huias hulas hules hulks hulky hullo hulls hully humas humfs humic humps humpy hunks hunts hurds hurls hurly hurra hurst hurts hushy husks husos hutia huzza huzzy hwyls hydra hyens hygge hying hykes hylas hyleg hyles hylic hymns hynde hyoid hyped hypes hypha hyphy hypos hyrax hyson hythe iambi iambs ibrik icers iched iches ichor icier icker ickle icons ictal ictic ictus idant ideas idees ident idled idles idola idols idyls iftar igapo igged iglus ihram ikans ikats ikons ileac ileal ileum ileus iliad ilial ilium iller illth imago imams imari imaum imbar imbed imide imido imids imine imino immew immit immix imped impis impot impro imshi imshy inapt inarm inbye incel incle incog incus incut indew india indie indol indow indri indue inerm infix infos infra ingan ingle inion inked inker inkle inned innit inorb inrun inset inspo intel intil intis intra inula inure inurn inust invar inwit iodic iodid iodin iotas ippon irade irids iring irked iroko irone irons isbas ishes isled isles isnae issei istle items ither ivied ivies ixias ixnay ixora ixtle izard izars izzat jaaps jabot jacal jacks jacky jaded jades jafas jaffa jagas jager jaggs jaggy jagir jagra jails jaker jakes jakey jalap jalop jambe jambo jambs jambu james jammy jamon janes janns janny janty japan japed japer japes jarks jarls jarps jarta jarul jasey jaspe jasps jatos jauks jaups javas javel jawan jawed jaxie jeans jeats jebel jedis jeels jeely jeeps jeers jeeze jefes jeffs jehad jehus jelab jello jells jembe jemmy jenny jeons jerid jerks jerry jesse jests jesus jetes jeton jeune jewed jewie jhala jiaos jibba jibbs jibed jiber jibes jiffs jiggy jigot jihad jills jilts jimmy jimpy jingo jinks jinne jinni jinns jirds jirga jirre jisms jived jiver jives jivey jnana jobed jobes jocko jocks jocky jocos jodel joeys johns joins joked jokes jokey jokol joled joles jolls jolts jolty jomon jomos jones jongs jonty jooks joram jorum jotas jotty jotun joual jougs jouks joule jours jowar jowed jowls jowly joyed jubas jubes jucos judas judgy judos jugal jugum jujus juked jukes jukus julep jumar jumby jumps junco junks junky jupes jupon jural jurat jurel jures justs jutes jutty juves juvie kaama kabab kabar kabob kacha kacks kadai kades kadis kafir kagos kagus kahal kaiak kaids kaies kaifs kaika kaiks kails kaims kaing kains kakas kakis kalam kales kalif kalis kalpa kamas kames kamik kamis kamme kanae kanas kandy kaneh kanes kanga kangs kanji kants kanzu kaons kapas kaphs kapok kapow kapus kaput karas karat karks karns karoo karos karri karst karsy karts karzy kasha kasme katal katas katis katti kaugh kauri kauru kaury kaval kavas kawas kawau kawed kayle kayos kazis kazoo kbars kebar kebob kecks kedge kedgy keech keefs keeks keels keema keeno keens keeps keets keeve kefir kehua keirs kelep kelim kells kelly kelps kelpy kelts kelty kembo kembs kemps kempt kempy kenaf kench kendo kenos kente kents kepis kerbs kerel kerfs kerky kerma kerne kerns keros kerry kerve kesar kests ketas ketch ketes ketol kevel kevil kexes keyed keyer khadi khafs khans khaph khats khaya khazi kheda kheth khets khoja khors khoum khuds kiaat kiack kiang kibbe kibbi kibei kibes kibla kicks kicky kiddo kiddy kidel kidge kiefs kiers kieve kievs kight kikes kikoi kiley kilim kills kilns kilos kilps kilts kilty kimbo kinas kinda kinds kindy kines kings kinin kinks kinos kiore kipes kippa kipps kirby kirks kirns kirri kisan kissy kists kited kiter kites kithe kiths kitul kivas kiwis klang klaps klett klick klieg kliks klong kloof kluge klutz knags knaps knarl knars knaur knawe knees knell knish knits knive knobs knops knosp knots knout knowe knows knubs knurl knurr knurs knuts koans koaps koban kobos koels koffs kofta kogal kohas kohen kohls koine kojis kokam kokas koker kokra kokum kolas kolos kombu konbu kondo konks kooks kooky koori kopek kophs kopje koppa korai koras korat kores korma koros korun korus koses kotch kotos kotow koura kraal krabs kraft krais krait krang krans kranz kraut krays kreep kreng krewe krona krone kroon krubi krunk ksars kubie kudos kudus kudzu kufis kugel kuias kukri kukus kulak kulan kulas kulfi kumis kumys kuris kurre kurta kurus kusso kutas kutch kutis kutus kuzus kvass kvell kwela kyack kyaks kyang kyars kyats kybos kydst kyles kylie kylin kylix kyloe kynde kynds kypes kyrie kytes kythe laari labda labia labis labra laced lacer laces lacet lacey lacks laddy laded lader lades laers laevo lagan lahal lahar laich laics laids laigh laika laiks laird lairs lairy laith laity laked laker lakes lakhs lakin laksa laldy lalls lamas lambs lamby lamed lamer lames lamia lammy lamps lanai lanas lanch lande lands lanes lanks lants lapin lapis lapje larch lards lardy laree lares largo laris larks larky larns larnt larum lased laser lases lassi lassu lassy lasts latah lated laten latex lathi laths lathy latke latus lauan lauch lauds laufs laund laura laval lavas laved laver laves lavra lavvy lawed lawer lawin lawks lawns lawny laxed laxer laxes laxly layed layin layup lazar lazed lazes lazos lazzi lazzo leads leady leafs leaks leams leans leany leaps leare lears leary leats leavy leaze leben leccy ledes ledgy ledum leear leeks leeps leers leese leets leeze lefte lefts leger leges legge leggo legit lehrs lehua leirs leish leman lemed lemel lemes lemma lemme lends lenes lengs lenis lenos lense lenti lento leone lepid lepra lepta lered leres lerps lesbo leses lests letch lethe letup leuch leuco leuds leugh levas levee leves levin levis lewis lexes lexis lezes lezza lezzy liana liane liang liard liars liart liber libra libri lichi licht licit licks lidar lidos liefs liens liers lieus lieve lifer lifes lifts ligan liger ligge ligne liked liker likes likin lills lilos lilts liman limas limax limba limbi limbs limby limed limen limes limey limma limns limos limpa limps linac linch linds lindy lined lines liney linga lings lingy linin links linky linns linny linos lints linty linum linux lions lipas lipes lipin lipos lippy liras lirks lirot lisks lisle lisps lists litai litas lited liter lites litho liths litre lived liven lives livor livre llano loach loads loafs loams loans loast loave lobar lobed lobes lobos lobus loche lochs locie locis locks locos locum loden lodes loess lofts logan loges loggy logia logie logoi logon logos lohan loids loins loipe loirs lokes lolls lolly lolog lomas lomed lomes loner longa longe longs looby looed looey loofa loofs looie looks looky looms loons loony loops loord loots loped loper lopes loppy loral loran lords lordy lorel lores loric loris losed losel losen loses lossy lotah lotas lotes lotic lotos lotsa lotta lotte lotto lotus loued lough louie louis louma lound louns loupe loups loure lours loury louts lovat loved loves lovey lovie lowan lowed lowes lownd lowne lowns lowps lowry lowse lowts loxed loxes lozen luach luaus lubed lubes lubra luces lucks lucre ludes ludic ludos luffa luffs luged luger luges lulls lulus lumas lumbi lumme lummy lumps lunas lunes lunet lungi lungs lunks lunts lupin lured lurer lures lurex lurgi lurgy lurks lurry lurve luser lushy lusks lusts lusus lutea luted luter lutes luvvy luxed luxer luxes lweis lyams lyard lyart lyase lycea lycee lycra lymes lynes lyres lysed lyses lysin lysis lysol lyssa lyted lytes lythe lytic lytta maaed maare maars mabes macas maced macer maces mache machi machs macks macle macon madge madid madre maerl mafic mages maggs magot magus mahoe mahua mahwa maids maiko maiks maile maill mails maims mains maire mairs maise maist makar makes makis makos malam malar malas malax males malic malik malis malls malms malmy malts malty malus malva malwa mamas mamba mamee mamey mamie manas manat mandi maneb maned maneh manes manet mangs manis manky manna manos manse manta manto manty manul manus mapau maqui marae marah maras marcs mardy mares marge margs maria marid marka marks marle marls marly marms maron maror marra marri marse marts marvy masas mased maser mases mashy masks massa massy masts masty masus matai mated mater mates maths matin matlo matte matts matza matzo mauby mauds mauls maund mauri mausy mauts mauzy maven mavie mavin mavis mawed mawks mawky mawns mawrs maxed maxes maxis mayan mayas mayed mayos mayst mazed mazer mazes mazey mazut mbira meads meals meane means meany meare mease meath meats mebos mechs mecks medii medle meeds meers meets meffs meins meint meiny meith mekka melas melba melds melic melik mells melts melty memes memos menad mends mened menes menge mengs mensa mense mensh menta mento menus meous meows merch mercs merde mered merel merer meres meril meris merks merle merls merse mesal mesas mesel meses meshy mesic mesne meson messy mesto meted metes metho meths metic metif metis metol metre meuse meved meves mewed mewls meynt mezes mezze mezzo mhorr miaou miaow miasm miaul micas miche micht micks micky micos micra middy midgy midis miens mieve miffs miffy mifty miggs mihas mihis miked mikes mikra mikva milch milds miler miles milfs milia milko milks mille mills milor milos milpa milts milty miltz mimed mimeo mimer mimes mimsy minae minar minas mincy minds mined mines minge mings mingy minis minke minks minny minos mints mired mires mirex mirid mirin mirks mirky mirly miros mirvs mirza misch misdo mises misgo misos missa mists misty mitch miter mites mitis mitre mitts mixed mixen mixer mixes mixte mixup mizen mizzy mneme moans moats mobby mobes mobey mobie moble mochi mochs mochy mocks moder modes modge modii modus moers mofos moggy mohel mohos mohrs mohua mohur moile moils moira moire moits mojos mokes mokis mokos molal molas molds moled moles molla molls molly molto molts molys momes momma mommy momus monad monal monas monde mondo moner mongo mongs monic monie monks monos monte monty moobs mooch moods mooed mooks moola mooli mools mooly moong moons moony moops moors moory moots moove moped moper mopes mopey moppy mopsy mopus morae moras morat moray morel mores moria morne morns morra morro morse morts mosed moses mosey mosks mosso moste mosts moted moten motes motet motey moths mothy motis motte motts motty motus motza mouch moues mould mouls moups moust mousy moved moves mowas mowed mowra moxas moxie moyas moyle moyls mozed mozes mozos mpret mucho mucic mucid mucin mucks mucor mucro mudge mudir mudra muffs mufti mugga muggs muggy muhly muids muils muirs muist mujik mulct muled mules muley mulga mulie mulla mulls mulse mulsh mumms mumps mumsy mumus munga munge mungo mungs munis munts muntu muons muras mured mures murex murid murks murls murly murra murre murri murrs murry murti murva musar musca mused muser muses muset musha musit musks musos musse mussy musth musts mutch muted muter mutes mutha mutis muton mutts muxed muxes muzak muzzy mvule myall mylar mynah mynas myoid myoma myope myops myopy mysid mythi myths mythy myxos mzees naams naans nabes nabis nabks nabla nabob nache nacho nacre nadas naeve naevi naffs nagas naggy nagor nahal naiad naifs naiks nails naira nairu naked naker nakfa nalas naled nalla named namer names namma namus nanas nance nancy nandu nanna nanos nanua napas naped napes napoo nappa nappe nappy naras narco narcs nards nares naric naris narks narky narre nashi natch nates natis natty nauch naunt navar naves navew navvy nawab nazes nazir nazis nduja neafe neals neaps nears neath neats nebek nebel necks neddy needs neeld neele neemb neems neeps neese neeze negro negus neifs neist neive nelis nelly nemas nemns nempt nenes neons neper nepit neral nerds nerka nerks nerol nerts nertz nervy nests netes netop netts netty neuks neume neums nevel neves nevus newbs newed newel newie newsy newts nexts nexus ngaio ngana ngati ngoma ngwee nicad nicht nicks nicol nidal nided nides nidor nidus niefs nieve nifes niffs niffy nifty niger nighs nihil nikab nikah nikau nills nimbi nimbs nimps niner nines ninon nipas nippy niqab nirls nirly nisei nisse nisus niter nites nitid niton nitre nitro nitry nitty nival nixed nixer nixes nixie nizam nkosi noahs nobby nocks nodal noddy nodes nodus noels noggs nohow noils noily noint noirs noles nolls nolos nomas nomen nomes nomic nomoi nomos nonas nonce nones nonet nongs nonis nonny nonyl noobs nooit nooks nooky noons noops nopal noria noris norks norma norms nosed noser noses notal noted noter notes notum nould noule nouls nouns nouny noups novae novas novum noway nowed nowls nowts nowty noxal noxes noyau noyed noyes nubby nubia nucha nuddy nuder nudes nudie nudzh nuffs nugae nuked nukes nulla nulls numbs numen nummy nunny nurds nurdy nurls nurrs nutso nutsy nyaff nyala nying nyssa oaked oaker oakum oared oases oasis oasts oaten oater oaths oaves obang obeah obeli obeys obias obied obiit obits objet oboes obole oboli obols occam ocher oches ochre ochry ocker ocrea octad octan octas octyl oculi odahs odals odeon odeum odism odist odium odors odour odyle odyls ofays offed offie oflag ofter ogams ogeed ogees oggin ogham ogive ogled ogler ogles ogmic ogres ohias ohing ohmic ohone oidia oiled oiler oinks oints ojime okapi okays okehs okras oktas oldie oleic olein olent oleos oleum olios ollas ollav oller ollie ology olpae olpes omasa omber ombus omens omers omits omlah omovs omrah oncer onces oncet oncus onely oners onery onium onkus onlay onned ontic oobit oohed oomph oonts ooped oorie ooses ootid oozed oozes opahs opals opens opepe oping oppos opsin opted opter orach oracy orals orang orant orate orbed orcas orcin ordos oread orfes orgia orgic orgue oribi oriel orixa orles orlon orlop ormer ornis orpin orris ortho orval orzos oscar oshac osier osmic osmol ossia ostia otaku otary ottar ottos oubit oucht ouens ouija oulks oumas oundy oupas ouped ouphe ouphs ourie ousel ousts outby outed outre outro outta ouzel ouzos ovals ovels ovens overs ovist ovoli ovolo ovule owche owies owled owler owlet owned owres owrie owsen oxbow oxers oxeye oxids oxies oxime oxims oxlip oxter oyers ozeki ozzie paals paans pacas paced pacer paces pacey pacha packs pacos pacta pacts padis padle padma padre padri paean paedo paeon paged pager pages pagle pagod pagri paiks pails pains paire pairs paisa paise pakka palas palay palea paled pales palet palis palki palla palls pally palms palmy palpi palps palsa pampa panax pance panda pands pandy paned panes panga pangs panim panko panne panni panto pants panty paoli paolo papas papaw papes pappi pappy parae paras parch pardi pards pardy pared paren pareo pares pareu parev parge pargo paris parki parks parky parle parly parma parol parps parra parrs parti parts parve parvo paseo pases pasha pashm paska paspy passe pasts pated paten pater pates paths patin patka patly patte patus pauas pauls pavan paved paven paver paves pavid pavin pavis pawas pawaw pawed pawer pawks pawky pawls pawns paxes payed payor paysd peage peags peaks peaky peals peans peare pears peart pease peats peaty peavy peaze pebas pechs pecke pecks pecky pedes pedis pedro peece peeks peels peens peeoy peepe peeps peers peery peeve peggy peghs peins peise peize pekan pekes pekin pekoe pelas pelau peles pelfs pells pelma pelon pelta pelts pends pendu pened penes pengo penie penis penks penna penni pents peons peony pepla pepos peppy pepsi perai perce percs perdu perdy perea peres peris perks perms perns perog perps perry perse perst perts perve pervo pervs pervy pesos pests pesty petar peter petit petre petri petti petto pewee pewit peyse phage phang phare pharm pheer phene pheon phese phial phish phizz phlox phoca phono phons phots phpht phuts phyla phyle piani pians pibal pical picas piccy picks picot picra picul piend piers piert pieta piets piezo pight pigmy piing pikas pikau piked piker pikes pikey pikis pikul pilae pilaf pilao pilar pilau pilaw pilch pilea piled pilei piler piles pilis pills pilow pilum pilus pimas pimps pinas pined pines pingo pings pinko pinks pinna pinny pinon pinot pinta pints pinup pions piony pious pioye pioys pipal pipas piped pipes pipet pipis pipit pippy pipul pirai pirls pirns pirog pisco pises pisky pisos pissy piste pitas piths piton pitot pitta piums pixes pized pizes plaas plack plage plans plaps plash plasm plast plats platt platy playa plays pleas plebe plebs plena pleon plesh plews plica plies plims pling plink ploat plods plong plonk plook plops plots plotz plouk plows ploye ploys plues pluff plugs plums plumy pluot pluto plyer poach poaka poake poboy pocks pocky podal poddy podex podge podgy podia poems poeps poets pogey pogge pogos pohed poilu poind pokal poked pokes pokey pokie poled poler poles poley polio polis polje polks polls polly polos polts polys pombe pomes pommy pomos pomps ponce poncy ponds pones poney ponga pongo pongs pongy ponks ponts ponty ponzu poods pooed poofs poofy poohs pooja pooka pooks pools poons poops poopy poori poort poots poove poovy popes poppa popsy porae poral pored porer pores porge porgy porin porks porky porno porns porny porta ports porty posed poses posey posho posts potae potch poted potes potin potoo potsy potto potts potty pouff poufs pouke pouks poule poulp poult poupe poupt pours pouts powan powin pownd powns powny powre poxed poxes poynt poyou poyse pozzy praam prads prahu prams prana prang praos prase prate prats pratt praty praus prays predy preed prees preif prems premy prent preon preop preps presa prese prest preve prexy preys prial pricy prief prier pries prigs prill prima primi primp prims primy prink prion prise priss proas probs prods proem profs progs proin proke prole proll promo proms pronk props prore proso pross prost prosy proto proul prows proyn prunt pruta pryer pryse pseud pshaw psion psoae psoai psoas psora psych psyop pubco pubes pubis pucan pucer puces pucka pucks puddy pudge pudic pudor pudsy pudus puers puffa puffs puggy pugil puhas pujah pujas pukas puked puker pukes pukey pukka pukus pulao pulas puled puler pules pulik pulis pulka pulks pulli pulls pully pulmo pulps pulus pumas pumie pumps punas punce punga pungs punji punka punks punky punny punto punts punty pupae pupas pupus purda pured pures purin puris purls purpy purrs pursy purty puses pusle pussy putid puton putti putto putts puzel pwned pyats pyets pygal pyins pylon pyned pynes pyoid pyots pyral pyran pyres pyrex pyric pyros pyxed pyxes pyxie pyxis pzazz qadis qaids qajaq qanat qapik qibla qophs qorma quads quaff quags quair quais quaky quale quant quare quass quate quats quayd quays qubit quean queme quena quern queyn queys quich quids quiff quims quina quine quino quins quint quipo quips quipu quire quirt quist quits quoad quods quoif quoin quoit quoll quonk quops qursh quyte rabat rabic rabis raced races rache racks racon radge radix radon raffs rafts ragas ragde raged ragee rager rages ragga raggs raggy ragis ragus rahed rahui raias raids raiks raile rails raine rains raird raita raits rajas rajes raked rakee raker rakes rakia rakis rakus rales ramal ramee ramet ramie ramin ramis rammy ramps ramus ranas rance rands ranee ranga rangi rangs rangy ranid ranis ranke ranks rants raped raper rapes raphe rappe rared raree rares rarks rased raser rases rasps rasse rasta ratal ratan ratas ratch rated ratel rater rates ratha rathe raths ratoo ratos ratus rauns raupo raved ravel raver raves ravey ravin rawer rawin rawly rawns raxed raxes rayah rayas rayed rayle rayne razed razee razer razes razoo readd reads reais reaks realo reals reame reams reamy reans reaps rears reast reata reate reave rebbe rebec rebid rebit rebop rebuy recal recce recco reccy recit recks recon recta recti recto redan redds reddy reded redes redia redid redip redly redon redos redox redry redub redux redye reech reede reeds reefs reefy reeks reeky reels reens reest reeve refed refel reffo refis refix refly refry regar reges reggo regie regma regna regos regur rehem reifs reify reiki reiks reink reins reird reist reive rejig rejon reked rekes rekey relet relie relit rello reman remap remen remet remex remix renay rends reney renga renig renin renne renos rente rents reoil reorg repeg repin repla repos repot repps repro reran rerig resat resaw resay resee reses resew resid resit resod resow resto rests resty resus retag retax retem retia retie retox revet revie rewan rewax rewed rewet rewin rewon rewth rexes rezes rheas rheme rheum rhies rhime rhine rhody rhomb rhone rhumb rhyne rhyta riads rials riant riata ribas ribby ribes riced ricer rices ricey richt ricin ricks rides ridgy ridic riels riems rieve rifer riffs rifte rifts rifty riggs rigol riled riles riley rille rills rimae rimed rimer rimes rimus rinds rindy rines rings rinks rioja riots riped ripes ripps rises rishi risks risps risus rites ritts ritzy rivas rived rivel riven rives riyal rizas roads roams roans roars roary roate robed robes roble rocks roded rodes roguy rohes roids roils roily roins roist rojak rojis roked roker rokes rolag roles rolfs rolls romal roman romeo romps ronde rondo roneo rones ronin ronne ronte ronts roods roofs roofy rooks rooky rooms roons roops roopy roosa roose roots rooty roped roper ropes ropey roque roral rores roric rorid rorie rorts rorty rosed roses roset roshi rosin rosit rosti rosts rotal rotan rotas rotch roted rotes rotis rotls roton rotos rotte rouen roues roule rouls roums roups roupy roust routh routs roved roven roves rowan rowed rowel rowen rowie rowme rownd rowth rowts royne royst rozet rozit ruana rubai rubby rubel rubes rubin ruble rubli rubus ruche rucks rudas rudds rudes rudie rudis rueda ruers ruffe ruffs rugae rugal ruggy ruing ruins rukhs ruled rules rumal rumbo rumen rumes rumly rummy rumpo rumps rumpy runch runds runed runes rungs runic runny runts runty rupia rurps rurus rusas ruses rushy rusks rusma russe rusts ruths rutin rutty ryals rybat ryked rykes rymme rynds ryots ryper saags sabal sabed saber sabes sabha sabin sabir sable sabot sabra sabre sacks sacra saddo sades sadhe sadhu sadis sados sadza safed safes sagas sager sages saggy sagos sagum saheb sahib saice saick saics saids saiga sails saims saine sains sairs saist saith sajou sakai saker sakes sakia sakis sakti salal salat salep sales salet salic salix salle salmi salol salop salpa salps salse salto salts salue salut saman samas samba sambo samek samel samen sames samey samfu sammy sampi samps sands saned sanes sanga sangh sango sangs sanko sansa santo sants saola sapan sapid sapor saran sards sared saree sarge sargo sarin saris sarks sarky sarod saros sarus saser sasin sasse satai satay sated satem sates satis sauba sauch saugh sauls sault saunt saury sauts saved saver saves savey savin sawah sawed sawer saxes sayed sayer sayid sayne sayon sayst sazes scabs scads scaff scags scail scala scall scams scand scans scapa scape scapi scarp scars scart scath scats scatt scaud scaup scaur scaws sceat scena scend schav schmo schul schwa sclim scody scogs scoog scoot scopa scops scots scoug scoup scowp scows scrab scrae scrag scran scrat scraw scray scrim scrip scrob scrod scrog scrow scudi scudo scuds scuff scuft scugs sculk scull sculp sculs scums scups scurf scurs scuse scuta scute scuts scuzz scyes sdayn sdein seals seame seams seamy seans seare sears sease seats seaze sebum secco sechs sects seder sedes sedge sedgy sedum seeds seeks seeld seels seely seems seeps seepy seers sefer segar segni segno segol segos sehri seifs seils seine seirs seise seism seity seiza sekos sekts selah seles selfs sella selle sells selva semee semes semie semis senas sends senes sengi senna senor sensa sensi sente senti sents senvy senza sepad sepal sepic sepoy septa septs serac serai seral sered serer seres serfs serge seric serin serks seron serow serra serre serrs serry servo sesey sessa setae setal seton setts sewan sewar sewed sewel sewen sewin sexed sexer sexes sexto sexts seyen shads shags shahs shako shakt shalm shaly shama shams shand shans shaps sharn shash shaul shawm shawn shaws shaya shays shchi sheaf sheal sheas sheds sheel shend shent sheol sherd shere shero shets sheva shewn shews shiai shiel shier shies shill shily shims shins ships shirr shirs shish shiso shist shite shits shiur shiva shive shivs shlep shlub shmek shmoe shoat shoed shoer shoes shogi shogs shoji shojo shola shool shoon shoos shope shops shorl shote shots shott showd shows shoyu shred shris shrow shtik shtum shtup shule shuln shuls shuns shura shute shuts shwas shyer sials sibbs sibyl sices sicht sicko sicks sicky sidas sided sider sides sidha sidhe sidle sield siens sient sieth sieur sifts sighs sigil sigla signa signs sijos sikas siker sikes silds siled silen siler siles silex silks sills silos silts silty silva simar simas simba simis simps simul sinds sined sines sings sinhs sinks sinky sinus siped sipes sippy sired siree sires sirih siris siroc sirra sirup sisal sises sista sists sitar sited sites sithe sitka situp situs siver sixer sixes sixmo sixte sizar sized sizel sizer sizes skags skail skald skank skart skats skatt skaws skean skear skeds skeed skeef skeen skeer skees skeet skegg skegs skein skelf skell skelm skelp skene skens skeos skeps skers skets skews skids skied skies skiey skimo skims skink skins skint skios skips skirl skirr skite skits skive skivy sklim skoal skody skoff skogs skols skool skort skosh skran skrik skuas skugs skyed skyer skyey skyfs skyre skyrs skyte slabs slade slaes slags slaid slake slams slane slank slaps slart slats slaty slaws slays slebs sleds sleer slews sleys slier slily slims slipe slips slipt slish slits slive sloan slobs sloes slogs sloid slojd slomo sloom sloot slops slopy slorm slots slove slows sloyd slubb slubs slued slues sluff slugs sluit slums slurb slurs sluse sluts slyer slype smaak smaik smalm smalt smarm smaze smeek smees smeik smeke smerk smews smirr smirs smits smogs smoko smolt smoor smoot smore smorg smout smowt smugs smurs smush smuts snabs snafu snags snaps snarf snark snars snary snash snath snaws snead sneap snebs sneck sneds sneed snees snell snibs snick snies snift snigs snips snipy snirt snits snobs snods snoek snoep snogs snoke snood snook snool snoot snots snowk snows snubs snugs snush snyes soaks soaps soare soars soave sobas socas soces socko socks socle sodas soddy sodic sodom sofar sofas softa softs softy soger sohur soils soily sojas sojus sokah soken sokes sokol solah solan solas solde soldi soldo solds soled solei soler soles solon solos solum solus soman somas sonce sonde sones songs sonly sonne sonny sonse sonsy sooey sooks sooky soole sools sooms soops soote soots sophs sophy sopor soppy sopra soral soras sorbo sorbs sorda sordo sords sored soree sorel sorer sores sorex sorgo sorns sorra sorta sorts sorus soths sotol souce souct sough souks souls soums soups soupy sours souse souts sowar sowce sowed sowff sowfs sowle sowls sowms sownd sowne sowps sowse sowth soyas soyle soyuz sozin spacy spado spaed spaer spaes spags spahi spail spain spait spake spald spale spall spalt spams spane spang spans spard spars spart spate spats spaul spawl spaws spayd spays spaza spazz speal spean speat specs spect speel speer speil speir speks speld spelk speos spets speug spews spewy spial spica spick spics spide spier spies spiff spifs spiks spile spims spina spink spins spirt spiry spits spitz spivs splay splog spode spods spoom spoor spoot spork sposh spots sprad sprag sprat spred sprew sprit sprod sprog sprue sprug spuds spued spuer spues spugs spule spume spumy spurs sputa spyal spyre squab squaw squeg squid squit squiz stabs stade stags stagy staig stane stang staph staps starn starr stars stats staun staws stays stean stear stedd stede steds steek steem steen steil stela stele stell steme stems stend steno stens stent steps stept stere stets stews stewy steys stich stied sties stilb stile stime stims stimy stipa stipe stire stirk stirp stirs stive stivy stoae stoai stoas stoat stobs stoep stogy stoit stoln stoma stond stong stonk stonn stook stoor stope stops stopt stoss stots stott stoun stoup stour stown stowp stows strad strae strag strak strep strew stria strig strim strop strow stroy strum stubs stude studs stull stulm stumm stums stuns stupa stupe sture sturt styed styes styli stylo styme stymy styre styte subah subas subby suber subha succi sucks sucky sucre sudds sudor sudsy suede suent suers suete suets suety sugan sughs sugos suhur suids suint suits sujee sukhs sukuk sulci sulfa sulfo sulks sulph sulus sumis summa sumos sumph sumps sunis sunks sunna sunns sunup supes supra surah sural suras surat surds sured sures surfs surfy surgy surra sused suses susus sutor sutra sutta swabs swack swads swage swags swail swain swale swaly swamy swang swank swans swaps swapt sward sware swarf swart swats swayl sways sweal swede sweed sweel sweer swees sweir swelt swerf sweys swies swigs swile swims swink swipe swire swiss swith swits swive swizz swobs swole swoln swops swopt swots swoun sybbe sybil syboe sybow sycee syces sycon syens syker sykes sylis sylph sylva symar synch syncs synds syned synes synth syped sypes syphs syrah syren sysop sythe syver taals taata taber tabes tabid tabis tabla tabor tabun tabus tacan taces tacet tache tacho tachs tacks tacos tacts taels tafia taggy tagma tahas tahrs taiga taigs taiko tails tains taira taish taits tajes takas takes takhi takin takis takky talak talaq talar talas talcs talcy talea taler tales talks talky talls talma talpa taluk talus tamal tamed tames tamin tamis tammy tamps tanas tanga tangi tangs tanhs tanka tanks tanky tanna tansy tanti tanto tanty tapas taped tapen tapes tapet tapis tappa tapus taras tardo tared tares targa targe tarns taroc tarok taros tarps tarre tarry tarsi tarts tarty tasar tased taser tases tasks tassa tasse tasso tatar tater tates taths tatie tatou tatts tatus taube tauld tauon taupe tauts tavah tavas taver tawai tawas tawed tawer tawie tawse tawts taxed taxer taxes taxis taxol taxon taxor taxus tayra tazza tazze teade teads teaed teaks teals teams tears teats teaze techs techy tecta teels teems teend teene teens teeny teers teffs teggs tegua tegus tehrs teiid teils teind teins telae telco teles telex telia telic tells telly teloi telos temed temes tempi temps tempt temse tench tends tendu tenes tenge tenia tenne tenno tenny tenon tents tenty tenue tepal tepas tepoy terai teras terce terek teres terfe terfs terga terms terne terns terry terts tesla testa teste tests tetes teths tetra tetri teuch teugh tewed tewel tewit texas texes texts thack thagi thaim thale thali thana thane thang thans thanx tharm thars thaws thawy thebe theca theed theek thees thegn theic thein thelf thema thens theow therm thesp thete thews thewy thigs thilk thill thine thins thiol thirl thoft thole tholi thoro thorp thous thowl thrae thraw thrid thrip throe thuds thugs thuja thunk thurl thuya thymi thymy tians tiars tical ticca ticed tices tichy ticks ticky tiddy tided tides tiers tiffs tifos tifts tiges tigon tikas tikes tikis tikka tilak tiled tiler tiles tills tilly tilth tilts timbo timed times timon timps tinas tinct tinds tinea tined tines tinge tings tinks tinny tints tinty tipis tippy tired tires tirls tiros tirrs titch titer titis titre titty titup tiyin tiyns tizes tizzy toads toady toaze tocks tocky tocos todde toeas toffs toffy tofts tofus togae togas toged toges togue tohos toile toils toing toise toits tokay toked toker tokes tokos tolan tolar tolas toled toles tolls tolly tolts tolus tolyl toman tombs tomes tomia tommy tomos tondi tondo toned toner tones toney tongs tonka tonks tonne tonus tools tooms toons toots toped topee topek toper topes tophe tophi tophs topis topoi topos toppy toque torah toran toras torcs tores toric torii toros torot torrs torse torsi torsk torta torte torts tosas tosed toses toshy tossy toted toter totes totty touks touns tours touse tousy touts touze touzy towed towie towns towny towse towsy towts towze towzy toyed toyer toyon toyos tozed tozes tozie trabs trads tragi traik trams trank tranq trans trant trape traps trapt trass trats tratt trave trayf trays treck treed treen trees trefa treif treks trema trems tress trest trets trews treyf treys triac tride trier tries triff trigo trigs trike trild trill trims trine trins triol trior trios trips tripy trist troad troak troat trock trode trods trogs trois troke tromp trona tronc trone tronk trons trooz troth trots trows troys trued trues trugo trugs trull tryer tryke tryma tryps tsade tsadi tsars tsked tsuba tsubo tuans tuart tuath tubae tubar tubas tubby tubed tubes tucks tufas tuffe tuffs tufts tufty tugra tuile tuina tuism tuktu tules tulpa tulsi tumid tummy tumps tumpy tunas tunds tuned tuner tunes tungs tunny tupek tupik tuple tuque turds turfs turfy turks turme turms turns turnt turps turrs tushy tusks tusky tutee tutti tutty tutus tuxes tuyer twaes twain twals twank twats tways tweel tween tweep tweer twerk twerp twier twigs twill twilt twink twins twiny twire twirp twite twits twoer twyer tyees tyers tyiyn tykes tyler tymps tynde tyned tynes typal typed types typey typic typos typps typto tyran tyred tyres tyros tythe tzars udals udons ugali ugged uhlan uhuru ukase ulama ulans ulema ulmin ulnad ulnae ulnar ulnas ulpan ulvas ulyie ulzie umami umbel umber umble umbos umbre umiac umiak umiaq ummah ummas ummed umped umphs umpie umpty umrah umras unais unapt unarm unary unaus unbag unban unbar unbed unbid unbox uncap unces uncia uncos uncoy uncus undam undee undos undug uneth unfix ungag unget ungod ungot ungum unhat unhip unica units unjam unked unket unkid unlaw unlay unled unlet unlid unman unmew unmix unpay unpeg unpen unpin unred unrid unrig unrip unsaw unsay unsee unsew unsex unsod untax untin unwet unwit unwon upbow upbye updos updry upend upjet uplay upled uplit upped upran uprun upsee upsey uptak upter uptie uraei urali uraos urare urari urase urate urbex urbia urdee ureal ureas uredo ureic urena urent urged urger urges urial urite urman urnal urned urped ursae ursid urson urubu urvas users usnea usque usure usury uteri uveal uveas uvula vacua vaded vades vagal vagus vails vaire vairs vairy vakas vakil vales valis valse vamps vampy vanda vaned vanes vangs vants vaped vaper vapes varan varas vardy varec vares varia varix varna varus varve vasal vases vasts vasty vatic vatus vauch vaute vauts vawte vaxes veale veals vealy veena veeps veers veery vegas veges vegie vegos vehme veils veily veins veiny velar velds veldt veles vells velum venae venal vends vendu veney venge venin vents venus verbs verra verry verst verts vertu vespa vesta vests vetch vexed vexer vexes vexil vezir vials viand vibes vibex vibey viced vices vichy viers views viewy vifda viffs vigas vigia vilde viler villi vills vimen vinal vinas vinca vined viner vines vinew vinic vinos vints viold viols vired vireo vires virga virge virid virls virtu visas vised vises visie visne vison visto vitae vitas vitex vitro vitta vivas vivat vivda viver vives vizir vizor vleis vlies vlogs voars vocab voces voddy vodou vodun voema vogie voids voile voips volae volar voled voles volet volks volta volte volti volts volva volve vomer voted votes vouge voulu vowed vower voxel vozhd vraic vrils vroom vrous vrouw vrows vuggs vuggy vughs vughy vulgo vulns vulva vutty waacs wacke wacko wacks wadds waddy waded wader wades wadge wadis wadts waffs wafts waged wages wagga wagyu wahoo waide waifs waift wails wains wairs waite waits wakas waked waken waker wakes wakfs waldo walds waled waler wales walie walis walks walla walls wally walty wamed wames wamus wands waned wanes waney wangs wanks wanky wanle wanly wanna wants wanty wanze waqfs warbs warby wards wared wares warez warks warms warns warps warre warst warts wases washy wasms wasps waspy wasts watap watts wauff waugh wauks waulk wauls waurs waved waves wavey wawas wawes wawls waxed waxer waxes wayed wazir wazoo weald weals weamb weans wears webby weber wecht wedel wedgy weeds weeke weeks weels weems weens weeny weeps weepy weest weete weets wefte wefts weids weils weirs weise weize wekas welds welke welks welkt wells welly welts wembs wends wenge wenny wents weros wersh wests wetas wetly wexed wexes whamo whams whang whaps whare whata whats whaup whaur wheal whear wheen wheep wheft whelk whelm whens whets whews wheys whids whift whigs whilk whims whins whios whips whipt whirr whirs whish whiss whist whits whity whizz whomp whoof whoot whops whore whorl whort whoso whows whump whups whyda wicca wicks wicky widdy wides wiels wifed wifes wifey wifie wifty wigan wigga wiggy wikis wilco wilds wiled wiles wilga wilis wilja wills wilts wimps winds wined wines winey winge wings wingy winks winna winns winos winze wiped wiper wipes wired wirer wires wirra wised wises wisha wisht wisps wists witan wited wites withe withs withy wived wiver wives wizen wizes woads woald wocks wodge woful wojus woker wokka wolds wolfs wolly wolve wombs womby womyn wonga wongi wonks wonky wonts woods wooed woofs woofy woold wools woons woops woopy woose woosh wootz words works worms wormy worts wowed wowee woxen wrang wraps wrapt wrast wrate wrawl wrens wrick wried wrier wries writs wroke wroot wroth wryer wuddy wudus wulls wurst wuses wushu wussy wuxia wyled wyles wynds wynns wyted wytes xebec xenia xenic xenon xeric xerox xerus xoana xrays xylan xylem xylic xylol xylyl xysti xysts yaars yabas yabba yabby yacca yacka yacks yaffs yager yages yagis yahoo yaird yakka yakow yales yamen yampy yamun yangs yanks yapok yapon yapps yappy yarak yarco yards yarer yarfa yarks yarns yarrs yarta yarto yates yauds yauld yaups yawed yawey yawls yawns yawny yawps ybore yclad ycled ycond ydrad ydred yeads yeahs yealm yeans yeard years yecch yechs yechy yedes yeeds yeesh yeggs yelks yells yelms yelps yelts yenta yente yerba yerds yerks yeses yesks yests yesty yetis yetts yeuks yeuky yeven yeves yewen yexed yexes yfere yiked yikes yills yince yipes yippy yirds yirks yirrs yirth yites yitie ylems ylike ylkes ymolt ympes yobbo yobby yocks yodel yodhs yodle yogas yogee yoghs yogic yogin yogis yoick yojan yoked yokel yoker yokes yokul yolks yolky yomim yomps yonic yonis yonks yoofs yoops yores yorks yorps youks yourn yours yourt youse yowed yowes yowie yowls yowza yrapt yrent yrivd yrneh ysame ytost yuans yucas yucca yucch yucko yucks yucky yufts yugas yuked yukes yukky yukos yulan yules yummo yummy yumps yupon yuppy yurta yurts yuzus zabra zacks zaida zaidy zaire zakat zaman zambo zamia zanja zante zanza zanze zappy zarfs zaris zatis zaxes zayin zazen zeals zebec zebub zebus zedas zeins zendo zerda zerks zeros zests zetas zexes zezes zhomo zibet ziffs zigan zilas zilch zilla zills zimbi zimbs zinco zincs zincy zineb zines zings zingy zinke zinky zippo zippy ziram zitis zizel zizit zlote zloty zoaea zobos zobus zocco zoeae zoeal zoeas zoism zoist zombi zonae zonda zoned zoner zones zonks zooea zooey zooid zooks zooms zoons zooty zoppa zoppo zoril zoris zorro zouks zowee zowie zulus zupan zupas zuppa zurfs zuzim zygal zygon zymes zymic".split(
        " "
      ),
    Oe = new Set(cs),
    R = (e, s, t) => {
      window.gtag && gtag(e, s, t);
    },
    S = (e) => {
      Be && e && navigator.vibrate(1);
    },
    ms = (e, s) => {
      if ("RelativeTimeFormat" in Intl) {
        const i = new Intl.RelativeTimeFormat("en", { numeric: "auto" }),
          n = s.valueOf() - e.valueOf();
        for (const o in te) {
          const c = o;
          if (Math.abs(n) > te[c] || o === "second")
            return i.format(Math.round(n / te[c]), c);
        }
        return `${n} ms`;
      }
      const t = s.getTime() - e.getTime();
      let l = Math.floor(t / te.hour);
      return l > 1
        ? "in " + l + " hours"
        : ((l = Math.floor(t / te.minute)),
          l > 1
            ? "in " + l + " minutes"
            : "in " + Math.floor(t / te.second) + " seconds");
    },
    Ee = (e, s) => {
      const t = s.split(""),
        l = e.split(""),
        i = new Array(Y).fill("none"),
        n = {};
      for (let o = 0; o < Y; o++) n[l[o]] = 0;
      for (let o = 0; o < Y; o++)
        t[o] === l[o] &&
          ((t[o] = " "), (n[l[o]] = 2), (l[o] = " "), (i[o] = "correct"));
      for (let o = 0; o < Y; o++)
        t.indexOf(l[o]) !== -1 &&
          t[o] !== l[o] &&
          l[o] !== " " &&
          (n[l[o]] != 2 && (n[l[o]] = 1),
          (t[t.indexOf(l[o])] = " "),
          (i[o] = "diff"));
      return i;
    },
    be = (e, s) => {
      const t = [[], [], [], []];
      for (let l = 0; l < s.length; l++) {
        const i = e.indexOf(s[l]);
        for (let n = 0; n < e.length; n++)
          (n <= i || i === -1) && t[l].push(Ee(e[n], s[l]));
      }
      return t;
    },
    ne = (e) => {
      let s;
      const t = new Ye(e);
      t.random_int31(), t.random_int31(), t.random_int31(), t.random_int31();
      do
        s = [
          H[t.random_int31() % H.length],
          H[t.random_int31() % H.length],
          H[t.random_int31() % H.length],
          H[t.random_int31() % H.length],
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
  function hs() {
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
          history: new Array(C + 4).fill(0),
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
          history: new Array(C + 4).fill(0),
          currentStreak: 0,
          maxStreak: 0,
        },
        darkMode: !0,
        colorblind: !1,
        vibration: !0,
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
    ["daily", "free"].forEach((o) => {
      let c;
      try {
        const a = Number(window.localStorage.getItem("last_" + o)),
          r = window.localStorage.getItem(o + "_guesses") || "",
          d = window.localStorage.getItem(o + "_history"),
          m = d ? d.split(",").map(Number) : new Array(C + 4).fill(0),
          h = Number(window.localStorage.getItem(o + "_current_streak") || 0),
          b = Number(window.localStorage.getItem(o + "_max_streak") || 0);
        if (a && (o === "free" || a === s)) {
          const g = r ? r.split(",") : [],
            f = ne(a);
          (c = {
            seed: a,
            guesses: g,
            answers: f,
            current: "",
            states: be(g, f),
            answersCorrect: [0, 1, 2, 3].map((j) => g.indexOf(f[j])),
            history: m,
            currentStreak: h,
            maxStreak: b,
          }),
            R("event", "restore", {
              mode: o,
              daily_seed: o === "daily" ? a : void 0,
            });
        } else {
          const g = o === "daily" ? s : e.getTime(),
            f = ne(g);
          (c = {
            seed: g,
            guesses: [],
            answers: f,
            current: "",
            states: be([], f),
            answersCorrect: [-1, -1, -1, -1],
            history: m,
            currentStreak: h,
            maxStreak: b,
          }),
            R("event", "start", {
              mode: o,
              daily_seed: o === "daily" ? g : void 0,
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
          states: be([], d),
          answersCorrect: [-1, -1, -1, -1],
          history: new Array(C + 4).fill(0),
          currentStreak: 0,
          maxStreak: 0,
        }),
          R("event", "start", {
            mode: o,
            daily_seed: o === "daily" ? r : void 0,
          });
      }
      t[o] = c;
    });
    const [i, n] = He(t);
    return (
      we(() => {
        try {
          window.localStorage.setItem("dark_mode", String(i.darkMode)),
            window.localStorage.setItem("colorblind", String(i.colorblind)),
            window.localStorage.setItem("vibration", String(i.vibration)),
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
  const $e = Ke(),
    ys = (e) => {
      const [s, t] = hs(),
        l = (a) =>
          s[a].guesses.length === C ||
          s[a].answers.filter((r) => s[a].guesses.indexOf(r) >= 0).length === 4,
        i = (a, r) => {
          t(
            J((d) => {
              d[a].current.length < 5 && !l(a) && (d[a].current += r);
            })
          );
        },
        n = (a) => {
          t(
            J((r) => {
              r[a].current.length > 0 &&
                !l(a) &&
                (r[a].current = r[a].current.slice(0, -1));
            })
          );
        },
        o = (a) => {
          t(
            J((r) => {
              if (
                r[a].current.length === 5 &&
                (Re.has(r[a].current) || Oe.has(r[a].current)) &&
                !l(a)
              ) {
                const d = r[a].current;
                r[a].guesses.push(d), (r[a].current = "");
                for (let m = 0; m < K; m++) {
                  const h = r[a].guesses.indexOf(r[a].answers[m]);
                  (h === -1 || h === r[a].guesses.length - 1) &&
                    r[a].states[m].push(Ee(d, r[a].answers[m])),
                    (r[a].answersCorrect[m] = r[a].guesses.indexOf(
                      r[a].answers[m]
                    ));
                }
                if (
                  (R("event", "guess", {
                    mode: a,
                    daily_seed: a === "daily" ? r[a].seed : void 0,
                    word: d,
                  }),
                  l(a))
                ) {
                  const m = r[a].answersCorrect.reduce(
                    (h, b) => (h += b >= 0 ? 1 : 0),
                    0
                  );
                  if (m === 4) {
                    const h = Math.max(...r[a].answersCorrect);
                    r[a].history[h]++,
                      r[a].currentStreak++,
                      r[a].currentStreak > r[a].maxStreak &&
                        (r[a].maxStreak = r[a].currentStreak),
                      R("event", "win", {
                        mode: a,
                        daily_seed: a === "daily" ? r[a].seed : void 0,
                        guesses: r[a].guesses,
                        num_guesses: h + 1,
                      });
                  } else
                    r[a].history[C + m]++,
                      r[a].currentStreak > 0 &&
                        R("event", "streak_reset", {
                          mode: a,
                          daily_seed: a === "daily" ? r[a].seed : void 0,
                          current_streak: r[a].currentStreak,
                          max_streak: r[a].maxStreak,
                        }),
                      (r[a].currentStreak = 0),
                      R("event", "loss", {
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
                J((r) => {
                  r.darkMode = a;
                })
              );
            },
            setColorblind(a) {
              t(
                J((r) => {
                  r.colorblind = a;
                })
              );
            },
            setVibration(a) {
              t(
                J((r) => {
                  r.vibration = a;
                })
              );
            },
            sendKey(a, r) {
              if (!r.ctrlKey)
                if (r.key === "Backspace") n(a);
                else if (r.key === "Enter") o(a);
                else {
                  const d = r.key.toLocaleLowerCase();
                  if (Le.indexOf(d) == -1) return;
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
                  J((d) => {
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
                J((r) => {
                  if (!l("free")) {
                    const d = r.free.answersCorrect.reduce(
                      (m, h) => (m += h >= 0 ? 1 : 0),
                      0
                    );
                    r.free.history[C + d]++,
                      r.free.currentStreak > 0 &&
                        R("event", "streak_reset", {
                          mode: "free",
                          daily_seed: void 0,
                          current_streak: r.free.currentStreak,
                          max_streak: r.free.maxStreak,
                        }),
                      (r.free.currentStreak = 0),
                      R("event", "loss", {
                        mode: "free",
                        daily_seed: void 0,
                        guesses: r.free.guesses,
                        total_correct: d,
                      }),
                      R("event", "reset", {
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
        y($e.Provider, {
          value: c,
          get children() {
            return e.children;
          },
        })
      );
    },
    V = () => {
      const e = Ne($e);
      if (!e || !e.length)
        throw new Error("GamesDataContext has been used outside provider");
      return e;
    },
    gs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24px" height="24px"><rect x="0" y="0" width="12" height="12" fill="#919191"></rect><rect x="12" y="0" width="12" height="12"></rect><rect x="0" y="12" width="12" height="12"></rect><rect x="12" y="12" width="12" height="12"></rect></svg>'
    ),
    bs =
      p(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor"><g><path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"></path></g></svg>`),
    ps = p(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>'
    ),
    ks = p(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path></svg>'
    ),
    fs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"></path></svg>'
    ),
    ws = p(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>'
    ),
    vs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    ),
    xs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>'
    ),
    zs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>'
    ),
    _s = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>'
    ),
    $s = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M124 7408.71c0-8.08 10.32-13.186 16.916-6.892 3.532 3.36 4.143 8.902 1.248 12.951-3.591 4.92-8.282 4.193-12.76 4.193v-9.588c.041-2.117.747-3.943 3.324-4.816 2.245-.664 4.863.581 5.653 2.947.832 2.533-.374 4.234-1.787 5.272-1.413 1.039-3.616 1.039-5.07.042v3.279c3.138 1.5 8.105-.303 9.684-4.4 1.08-2.864.332-6.185-1.912-8.26-2.701-2.2-5.653-2.74-8.811-1.204-2.204 1.12-3.741 3.404-4.116 5.894v10.834h-2.327L124 7408.71z" transform="translate(-124 -7399)"></path></svg>'
    ),
    js = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>'
    ),
    Cs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>'
    ),
    Ss = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>'
    ),
    qs = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>'
    ),
    Ms = p(
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>'
    ),
    As = (e) =>
      (() => {
        const s = gs.cloneNode(!0),
          t = s.firstChild,
          l = t.nextSibling,
          i = l.nextSibling,
          n = i.nextSibling;
        return (
          de(s, e, !0, !0),
          M(
            (o) => {
              const c = e.colorblind ? "#60a5fa" : "#00cc88",
                a = e.colorblind ? "#60a5fa" : "#00cc88",
                r = e.colorblind ? "#fb923c" : "#ffcc00";
              return (
                c !== o._v$ && O(l, "fill", (o._v$ = c)),
                a !== o._v$2 && O(i, "fill", (o._v$2 = a)),
                r !== o._v$3 && O(n, "fill", (o._v$3 = r)),
                o
              );
            },
            { _v$: void 0, _v$2: void 0, _v$3: void 0 }
          ),
          s
        );
      })(),
    De = (e) =>
      (() => {
        const s = bs.cloneNode(!0);
        return M(() => O(s, "height", (e.height ? e.height : 16) + "px")), s;
      })(),
    Ts = (e) =>
      (() => {
        const s = ps.cloneNode(!0);
        return (
          M(
            (t) => {
              const l = (e.height ? e.height : 24) + "px",
                i = (e.height ? e.height : 24) + "px";
              return (
                l !== t._v$4 && O(s, "height", (t._v$4 = l)),
                i !== t._v$5 && O(s, "width", (t._v$5 = i)),
                t
              );
            },
            { _v$4: void 0, _v$5: void 0 }
          ),
          s
        );
      })(),
    Ns = (e) =>
      (() => {
        const s = ks.cloneNode(!0);
        return (
          M(
            (t) => {
              const l = (e.height ? e.height : 24) + "px",
                i = (e.height ? e.height : 24) + "px";
              return (
                l !== t._v$6 && O(s, "height", (t._v$6 = l)),
                i !== t._v$7 && O(s, "width", (t._v$7 = i)),
                t
              );
            },
            { _v$6: void 0, _v$7: void 0 }
          ),
          s
        );
      })(),
    Is = (e) =>
      (() => {
        const s = fs.cloneNode(!0);
        return (
          M(
            (t) => {
              const l = (e.height ? e.height : 24) + "px",
                i = (e.height ? e.height : 24) + "px";
              return (
                l !== t._v$8 && O(s, "height", (t._v$8 = l)),
                i !== t._v$9 && O(s, "width", (t._v$9 = i)),
                t
              );
            },
            { _v$8: void 0, _v$9: void 0 }
          ),
          s
        );
      })(),
    Ls = (e) =>
      (() => {
        const s = ws.cloneNode(!0);
        return (
          M(
            (t) => {
              const l = (e.height ? e.height : 24) + "px",
                i = (e.height ? e.height : 24) + "px";
              return (
                l !== t._v$10 && O(s, "height", (t._v$10 = l)),
                i !== t._v$11 && O(s, "width", (t._v$11 = i)),
                t
              );
            },
            { _v$10: void 0, _v$11: void 0 }
          ),
          s
        );
      })(),
    Bs = () => vs.cloneNode(!0),
    Rs = (e) =>
      (() => {
        const s = xs.cloneNode(!0);
        return de(s, e, !0, !0), s;
      })(),
    Os = (e) =>
      (() => {
        const s = zs.cloneNode(!0);
        return de(s, e, !0, !0), s;
      })(),
    Es = (e) =>
      (() => {
        const s = _s.cloneNode(!0);
        return de(s, e, !0, !0), s;
      })(),
    Ds = (e) =>
      (() => {
        const s = $s.cloneNode(!0);
        return de(s, e, !0, !0), s;
      })(),
    Gs = () => js.cloneNode(!0),
    Ps = () => Cs.cloneNode(!0),
    Me = () => Ss.cloneNode(!0),
    Ws = () => qs.cloneNode(!0),
    Fs = () => Ms.cloneNode(!0),
    Us = p('<button type="button"></button>'),
    Qs = p(
      '<div class="p-4 rounded-b-lg text-center bg-gray-300 dark:bg-gray-900 border-b-2 border-white dark:border-gray-800"><div class="text-4xl pb-2"></div></div>'
    ),
    Hs = p(
      '<div class="flex items-center justify-center"><div class="ml-2">New Practice Game</div></div>'
    ),
    Ks = p("<div>Next Daily </div>"),
    Ys = (e) =>
      (() => {
        const s = Us.cloneNode(!0);
        return (
          se(s, "click", e.onClick, !0),
          u(s, () => e.children),
          M(
            () =>
              (s.className = `text-lg min-h-[50px] text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 text-center dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:border-gray-800 dark:focus:ring-gray-900 ${e.class}`)
          ),
          s
        );
      })(),
    Vs = (e) => {
      const [s, t] = V(),
        l = _(() =>
          s[e.mode].answersCorrect.reduce((a, r) => (a += r >= 0 ? 1 : 0), 0)
        ),
        i = _(() => new Date(ze.getTime() + (s[e.mode].seed + 1) * _e)),
        [n, o] = Z(new Date()),
        c = setInterval(() => o(new Date()), 1e3);
      return (
        ve(() => clearInterval(c)),
        (() => {
          const a = Qs.cloneNode(!0),
            r = a.firstChild;
          return (
            u(
              r,
              (() => {
                const d = ee(() => l() === 4, !0);
                return () =>
                  d()
                    ? "Quordle Complete!"
                    : l() === 3
                    ? "So Close!"
                    : "Better Luck Next Time!";
              })()
            ),
            u(
              a,
              (() => {
                const d = ee(() => e.mode === "free", !0);
                return () =>
                  d()
                    ? y(Ys, {
                        onClick: () => {
                          S(s.vibration), t.resetFree();
                        },
                        get children() {
                          const m = Hs.cloneNode(!0),
                            h = m.firstChild;
                          return u(m, y(Ws, {}), h), m;
                        },
                      })
                    : (() => {
                        const m = Ks.cloneNode(!0);
                        return m.firstChild, u(m, () => ms(n(), i()), null), m;
                      })();
              })(),
              null
            ),
            M((d) =>
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
            "Daily Quordle #" +
            s.seed.toString(10) +
            `
` +
            G(s.answersCorrect[0]) +
            G(s.answersCorrect[1]) +
            `
` +
            G(s.answersCorrect[2]) +
            G(s.answersCorrect[3]))
        : (t =
            `Practice Quordle
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
quordle.com`);
      const l = t;
      t += `
`;
      let i = C - 1;
      s.answersCorrect[0] >= 0 &&
        s.answersCorrect[1] >= 0 &&
        (i = Math.max(s.answersCorrect[0], s.answersCorrect[1]));
      let n = C - 1;
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
    ye = (e, s, t) =>
      Ce(Fe, null, function* () {
        const [l, i] = Ge(e, s);
        if (
          (R("event", "share", {
            mode: e,
            share_type: t,
            daily_seed: e === "daily" ? s.seed : void 0,
          }),
          t === "clipboard")
        )
          navigator.clipboard
            .writeText(l)
            .then(() => alert("Copied results to clipboard!"))
            .catch((n) => {
              console.error(n), alert("Error copying results to clipboard!");
            });
        else if (t === "share")
          navigator.share({ text: l }).catch((n) => console.error(n));
        else if (t === "image" || t === "image_save") {
          const n = document.createElement("canvas");
          n.style.display = "none";
          let o = C - 1;
          s.answersCorrect[0] >= 0 &&
            s.answersCorrect[1] >= 0 &&
            (o = Math.max(s.answersCorrect[0], s.answersCorrect[1]));
          let c = C - 1;
          s.answersCorrect[2] >= 0 &&
            s.answersCorrect[3] >= 0 &&
            (c = Math.max(s.answersCorrect[2], s.answersCorrect[3]));
          const a = 64,
            r = a / 16,
            d = a / 8,
            m = 0.75,
            h = a / 4;
          (n.width = (a + r) * 11 - r),
            (n.height = (a + r) * (o + 1 + c + 1 + 4) - r);
          const b = n.getContext("2d");
          if (!b) return;
          (b.fillStyle = "black"), b.fillRect(0, 0, n.width, n.height);
          let g = 0,
            f = 0;
          for (let v = 0; v <= o; v++) {
            let w = s.states[0][v];
            for (g = 0; g < Y; g++)
              (b.fillStyle = he(w == null ? void 0 : w[g])),
                le(b, g * (a + r), f * (a + r), a, a, d);
            for (w = s.states[1][v], g = 6; g < Y + 6; g++)
              (b.fillStyle = he(w == null ? void 0 : w[g - 6])),
                le(b, g * (a + r), f * (a + r), a, a, d);
            f++;
          }
          (b.font = a * m + "px Arial"),
            (b.textAlign = "center"),
            (b.textBaseline = "alphabetic"),
            (b.fillStyle = "#ffffff");
          const j =
            e === "daily"
              ? "Daily Quordle #" + s.seed.toString(10)
              : "Practice Quordle";
          let k = b.measureText(j),
            z = k.actualBoundingBoxAscent;
          b.fillText(
            j,
            n.width / 2,
            f * (a + r) + a - (a - z) / 2,
            n.width - h * 2
          ),
            f++;
          for (let v = 0; v < 2; v++) {
            for (let w = 0; w < 2; w++) {
              b.fillStyle =
                s.answersCorrect[w + v * 2] >= 0 ? "#00a6ed" : "#f8312f";
              const E = w * 2 - 1,
                x = n.width / 2 + E * (r / 2) + E * (a / 2);
              if (
                (le(b, x - a / 2, f * (a + r), a, a, d),
                s.answersCorrect[w + v * 2] >= 0)
              ) {
                (b.textAlign = "center"), (b.fillStyle = "#ffffff");
                const $ = String(s.answersCorrect[w + v * 2] + 1);
                (k = b.measureText($)),
                  (z = k.actualBoundingBoxAscent + k.actualBoundingBoxDescent),
                  b.fillText($, x, f * (a + r) + a - (a - z) / 2, a);
              }
            }
            if (e === "free") {
              (b.textAlign = "right"), (b.fillStyle = "#ffffff");
              let w = s.answers[0 + v * 2].toUpperCase();
              (k = b.measureText(w)),
                (z = k.actualBoundingBoxAscent + k.actualBoundingBoxDescent),
                b.fillText(
                  w,
                  n.width / 2 - r / 2 - a - h,
                  f * (a + r) + a - (a - z) / 2,
                  n.width / 2 - r - a - h * 2
                ),
                (b.textAlign = "left"),
                (w = s.answers[1 + v * 2].toUpperCase()),
                (k = b.measureText(w)),
                (z = k.actualBoundingBoxAscent + k.actualBoundingBoxDescent),
                b.fillText(
                  w,
                  n.width / 2 + r / 2 + a + h,
                  f * (a + r) + a - (a - z) / 2,
                  n.width / 2 - r - a - h * 2
                );
            }
            f++;
          }
          (b.textAlign = "center"),
            (b.textBaseline = "middle"),
            (b.fillStyle = "#ffffff"),
            b.fillText(
              "quordle.com",
              n.width / 2,
              f * (a + r) + a / 2,
              n.width
            ),
            f++;
          for (let v = 0; v <= c; v++) {
            g = 0;
            let w = s.states[2][v];
            for (g = 0; g < Y; g++)
              (b.fillStyle = he(w == null ? void 0 : w[g])),
                le(b, g * (a + r), f * (a + r), a, a, d);
            for (w = s.states[3][v], g = 6; g < Y + 6; g++)
              (b.fillStyle = he(w == null ? void 0 : w[g - 6])),
                le(b, g * (a + r), f * (a + r), a, a, d);
            f++;
          }
          const q = yield new Promise((v) => n.toBlob(v));
          if (!q) return;
          const T = `quordle-${e === "daily" ? "daily" : "practice"}-${
              s.seed
            }.png`,
            L = new File([q], T, { type: "image/png" });
          t === "image"
            ? navigator
                .share({ files: [L], text: i })
                .catch((v) => console.error(v))
            : t === "image_save" && Ve.saveAs(L, T);
        }
      }),
    Xs = p('<button type="button"></button>'),
    Js = p(
      '<div class="flex flex-col rounded-t-lg text-center bg-gray-300 dark:bg-gray-900 border-t-2 p-4 border-white dark:border-gray-800"><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="mr-4"></span><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span><span class="ml-4"></span></div></div><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="mr-4"></span><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span><span class="ml-4"></span></div></div><div class="flex items-center justify-center mt-2"></div><textarea class="font-[Courier] w-[100%] text-sm text-black dark:text-white bg-white dark:bg-gray-800 text-center rounded-lg mt-2 resize-none" rows="8" readonly></textarea></div>'
    ),
    Zs = p(
      '<div class="flex items-center justify-center"><div class="ml-2">Share</div></div>'
    ),
    ea = p(
      '<div class="inline-flex" role="group"><button type="button" class="ml-2 text-lg min-h-[50px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-l-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-r-[1px] border-gray-400"><div class="flex items-center justify-center"><div class="ml-2">Share as Image</div></div></button><button type="button" class="text-lg min-h-[50px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></button></div>'
    ),
    sa = p(
      '<div class="flex items-center justify-center"><div class="ml-2">Save as Image</div></div>'
    ),
    aa = p(
      '<div class="flex items-center justify-center"><div class="ml-2">Copy to Clipboard</div></div>'
    ),
    ra = p('<div class="flex items-center justify-center mt-2"></div>'),
    pe = (e) =>
      (() => {
        const s = Xs.cloneNode(!0);
        return (
          se(s, "click", e.onClick, !0),
          u(s, () => e.children),
          M(
            () =>
              (s.className = `text-lg min-h-[50px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${e.class}`)
          ),
          s
        );
      })(),
    ta = (e) => {
      const [s, t] = V(),
        [l, i] = Z(void 0),
        [n, o] = Z(!1),
        c = _(() => Ge(e.mode, s[e.mode])[0]);
      return (() => {
        const a = Js.cloneNode(!0),
          r = a.firstChild,
          d = r.firstChild,
          m = d.firstChild,
          h = m.nextSibling,
          b = d.nextSibling,
          g = b.firstChild,
          f = g.nextSibling,
          j = r.nextSibling,
          k = j.firstChild,
          z = k.firstChild,
          q = z.nextSibling,
          T = k.nextSibling,
          L = T.firstChild,
          v = L.nextSibling,
          w = j.nextSibling,
          E = w.nextSibling;
        return (
          u(m, () => s[e.mode].answers[0].toLocaleUpperCase()),
          u(h, () => G(s[e.mode].answersCorrect[0])),
          u(g, () => G(s[e.mode].answersCorrect[1])),
          u(f, () => s[e.mode].answers[1].toLocaleUpperCase()),
          u(z, () => s[e.mode].answers[2].toLocaleUpperCase()),
          u(q, () => G(s[e.mode].answersCorrect[2])),
          u(L, () => G(s[e.mode].answersCorrect[3])),
          u(v, () => s[e.mode].answers[3].toLocaleUpperCase()),
          u(
            w,
            ns &&
              y(pe, {
                onClick: () => {
                  S(s.vibration), ye(e.mode, s[e.mode], "share");
                },
                get children() {
                  const x = Zs.cloneNode(!0),
                    $ = x.firstChild;
                  return u(x, y(Gs, {}), $), x;
                },
              }),
            null
          ),
          u(
            w,
            ds
              ? (() => {
                  const x = ea.cloneNode(!0),
                    $ = x.firstChild,
                    A = $.firstChild,
                    N = A.firstChild,
                    Q = $.nextSibling;
                  return (
                    ($.$$click = () => {
                      S(s.vibration), ye(e.mode, s[e.mode], "image");
                    }),
                    u(A, y(De, {}), N),
                    (Q.$$click = () => {
                      S(s.vibration), ye(e.mode, s[e.mode], "image_save");
                    }),
                    u(Q, y(Me, {})),
                    x
                  );
                })()
              : y(pe, {
                  class: "ml-2",
                  onClick: () => {
                    S(s.vibration), ye(e.mode, s[e.mode], "image_save");
                  },
                  get children() {
                    const x = sa.cloneNode(!0),
                      $ = x.firstChild;
                    return u(x, y(Me, {}), $), x;
                  },
                }),
            null
          ),
          u(
            a,
            (() => {
              const x = ee(() => !!l(), !0);
              return () =>
                x() &&
                (() => {
                  const $ = ra.cloneNode(!0);
                  return (
                    u(
                      $,
                      y(pe, {
                        onClick: () => {
                          S(s.vibration),
                            R("event", "share", {
                              mode: e.mode,
                              share_type: "clipboard",
                              daily_seed:
                                e.mode === "daily" ? s[e.mode].seed : void 0,
                            }),
                            o(!0);
                          const A = l();
                          if (A) {
                            A.select(), document.execCommand("copy");
                            const N =
                              window.getSelection && window.getSelection();
                            N && N.removeAllRanges(), A.blur();
                          }
                          alert("Copied results to clipboard!");
                        },
                        get children() {
                          const A = aa.cloneNode(!0),
                            N = A.firstChild;
                          return u(A, y(Ps, {}), N), A;
                        },
                      })
                    ),
                    $
                  );
                })();
            })(),
            E
          ),
          i(E),
          u(E, c),
          M(
            (x) => {
              const $ = {
                  "text-green-600 dark:text-green-500":
                    s[e.mode].answersCorrect[0] >= 0,
                  "text-rose-600": s[e.mode].answersCorrect[0] < 0,
                },
                A = {
                  "text-green-600 dark:text-green-500":
                    s[e.mode].answersCorrect[1] >= 0,
                  "text-rose-600": s[e.mode].answersCorrect[1] < 0,
                },
                N = {
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
                (x._v$ = P(m, $, x._v$)),
                (x._v$2 = P(f, A, x._v$2)),
                (x._v$3 = P(z, N, x._v$3)),
                (x._v$4 = P(v, Q, x._v$4)),
                (x._v$5 = P(E, ie, x._v$5)),
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
  const oa = p(
      '<div class="quordle-box w-[20%] pb-[calc(20%-0.25rem)]"><div class="quordle-box-content"> </div></div>'
    ),
    Pe = (e) =>
      (() => {
        const s = oa.cloneNode(!0),
          t = s.firstChild,
          l = t.firstChild;
        return (
          M(
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
    ia = (e) => {
      const s = e.gameX + e.gameY * xe,
        [t] = V(),
        l = _(() => t[e.mode].current.length),
        i = _(() => {
          const a = t[e.mode],
            r = a.current,
            d = a.guesses,
            m = a.answers[s],
            h = d.indexOf(m);
          return (
            e.gameRow <= h ||
            (h === -1 && e.gameRow < d.length) ||
            (h === -1 && e.gameRow === d.length && e.gameCol < r.length)
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
          var h;
          const a = t[e.mode],
            r = a.guesses,
            d = a.states,
            m = a.current;
          if (i()) {
            if (e.gameRow < r.length)
              return (
                ((h = d[s][e.gameRow]) == null ? void 0 : h[e.gameCol]) ||
                "none"
              );
            if (
              e.gameRow === r.length &&
              m.length === 5 &&
              !Oe.has(m) &&
              !Re.has(m)
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
      return y(Pe, {
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
    la = p(
      '<div class="absolute flex flex-col bg-gray-100 dark:bg-gray-800 text-black dark:text-white z-20 right-4 rounded-lg border-2 border-gray-400"><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all my-4"><div class="mr-3 text-black dark:text-white">Settings</div></button><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><div class="mr-3 text-black dark:text-white"> Stats</div></button><button type="button" class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><a class="flex flex-row-reverse items-center " href="https://www.buymeacoffee.com/quordle" target="_blank"><div class="mr-3 text-black dark:text-white">Donate</div></a></button><button type="button" class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><a class="flex flex-row-reverse items-center " href="https://www.patreon.com/quordle" target="_blank"><div class="mr-3 text-black dark:text-white">Patreon</div></a></button></div>'
    ),
    na = p(
      '<nav class="bg-gray-300 dark:bg-gray-900 w-screen border-b-2 border-white dark:border-gray-800"><div class="flex items-center max-w-[550px] m-auto px-4 py-2 relative"><span class="ml-3 text-black dark:text-white">Quordle</span><div class="flex-1"><div class=""><div class="flex ml-3"></div></div></div><div class="flex items-center sm:inset-auto sm:ml-6"><button type="button" class="bg-gray-400 dark:bg-gray-800 p-1 rounded-full text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white ml-2"></button><button type="button" class="bg-gray-400 dark:bg-gray-800 p-1 rounded-full text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white ml-2"></button></div></div></nav>'
    ),
    da = (e) => {
      const [s, t] = V(),
        [l, i] = Z(!1),
        [n, o] = Z();
      return (() => {
        const c = na.cloneNode(!0),
          a = c.firstChild,
          r = a.firstChild,
          d = r.nextSibling,
          m = d.firstChild,
          h = m.firstChild,
          b = d.nextSibling,
          g = b.firstChild,
          f = g.nextSibling;
        return (
          u(
            a,
            y(As, {
              get colorblind() {
                return s.colorblind;
              },
            }),
            r
          ),
          u(
            h,
            y(Se, {
              href: "/",
              activeClass: "quordle-nav-active",
              class: "quordle-nav",
              onClick: () => S(s.vibration),
              end: !0,
              children: "Daily",
            }),
            null
          ),
          u(
            h,
            y(Se, {
              href: "/practice",
              activeClass: "quordle-nav-active",
              class: "quordle-nav",
              onClick: () => S(s.vibration),
              end: !0,
              children: "Practice",
            }),
            null
          ),
          se(g, "click", e.onOpenTutorial, !0),
          u(g, y(Bs, {})),
          (f.$$click = () => S(s.vibration)),
          ((j) => o(j))(f),
          u(f, y(Rs, {})),
          u(
            a,
            y(Xe, {
              menuButton: n,
              open: l,
              setOpen: i,
              get children() {
                const j = la.cloneNode(!0),
                  k = j.firstChild,
                  z = k.firstChild,
                  q = k.nextSibling,
                  T = q.firstChild,
                  L = T.firstChild,
                  v = q.nextSibling,
                  w = v.firstChild,
                  E = w.firstChild,
                  x = v.nextSibling,
                  $ = x.firstChild,
                  A = $.firstChild;
                return (
                  (k.$$click = () => {
                    i(!1), e.onOpenSettings();
                  }),
                  u(k, y(Os, {}), z),
                  (q.$$click = () => {
                    i(!1), e.onOpenStatistics();
                  }),
                  u(q, y(Fs, {}), T),
                  u(T, () => (e.mode === "daily" ? "Daily" : "Practice"), L),
                  (v.$$click = () => {
                    S(s.vibration), i(!1);
                  }),
                  u(w, y(Es, {}), E),
                  (x.$$click = () => {
                    S(s.vibration), i(!1);
                  }),
                  u($, y(Ds, {}), A),
                  M(() => {
                    var N;
                    return j.style.setProperty(
                      "top",
                      (((N = n()) == null
                        ? void 0
                        : N.getBoundingClientRect().bottom) || 0) +
                        12 +
                        "px"
                    );
                  }),
                  j
                );
              },
            }),
            null
          ),
          c
        );
      })();
    };
  oe(["click"]);
  const ua = p(
      '<button class="quordle-key bg-zinc-300 dark:bg-zinc-600 w-[10%] pb-[calc(10%-0.25rem)]"><div class="quordle-box-content"> </div></button>'
    ),
    ca = p('<div class="w-full flex-col pb-1"></div>'),
    ma = p('<div class="flex w-full"></div>'),
    ha = (e) => {
      const [s, t] = V(),
        l = _(() => e.key.toLocaleLowerCase()),
        i = _(() => {
          const n = s[e.mode].guesses;
          let o = !1;
          for (let r = 0; r < n.length; r++)
            if (n[r].indexOf(l()) >= 0) {
              o = !0;
              break;
            }
          if (!o) return "";
          const c = {
              none: "#919191",
              diff: s.colorblind ? "#fb923c" : "#ffcc00",
              correct: s.colorblind ? "#60a5fa" : "#00cc88",
            },
            a = [c.none, c.none, c.none, c.none];
          for (let r = 0; r < a.length; r++) {
            const d = s[e.mode].states[r];
            for (let m = 0; m < d.length; m++)
              for (let h = 0; h < d[m].length; h++)
                l() === n[m][h] &&
                  (d[m][h] === "correct" || d[m][h] === "diff") &&
                  (d[m][h] === "correct"
                    ? (a[r] = c.correct)
                    : d[m][h] === "diff" &&
                      a[r] !== c.correct &&
                      (a[r] = c.diff));
          }
          return (
            "background: conic-gradient(" +
            a[1] +
            " 0deg 90deg, " +
            a[3] +
            " 90deg 180deg, " +
            a[2] +
            " 180deg 270deg, " +
            a[0] +
            " 270deg 360deg);"
          );
        });
      return (() => {
        const n = ua.cloneNode(!0),
          o = n.firstChild,
          c = o.firstChild;
        return (
          (n.$$click = () => {
            S(s.vibration),
              t.sendKey(
                e.mode,
                new KeyboardEvent("keydown", {
                  keyCode: e.key.startsWith("enter")
                    ? 13
                    : e.key === "bs"
                    ? 8
                    : Le.indexOf(e.key.toLocaleLowerCase()) + 65,
                  key: e.key.startsWith("enter")
                    ? "Enter"
                    : e.key === "bs"
                    ? "Backspace"
                    : e.key.toLocaleLowerCase(),
                })
              );
          }),
          M(
            (a) => {
              const r = {
                  "rounded-b-none": e.key === "enter3",
                  "ml-0 mt-0 rounded-t-none rounded-l-none": e.key === "enter2",
                  "w-[calc(10%+0.25rem)] rounded-r-none": e.key === "enter1",
                  "text-black dark:text-black": !!i(),
                  "text-black dark:text-white": !i(),
                },
                d = i(),
                m =
                  e.key === "enter2"
                    ? "\u23CE"
                    : e.key === "bs"
                    ? "\u232B"
                    : e.key.startsWith("enter")
                    ? ""
                    : e.key;
              return (
                (a._v$ = P(n, r, a._v$)),
                (a._v$2 = Je(n, d, a._v$2)),
                m !== a._v$3 && (c.data = a._v$3 = m),
                a
              );
            },
            { _v$: void 0, _v$2: void 0, _v$3: void 0 }
          ),
          n
        );
      })();
    },
    ya = (e) =>
      (() => {
        const s = ca.cloneNode(!0);
        return (
          u(s, () =>
            ls.map((t, l) =>
              (() => {
                const i = ma.cloneNode(!0);
                return (
                  u(i, () =>
                    t.map((n, o) =>
                      y(ha, {
                        get mode() {
                          return e.mode;
                        },
                        x: o,
                        y: l,
                        key: n,
                      })
                    )
                  ),
                  i
                );
              })()
            )
          ),
          s
        );
      })();
  oe(["click"]);
  function ga(e) {
    const [s, t] = Z([]),
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
  const ba = p(
      '<div class="flex items-center m-4"><label class="flex items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"><div class="block bg-gray-500 dark:bg-gray-600 w-14 h-8 rounded-full"></div><div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div></div><div class="ml-3 text-black dark:text-white"></div></label></div>'
    ),
    pa = p(
      '<div class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><div class="text-4xl mt-2 mb-4 text-center">Settings</div><div class="flex flex-col text-base"></div></div></div>'
    ),
    ka = p(
      '<div class="text-center mt-6"><button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reset Current Practice</button><div class="text-center text-base">Warning: Resetting will count as a loss!</div></div>'
    ),
    ke = (e) =>
      (() => {
        const s = ba.cloneNode(!0),
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
          M(
            (a) => {
              const r = e.id,
                d = e.id,
                m = e.checked,
                h = e.checked,
                b = e.checked && !e.colorblind,
                g = e.checked && e.colorblind;
              return (
                r !== a._v$ && O(t, "for", (a._v$ = r)),
                d !== a._v$2 && O(i, "id", (a._v$2 = d)),
                m !== a._v$3 && (i.checked = a._v$3 = m),
                h !== a._v$4 &&
                  o.classList.toggle("translate-x-[100%]", (a._v$4 = h)),
                b !== a._v$5 &&
                  o.classList.toggle("bg-box-correct", (a._v$5 = b)),
                g !== a._v$6 &&
                  o.classList.toggle("bg-box-diff-alt", (a._v$6 = g)),
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
    fa = (e) => {
      const [s, t] = V();
      return (() => {
        const l = pa.cloneNode(!0),
          i = l.firstChild,
          n = i.firstChild,
          o = i.nextSibling,
          c = o.firstChild,
          a = c.nextSibling;
        return (
          se(n, "click", e.onCloseSettings, !0),
          u(
            a,
            y(ke, {
              id: "toggleDarkMode",
              text: "Dark Mode",
              get checked() {
                return s.darkMode;
              },
              get colorblind() {
                return s.colorblind;
              },
              onClick: () => S(s.vibration),
              onChange: (r) => t.setDarkMode(r.currentTarget.checked),
            }),
            null
          ),
          u(
            a,
            y(ke, {
              id: "toggleColorblind",
              text: "Colorblind Mode",
              get checked() {
                return s.colorblind;
              },
              get colorblind() {
                return s.colorblind;
              },
              onClick: () => S(s.vibration),
              onChange: (r) => t.setColorblind(r.currentTarget.checked),
            }),
            null
          ),
          u(
            a,
            Be &&
              y(ke, {
                id: "toggleVibration",
                text: "Vibration",
                get checked() {
                  return s.vibration;
                },
                get colorblind() {
                  return s.colorblind;
                },
                onClick: () => S(s.vibration),
                onChange: (r) => t.setVibration(r.currentTarget.checked),
              }),
            null
          ),
          u(
            o,
            (() => {
              const r = ee(
                () =>
                  e.mode === "free" &&
                  s.free.guesses.length > 0 &&
                  !t.isGameComplete(e.mode),
                !0
              );
              return () =>
                r() &&
                (() => {
                  const d = ka.cloneNode(!0),
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
  const wa = p(
      '<div class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><div class="text-4xl mt-2 mb-4 text-center"> Statistics</div><div class="flex flex-row"><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">Played</span></div><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">Win %</span></div><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">Current<br>Streak</span></div><div class="flex flex-col text-center flex-1"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300">Max<br>Streak</span></div></div><div class="text-4xl mt-8 text-center">Win Distribution</div><div class="text-lg mb-4 text-center">(total # guesses to complete all 4 words)</div><div class="text-lg"></div></div></div>'
    ),
    Ae = p(
      '<div class="flex flex-row mb-1"><div class="mr-2"></div><div class="min-w-min text-right px-2"></div></div>'
    ),
    va = p(
      '<div class="flex flex-row text-base mt-6 mb-1 px-2"><div class="flex-1">Win - </div><div class="flex-1 text-right"> - Loss</div></div>'
    ),
    xa = p(
      '<div class="text-base font-bold flex flex-row items-center cursor-pointer rounded-l-xl rounded-r-xl overflow-hidden"><div class="bg-box-correct h-6"></div><div class="bg-rose-600 dark:bg-rose-800 text-right h-6"></div></div>'
    ),
    za = p('<div class="text-4xl mt-8 text-center">Loss Distribution</div>'),
    _a = p('<div class="text-lg mb-4 text-center">(# words missed)</div>'),
    $a = p('<div class="text-lg"></div>'),
    ja = [...Array(C - (K - 1)).keys()].map((e) => e + (K - 1)),
    Ca = [...Array(K).keys()].map((e) => e + C).reverse(),
    Sa = (e) => {
      const [s, t] = V(),
        [l, i] = Z(!1),
        n = _(() => Math.max(...s[e.mode].history.slice(K - 1, C), 1)),
        o = _(() => Math.max(...s[e.mode].history.slice(C), 1)),
        c = _(() =>
          s[e.mode].history.slice(K - 1, C).reduce((g, f) => g + f, 0)
        ),
        a = _(() => s[e.mode].history.slice(C).reduce((g, f) => g + f, 0)),
        r = _(() => c() + a()),
        d = _(() =>
          s[e.mode].answersCorrect.reduce((g, f) => (g += f >= 0 ? 1 : 0), 0)
        ),
        m = _(() => Math.max(...s[e.mode].answersCorrect)),
        h = _(() => t.isGameComplete(e.mode) && d() === K),
        b = _(() => t.isGameComplete(e.mode) && d() < K);
      return (() => {
        const g = wa.cloneNode(!0),
          f = g.firstChild,
          j = f.firstChild,
          k = f.nextSibling,
          z = k.firstChild,
          q = z.firstChild,
          T = z.nextSibling,
          L = T.firstChild,
          v = L.firstChild,
          w = L.nextSibling,
          E = w.firstChild,
          x = w.nextSibling,
          $ = x.firstChild,
          A = x.nextSibling,
          N = A.firstChild,
          Q = T.nextSibling,
          ie = Q.nextSibling,
          ue = ie.nextSibling;
        return (
          se(j, "click", e.onCloseStatistics, !0),
          u(z, () => (e.mode === "daily" ? "Daily" : "Practice"), q),
          u(v, () => c() + a()),
          u(E, () => Math.round((r() > 0 ? c() / r() : 0) * 100)),
          u($, () => s[e.mode].currentStreak),
          u(N, () => s[e.mode].maxStreak),
          u(ue, () =>
            ja.map((W) =>
              (() => {
                const D = Ae.cloneNode(!0),
                  B = D.firstChild,
                  F = B.nextSibling;
                return (
                  u(B, W + 1),
                  u(F, () => s[e.mode].history[W]),
                  M(
                    (I) => {
                      const X = {
                          " text-black bg-box-correct": h() && m() === W,
                          "text-black bg-gray-300 dark:text-white dark:bg-gray-700":
                            !(h() && m() === W),
                        },
                        U = (s[e.mode].history[W] / n()) * 100 + "%";
                      return (
                        (I._v$ = P(F, X, I._v$)),
                        U !== I._v$2 &&
                          F.style.setProperty("width", (I._v$2 = U)),
                        I
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
            k,
            (() => {
              const W = ee(() => a() > 0, !0);
              return () =>
                W() && [
                  (() => {
                    const D = va.cloneNode(!0),
                      B = D.firstChild;
                    B.firstChild;
                    const F = B.nextSibling,
                      I = F.firstChild;
                    return u(B, c, null), u(F, a, I), D;
                  })(),
                  (() => {
                    const D = xa.cloneNode(!0),
                      B = D.firstChild,
                      F = B.nextSibling;
                    return (
                      (D.$$click = () => i(!l())),
                      M(
                        (I) => {
                          const X = (c() / r()) * 100 + "%",
                            U = (a() / r()) * 100 + "%";
                          return (
                            X !== I._v$3 &&
                              B.style.setProperty("width", (I._v$3 = X)),
                            U !== I._v$4 &&
                              F.style.setProperty("width", (I._v$4 = U)),
                            I
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
            k,
            (() => {
              const W = ee(() => !!l(), !0);
              return () =>
                W() && [
                  za.cloneNode(!0),
                  _a.cloneNode(!0),
                  (() => {
                    const D = $a.cloneNode(!0);
                    return (
                      u(D, () =>
                        Ca.map((B) =>
                          (() => {
                            const F = Ae.cloneNode(!0),
                              I = F.firstChild,
                              X = I.nextSibling;
                            return (
                              u(I, K - (B - C)),
                              u(X, () => s[e.mode].history[B]),
                              M(
                                (U) => {
                                  const Ue = {
                                      "text-white bg-rose-600 dark:bg-rose-800":
                                        b() && d() === B - C,
                                      "text-black bg-gray-300 dark:bg-gray-700 dark:text-white":
                                        !(b() && d() === B - C),
                                    },
                                    je =
                                      (s[e.mode].history[B] / o()) * 100 + "%";
                                  return (
                                    (U._v$5 = P(X, Ue, U._v$5)),
                                    je !== U._v$6 &&
                                      X.style.setProperty(
                                        "width",
                                        (U._v$6 = je)
                                      ),
                                    U
                                  );
                                },
                                { _v$5: void 0, _v$6: void 0 }
                              ),
                              F
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
          g
        );
      })();
    };
  oe(["click"]);
  const qa = p(
      `<div class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="max-w-[550px] m-auto w-full px-6"><div class="text-3xl mt-2 mb-1">Guess all four QUORDLE words in 9 tries.</div><div class="text-base">Each guess must be a valid 5 letter word. Hit the enter button to submit. After each guess, the color of the tiles will change to show how close your guess was to the word.</div><div class="text-3xl mt-4 mb-2">Examples</div><div class="flex w-[50%] my-2"></div><div class="text-base mb-6">The letter C is in the word and in the correct spot.</div><div class="flex w-[50%] my-2"></div><div class="text-base mb-6">The letter A is in the word but in the wrong spot.</div><div class="flex w-[50%] my-2"></div><div class="text-base mb-6">The letters C, O, M, F, Y are not in the word in any spot. When you type a guess in QUORDLE, you will guess that word for all four words that you are solving. All four words you are solving will be different.</div><div class="flex w-[100%] mb-2"><div class="flex w-[50%] mr-1"></div><div class="flex w-[50%] ml-1"></div></div><div class="flex w-[100%] mt-2 mb-2"><div class="flex w-[50%] mr-1"></div><div class="flex w-[50%] ml-1"></div></div><div class="text-base">For the guess WORLD:</div><ol class="text-base list-decimal ml-8 mb-6"><li>The top left word has none of the letters.</li><li>The top right word has the R in the wrong spot and the D in the correct spot.</li><li>The bottom left word has the L in the wrong spot.</li><li>The bottom right word has the O in the right spot and the D in the wrong spot.</li></ol><div class="text-base mb-6">You have 9 guesses to get all 4 words correct. Good luck!</div><div class="text-base mb-8">A new QUORDLE will be available each day!</div><div class="text-sm mb-2 text-center">Created by Freddie Meyer</div><div class="flex flex-row items-center justify-center mb-8"><a class="px-4" href="https://github.com/fireph/quordle" target="_blank"></a><a class="px-4" href="https://twitter.com/quordle" target="_blank"></a><a class="px-4" href="https://www.facebook.com/quordle" target="_blank"></a><a class="px-4" href="https://www.reddit.com/r/Quordle/" target="_blank"></a><a class="px-4" href="https://www.instagram.com/quordlegame/" target="_blank"></a></div><div class="text-3xl my-4 text-center">History of Quordle</div><div class="text-base mb-6">It all started on January 29, 2022 when I saw an article mentioning <a class="underline" href="https://zaratustra.itch.io/dordle" target="_blank">Dordle</a> by Guilherme S. T&#246;ws and we all started playing it as a group. It was a blast to play something more difficult than Wordle, but we still found it uncommon to fail to guess both words in 7 attempts.<br><br>In a moment of evil and genius, <a class="underline" href="https://github.com/DavidMah" target="_blank">David Mah</a> hacked together the first prototype of Quordle on January 30th and linked it to the group chat. It was truly horrific code (it even had 2 keyboards &#128517;), but I knew that I had to continue the madness. With hindsight, he really baited me into finishing his monstrous creation.<br><br>Over the next 2 days I improved the code, removed the second keyboard, and added the color quadrant keyboard. I even added Google Analytics thinking it would be funny to see the stats for our friend group playing.<br><br>At first it was just a few dozen players (there was a group of 20-30 people in Ohio that were playing constantly the first few days). But then Quordle got written about in an article in <a class="underline" href="https://www.theguardian.com/games/2022/feb/06/worried-about-losing-wordle-here-are-some-alternatives-just-in-case" target="_blank">The Guardian</a> and things exploded quickly from there. Now Quordle has over 300k players daily and has had over 850k total players.<br><br>A shoutout to our friend that plays relentlessly while indoor cycling. You were the drive to create a better version and your passion made me realize it could be popular outside of our friend group. I am so glad the world has been thoroughly cursed by Quordle and can't wait to see how Quordle strategies evolve!<br><br>I have no plans to monetize Quordle, I just enjoy watching everyone enjoy this insane game and couldn't have done it without Guilherme S. T&#246;ws and David Mah. If you have any ideas for Quordle or just want to chat, check out the socials posted above.</div></div></div>`
    ),
    ae = [
      ["CROWN", ["correct", "none", "none", "none", "none"]],
      ["BADGE", ["none", "diff", "none", "none", "none"]],
      ["COMFY", ["none", "none", "none", "none", "none"]],
      ["WORLD", ["none", "none", "none", "none", "none"]],
      ["WORLD", ["none", "none", "diff", "none", "correct"]],
      ["WORLD", ["none", "none", "none", "diff", "none"]],
      ["WORLD", ["none", "correct", "none", "none", "diff"]],
    ],
    re = (e) =>
      e.word[0].split("").map((s, t) =>
        y(Pe, {
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
    Ma = (e) => {
      const [s, t] = V();
      return (() => {
        const l = qa.cloneNode(!0),
          i = l.firstChild,
          n = i.firstChild,
          o = i.nextSibling,
          c = o.firstChild,
          a = c.nextSibling,
          r = a.nextSibling,
          d = r.nextSibling,
          m = d.nextSibling,
          h = m.nextSibling,
          b = h.nextSibling,
          g = b.nextSibling,
          f = g.nextSibling,
          j = f.nextSibling,
          k = j.firstChild,
          z = k.nextSibling,
          q = j.nextSibling,
          T = q.firstChild,
          L = T.nextSibling,
          v = q.nextSibling,
          w = v.nextSibling,
          E = w.nextSibling,
          x = E.nextSibling,
          $ = x.nextSibling,
          A = $.nextSibling,
          N = A.firstChild,
          Q = N.nextSibling,
          ie = Q.nextSibling,
          ue = ie.nextSibling,
          W = ue.nextSibling;
        return (
          se(n, "click", e.onCloseTutorial, !0),
          u(
            d,
            y(re, {
              get word() {
                return ae[0];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            h,
            y(re, {
              get word() {
                return ae[1];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            g,
            y(re, {
              get word() {
                return ae[2];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            k,
            y(re, {
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
            y(re, {
              get word() {
                return ae[4];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            T,
            y(re, {
              get word() {
                return ae[5];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(
            L,
            y(re, {
              get word() {
                return ae[6];
              },
              get colorblind() {
                return s.colorblind;
              },
            })
          ),
          u(N, y(Ts, { height: 48 })),
          u(Q, y(De, { height: 36 })),
          u(ie, y(Ns, { height: 48 })),
          u(ue, y(Is, { height: 40 })),
          u(W, y(Ls, { height: 40 })),
          l
        );
      })();
    };
  oe(["click"]);
  const Aa = p(
      '<div class="absolute w-full h-full text-black dark:text-white bg-white dark:bg-gray-800 overflow-auto transition-all ease-in-out duration-500"></div>'
    ),
    Ta = p('<div class="flex flex-col flex-auto p-1"></div>'),
    We = p('<div class="flex w-full"></div>'),
    Na = p(
      '<div class="w-full absolute flex flex-col overflow-hidden"><div class="max-w-[550px] m-auto w-full"></div><div class="quordle-desktop-scrollbar max-w-[550px] m-auto w-full flex-auto"><div class="w-full flex-col"></div></div><div class="max-w-[550px] m-auto w-full"></div></div>'
    ),
    fe = (e) =>
      (() => {
        const s = Aa.cloneNode(!0);
        return (
          u(s, () => e.children),
          M(
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
    Ia = [...Array(xe).keys()],
    La = [...Array(Ie).keys()],
    Ba = [...Array(C).keys()],
    Ra = [...Array(Y).keys()],
    Oa = (e) =>
      (() => {
        const s = Ta.cloneNode(!0);
        return (
          u(s, () =>
            Ba.map((t) =>
              (() => {
                const l = We.cloneNode(!0);
                return (
                  u(l, () =>
                    Ra.map((i) =>
                      y(ia, {
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
    Te = (e) => {
      const [s, t] = V(),
        [l, i] = es(),
        [n, o] = Z(35),
        c = (h) => {
          t.sendKey(e.mode, h);
        };
      document.addEventListener("keydown", c),
        ve(() => document.removeEventListener("keydown", c));
      const a = _(() => l.overlay === "tutorial"),
        r = _(() => l.overlay === "statistics"),
        d = _(() => l.overlay === "settings"),
        m = ga({
          onResize: ({ width: h }) => {
            h && o(h / 15);
          },
        });
      return (() => {
        const h = Na.cloneNode(!0),
          b = h.firstChild,
          g = b.nextSibling,
          f = g.firstChild,
          j = g.nextSibling;
        return (
          P(h, { "h-full": !qe, "h-[calc(100%-25px)] bottom-[25px]": qe }),
          u(
            h,
            y(da, {
              get mode() {
                return e.mode;
              },
              onOpenTutorial: () => {
                S(s.vibration),
                  R("event", "tutorial", { mode: e.mode }),
                  i({ overlay: "tutorial" });
              },
              onOpenStatistics: () => {
                S(s.vibration),
                  R("event", "statistics", { mode: e.mode }),
                  i({ overlay: "statistics" });
              },
              onOpenSettings: () => {
                S(s.vibration),
                  R("event", "settings", { mode: e.mode }),
                  i({ overlay: "settings" });
              },
            }),
            b
          ),
          u(
            b,
            (() => {
              const k = ee(() => !!t.isGameComplete(e.mode), !0);
              return () =>
                k() &&
                y(Vs, {
                  get mode() {
                    return e.mode;
                  },
                });
            })()
          ),
          m(g),
          u(f, () =>
            La.map((k) =>
              (() => {
                const z = We.cloneNode(!0);
                return (
                  u(z, () =>
                    Ia.map((q) =>
                      y(Oa, {
                        get mode() {
                          return e.mode;
                        },
                        gameX: q,
                        gameY: k,
                      })
                    )
                  ),
                  z
                );
              })()
            )
          ),
          u(
            j,
            (() => {
              const k = ee(() => !!t.isGameComplete(e.mode), !0);
              return () =>
                k()
                  ? y(ta, {
                      get mode() {
                        return e.mode;
                      },
                    })
                  : y(ya, {
                      get mode() {
                        return e.mode;
                      },
                    });
            })()
          ),
          u(
            h,
            y(fe, {
              get open() {
                return d();
              },
              get fontSize() {
                return n();
              },
              get children() {
                return y(fa, {
                  get mode() {
                    return e.mode;
                  },
                  onCloseSettings: () => {
                    S(s.vibration), i({ overlay: void 0 });
                  },
                });
              },
            }),
            null
          ),
          u(
            h,
            y(fe, {
              get open() {
                return r();
              },
              get fontSize() {
                return n();
              },
              get children() {
                return y(Sa, {
                  get mode() {
                    return e.mode;
                  },
                  onCloseStatistics: () => {
                    S(s.vibration), i({ overlay: void 0 });
                  },
                });
              },
            }),
            null
          ),
          u(
            h,
            y(fe, {
              get open() {
                return a();
              },
              get fontSize() {
                return n();
              },
              get children() {
                return y(Ma, {
                  onCloseTutorial: () => {
                    S(s.vibration), i({ overlay: void 0 });
                  },
                });
              },
            }),
            null
          ),
          M(
            (k) => {
              const z = n() + "px",
                q = a() || r(),
                T = !(a() || r()),
                L = n() + "px",
                v = n() + "px";
              return (
                z !== k._v$3 && b.style.setProperty("font-size", (k._v$3 = z)),
                q !== k._v$4 &&
                  g.classList.toggle("overflow-hidden", (k._v$4 = q)),
                T !== k._v$5 &&
                  g.classList.toggle("overflow-auto", (k._v$5 = T)),
                L !== k._v$6 && g.style.setProperty("font-size", (k._v$6 = L)),
                v !== k._v$7 && j.style.setProperty("font-size", (k._v$7 = v)),
                k
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
          h
        );
      })();
    },
    Ea = p(
      '<div class="px-5 absolute flex items-center justify-center w-full h-full bg-gradient-to-r from-indigo-600 to-blue-400"><div class="p-10 bg-white rounded-md shadow-xl"><div class="flex flex-col items-center"><h1 class="font-bold text-blue-600 text-9xl">404</h1><h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"><span class="text-red-500">Oops!</span> Page not found</h6><p class="mb-8 text-center text-gray-500 md:text-lg">The page you\u2019re looking for doesn\u2019t exist.</p></div></div></div>'
    ),
    Da = (e) =>
      (() => {
        const s = Ea.cloneNode(!0),
          t = s.firstChild,
          l = t.firstChild;
        return (
          l.firstChild.nextSibling.nextSibling,
          u(
            l,
            y(ss, {
              href: "/",
              class:
                "px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100",
              children: "Back to Daily Quordle",
            }),
            null
          ),
          s
        );
      })(),
    Ga = () => {
      const e = _(() => Ne($e));
      return (
        we(() => {
          var s;
          ((s = e()) == null ? void 0 : s[0].darkMode)
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
        }),
        e()
          ? y(as, {
              get children() {
                return [
                  y(ge, {
                    path: "/",
                    get element() {
                      return y(Te, { mode: "daily" });
                    },
                  }),
                  y(ge, {
                    path: "/practice",
                    get element() {
                      return y(Te, { mode: "free" });
                    },
                  }),
                  y(ge, {
                    path: "/*all",
                    get element() {
                      return y(Da, {});
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
      y(ts, {
        get source() {
          return os();
        },
        get children() {
          return y(ys, {
            get children() {
              return y(Ga, {});
            },
          });
        },
      }),
    document.getElementById("root")
  );
});
export default Pa();
