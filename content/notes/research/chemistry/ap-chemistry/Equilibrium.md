---
title: "Equilibrium"
layout: single
type: note
section: "AP Chemistry"
weight: 
---
# Reaction direction
- **_irreversible reaction_** is a reaction, which goes all the way to completetion after all reactants have been consumed all products formed
- **_reversible reaction_** is a reaction, which goes to a point where products get made at the same rate they are being broken down back to reactants
- **_equilibrium_** is a state, in which new products are formed as well as broken down at the same time
    - it is established when the [rates](/notes/research/chemistry/ap-chemistry/kinetics/reaction-rates) of both reactants and products are the same
- **_reverse reaction_** is the reverse direction of a reaction
- **_forward reacion_** is the forward drection of a reaction
# Reaction quotient $q$
- _reaction quotient_ is a the ratio of the concentration of the products to the concentration of the reactants
- if the ratio is larger than 1, the reaction proceeds in the reverse direction
- if the ratio is smaller than 1, the reaction proceeds in the forward direction
- if the reaction is equal to 1, the reaction is in equilibrium
## Calculation
$$aA \leftrightharpoons bB$$
$$r_1 = k_1[A]$$
$$r_2 = k_2[B]$$
$$\cfrac{r_2}{r_1} = \cfrac{k_2[B]}{k_1[A]}$$
$$q = \cfrac{[B]^b}{[A]^a}$$
# Equilibrium constant $K_{eq}$
- _equilibrium constant_ is a value of the reaction quotient with which the ratio $\cfrac{r_2}{r_1}$ is equal to 1
    - if $Q > K_{eq}$, the reaction proceeds in the reverse direction
    - if $Q < K_{eq}$, the reaction proceeds in the forward direction
    - if $Q= K_{eq}$, the reaction is in equilibrium
- it can be calculated just like the reaction quotient but the concentration are specific for the reaction in equilibrium
- more generaly, equilibrium constant is defined as the ratio of _activities_ of the reactants of the product
- if the equilibrium is larger than 1, the products are heavily favored in the equilibrium mixture
    - irreversible reactions have the equilibrium constants extremely large
- if the equilibrium is smaller than 1, the reactants are heavily favored in the equilibrium mixture
- the inverse value of he equilibrium constant provides the same information about the equilibrium state, but is associated with a differently written reaction (if products and reactants were swapped)
## Calculation
### Method 1: Via concentrations ($K_c$)
$$aA + bB \leftrightharpoons cC + dD$$
$$K_{c} = \cfrac{a_{C,eq}^ca_{D,eq}^d}{a_{A,eq}^aa_{B,eq}^b}$$
- where:
    - $a_{X,eq}$ is _the activity of a substance in equilibrium_
        - $a_{X} = \cfrac{c_X}{c_{std}}$
            - $c_{std}$ is _the standard concentration_ (=1M)
                - it makes the activity dimensionless
            - $c_X = \cfrac{n_X}{V}$
### Method 2: Via pressure ($K_p$)
$$aA + bB \leftrightharpoons cC + dD$$
$$K_{p} = \cfrac{a_{C,eq}^ca_{D,eq}^d}{a_{A,eq}^aa_{B,eq}^b}$$
- where:
    - $a_{X,eq}$ is _the activity of a substance in equilibrium_
        - $a_X = \cfrac{p_X}{p_{std}}$
            - $p_{std}$ is _the standard pressure_ (=100 000 Pa)
                - it makes the activity dimensionless
            - $p_X = \cfrac{n_XRT}{V}$
### Rescaling the stoichiometric coefficients
- if the stoichiometric coefficients were changed by a factor of $s$, the new equilibrium constant will be equal to $(K_{eq})^s$
### Relationship between $K_c$ and $K_p$
$$K_p = K_c\left( RT\cfrac{c_{std}}{p_{std}} \right)^{\Delta{n}}$$
- where:
    $\Delta{n}$ is _the change in stoichiometric coefficients_
# Equilibrium concentration
- _equilibrium concentration_ is the conentration of a substance in the state of equilibrium
## Calculation
- using an ICE table, the equilibrium concentrations can be calculated 
- first, the initial concentrations are written down
- second, the changes in concentration are denoted using the stoichiometrich cofficients
- third, the formula for the equilibrium concentration is written down
- fourth, the equilibrium concentration formulas are substituted to the equilibrium constant formula
### Example
$$aA \leftrightharpoons bB$$
- initial concentration:
    - $A$: $c_0 = kM$
    - $B$: $c_0 = 0M$
- change in concentration:
    - $A$: $-ax$
    - $B$: $bx$
- equilibrium concentration:
    - $A$: $c_0 - ax$
    - $B$: $c_0 + bx$
- substitution:
$$K_c = \cfrac{(bx)^b}{(c_0-ax)^a}$$
# Le Chatelier's principle
> When a system in equilibrium is disturbed by some change, it will respond so as to counteract the change.
## Change in composition
> If reactant is added to a mixture in equilibrium, the concentration of products increases and _vice versa_.
> If product is added to a mixture in equilibrium, the concentration of the reactant increases and _vice versa_.
## Change in pressure
> If fewer molecules are created by the forward reaction and the pressure is increased, the concentration of the product increases.
> If more molecules are created by the reverse reaction and the pressure is increased, the concentration of the reactant increases.
## Change in temperature
> If a reaction is exothermic and the temperature is increased, the concentration of the reactant increases and _vice versa_.
> If a reaction is endothermic and the temperature is increased, the concentration of the product increases.
# Solubility equilibrium constant $K_{sp}$
- for a reaction $AB \leftrightharpoons A^+ + B^-$, the solubility equilibrium constant will be equal to $[A^+][B^-]$, because the concentration of $[AB]$ is by definition equal to 1
- _solubility product_ is the concentration of a dissolved substance in a completely saturated solution
    - it is calculated as $\sqrt{K_{sp}}$
    - if represented in molar concentration, it can also be called _molar solubility_
## Common-ion effect
> If a compound containing an ion that already is present in a solution is added to a reaction in equilibrium, the concentration of reactants will increase.