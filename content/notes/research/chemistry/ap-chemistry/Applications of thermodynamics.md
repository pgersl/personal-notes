---
title: "Applications of thermodynamics"
layout: single
type: note
section: "AP Chemistry"
weight: 
---
# Entropy $S$
- _entropy_ is a measure of order (or disorder) in a system
- a very regular and ordered system will have a low entropy
- a very regular system also has low energy
- changes that result in positive $\Delta{S}$:
    - increase in the number of moles
    - increase in temperature
    - increase in volume
    - phase changes from solid to liquid to gas
    - forming of more complicated molecules
# Laws of thermodynamics
## Zeroth law od thermodynamics
> Of two thermodynamic systems are each in thermal equilibrium with a third system, then they are in thermal equilibrium with each other.
## First law of thermodynamics
> No energy can be created or destroyed.
## Second law of thermodynamics - Clausius
> Heat does not spontaneously pass from a colder to a hotter body.
## Second law of thermodynamics - Entropy
> The entropy of isolated systems left spontaneous evolution cannot decrease, as they always arrive at a state of thermodynamic equilibrium, where the entropy is highest.If all processes in the system are reversible, its entropy is constant.
## Third law of thermodynamics
> The entropy of any perfectly ordered, crystalline substance at a temperature of absolute zero is zero.
### Absolute entropy and Boltzmann formula
- absolute entropy of a system is determined by the number of _microstates_ (the configuration of all atoms in the system)
- zero entropy corresponds to a perfectly ordered crystalline system with only one microstate
- for known values of standard entropy, the standard entropy change for any process can be calculated as the difference between the sums of entropies of products and reactants

$$\Delta{S^0} = \sum{nS^0_p} - \sum{mS^0_r}$$

- where $n$ and $m$ are stoichiometric coefficients, $p$ stands for products and $r$ stands for reactants

- Boltzmann formula approximates the absolute entropy of a system

$$S=k_B\ln{P}$$

- where:
    - $k_B$ is the _Boltzmann constant_
    - $P$ is the _number of microscopic states_
### Implications of the third law of thermodynamics
1. The sign of entropy of any substance at temperatures above absolute zero is positive.
2. A fixed reference point was found, which allows us to measure the absolute entropy of any substance, at any temperature.
    - absolute entropy is this determined by the heat increase required to bring the substance from 0 K to the desired temperature
# Gibbs free energy $\Delta{G}$
- knowing the change in enthalpy is not enough to determine whether a process is or is not spontaneous
- if the change in enthalpy is negative, the reaction is more likely to happen spontaneously
    - an exothermic reaction which results in a more disordered system (creating more fragments) is more propable than an exothermic reaction which results in the creation of a less disordered system (energy needs to be added to keep the system ordered)
    - if heat is not removed from the system during the reaction, the reaction slows down and can even stop
- combining enthalpy, entropy a temperature together results in the change in Gibbs free energy

$$\Delta{G} = \Delta{H} - T\Delta{S}$$

- the lower the change in Gibbs energy the more spontaneous reaction
    - spontaneous reaction is described by a negative change in Gibbs energy (exothermic processes)
- an endothermic process and a positive change in entropy, the reaction will be spntaneous, though less favorable than an exothermic reaction
- a process with a positive change in enthalpy and a negatve change in entropy will not occur spontaneously
## Calculation

$$\Delta{G^0} = \sum{nG^0_p} - \sum{mG^0_r}$$

- where $n$ and $m$ are stoichiometric coefficients, $p$ stands for products and $r$ stands for reactants

$$\Delta{G} = \Delta{G^0} + RT\ln{q}$$

- if $\Delta{G}$ is zero, then:

$$\Delta{G^0} = -RT\ln{K_{eq}}$$

# Kinetic control
- it is not the case that exothermic reactions (or indeed with any thermodynamically favorable process) proceed faster than thermodynamically less favorable processes
- the rate of the rection is not determined by reaction thermodynamics but reaction kinetics
- the speed of a reaction is determined by the activation energy and not by thermodynamic favorability
- controling activation energy is called _kinetic control_