import React from "react";
import '../App.css';

class Text extends React.Component {
    render() {
        switch(this.props.page) {
            case 1:
                return(
                    <p className="textik">Nyní tě čekají poslední kroky tvé velkomoravské cesty. Obleč si kroj, přines si šňůrku z jarního víkendu, měj po ruce papír s tužkou. Zhasni světla, rozesviť svíci a ohlédni se nad dálkou, kterou jsi ušel.</p>
                );
            case 2:
                return <p className="textik">Dobrodružství doma nečeká… Co má ale slovo dobrodružství společného s “dobrem” a “druhem” – se slovy, z nichž se skládá? … Jak by definoval dobrodružství politik, jak učitel a jak herec? Kdo z nich by se shodnul a kdo z nich spíše naopak? Já říkám, že není doba lehká a těžká, je jen doba teď a tady. A pak vzpomínky. Jsou tu ještě vzpomínky. Jsou jako hvězdy na nebi, jako pampelišky na louce, jako vlaky na mostech, jako světlo svíčky - chvíli tu jsou a hned svět ožije. Kolik vzpomínek ale udržíme v hlavě? … Povím Ti nyní o jedné své vzpomínce, kterou jsem si poslední dobou oblíbil - jak tak doma sedím, vracím se k ní častěji. Ano, bylo to v tom roce pitomém, kdy snad každý pozemšťan zaznamenal existenci jedné (obyčejně naprosto bezvýznamné) východní megalopole. Toto není příběh té megalopole ani její slávy, toto je příběh můj a rád se o něj podělím.</p>;
            case 3:
                return <p className="textik">Jak dlouho trvá, než se člověk pohne? A jak dlouho vydrží, než se zastaví? Kolik myšlenek, svalových příkazů a rozhodnutí musí udělat, aby se vydal na cestu? A přesto, pokaždé když projdeš ty stejné dveře od pokoje, překročíš rohožku a odjedeš tím stejným vlakem ve 14:02 je to jiná cesta… A letos na jaře to bylo celé zvláštní - od vyplnění přihlášky po letní běh jakoby někdo odsypal písek z přesýpacích hodin našeho času a život se zároveň zastavil i zrychlil v březnu. Celá ta situace byla divná, den za dnem míjel skoro beze změny, když člověk ani do školy nechodil - a tenkrát nikdo nechodil, ani učitelé. A přírodu jako by to nezajímalo. Prostě přišel červen (jako by snad předskočil duben i květen) a byl tu víkend na Kaprálově mlýně. Sranda, jak to tenkrát bylo zvláštní, že jsem nikoho neznal a přesto jsem nějak cítil, že bych si mohl najít snadno nové kamarády. A teď? Teď mi dokonce chybí… Ani ne půl roku poté. Chybí mi, že nemohu jet do Modré a stisknout levici po skautsku druhým a obejmout ty, kteří mi přirostli k srdci nejblíž. Chybí mi něco, v co jsem před jarním víkendem ani nedoufal a přesto, když se řekne Velká Morava, představím si jako první je, nyní známé tváře.
                    Jaké tváře se vybaví v mysli Tobě? A komu bys rozhodně chtěl potřást rukou a koho bys rovnou obejmul?
                </p>;
            case 4:
                return <p className="textik">Ani nevím, jak rychle to od víkendu uteklo, když jsem se objevil ve Velkomoravské hradišti. Jo, vlastně, byl tam tábor, brigáda, ale v porovnání s intenzitou zážitků mě tábor dosti vyčerpal a brigáda naopak naplnila pouze kapsu. Co jsem ale prožil v údolí Oslavy, to se jen těžko vypráví… Ať už to byly přednášky v přírodě ( jo, fakt, jde to! ), pak aktivní programy (seznamovací, strategické nebo rolové hry, simulace situací v oddíle apod.), nebo třeba fitky, rozcvičky, spaní v teepee nebo jídlo, které nenechalo nikoho sedět v klidu! Čtení o Malém stromu nebo o stromech jako takových, nástupy s pokřikem, putování uprostřed pobytu. Ať už koupání v řece o poledňáku nebo večerní čajovna, i na odpočinek se čas našel, ale nebylo ho mnoho.. No jo vlastně, čas. Úplně bych zapomněl, že jsme první týden čas ani neviděli. Vlastně si ani nejsem jistý, jestli si to dokážeš představit - každý prý vidí jen to, co chce...
                    Co vidíš Ty, když zavzpomínáš na léto a velkomoravské hradiště? O kterém zážitku z hradiště jsi někdy někomu vyprávěl? Jaké zážitky bys doporučil svým kamarádům prožít?
                </p>;
            case 5:
                return <p className="textik">Samozřejmě by bylo hloupé čekat, že se mi všechno líbilo. Ale i to zjištění, že se mě něco netýká, mi docela pomohlo si věci srovnat. Vlastně si část těch věcí srovnávám ještě teď v průběhu roku, když nám začaly schůzky...
                    Když tak o tom přemýšlím, zajímá mě, jestli je něco, co Ti kurz vzal?  (Jestli jo, tak to můžeš udělat jako já - napsal jsem to na papír a ve svíčce to spálil - krásně mi to očistilo mysl...)
                </p>;
            case 6:
                return <p className="textik">Nejspíš Tvá velkomoravská cesta byla jiná než ta má, to je mi jasné, každý máme cestu svou a na ní se nám dějí jiné věci. Ono i stejné věci každý vnímáme jinak. Tu mou cestu mi doma teď připomíná kožená šňůrka, na níž mám pár dřevěných korálků. Korálků výzev, které jsem během léta splnil. Vlastně ještě dost přemítám nad tím, které z nich byly pro mě opravdovou výzvou - nejspíš jedna až dvě, přesto mám ze sebe radost, že jsem se vydal vstříc neznámému. Myslím si, že největší výzvou ale stejně bylo dělat něco nad rámec normálního programu. To mi připomíná mou osobní výzvu z jarního víkendu...
                    Přibyl by korálek za její splnění i na tvé kožené šňůrce? A jak dobře se Ti povedlo onu výzvu zvládnout?
                </p>;
            case 7:
                return <p className="textik">
                    Když se teď koukám zpět, mám z toho mrazení. Ač možná se mi, teď na konci, chvěje hlas, jedno je mi zcela jasné. Jsem vděčný, že jsme se na naší Cestě potkali a můžeme sdílet část stejného příběhu. A už teď se těším na okamžik, kdy nás naše kroky dovedou na jedno místo. Pokud se tak ovšem někdy stane… Na kom to záleží - na tobě nebo na mě?
                    Nyní už zbývá jen odpovědět na poslední otázku - jaká bude má další cesta?
                </p>;
            case 8:
                return <p className="textik"> </p>;
            default:
                return <p className="textik"> </p>;
        }
    }
}

export default Text;