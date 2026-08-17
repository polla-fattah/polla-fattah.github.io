---
layout: research
title: "Socially-Weighted Distributed Graph Optimization (SW-DGO)"
subtitle: "Distributed Dynamic Route Optimization (D²RO) for autonomous service fleets in crowded public environments"
date: 2026-08-15
category: "Autonomous Navigation & Multi-Agent Systems"
status: "ongoing"
background: "/img/backgrounds/academy-bg.jpg"
project_url: "https://polla.dev/SW-DGO/"
permalink: /academy/research/sw-dgo-distributed-graph-optimization/

# CROSS-REFERENCES - REMEMBER TO UPDATE THESE WHEN CHANGES OCCUR:
# 1. When adding a student to this project, add their student ID here
# 2. When this project produces a publication, add the publication ID here
# 3. Update the corresponding student files with this project ID
students: []  # Student IDs (lowercase, no spaces)
publications: []  # Add publication ID when accepted/published
---

<div class="panel panel--bar" style="background: rgba(31, 37, 48, 0.04); border-left: 4px solid #a87c2f; padding: 1.25rem; margin-bottom: 2rem; border-radius: 6px;">
  <h3 style="margin-top: 0; font-size: 1.2rem; color: #1f2530;"><i class="fas fa-external-link-alt"></i> Dedicated Project Portal</h3>
  <p style="margin-bottom: 0.85rem;">Access the official live research website, interactive WebAssembly simulator, raw experiment datasets, and open-source repository:</p>
  <a href="https://polla.dev/SW-DGO/" target="_blank" rel="noopener" class="btn-pill" style="display: inline-block; background: #1f2530; color: #fff; text-decoration: none; padding: 0.45rem 1.15rem; border-radius: 20px; font-weight: 600; margin-right: 0.5rem; font-size: 0.9rem;">
    <i class="fas fa-globe"></i> Visit polla.dev/SW-DGO
  </a>
  <a href="https://polla.dev/SW-DGO/simulator.html" target="_blank" rel="noopener" class="btn-pill" style="display: inline-block; background: #a87c2f; color: #fff; text-decoration: none; padding: 0.45rem 1.15rem; border-radius: 20px; font-weight: 600; font-size: 0.9rem;">
    <i class="fas fa-play-circle"></i> Launch Interactive Simulator
  </a>
</div>

<p>
  Next-generation autonomous mobile robots (AMRs)—including smart retail shopping carts, mobile clinical pushchairs, and airport luggage trolleys—must route continuously through human-shared public spaces. Unlike isolated industrial warehouses, public service environments present unique multi-agent challenges: space is constrained by orthogonal shelving fixtures, corridors are frequently single-file, and human pedestrians move stochastically with browsing and loitering behaviors.
</p>

<p>
  This research proposes <strong>Distributed Dynamic Route Optimization (D²RO)</strong> powered by <strong>Socially-Weighted Distributed Graph Optimization (SW-DGO)</strong>. Rather than treating navigation as isolated reactive avoidance or purely local search, SW-DGO establishes a time-varying graph-cost field $C_i(u, v, t)$ shared across peer agents and solved via incremental <em>D* Lite</em> heuristic graph repair over V2V mesh telemetry.
</p>

<h2 class="section-heading">4 Core Research Motivations & Technical Bottlenecks</h2>

<ul>
  <li><strong>The ORCA / APF Trap (Local Potential Minima):</strong> Near $90^\circ$ shelf corners, end-caps, and U-bays, continuous collision avoidance algorithms (ORCA, APF) suffer from canceling force vectors ($\|\mathbf{F}_{\text{net}}\| \to 0$), stalling agents near pedestrians.</li>
  <li><strong>The $A^*$ Flaw (Social Blindness):</strong> Static shortest-path planners treat pedestrians as non-existent or point obstacles, commanding carts to drive straight through crowds and causing severe personal space violations ($d < 0.8\text{ m}$).</li>
  <li><strong>Symmetrical Live-Locks in Single-File Corridors:</strong> In narrow passages (e.g., $2.1\text{ m}$ supermarket grocery aisles), physical clearances prevent two carts from passing side-by-side. Opposing carts entering simultaneously produce permanent live-locks with reactive planners.</li>
  <li><strong>Information Isolation & Delayed Backtracking:</strong> Decoupled agents with myopic local sensing ($R_s = 7.2\text{ m}$) do not learn of downstream aisle blockages until reaching the congested mouth, causing severe makespan inflation.</li>
</ul>

<h2 class="section-heading">Mathematical Formulation</h2>

<p>
  SW-DGO formalizes a four-term edge traversal cost function subject to a directional corridor reservation constraint:
</p>

$$C_i(u, v, t) = w_D \cdot C_{\text{geom}}(u, v) + w_M \cdot C_{\text{mesh}}(u, v, t) + w_H \cdot C_{\text{social}}(v, t) + w_S \cdot C_{\text{kinematic}}(i, v, t) \quad \text{subject to } e \notin \mathcal{E}_i^{\text{reserved}}(t)$$

<h3>Cost Components & Parameters</h3>
<ul>
  <li><strong>$w_D = 1.0$ (Intrinsic Geometry $C_{\text{geom}}$):</strong> Baseline Euclidean physical distance $\|p_u - p_v\|_2$.</li>
  <li><strong>$w_M = 1.5$ (V2V Mesh Telemetry $C_{\text{mesh}}$):</strong> Time-decayed event-driven congestion alerts broadcast over an ad-hoc mesh ($\text{TTL} = 3$), extending effective perception horizons beyond local sensors.</li>
  <li><strong>$w_H = 2.0$ (Continuous Asymmetric Proxemics $C_{\text{social}}$):</strong> Integrates Hall's Proxemics via an asymmetric Gaussian potential field aligned with pedestrian heading ($\sigma_{\text{front}} = 1.35\text{ m}$, $\sigma_{\text{side}} = 0.90\text{ m}$, $\sigma_{\text{rear}} = 0.60\text{ m}$).</li>
  <li><strong>$w_S = 1.2$ (Kinematic Clearance Envelope $C_{\text{kinematic}}$):</strong> Prices proximity to fixed shelf geometry ($0.54\text{ m}$ buffer) and peer vehicles ($1.08\text{ m}$ anti-tailgating gap).</li>
  <li><strong>Directional Bottleneck Reservation Protocol ($\mathcal{L}_e$):</strong> Resolves single-file corridor contention via directional lock tuples. Opposing agents observe an infinite edge cost $C_{\text{mutex}} = \infty$ and execute a cost-projected diversion through parallel aisles or Turnout Alcoves ($V_{\text{alcove}}$).</li>
</ul>

<h2 class="section-heading">Multi-Domain Simulation Topologies</h2>

<p>
  The framework is validated across three distinct public service environments:
</p>
<ol>
  <li><strong>Retail Supermarket ($36 \times 24\text{ m}$):</strong> Fixture-dense parallel grocery aisles ($W_{\text{aisle}} = 2.1\text{ m}$), transverse promenades (Action Alley), cashier registers, and front depots.</li>
  <li><strong>Clinical Hospital:</strong> Features an emergency priority hierarchy ($R_{\text{lock}} = \infty$ for trauma pushchairs) and designated Turnout Alcoves ($V_{\text{alcove}}$) where routine vehicles pull aside.</li>
  <li><strong>Airport Departure Terminal:</strong> Open concourses with dense passenger clusters, security screening pinch points, and boarding gate piers (Gates A1–A4, B1–B4).</li>
</ol>

<h2 class="section-heading">Empirical Benchmark & Key Findings</h2>

<p>
  Across <strong>4,650 kinodynamic Monte Carlo trials</strong> in 11 experiments:
</p>
<ul>
  <li><strong>Proxemic Compliance:</strong> SW-DGO eliminates intimate-space exposure, reducing median exposure to <strong>0.00 person-seconds</strong> (vs. 6.40 for $A^*$ and 10.18 for APF).</li>
  <li><strong>Anticipatory Rerouting:</strong> V2V mesh telemetry advances rerouting lead time by <strong>11.10 seconds</strong> ($p = 3.8 \times 10^{-9}$) and reduces backtracking distance from $2.73\text{ m}$ to $1.08\text{ m}$.</li>
  <li><strong>Corridor Bottleneck Resolution:</strong> Directional reservations raise single-file aisle mission success from <strong>36.0% to 88.0%</strong> ($p = 1.7 \times 10^{-4}$).</li>
  <li><strong>Microsecond Compute Overhead:</strong> Incremental $D^*$ Lite graph repair executes in microsecond scale (median $< 0.01\text{ ms}$, p95 $< 0.20\text{ ms}$), well under 1% of the 50 ms control budget.</li>
  <li><strong>Cross-Domain Generalization:</strong> The unchanged planner achieves **99.0%** success in retail supermarkets, **100.0%** in clinical hospitals, and **95.0%** in airport terminals.</li>
</ul>

<h2 class="section-heading">Interactive Simulator & Research Assets</h2>

<ul>
  <li><a href="https://polla.dev/SW-DGO/" target="_blank" rel="noopener"><strong>SW-DGO Live Research Site</strong></a></li>
  <li><a href="https://polla.dev/SW-DGO/simulator.html" target="_blank" rel="noopener"><strong>Interactive WebAssembly Simulator</strong></a> <em>(Runs the exact Python planner compiled via Pyodide)</em></li>
  <li><a href="https://github.com/polla-fattah/SW-DGO" target="_blank" rel="noopener"><strong>GitHub Repository</strong></a> <em>(Open-source Python package `d2ro`, test suites, and 4,650-trial raw datasets)</em></li>
</ul>
