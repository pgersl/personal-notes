---
title: "Ideal gas law"
layout: single
type: note
section: "AP Chemistry"
weight: 
---
# Standard conditions
- standard conditions are agreed upon by IUPAC
- _standard pressure_ is exactly $10,000\ Pa$
- _standard temperature_ is exactly $273.15\ K$
# Definitions
- **_ideal gas_** is a gas composed of molecules which do not interact with one another via intermolecular forces in any way
    - ideal gas cannot be condensed
    - it doesn't exist in the real world, some molecules do come close to it though
        - the molecules need to be very small and the intermolecular forces very week
        - $O_2$, $N_2$, $CO_2$ and $H_2$
- ideal gas interacts with its container, poushing in the walls resulting in _pressure_ $p$
- the _speed_ $v$ of the particles is directly proportional to the gas' _temperature_ $T$
- the size of the container with the gas determines its _volume_ $V$
- **_closed system_** is a system which doesn't exchange energy nor matter with its surroundings
# Preliminary laws
## Boyle's law (_Loi de Mariotte_)
- proven by Robert Boyle
> For a constant temperature, pressure is inversly proportional to the volume of the gas in a closed system.
> $$P=\cfrac{k}{V}$$
> $$PV=k$$

- at a constant speed of particles (temperature), if the volume shrinks, the number of collisions of the gas and the container must increase and _vice versa_
## Charles' law
- discovered by Jacque Charles
> For constant pressure, volume is directly proportional to temperature.
> $$V=kT$$
> $$\cfrac{V}{T}=k$$

- at a constant pressure, if we want to increase volume, we must also increase the speed of the particles (temperature)
## Gay-Lussac's law
- discovered by Joseph Louis Gay-Lussac
> For constant volume, pressure is directly proportional to temperature
> $$P=kT$$
> $$\cfrac{p}{T}=k$$

- at a constant volume, if we want to increase pressure, we also need to increase the speed of the particles (temperature)
## Avogadro's law
- discovered by Amadeo Avogadro
> The volume of an ideal gas is directly proportional to the ammount of substance
> $$V=kn$$
> $$\cfrac{V}{n}=k$$
# Ideal gas law
- it is a combination of all already mentioned laws
$$\cfrac{pV}{nT}=k$$
- the constant $k$ is known as the **_unversal gas contant_** $R$ ($\approx{8.3145\ J\cdot{K^{-1}}\cdot{mol^{-1}}}$)
- since the constant is universal, a mixture of multiple different ideal gasses will behave as an ideal gas still
## Dalton's law
> The overall pressure of an ideal gas is the sum of the partial pressures of all the gasses.
> $$P=\sum_iP_i$$

- the partial pressure can be calculated as the product of the molar fraction of the gas and the overall pressure
$$P_i=x_iP$$
- also:
$$\cfrac{p_i}{p}=\cfrac{n_i}{n}$$
- the oressure and ammount of substance of whatever kind is virtually the same for an ideal gas
# Kinetic molecular theory of gases
## Different forms of the ideal gas law
- the ammount of substance in the ideal gas law can be rewritten using the number of particles:
$$PV=Nk_BT$$
- where $k_B$ is the _Boltzmann constant_
    - its value is approximately $1.380648\cdot{10^{-23}J\cdot{K^{-1}}}$
    - universal gas constant is the product of multiplying it and the avogadro constant
$$R=N_Ak_B$$
## Relation of temperature to the speed of particles
- the mean speed of particles follows Maxwell-Boltzmann propability distribution
    - the equation counts the propability that a particle with three properties (mass, speed and temperature) exists
    - it is usually denoted as the propability $\mathbb{P}$

$$\mathbb{P}(m,v,T)=\sqrt{\left(\cfrac{m}{2\pi{k_BT}}\right)^3}\cdot{4\pi{v^2}e^{-\frac{mv^2}{2k_BT}}}$$

- the velocities of the particals of a gas are not the same everywhere
- the lower the temperature, the higher propability of particles moving is similar speeds
- the higher the temperature, the higher the mean velocity of the particles
- the lower the mass, the higher the mean velocity of the particles
- the mean kinetic energy of the particles can be derived from the propability equation above

$$E_k=\cfrac{mv^2}{2}=\cfrac{3k_BT}{2}$$

- at constant temperature, if we want to echange a light element for a heavier one, the kinetic energy must stay the same and the velocity drops
- at constant velocity, if we want to exchange a light element for a heavier one, the kinetic energy must rise as does the temperature
## Diffusion
- it is the spontaneous mixing of two substances
- the higher the temperature or the lower the mass, the faster the diffusion
## Effusion
- it is the process of a gas leaving a container with a hole in it
- the faster the particle, the faster the effusion
### Graham's law
- it desribes the rates of effusion in a mixture of two gasses

$$\cfrac{r_1}{r_2}=\sqrt{\cfrac{M_2}{M_1}}$$

- $r$ is is the rate at which the gas escapes the container
    - it is proportional to the velocity of the particles
# Deviations from the ideal gas law
## Compressibility
- the ideal gas law neglects the volume of the gas and its changing properties based on it
- at low enough pressure, it is almost absurd speaking of a volume of gas when the molecules of it are so far apart
- an ideal gas can be compressed infinitely and it never condenses
- at high enough pressure or temperature, the propability of collision of two molecules rises significanly and thus the volume of the gas cannot be neglected anymore
- gasses thus have a property called _compressibility_ $z$

$$z=\cfrac{PV}{nRT}$$

- gasses behave almost ideally only at certain conditions, from molecule to molecule
## Van der Waals equation
- derived by Johannes Diderickk van der Waals

$$\left(P+\cfrac{an^2}{V^2}\right)\cdot{(V-nb)}=nRT$$

- the volume of the container is reduced by the volume of the molecules $nb$
    - $b$ represents a constant, the volume of one mole of the gas molecules
- the pressure is lowered due to attractive forces of molecules
    - $a$ is a constant derived experimenally