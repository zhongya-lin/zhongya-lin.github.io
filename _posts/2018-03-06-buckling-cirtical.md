---
layout: post
title: Critical buckling force of a thin plate
date: 2018-03-06 16:40:16
description: 
tags: buckling stability
categories: mechanics
# thumbnail: assets/img/9.jpg
# featured: true
# disqus_comments: true
related_posts: false
---

## 1. Assumptions and notation

- Plate is thin (classical Kirchhoff–Love plate theory applies): transverse shear is neglected.
- Linear elastic, isotropic material with Young’s modulus $E$ and Poisson’s ratio $\nu$.
- Plate midsurface coordinates: $x\in[0,a]$, $y\in[0,b]$. Transverse deflection $w(x,y)$ (positive out of plane).
- In-plane compressive load is uniform along $y$ and equal to $N_x$ (force per unit length in N/m) directed along $-x$ (i.e. compression). We assume no in-plane $y$ compression $N_y=0$ and no twisting in-plane coupling (pure uniaxial).
- Bending rigidity (flexural rigidity) of the plate [[Thin plate bending]]:
$$
D=\frac{E t^3}{12(1-\nu^2)}.
$$

We seek the critical value $N_{x,\mathrm{cr}}$ at which the trivial flat solution $w\equiv0$ becomes unstable (buckling).

## 2. Governing linearized buckling equation

$$D \left( \frac{\partial^4 w}{\partial x^4} + 2 \frac{\partial^4 w}{\partial x^2 \partial y^2} + \frac{\partial^4 w}{\partial y^4} \right) + N_x \frac{\partial^2 w}{\partial x^2} + N_y \frac{\partial^2 w}{\partial y^2} + 2N_{xy} \frac{\partial^2 w}{\partial x \partial y} = 0$$

From linear plate theory (small deflections, linear kinematics) the static buckling equation under an in-plane compressive stress resultant $N_x$ (per unit length) is: (derived in section 5)

$$
D\nabla^4 w + N_x \frac{\partial^2 w}{\partial x^2} = 0,
$$

where $\nabla^4$ is the biharmonic operator $\nabla^4 = (\partial^2/\partial x^2 + \partial^2/\partial y^2)^2$.

This equation arises from equating bending moments (through $D\nabla^4 w$) and the destabilizing effect of in-plane compression (term with $N_x$) after linearization.

## 3. Choose admissible buckling mode (simply supported on all edges)

A convenient set of admissible functions for a plate simply supported on all four edges $x=0,a$ and $y=0,b$ is the double sine series. The fundamental separable eigenfunctions are

$$
w(x,y) = W \sin\!\bigg(\frac{m\pi x}{a}\bigg)\sin\!\bigg(\frac{n\pi y}{b}\bigg),
$$

with integers $m,n=1,2,\dots$ and amplitude $W$ (nonzero for buckling modes). These satisfy

- $w=0$ at $x=0,a$ and $y=0,b$,
- and the bending-moment/slope compatibility conditions for simply supported edges (these sine forms are standard eigenfunctions).

Compute the necessary derivatives of $w$:

$$
\frac{\partial^2 w}{\partial x^2} = -\left(\frac{m\pi}{a}\right)^2 w, \qquad \frac{\partial^2 w}{\partial y^2} = -\left(\frac{n\pi}{b}\right)^2 w.
$$

Then

$$
\nabla^2 w = -\left[\left(\frac{m\pi}{a}\right)^2 + \left(\frac{n\pi}{b}\right)^2\right] w,
$$

and consequently

$$
\nabla^4 w = \bigg(\left(\tfrac{m\pi}{a}\right)^2 + \left(\tfrac{n\pi}{b}\right)^2\bigg)^2 w.
$$

## 4. Substitute into governing equation → eigenvalue for $N_x$

Substitute the above into

$$
D\nabla^4 w + N_x \frac{\partial^2 w}{\partial x^2} = 0.
$$

Since $w$ is not identically zero for a buckling mode, factor $w$ out and set the coefficient to zero:

$$
D\bigg(\Big(\tfrac{m\pi}{a}\Big)^2 + \Big(\tfrac{n\pi}{b}\Big)^2\bigg)^2 \;-\; N_x \Big(\tfrac{m\pi}{a}\Big)^2 \;=\; 0.
$$

Solve for the critical in-plane compressive resultant $N_{x,\mathrm{cr}}$ for mode $(m,n)$:

$$
\boxed{ \; N_{x,\mathrm{cr}}(m,n) \;=\; D \; \frac{\Big(\big(\tfrac{m\pi}{a}\big)^2 + \big(\tfrac{n\pi}{b}\big)^2\Big)^2} {\big(\tfrac{m\pi}{a}\big)^2} \; =\; D \; \frac{\big(k_x^2+k_y^2\big)^2}{k_x^2} \; }
$$

where I used $k_x=\dfrac{m\pi}{a}$ and $k_y=\dfrac{n\pi}{b}$ for compactness.

It is common to express the result as

$$
N_{x,\mathrm{cr}} = k\,\frac{\pi^2 D}{a^2},
$$

where $k$ is a *buckling coefficient* depending on aspect ratio $a/b$ and boundary conditions. Comparing with the explicit expression above yields for simply supported edges

$$
k(m,n) \;=\; \frac{a^2}{\pi^2}\, \frac{\Big(\big(\tfrac{m\pi}{a}\big)^2 + \big(\tfrac{n\pi}{b}\big)^2\Big)^2}{\big(\tfrac{m\pi}{a}\big)^2} \;=\; \frac{\big(m^2 + (a^2/b^2)\,n^2\big)^2}{m^2}.
$$

For given aspect ratio $a/b$ you choose integers $m,n$ to get the smallest $N_{x,\mathrm{cr}}$ (the first buckling mode). The smallest $k$ gives the critical load.


### 4.1. Simple special cases

**(a) Square plate $a=b$, lowest mode usually $m=n=1$**

Take $a=b$ and $m=n=1$:

$$
N_{x,\mathrm{cr}} = D \frac{\big((\pi/a)^2 + (\pi/a)^2\big)^2}{(\pi/a)^2} = D \frac{(2\pi^2/a^2)^2}{\pi^2/a^2} = D \cdot \frac{4\pi^4/a^4}{\pi^2/a^2} = 4\pi^2 \frac{D}{a^2}.
$$

So

$$
P_{\mathrm{cr}} = b\,N_{x,\mathrm{cr}} = a \cdot 4\pi^2 \frac{D}{a^2} = 4\pi^2 \frac{D}{a} \quad\text{(for }a=b\text{)}.
$$

**(b) Very long strip ( $a \gg b$ ) — plate behaves like a column across length with many half-waves in $x$**

If $a$ is very long, continuous $m$ modes can be approximated and often the minimum occurs with $n=1$ and $m$ chosen to minimize expression. In the continuous wavelength limit you can minimize

$$
N_{x,\mathrm{cr}}(k_x,k_y)=D\frac{(k_x^2+k_y^2)^2}{k_x^2}
$$

w.r.t $k_x$ for fixed $k_y$. Doing $\partial N/\partial k_x =0$ yields $k_x^2 = k_y^2$, so the optimal buckling cell is square $k_x=k_y$. For discrete $m,n$ you pick the nearest integers.

## 5. Governing differential equation

To derive the governing differential equation for plate buckling, we will use the **Equilibrium Method**.1 This involves analyzing a tiny differential element of the plate _after_ it has slightly buckled.

We are looking for the point where the flat equilibrium becomes unstable and a new, bent equilibrium state is possible.

### 5.1. The Differential Element

Imagine a tiny rectangular piece of the plate with dimensions $dx$ and $dy$.

- **$w$**: The vertical deflection of the plate (downward in the $z$-direction).
- **$N_x$**: The compressive force per unit length acting on the $x$-face.
- **$Q_x, Q_y$**: Transverse shear forces (acting vertically).
- **$M_x, M_y, M_{xy}$**: Bending and twisting moments.

### 5.2. Equilibrium of Forces in the Z-Direction

We sum all forces acting vertically ($z$-direction) on this element. For the plate to be in equilibrium in a buckled shape, these forces must sum to zero.

The forces come from two sources:

1. **Vertical Shear Forces ($Q$)**: The standard resistance of the plate to bending.
2. **In-Plane Compressive Forces ($N_x$)**: These are horizontal forces, but because the plate is bent, they now have a small vertical component.

$$\sum F_z = \text{(Net Shear Force)} + \text{(Vertical component of } N_x \text{)} = 0$$

#### 5.2.1. Step 2a: The Net Shear Force

On the left face, we have shear force $-Q_x dy$. On the right face, we have $(Q_x + \frac{\partial Q_x}{\partial x}dx) dy$.

The net force from $Q_x$ is:

$$\left(Q_x + \frac{\partial Q_x}{\partial x}dx\right)dy - Q_x dy = \frac{\partial Q_x}{\partial x} dx dy$$

Similarly for the $y$-direction shear ($Q_y$):

$$\frac{\partial Q_y}{\partial y} dy dx$$

Total force from shear:

$$\left( \frac{\partial Q_x}{\partial x} + \frac{\partial Q_y}{\partial y} \right) dx dy$$

#### 5.2.2. Step 2b: The "P-Delta" Effect (Vertical Component of $N_x$)

This is the critical step for buckling.

The compressive force $N_x dy$ acts on the edges. If the plate is bent, the two ends of the element are not perfectly horizontal. They are tilted by the slope $\frac{\partial w}{\partial x}$.

- Slope on the left edge: $\frac{\partial w}{\partial x}$
    
- Slope on the right edge: $\frac{\partial w}{\partial x} + \frac{\partial^2 w}{\partial x^2}dx$
    

The vertical component of the force $N_x$ is $N_x \cdot \sin(\theta) \approx N_x \cdot \tan(\theta) \approx N_x \frac{\partial w}{\partial x}$ (for small angles).

- Force on left edge (pushing up): $-N_x dy \left( \frac{\partial w}{\partial x} \right)$
    
- Force on right edge (pushing down/up): $+N_x dy \left( \frac{\partial w}{\partial x} + \frac{\partial^2 w}{\partial x^2}dx \right)$
    

Summing these gives the net vertical push caused by compression:

$$N_x dy \frac{\partial^2 w}{\partial x^2} dx = N_x \frac{\partial^2 w}{\partial x^2} dx dy$$

#### 5.2.3. Step 2c: The Combined Equation

Combine terms and divide by the area $dx dy$:

$$\frac{\partial Q_x}{\partial x} + \frac{\partial Q_y}{\partial y} + N_x \frac{\partial^2 w}{\partial x^2} = 0$$

_(Note: If we had compression $N_y$ or shear $N_{xy}$, they would add similar terms here, but you asked to simplify for x-compression only.)_

### 5.3. Relate Shear ($Q$) to Moments ($M$)

We cannot solve the equation above yet because it uses Shear ($Q$), but plate deformation is driven by Moments ($M$). We need to use moment equilibrium to bridge the gap.

Summing moments about the y-axis (for the element):

$$Q_x - \frac{\partial M_x}{\partial x} - \frac{\partial M_{xy}}{\partial y} = 0 \implies Q_x = \frac{\partial M_x}{\partial x} + \frac{\partial M_{xy}}{\partial y}$$

Summing moments about the x-axis:

$$Q_y - \frac{\partial M_y}{\partial y} - \frac{\partial M_{xy}}{\partial x} = 0 \implies Q_y = \frac{\partial M_y}{\partial y} + \frac{\partial M_{xy}}{\partial x}$$

Substitute these expressions for $Q_x$ and $Q_y$ back into our Force equation from Phase 2c:

$$\frac{\partial}{\partial x} \left( \frac{\partial M_x}{\partial x} + \frac{\partial M_{xy}}{\partial y} \right) + \frac{\partial}{\partial y} \left( \frac{\partial M_y}{\partial y} + \frac{\partial M_{xy}}{\partial x} \right) + N_x \frac{\partial^2 w}{\partial x^2} = 0$$

Expanding this gives:

$$\frac{\partial^2 M_x}{\partial x^2} + 2\frac{\partial^2 M_{xy}}{\partial x \partial y} + \frac{\partial^2 M_y}{\partial y^2} + N_x \frac{\partial^2 w}{\partial x^2} = 0$$

---

### 5.4. Relate Moments ($M$) to Deflection ($w$)

From standard plate bending theory (Kirchhoff-Love theory), moments are related to the curvature (second derivatives of $w$) via the plate stiffness $D$.

$$M_x = -D \left( \frac{\partial^2 w}{\partial x^2} + \nu \frac{\partial^2 w}{\partial y^2} \right)$$

$$M_y = -D \left( \frac{\partial^2 w}{\partial y^2} + \nu \frac{\partial^2 w}{\partial x^2} \right)$$

$$M_{xy} = -D (1-\nu) \frac{\partial^2 w}{\partial x \partial y}$$

Where 2$D = \frac{Et^3}{12(1-\nu^2)}$ is the flexural rigidity.3

### 5.5. The Final Substitution

Substitute the Moment-Deflection equations (Phase 4) into the Moment Equilibrium equation (Phase 3).

1. Term 1 ($\frac{\partial^2 M_x}{\partial x^2}$):
    
    $$-D \left( \frac{\partial^4 w}{\partial x^4} + \nu \frac{\partial^4 w}{\partial x^2 \partial y^2} \right)$$
    
2. Term 2 ($2\frac{\partial^2 M_{xy}}{\partial x \partial y}$):
    
    $$-2D (1-\nu) \frac{\partial^4 w}{\partial x^2 \partial y^2}$$
    
3. Term 3 ($\frac{\partial^2 M_y}{\partial y^2}$):
    
    $$-D \left( \frac{\partial^4 w}{\partial y^4} + \nu \frac{\partial^4 w}{\partial x^2 \partial y^2} \right)$$
    

Sum them up:

Notice the cross terms $\frac{\partial^4 w}{\partial x^2 \partial y^2}$. We have $-\nu$, $-2(1-\nu)$, and $-\nu$.

Sum = $-\nu - 2 + 2\nu - \nu = -2$.

So the sum of the moment terms is:

$$-D \left( \frac{\partial^4 w}{\partial x^4} + 2 \frac{\partial^4 w}{\partial x^2 \partial y^2} + \frac{\partial^4 w}{\partial y^4} \right)$$

Or more compactly using the biharmonic operator: $-D \nabla^4 w$.

### 5.6. The Final Governing Equation

Combine the result from Phase 5 with the $N_x$ term from Phase 2c:

$$-D \nabla^4 w + N_x \frac{\partial^2 w}{\partial x^2} = 0$$

Rearranging to the standard form:

$$D \left( \frac{\partial^4 w}{\partial x^4} + 2 \frac{\partial^4 w}{\partial x^2 \partial y^2} + \frac{\partial^4 w}{\partial y^4} \right) + N_x \frac{\partial^2 w}{\partial x^2} = 0$$

This is the governing differential equation for the buckling of a thin plate under uniaxial compression $N_x$.

