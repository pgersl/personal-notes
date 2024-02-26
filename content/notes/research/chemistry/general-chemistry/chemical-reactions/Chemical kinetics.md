---
title: "Reakční kinetika"
layout: single
type: note
section: "Chemické reakce"
weight: 8
---
- _reakční kinetika_ studuje rychlost a faktory ji ovlivňující reakce a _reakční mechanismy_
- podmínkám, za kterých reakce probíhá, se říká _reakční_
- _reakční mechanismy_ jsou pořadí dílčích reakcí
- **Izolované reakce**
    - v soustavě probíhá jedna samostatná reakce
- **Simultální reakce**
    - v soustavě probíhá několik reakcí
    - **reverzibilní reakce**
        - z reaktantů vznikají produkty a z produktů zase reaktanty
        - obecně: $A+B\rightleftharpoons{C+D}$
        - např.: $H_{2}+I_{2}\leftrightharpoons{2\ HI}$
    - **paralelní reakce**
        - reaktanty reagují různým způsobem a vznikají různé produkty 
        - typické pro organické reakce
        - obecně: $A+B\longrightarrow{C}\ \lor\ A+B\longrightarrow{C}$
        - např.: $CH_{3}CH_{2}OH\longrightarrow{CH_{2}=CH_{2}+H_{2}O}\ \lor\ CH_{3}CH_{2}OH\longrightarrow{CH_{3}CHO+H_{2}}$
    - **konsekutivní reakce**
        - produkty jedné reakce jsou výchozí látkou další reakce
        - obecně: $A+B\rightarrow{C+D}\rightarrow{E+F}$
# Reakční rychlost
- rychlost, kterou se spotřebovávají výchozí látky a tvoří se produkty
- je to změna koncentrace reagujících látek za jednotku času
    - $v=\frac{|\Delta{c}|}{\Delta{t}}$
- pro rychlost reakce $xA+yB\rightarrow{C}$ platí **kinetická rovnice**
    - $v=k[A]^{x}[B]^{y}$
        - $v$ - reakční rychlost
        - $k$ - rychlostní konstanta
        - $c(A),c_{A},[A]$ - koncentrace výchozí látky
        - $x,y$ - stechimetrické koeficienty reakce
# Aktivační energie
- reakce probíhá srážením částic v prostoru
    - aby byli srážky efektivní, musí mít částice správnou orientaci v prostoru a dostatečnou kinetickou energii
- minimální energie nutná k průběhu reakce se bazývá **aktivační energie** ($E_{A}$)
- umožňuje vznik **aktivovaného komplexu**
    - **aktivovaný komplex** je nestabilní celek jehož rozpadem vznikají prodkty
    - zanikají v něm staré vazby a tvoří se vazby nové
    - obecně: $A_{2}+B_{2}\leftrightharpoons{[A_{2}B_{2}]}\rightarrow{2\ AB}$
- Graf změn energie částic v průběhu reakce
{{< fig class="note-fig" src="https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FPetrGersl%2FLKD2SOvT_-.jpg?alt=media&token=9e7ccf19-f4c8-433a-8803-532fcfeb329c" alt="" >}}
   - $E_{v}$ - potenciální energie reaktantů
   - $E_{p}$ - potenciální energie produktů
   - $E_{A}$ - aktivační energie
   - $E_{AK}$ - potenciální energie aktivovaného komplexu
   - $\Delta{Q}$ - reakční teplo
- aktivační energie je rovna rozdílu potenciálních energií aktivovaného komplexu a reaktantů: $E_{A}=E_{AK}-E_{v}$
# Katalýza
- ovlivňování rychlosti chemické reakce přidáním _katalyzátoru_
- reakce, které při katalýze probíhají označujeme jako _katalytický cyklus_
- **Homogenní katalýza**
    - katalyzátor je ve stejné fázi jako ostatný složky
    - katalýza probíhá většinou v kapalné fázi
        - reakční složky a katalyzátor jsou rozpuštěny v inertním rozpouštědle
    - nevýhodou jsou komplikace při oddělování produktů a kytalyzátoru
    - výhodou je účinnost a selektivita
- **Heterogenní katalýza**
    - katalyzátor je v jiné fázi než ostatní složky
    - katalyzátorem je obvykle pevná látka, na kterou se složky v plynném nebo kapalném skupenství adsorbují a po vzniku produktů se desorbují
    - katalyzátor je obvykle navíc rozptýlen na nějakém nosiči pro co největší povrch
- **Katalyzátor**
    - látka, která zvyšuje rychlost chemicé reakce
    - [enzymy](/notes/research/chemistry/biochemistry/descriptive-biochemistry/enzymes) jsou _biokatalyzátory_ s vysokou specificitou 
        - reagují obvykle jen s jednou látkou
- na konci reakce se katalyzátor regeneruje
    - proto se ho přidává jen málo na velké množství reaktantů
- katalyzovaná reakce probíhá ve dvou stupních:
    1. vzniká nestabilní meziprodukt jedné z výchozích látek a katalyzátoru
    2. meziprodukt se při reakci s druhou reagující látkou rozkládá na produkt a regenerovaný katalyzátor
- katalyzátor snižuje aktivační energii změnou reakčního mechanismu
    - proto reakce probíhá rychleji
- přítomnost katalyzátoru označujeme jeho vzorcem nad nebo pod šipkou
    - např.: $N_{2}(g)+3\ H_{2}(g)\stackrel{Fe(s)}{\longrightarrow}2\ NH_{3}(g)$
- **Inhibitor**
    - zpomalují reakce
    - _stabilizátory_
        - reagují s meziprodukty řetězových reakcí
    - _katalytické jedy_
        - deaktivují katalyzátory