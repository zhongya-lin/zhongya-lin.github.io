---
layout: distill
title: Research direction - multiscale mechanics and physics
description: A summary and the possible future studies
tags: direction
giscus_comments: false
date: 2025-12-26
related_posts: true
featured: true
mermaid:
  enabled: true
  zoomable: true
code_diff: true
map: true
chart:
  chartjs: true
  echarts: true
  vega_lite: true
tikzjax: true
typograms: true

authors:
  - name: Zhongya Lin
    url: "https://zhongya-lin.github.io"
    affiliations: 
      name: Tsinghua University & Peking University

bibliography: 2025-12-22-direction.bib

# # Optionally, you can add a table of contents to your post.
# # NOTES:
# #   - make sure that TOC names match the actual section names
# #     for hyperlinks within the post to work correctly.
# #   - we may want to automate TOC generation in the future using
# #     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
# toc:
#   - name: Equations
#     # if a section has subsections, you can add them as follows:
#     # subsections:
#     #   - name: Example Child Subsection 1
#     #   - name: Example Child Subsection 2
#   - name: Citations
#   - name: Footnotes
#   - name: Code Blocks
#   - name: Interactive Plots
#   - name: Mermaid
#   - name: Diff2Html
#   - name: Leaflet
#   - name: Chartjs, Echarts and Vega-Lite
#   - name: TikZ
#   - name: Typograms
#   - name: Layouts
#   - name: Other Typography?

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }
---

## Past studies: From theory to mechanobiology

My research began with a fundamental challenge in solid mechanics: traditional theories could not explain the competitive behavior of advanced materials where strengthening (e.g., microstructural strain gradients) and softening (e.g., viscous energy dissipation) occur simultaneously. To address this, we proposed a Strain Gradient Linear Viscoelasticity Theory {% cite lin2020strain %}. By deriving a correspondence principle in the Laplace phase space, we established a framework where the material’s characteristic scale is no longer a constant but a time-dependent parameter. This allowed for the explanation of the Hall-Petch and inverse Hall-Petch relations, showing how material strength can fluctuate as internal microstructures evolve {% cite lin2021strain %}.

Moving into the realm of multiscale mechanobiology, we applied this logic to the "active materials" of life. 

- At the cellular level, we explored how extracellular viscosity regulates motility. Our model suggests that cells are not merely restricted by environmental resistance but adapt their actin filament networks to optimize migration, a process that can lead to short-term migration memory{% cite lin2025adaptive %}.

- At the tissue level, we investigated how stress relaxation facilitates sustained growth in organoids and tumors. By dissipating residual stresses, viscoelasticity acts as a modulator of morphological evolution, determining the specific patterns of folding and wrinkling seen in developing organs {% cite lin2025mechanobiological %}. 

- Computational Tools: To support these explorations, we developed a Physics-Informed Neural Network (PINN) framework. We found that the inherent oscillations of the neural network optimizer during training could serve as a natural perturbation, allowing the model to capture creep buckling and structural instabilities without the manual introduction of artificial imperfections. While this tool offers a promising, mesh-free alternative for simulating evolving geometries, we recognize that further refinement is needed to handle more complex, multi-layered structures {% cite lin2025physics %}.

<aside>

  {% include figure.liquid loading="eager" path="assets/img/MultiMechanobilogy.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  <p>Multiscale, Mechanobiology, and Viscoelasticity</p>

  {% include figure.liquid loading="eager" path="assets/img/postdoc-projects.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  <p>Keywords - Projects</p>
  
</aside>

## A possible future study: the universal multi- / cross-scale mechanics

Building upon the foundational theories of mechanics, my research aims to contribute to a deeper understanding of how time-dependent behavior (viscoelasticity) and microstructural hierarchy (strain gradients) interact to shape the evolution of materials across scales. I hope the studies can provide fundamental bridge between the microscopic origins of a material and its macroscopic property. By understanding how time and scale compete, we gain the power not just to observe materials, but to engineer their evolution. 
