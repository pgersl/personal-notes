---
title: "Acids and bases"
layout: single
type: note
section: "AP Chemistry"
weight: 
---
# Definitions
## Arrhenius theory of acids and bases
- **_acid_** is a compound that can release a proton $H^+$ in an aqueous solution
- **_base_** is a compound that can release a hydroxide ion $OH^-$
## Brønsted-Lowry theory of acids and bases
- **_acid_** is a compound that can release a proton $H^+$ in an aqueous solution
    - the water molecules immediately bonds with the lone proton via a donor-acceptor bond, which produces a _hydronium ion_ $H_3O^+$

$$HA + H_2O \leftrightharpoons A^- + H_3O^+$$
    - solutions with an increased concentration of the hydronium ion are called _acidic_
- **_base_** is a compound that can accept a proton $H^+$ in an aqueous solution
    - in a solution of just the base, the proton is provided by a water molecule and is bonded to the base via a donor-acceptor bond, which produces a _hydroxide ion_

$$B + H_2O \leftrightharpoons BH^+ + OH^-$$
    - solutions with an increased concentration of the hydroxide ion are called _basic_
# Self-ioisation of water
- water can act as both an acid and a base
- it reacts with itself to create both a hydronium ion and a hydroxide anion

$$H_2O + H_2O \leftrightharpoons OH^- + H_3O^+$$
    - the equilibrium constant for this reaction $K_w$ can be calculated as $K_w = [H_3O^+][OH^-]$
    - at room temperature $K_w = 10^{-14}$
        - the constant is temperature dependent
    - it is also called _the ionic product of water_
## pH and pOH scales
- concentration of $H_3O^+$ and $OH^-$ is equal to $10^{-7}$ mol
- the pH pOH scale is defined as the negative decadic logarithm of relevant concentrations of $H_3O^+$ and $OH^-$

$$pH = -\log{[H_3O^+]}$$
$$pOH = -\log{[OH^-]}$$

- pH is commonly used to describe acidity of a solution
    - when pH is equal to 7, the solution is _neutral_
        - $pH = 7 = pOH$
    - when pH is less then 7, the solution is _acidic_
        - $pH < 7 < pOH$
    - when pH is more than 7, the solution is _basic_
        - $pH > 7 > pOH$
# pH calculation
## Strong acids and bases
- the equilibrium constant for the dissociation reactions of strong acids and bases is very high
    - most of the acid or base dissociates
- the pH is completely determined by the initial concentration of the acid (or base)

$$pH = -\log{c_{HA}}$$
$$pOH = -\log{c_B}$$
$$pH = pKw - pOH$$

## Weak acids

$$K_a = \cfrac{[H_3O^+][A^-]}{[HA]}$$

- simplifications:
    - $[H_3O^+] = [A^-]$ (both are created at the same rate)
    - $c_{HA} = [HA] + [A^-]$
    - $[HA] = c_{HA} - [H_3O^+] \approx c_{HA}$ (assuming only small ammount of acid is dissociated)

$$K_a = \cfrac{[H_3O^+]^2}{c_{HA}}$$
$$[H_3O^+]=\sqrt{c_{HA}K_a}$$
$$pH = -\cfrac{-log{c_{HA}}+log{K_a}}{2}$$
$$pH = \cfrac{pKa-log{c_{HA}}}{2}$$
### Ionisation fraction $x$
- it determines what precentage of the acid dissociates

$$x=\cfrac{[H_3O^+]}{c_{HA}}$$

- after substitution to the $K_a$ formula:

$$x = \sqrt{\cfrac{K_a}{c_{HA}}}$$

## Weak bases
- similar process to the one used with weak acids can be used to calculate pOH of weak bases

$$pOH = \cfrac{pK_b-log{c_B}}{2}$$

- pH can be calculated using this equation:

$$K_aK_b = K_w$$
$$pK_a + pK_b = pKw$$
$$pH = pKw - pOH$$

- after substitution:

$$pH = pKw - \cfrac{pK_b - log{c_B}}{2}$$
$$pH = pKw - \cfrac{(pK_w - pK_a) - log{c_B}}{2}$$
$$pH = \cfrac{pK_w + pK_a + \log{c_B}}{2}$$

### Ionisation fraction $x$
$$x=\cfrac{[OH^-]}{c_B}$$
$$x=\sqrt{\cfrac{K_b}{c_B}}$$
# Acid-base reactions buffers
## Strong acid and strong base
- a stong acid dissociates almost completely and releases a proton 
- a strong base (usually a hydroxide) releases a hydroxide anion
- these two ions are in an equilibrium in water and thus together form water

$$OH^- + H_3O^+ \longrightarrow 2\ H_2O$$

- the pH is determined by the ammount of the acid and hydroxide added to the reaction
    - if the same amount of protons and hydroxide anions is added, the overall pH is neutral
    - if surplus of acid is added, the solution will be acidic, the pH can be calculated from the concentraion of the excess acid
    - if surplus of base is added, the solution will be basic, the pH can be calculated from the concentration of the excess base
## Weak acid and strong base
- a weak acid only reacts with the strong base after the base yealds an $OH^-$ group
- if a surplus of base is added, all acid is neutralized and the pH will be basic
- if a surplus of acid is added, the base determines how much of it will be neutralized, but the pH is still going to be basic
    - this is because the neutralization reacton of the acid exists in an quilibrium, not in an irreversible reaction

$$HA + OH^- \leftrightharpoons A^- + H_2O$$

## Strong acid and weak base
- the case is analogous to the weak acid and strong base
- the resulting solution will be acidic

$$B + H_3O^+ \leftrightharpoons BH^+ + H_2O$$

## Buffers
- _buffer_ is a solution which regulates the overall pH of a solution
- they are a result of either:
    - a solution of a weak acid with half the concentration of a strong base (compared to the concentration of the weak acid)
        - $pH \approx pK_a$
        - $pK_a \approx [H_3O^+]$
    - a solution of a weak base with half the concentration of a strong acid
        - $pH \approx pK_b$
        - $pK_b \approx [OH^-]$
- their pH doesn't change when small ammounts of acids or bases are added
    - it initially does, but is immediately reverted
### pH calculation
- pH is calculated using the _Henderson-Hasselbalch equation_

$$pH = pK_a + \log{\cfrac{[A^-]}{[HA]}}$$

- it's derived from the equation for acidity constant equation
    - $K_a = \cfrac{[H_3O^+][A^-]}{[HA]}$
- as long as the fraction $\cfrac{[A^-]}{[HA]}$ stays fixed, the actual concentrations don't play a role on the pH
    - the actual concentrations play a role however in the capacity of the buffer for adding either acids or bases
        - the higher the $[A^-]$ the more acid can be added without significantly affecting the pH
        - the higher the $[HA]$ the more base can be added without significantly affecting the pH
    - the ration shouldn't be different by the factor of 10 for the buffer to work well
        -  however, it is not a universal rule
## Weak acid and weak base
- they react according to this equation:

$$HA + B \leftrightharpoons A^- + BH^+$$

- the pH calculation is rather more complex and is dependent on the exact balance of $K_a$ and $K_b$
# Acid-base titration
- _acid-base titrations_ is a method of analytical chemistry based on neutralisation of acidic (_alkalimetry_) or basic (_acidimetry_) solutions
- pH indicators are added to the analysis solutions to determine the point of equivalence
    - the solution reaches neutral pH
- _titration curve_ plots the pH value against the volume of acid added
    - pH is reduced rapidly at the point of equivalence
    - titration curves of polyprotic acids show multiple jumps of pH
# Strength of acids and bases
- factors contributing to strength of an acid
    - the bond between the acid and the acidic hydrogen is strongly polar
        - hence, the atom the hydrogen is bonded to is very electronegative
    - the bond between the acid and the acidic hydrogen is weak
- the rest of the acid's structure also influences its ability to release a proton
    - for inorganic acids:
        - the higher the ratios between hydrogens and oxygens, the easier for it it is to release a proton
        - in hydrohalogenic acids, the strength decreases from chlorine to iodine
            - hydrofluoric acid is a weak acid (the bond between hydrogen and fluorine is too strong)
    - for organic acids:
        - they are generaly weaker than most inorgnanic acids
        - the shorter the hydrocarbon chain, the stronger the acid
    - for polyprotic acids:
        - already deprotonated acids are more difficult to further deprotonate
- strong bases usually contain an ionically bonden $-OH$ group
    - these are usually hydroxides
- bases that contain free electron pairs are generally weaker
    - they can bond a proton via a donor-acceptor bond
