---
title: "Analytical methods 2"
layout: single
type: note
section: "AP Chemistry"
weight: 
---
# Absorption spectroscopy
- it uses the fact that each atom has a different electron shell and thus all absorb different wevelengths
- a spectrometer consists of a few parts:
    - _source_
        - it is a source of white light
        - the source should have a broad span of white light and should be as stable as possible
        - some sources also generate electromagnetic radiation of shorter or longer wavelengths beyond visible light 
    - _monochromator_
        - it is a set of three parts: _entrence slit, dispersion device, exit prism_
        - the white light passes through the entrence slit
        - it then hits a prism which seperates the white light into its different components
        - a narrow band of wavelengths is passed through the exit slit
        - the prism then turns to pass different wavelenghts onto the exit slit
    - _sample_
        - the light from the monochromater then passes through our unknown sample
    - _detector_
        - it detects whether light was or wasn't passed through the sample and records it into a computer file
- the results is called an **_absorption spectrum_**

{{< fig class="note-fig" src="https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FPetrGersl%2FdTk926RQbW.png?alt=media&token=c82e8a15-ccd3-4347-882e-bc12b9f5f50c" alt="Absorption spectrum of benzene" >}}

# Beer-Lambert law
- _Beer-Lambert law_ determines the realtionship between absorbance and concentration
    - whilst absorption spectroscopy gives us a qualitative result, Beer-Lambert law gives us a qantitative result
- formulation:

$$A=\epsilon{lc}$$

- where:
    - $A$ is _absorbance_, dimensionless
        - it is the result of absorption spectroscopy
    - $\epsilon$ is the _molar mass coefficient_, [$dm^3\cdot{mol^{-1}}\cdot{cm^{-1}}$]
        - it varies from wavelength to wavelength
    - $l$ is the _length of the cuvette_
    - $c$ is the _concentration_
- concentration can be thus calculated as:

$$c=\cfrac{A}{\epsilon{l}}$$