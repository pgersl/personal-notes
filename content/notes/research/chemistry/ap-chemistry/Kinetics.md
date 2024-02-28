---
title: "Kinetics"
layout: single
type: note
section: "AP Chemistry"
weight: 
---
# Reaction rates
- **_reaction rate_** $v$ desribes the speed of a reaction
- unit: $mol\cdot{dm^{-3}}\cdot{s^{-1}}$
## Calculation
### Method 1
- to calculate the rate of a reaction, the changes of concentration over time are used

$$v=\cfrac{\Delta{c}}{\Delta{t}}$$

- where:
    - $\Delta{c}$ is _the change in concentration_
    - $\Delta{t}$ is _the change in time_
- for a general reaction, the equation is more complex, since it includes all the possible reactants and products
$$v=-\sum{\cfrac{\Delta{c_R}}{\nu_R\cdot\Delta{t}}}=\sum{\cfrac{\Delta{c_P}}{\nu_P\cdot\Delta{t}}}$$
- where:
    - $\Delta{c_R}$ is _the change in concentration of a reactant_
    - $\Delta{c_P}$ is _the change in concentration of a product_
    - $\Delta{t}$ is _the change in time_
    - $\nu_R$ is _the stoichiometric coefficient of a reactant_
    - $\nu_P$ is _the stoichiometric coefficient of a product_
#### Change in concentration over time
- as the concentration of the product increases, the concentration of the reactant decreases as the time goes on
- this relationship is not linear

{{< fig class="note-fig" src="/images/figs/reaction-rates/1.png" alt="Change of concentration in time of a reactant and a product" >}}

### Method 2
- the rate of a reaction is directly proportional to the concentration of the reactant
- to calulate the rate of a reaction, the concentration in a given moment in time is used

$$v=k[A]^a$$

- where:
    - $k$ is _the rate constant_
    - $[A]$ is _the concentraion of the reactant_ $A$
    - $a$ is _the order of the reaction_

#### Order of a reaction
- **_order of a reaction_** is an experimentally derived value, which describes how much does the concentration of a reactant influence the rate of the reaction

- **Zeroth order reaction**
    - the concentration of the reactant does not affect the rate of the reaction
    - $a=0$, hence:

$$v=k$$

- **First order reaction**
    - the rate of the reaction is directly proporitional to the concentration of the reactant
    - as there is less reactant, the reaction gets slower and _vice versa_
    - $a=1$, hence:

$$v=k[A]$$

- **Second order reaction**
    - the rate of the reaction is directly proportional to the square value of the concentration of the reactant
    - as there is less reactant, the reaction gets slower and _vice versa_
    - it is similar to the first order reaction
    - $a=2$, hence:

$$v=k[A]^2$$

#### Changes in rate constant units
- the $[k]$ changes with the different orders of the reaction:
    - $a=0=>[k]=mol\cdot{dm^{-3}}\cdot{s^{-1}}$
    - $a=1=>[k]=s^{-1}$
    - $a=2=>[k]=dm^3\cdot{mol^{-1}}\cdot{s^{-1}}$
## Rate law
- **_rate law_** combines both methods of calculating the rate of a reaction

$$\cfrac{-\Delta[A]}{\Delta{t}}=k$$

- **Zeroth order reaction**

$$[A]=-[A]_0-kt$$

- **First order reaction**

$$[A]=[A]_0\cdot{e^{-kt}}$$

- **Second order reacion**

$$[A]=[A]_0+\cfrac{1}{kt}$$

- where $[A]_0$ is the concentration of reactant $A$ when $t=0$
### Half-life of a reaction $t_{1/2}$
- it is used to describe what time does it take till half of the reactant has undergone a reaction

- **Zeroth order reaction**

$$t_{1/2}=\cfrac{[A]_0}{2k}$$

- **First order reaction**

$$t_{1/2}=\cfrac{ln2}{k}$$

- **Second order reacion**

$$t_{1/2}=\cfrac{1}{k[A]_0}$$

# Collision model
## Elementary reactions
- **_elementry reactions_** are reactions which do not have an intermediate step
- **_intermediate_** is a species which is neither a reactant nor a product
    - it is usually quite unstable, although, in some cases, it can be isolated
- these reactions can be represented by simple notation, yet their mechanism is very complex
- their stoichiometric coefficients correspond with their order
    - this is not the case for non-elementary reactions
## Movement of particles resulting in a reaction
- paticles react with one another by collidng - _collision model_
- in _monomolecular reactions_ (where one particle undergoes a chemical change), nothing collides
- in _bimolecular reactions_ (where two different particles interact), a collision happens
    - whether a collision results in a reaction is determined by the space orientation of the particles
    - the reaction also needs to overcome an energy barrier - _activation energy_
- in reactions with more than two different particles, a succession of elementary reaction happens before the final product is formed
- collision which do result in a chemical reaction are called _effecive_ (otherwise, they are _ineffective_)
# Reaction enrgy profile
- **_activation energy_** $E_a$ is the energy needed to start a chemical reaction
## Reaction coordinate
- graphing the total energy levels of a reaction results in a _reaction energy profile_ (_reaction coordinate_)
### Elementary reaction coordinate

{{< fig class="note-fig" src="/images/figs/reaction-energy-profile/1.png" alt="Elementary reaction energy profile" >}}

- on it, three stages are distinguishable:
    - **R** - energy of the reactants
    - **TS** - energy of the transition state
    - **P** - energy of the products
- the difference between the energy of the products and the transition state is the activation energy
### Multi-step reaction coordinate

{{< fig class="note-fig" src="/images/figs/reaction-energy-profile/2.png" alt="Multi-step reaction energy profile" >}}

## Transition state
- transition state is a state, where the reactans for an _activated complex_
- it is an intermediate which exists for a very short ammount of time and cannot be measured very well
## Calculation of the rate constant using the activation energy
- the rate constant can be calculated by the _Arrhenius equation_

$$k=Ae^{\frac{-E_a}{RT}}$$

- where:
    - $A$ is _the pre-exponential factor_
        - it is uniqe for every reaction
        - it needs to be determined experimentally
    - $R$ is _the universal gas constant_
    - $T$ is _the absolute temperature_
- a newer equation was developed, which does not use any experimentl values - _[Eyrling equation](https://en.wikipedia.org/wiki/Eyring_equation)_
    - it is more useful in the theoretical field
## Implications of the Arrhenius equation
1. The higher the activation energy, the lower the rate constant and the lower the rate of the reaciton.
2. The higher the temperature, the faster the reaction.
# Reaction mechanisms
- **_reaction mechanism_** shows how exactly a reaction works with all of its intermediate steps
- **_rate-determining step_** is the slowest reaction in the chain of all the intermediate elementary reactions
    - to make the reaction go faster, this step needs to be adjsuted 
## Steady-state approximation
- **_steady-state approximation_** assumes there is a moment in a more complex reaction where an intermediate is in an equilibrium where it gets created as fast as it gets consumed
- it helps up determine the [rate law](/notes/research/chemistry/ap-chemistry/kinetics/reaction-rates#rate-law) for a complex reaction
### Example
- reaction: $2\ N_2O_5\longrightarrow{4\ NO_2+O_2}$
- steps:
    1. $2\ N_2O_5\leftrightharpoons{NO_2+NO_3}$
    2. $NO_2+NO_3\longrightarrow{NO+NO_2+O_2}$
    3. $NO_3+NO\longrightarrow{2\ NO_2}$
- rates:
    1. $v_1=k_1[N_2O_5]$, $v_{-1}=k_{-1}[NO_2][NO_3]$
    2. $v_2=k_2[NO_2][NO_3]$
    3. $v_3=k_3[NO_3][NO]$
- calculating $[NO]$:
    - $v_2=v_3$
    - $k_2[NO_2][NO_3]=k_3[NO_3][NO]$
    - hence: $[NO]=\cfrac{k_2[NO_2]}{k_3}$
- calculating $[NO_3]$:
    - $v_1=v_{-1}+v_2+v_3$
    - $k_1[N_2O_5]=k_{-1}[NO_2][NO_3]+k_2[NO_2][NO_3]+k_3[NO_3][NO]$
    - hence: $[NO_3]=\cfrac{k_1[N_2O_5]}{k_{-1}[NO_2]+k_2[NO_2]+k_3[NO]}$
    - after adjustment ($[NO]$ substitution): $[NO_3]=\cfrac{k_1[N_2O_5]}{k_{-1}[NO_2]+2k_2[NO_2]}$
- claculating the overall rate:
    - $v=\cfrac{\Delta[O_2]}{\Delta{t}}=k_2[NO_2][NO_3]$
    - after adjustment ($[NO_3]$ substitution): $v=\cfrac{\Delta[O_2]}{\Delta{t}}=\cfrac{k_1k_2[N_2O_5]}{k_{-1}+2k_2}=k[N_2O_5]$
    - where $k=\cfrac{k_1k_2}{k_{-1}+2k_2}$
# Catalysis
- **_catalyst_** is a substance which bonds with the molecules of the reactant (either via covalent bonds or intermolecular forces) to form an intermediate which requires less activation energy than the activation energy of the reaction without it
- catalyst forms an intermediate which then breaks down to the product and the catalyst or is kicked out by another substance
- catalyst itself does not undergo any reaction and is regenerated in the end
- catalysis needs to be taken into account when calculating the overall rate of the reaction
- the reaction profile changes
    {{< fig class="note-fig" src="/images/figs/catalysis/1.png" alt="Catalized reaction energy profile" >}}
- catalysis is important in most natural processes and is enabled primarily by enzymes
    - it is also used in countelss synthesis processes