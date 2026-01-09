---
layout: page
title: Tissue growth model and its numerical simulation
description: Proposed a viscoelastic growth model and simulate it using FEM and PINNs
img: assets/img/GrowthPreview.png
importance: 2
category: 
giscus_comments: false
related_publications: true
---

Most soft biological tissues feature distinct mechanical properties of viscoelasticity, which play a significant role in their growth, development, and morphogenesis (Figure 1a). To reveal the biophysical mechanisms, we first proposed a mechanobiological viscoelastic model in the framework of thermodynamics {% cite lin2025mechanobiological %}. Then, we used a more novel method, the physics-informed neural network (PINN) to simulate the tissue growth and morphological evolution {% cite lin2025physics %}, (Figure 2, and the open-source code in <a id="{{ category }}" href="https://github.com/zhongya-lin/PINN4Viscoelasticity">Github</a>). With PINN, buckling occurs naturally under the critical states during the oscillated training process without introducing artificial perturbations. Our studies have demonstrated that viscoelasticity facilitates sustained tissue growth and significantly influences the critical conditions of surface wrinkling and tissue morphology. In the future, we hope to apply the cross-scale theories, e.g., the strain gradient viscoelasticity {% cite lin2020strain %}, to characterize the multiscale / crossscale properties of biological tissues.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project-toc/ViscoelasticGrowth.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: The mechanobiological mechanisms of tissue growth and morphological evolution.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project-toc/PINNs-Viscoelasticity.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2: Diagram of PINNs for the implementation of viscoelasticity.
</div>