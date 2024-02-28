---
title: "Electrochemistry"
layout: single
type: note
section: "AP Chemistry"
weight: 
---
# Galvanic cells
- _galvanic cells_ are a form of energy storage
- a basic galvanic cell is composed of two main parts:
    - **Two electrodes**
        - a negative anode, which consists of a more electronegative metal, immersed in a salt solution containing the same metal
        - a positive cathode, which consists of a less electronegative metal, immersed in a salt solution containing the same metal
        - the two electrodes are connected via a conductive wire
        - the more electronegative metal provides electrons for the less electronegative metal
            - the anode is slowly dissolved into solution
            - the cathode slowly grows as the dissolved metal slowly percipitates out
            - a redox reaction occurs
    - **Salt bridge**
        - as one solution gets more and more positive and the other more and more negative, a salt bridge transfers the anions and cations from the salts dissolved in the anode and cathode solutions
        - it is an essential part, because it ensures charge neutrality of the two solutions
# Standard electrode potential $E^0$
> The potential of the redox half-reacion measured against a standard hydrogen electrode under stadnard conditions is determined by the standard electrode potential.

- the elements with the standard electrode potential higher than zero will grab electrons more easily
- the elements with the standard electrode potential lower than zero will release electrons more easily
- _entire cell reaction_ is a combination of the two redox half-reaction and its electrode potential is the sum of the standard electrode potentials of these two reactions

{{< tables/electrochemistry-1 >}}

# Relating electrode potential to $\Delta{G}$

$$\Delta{G} = -nFE$$

- where:
    - $n$ is the _ammount of electrons trasfered_ (mol)
    - $F$ is the _Faraday's constant_ 
    - $E$ is the _cell electrode potential_
- a cell with a positive cell electrode potential involves a thermodynamically favored and _vice versa_
## Faraday constant $F$
> Faraday constant is the magnitude of charge that is carried by one mole of electrons.
> $$F = e \cdot N_A = 96,485\ C \cdot mol^{-1}$$
- $e$ is the elementary charge of an electron ($\approx 1.602 \cdot 10^{-19}$)
## $E^0$ calculation based on $K$

$$-nFE^0 = -RT\ln{K}$$
$$E^0 = \cfrac{RT}{nF}\ln{K}$$

- $R$ and $F$ are constants and $T$ is also constant under standard conditions (298.15 K)
    - $\cfrac{RT}{F} = 0.0257\ J \cdot C^{-1}$

$$E^0 = \cfrac{0.0257}{n}\ln{K}$$
### Nernst equation
- _Nernst equation_ calculates the electrode potential even under nonstandard conditions
$$E = E^0 - \cfrac{RT}{nF}\ln{Q}$$
# Concentration cell
- _concentration cell_ is a galvanic cell made up of same electrodes immersed in solutions of different concentration
- the electrode immersed in the less concentrated solution will dissolve into solution, whereas the electrode immersed in the more concentrated solution will grow as the zinc precipitates out
# Electrolytic cell
- _electrolytic cell_ is the opposite of a galvanic cell
    - a galvanic cell uses a spontaneous redox reaction to generate an electric current
    - an electrolytic cell uses electic current to initiate a non-spontaneous reaction
- the standard electrode potential of a electrolysis reaction is opposite to the standard electrode potential of the reaction in a galvanic cell
- the notion of electrodes (cathode and anode) is also opposite
- _electric current_ $I$ is defined as the amount of charge trasfered over time

$$I = \cfrac{Q}{t}$$

## Faraday's first law of electrolysis
> The amount of chemical change produced by a current at an electrode-electrolyte boundary is proportional to the quantity of electricity used.
> $$m = A \cdot Q$$

- where: 
    - $A$ is the _electro-chemical equivalent_
        - it is different for every substance
    - $m$ is the _mass of elements deposited on an electrode_
## Faraday's second law of electrolysis
> The amounts of chemical changes produced by the same quantity of electricity in different substances are proportional to their equivalent weights.
> $$A = \cfrac{M}{nF}$$

## Combination of both Faraday's laws

$$m = \cfrac{MQ}{nF}$$