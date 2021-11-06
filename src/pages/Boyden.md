---
title: Boyden
date: 11/5/2021, 2:47:38 PM
slug: boyden
---

# Conversation with Ed Boyden

##### Scientific Advisor

11/5/2021, 2:47:38 PM

## General heuristics for research

> “There are only so many chemical and physical laws.”

#### Fail constructively

> “Most things in biomedicine fail. Seek failures that tell you something about the underlying principles of a system.”

- Write the outline of a paper before the experiment.
  - this forces you to think about the **analysis** and not just what you're measuring
- Make use of partial successes
  - if all the neurons survive but all the glia die, what can you say about vitrification?
    - what metabolic processes are unique to neurons?
  - if grey matter responds differently compared to white matter\* <span class="annotation">I wonder how you would measure this (e.g. with RNAseq, wouldn't RNA be expressed similarly in both cell body and axons?)</span>
    - white matter is composed of more lipids, grey matter has more water
- Seek general principles
  - Alzheimer's research is a counterexample: people are using 3 different molecular models of Alzheimer's
    - you need to find effects in all 3 models to claim general principles
    - "makes me want to do a company that runs human trials for Alzheimer's"

> "[in our lab] the biggest failures have become our biggest successes"

- Boyden's lab tried all sorts of polymers for expansion microscopy that weren't working (literally hundreds of them). Someone suggested proteinases offhand, which wasn't taken seriously at the time <span class="annotation">Reference: [Expansion Microscopy: Protocols for Imaging Proteins and RNA in Cells and Tissues](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6158110/) </span>
  - circled the problem back to physics/chemistry

#### Quantity over quality

Do a lot of experiments, some of which are quite dumb.

- E.g. discovering periodic structure of amyloid

  - initially it was a scatter of dots, but we realized there was periodic structure

    > Take a Fourier transform of an image of Alzheimers? Sounds stupid

    - generated novel hypothesis on amyloid effect on excitability of neurons\* <span class="annotation">Reference: [Decrowding Proteins to Unmask Invisible Brain Nanostructures \| bioRxiv](https://www.biorxiv.org/content/10.1101/2020.08.29.273540v1.full)</span>
      - decades of work has found amyloid plaques to be correlated with Alzheimer's, but if you remove the plaque, nothing happens

- "Off-by-1 inputs"

  - Let's say you do an experiment with dose 1, dose 10, dose 100 and they all fail

    - it may be that the dose is still approaching threshold, need to try dose 500
    - only understood if you measure the right things (e.g. RNAseq)

- Dependency graph
  - use it to sequence experiments, but be aware that your initial plan is usually scrapped

## Experiment architecture

> The scale of vitrification is on a nano scale

> I would focus first on [bullets 3 and 4] — ask, "what are the kinds of energy that exist", that you can apply? There are limited kinds of energy, but too many things you can do with chemistry e.g. piezoelectric, 2d materials etc. etc.

#### High-pressure freezing

> It's unclear that the 200 micron limit is a fundamental limit, or something that can be changed with parameter search

#### Measurements

> What are the metrics? The pig will probably not just wake up and be fine after rewarming

What do you measure first?

- EEG, RNAseq and proteins
  - RNA is more accessible than proteome (can be amplified while protein can't)
  - are there even antibodies for pig proteins?
- A question to ask is, will there be an increase in stress proteins, heat shock proteins?
  - are there second-order, possibly irreversible effects?

#### Ion chemistry

- Something to watch out for: when the perfusing chemical moves, does it take ions with it?\* <span class="annotation">He said this is important — why? Do ion movements affect cell toxicity?</span>
  - e.g. positive ions like to accrete on the phospholipid bilayer

#### Use three model organisms

- Hamster, mouse and pig
- The results of individual experiments are not as important as the _comparison_ of what happens in each organism
- **Double dissociation** is desired in experiment design - suppose freezing the hamster fails in 8 ways, while freezing the pig fails in 9 other ways. From this, you can't make general statements about vitrification
  - if, however, the pig and hamster fail in the same ways, you can claim underlying principles
- Why the pig?
  - pig organs are biologically harder
  - big vessels
- Why the hamster?

  - replicate previous research
  - hamster might be more amenable to freezing than mice

- Marmosets are rat-sized monkeys
  - are approvals easier to get for marmosets than pigs?

#### Small molecule ML

Briefly mentioned recent developments (Alpha Fold). He said he had a bunch of ideas and that they might take up too much time for this call\* <span class="annotation"> Possibly to design new molecules to recapitulate antifreeze proteins?</span>
