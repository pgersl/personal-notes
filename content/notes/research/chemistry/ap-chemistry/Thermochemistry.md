---
title: "Thermochemistry"
layout: single
type: note
section: "AP Chemistry"
weight: 
---
# Introduction
- **_energy_** is the internal capacity of an object to perform work or to trasnfer heat
- **_system_** is a part of the universe which is observed
> Thermodynamics is the study of changes within systems and their surroundings.
- the change in a system is described by _state functions_
    - energy $E$
    - enthalpy $H$
        - $\Delta{H} = E_r - E_p$
            - where:
                - $E_r$ is the _energy of the reactants_
                - $E_p$ is the _energy of the products_
    - pressure $p$
    - volume $V$
    - temperature $T$
## Law of conservation of energy
> The total energy of an isolated system remains constant. nergy can neither be created or destroyed - only converted to another form.
## System classification
- systems can be influenced by their surroundings
- **Open system**
    - open systems can exchange both mass and heat with its surroundings
    - most commonly, heat gets transfered
    - the open system tries to reach a state of equilibrium, where the system influences its surrounding so that the same amount of energy gets trasnfered as is gained, same with mass and _vice versa_
- **Closed system**
    - closed systems can only exchange energy
    - no mass is able to get in or out of the system
- **Isolated system**
    - isolated systems cannot exhange energy nor mass
    - approximate example of a such system on earth is a thermoflask
### Zeroth law of thermodynmics
> If two thermodynamic systems are each in thermal equilibrium with a third system, then thy are in thermal equilibrium with each other.
## Energy exchange classification
- a gain or an export of enrgy results in the change of the overall state of the system
- **Endothermic processes**
    - an endothermic process is one in which heat is gained by the system
    - the difference in the heat gained is described by the change of enthalpy, which is **positive** in this scenario
        - $\Delta{H} > 0$
    - phase changes which are endothermic are: melting, vaporization and sublimation

{{< fig class="note-fig" src="/media/img/figs/ap-chem/6-2.png" alt="Energy diagram of an endothermic process" >}}

- **Exothermic processes**
    - an exothermic process is one in which heat is lost from thy system
    - the difference in heat is **negative** in this scenario
        - $\Delta{H} < 0$
    - phase changes which are exothermic are: condensation, freezing and deposition

{{< fig class="note-fig" src="/media/img/figs/ap-chem/6-1.png" alt="Energy diagram of an exothermic process" >}}
## Collision theory
- the collision theory defines two main conditions for a reaction to occur:
    1. the system has to have enough energy for the reaction to occur
    2. the molecules have to be oriented properly in order to react with one another
- this implies that:
    1. the higher the energy of a system, the higher the [rate](/notes/research/chemistry/ap-chemistry/kinetics/reaction-rates)
    2. the more complex are the molecules which react, the lower chance there is for a succesfull collision
# Calorimetry
- _specific heat_ ($c_p$) represents the amount of heat needed to raise the temperature of a gram of a substance by 1 K
    - it is unique for every substance
- _heat capacity_ ($c$) represents the amount of heat needed to raise an object's temperature by 1 K

$$Q =m \cdot c_p \cdot \Delta{T}$$

- where:
    - $Q$ is _heat_
    - $m$ is _the mass of a substance_
    - $c_p$ is _the specific heat of a substance_
    - $\Delta{T}$ is _the change in temperature_
## Calorimeter
- _calorimeter_ is an instrument used to measure thermodynamic quantities of a system
- calorimeter provides a space for a reaction to occur which is almost completely isolated from its surroundings
- calorimeter measures the changes in temperature using a thermometer, which has to be picked carefully so it does not interfere with the reaction mixture in any way
- the heat is transfered throughout the calorimeter using a transport fluid
    - it is commonly water
- different designs are used
    - most common ones resemble a coffe-cup

{{< fig class="note-fig" src="/media/img/figs/ap-chem/6-3.png" alt="Schematic illustration of a coffe-cup calorimeter" >}}

## Calorimetric equation
- the principle of an equillibrium being created is used to derive the calorimetric equation
- the heat gained by the the object of the lower initial temperature is equal the the heat lost by the object of the higher initial temperature

$$Q_1 = Q_2$$
$$m_1 \cdot c_{p1} \cdot \Delta{T_1} = m_2 \cdot c_{p2} \cdot \Delta{T_2}$$

# Phase changes
- all substances have different phases - solid, liquid, gas
- the phase of a substance depends on pressure and temperature
- phase changes occur at constant temperatures
    - _melting point_ is the precise temperature of a solid changing to a liquid
        - the specific quantity of heat needed to change phases is called _enthalpy of fusion_ $\Delta{H_{fus}}$
            - heat is then $Q = m \cdot \Delta{H_{fus}}$
    - _boiling point_ is the precise temperature of a liquid changing to a gas
        - the spcific quantity of heat needed to change phases is called _enthalpy of vaporiazation_ $\Delta{H_{vap}}$
            - heat is then $Q = m \cdot \Delta{H_{vap}}$
- at these constant temperatures, the phase change is in an equilibrium and changing the temperature will result in a phase change
## General phase change diagram
- _general phase change diagram_ plots pressure against temperature to show how the phase changes as these conditions change
- there are two unique points on this diagram:
    - _triple point_ is the the point where all three phases meet and they all exist in an equilibrium (the substance is vaporized as it is condensed as it is frozen as it is melted as it sublimes as it desublimes)
    - _critical point_ is the point where the distinction between liquid and gas do not exist
        - _[supercritical fluid](https://en.wikipedia.org/wiki/Supercritical_fluid)_ is a phase of matter in which the matter behaves both as a gas and as a liquid

{{< fig class="note-fig" src="/media/img/figs/ap-chem/6-4.png" alt="General phase change diagram" >}}

# Enthalpy $H$
- _enthalpy_ describes the total quantity of heat in a system
- enthalpy cannot be measured and what can be measured is only its change ($\Delta{H}$)
- enthalpy increases during endothermic processes and decreases during exothermic processes
- $\Delta{H} = \Delta{U}$ (U - _internal energy_) for reactions which do not involve the production of gases
    - $\Delta{H} = \Delta{U} + RT\Delta{n}$ for rection which do involve the production of gases (at constant temperature)
## Enthalpy of reaction $\Delta{H^0}$
- it describes whether heat was released or recieved during a chemical reaction at constant pressure
- it can be calculated as the difference of dissosiaction enthalpies of the reactants and the products
    $$\Delta{H^0} = \sum{H_r} - \sum{H_p}$$
    - where:
        - $H_r$ is _the enthalpy of the dissociation of the bonds in the molecules of reactants_
        - $H_p$ is _the enthalpy of the dissociation of the bonds in the molecules of products_
- it can be calculated as the difference of enhtalpies of formation of the products and the reactants
    - enthalpy of formation is the enthalpy of reaction of the elemntary synthesis of the substance
    $$\Delta{H^0} = \sum{\Delta{H_{f,p}}^0} - \sum{\Delta{H_{f,r}}^0}$$
    - where:
        - $\Delta{H_{f,p}^0}$ is _the enthalpy of formation of the products_
        - $\Delta{H_{f,r}^0}$ is _the enthalpy of formation of the reactants_
# Hess's law
> The total enthalpy change during the complete course of a chemical reaction is the same whether the reaction is made in one or in several steps.
## Implications of Hess's law
> The absolute value of enthalpy change stays constant for reversed reactions.

> When stoichiometric coefficients are adjusted, the value of enthalpy must also be adjusted by the same value.

> When several reactions are combined together, their partial enthalpy chanes are added together and represent the net enthalpy of the overall reaction.