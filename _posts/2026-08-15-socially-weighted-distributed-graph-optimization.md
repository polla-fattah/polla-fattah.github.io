---
layout: post
title: "Socially-Weighted Distributed Graph Optimization (SW-DGO): Navigating Autonomous Fleets in Public Spaces"
subtitle: "How proxemics-aware routing, V2V mesh telemetry, and incremental D* Lite graph repair solve crowd navigation and aisle deadlocks"
excerpt: "Autonomous service fleets in supermarkets, hospitals, and airports face complex human crowds and narrow bottlenecks. Here is how our new SW-DGO framework enables socially compliant, real-time multi-agent routing."
date: 2026-08-15 10:00:00 +0300
background: '/img/posts/2026-08-15-socially-weighted-distributed-graph-optimization/background.png'
categories: ["Research", "Robotics", "AI", "Graph Optimization", "Multi-Agent Systems"]
author: "Polla Fattah"
usemathjax: true
---

Autonomous service fleets are moving out of segregated industrial warehouses and straight into human-shared public spaces. From smart retail shopping carts escorting shoppers in supermarkets to mobile clinical pushchairs transporting patients in hospital wards and baggage trolleys navigating airport concourses, autonomous mobile robots (AMRs) must operate continuously alongside human pedestrians.

However, deploying robot fleets in crowded, fixture-dense public spaces poses a fundamental challenge: **people are not static physical obstacles to be cleared—they are individuals whose personal space carries a social cost**, and public corridors often create tight, single-file bottlenecks where symmetric conflicts cause permanent deadlocks.

In our latest research paper—***"Socially-Weighted Distributed Graph Optimization (SW-DGO) for Autonomous Multi-Agent Service Fleets in Crowded Environments"***—we introduce **Distributed Dynamic Route Optimization ($D^2\text{RO}$)** powered by **SW-DGO**. This framework unifies incremental heuristic graph repair ($D^*$ Lite), peer-to-peer V2V mesh telemetry, asymmetric Gaussian human proxemics, and directional bottleneck reservations.

In this blog post, I'll walk through why classical planners struggle in public spaces, how the SW-DGO architecture works under the hood, and key empirical insights from **4,650 simulation trials** across supermarket, hospital, and airport environments.

---

### The 4 Technical Bottlenecks of Classical Planners

When deployed in crowded public environments with orthogonal shelf fixtures and narrow aisles, classical Multi-Agent Path Finding (MAPF) and reactive obstacle avoidance algorithms suffer from four severe limitations:

1. **The ORCA / APF Trap (Local Potential Minima)**  
   Classical continuous collision avoidance methods like Optimal Reciprocal Collision Avoidance (ORCA) and Artificial Potential Fields (APF) rely on local velocity-space half-planes or repulsive force vectors. Near $90^\circ$ shelf corners, end-caps, and U-bays, the repulsive force from a human pedestrian and an orthogonal wall can cancel the robot's goal attraction vector ($\|\mathbf{F}_{\text{net}}\| \to 0$), trapping the robot until the human moves away.

2. **The $A^*$ Flaw (Social Blindness)**  
   Traditional discrete graph planners ($A^*$, Dijkstra) compute global paths based strictly on static Euclidean distance. They treat pedestrians as non-existent or infinitesimal points, commanding the robot to drive straight through crowds and causing severe psychological discomfort and intimate space violations ($d < 0.8\text{ m}$).

3. **Symmetrical Live-Locks in Single-File Corridors**  
   In narrow passages (e.g., $2.1\text{ m}$ supermarket grocery aisles), physical clearances prevent two carts from passing side-by-side. When opposing carts enter simultaneously, purely local reactive avoiders oscillate back and forth, resulting in permanent symmetrical live-locks.

4. **Information Isolation & Myopic Backtracking**  
   In decentralized multi-agent systems without peer-to-peer communication, robots operate with a myopic onboard sensing radius ($R_s = 7.2\text{ m}$). When a lead cart encounters an unexpected aisle blockage, trailing carts remain unaware, driving all the way to the blocked entrance before sensing the congestion locally and incurring massive makespan penalties.

---

### The SW-DGO Framework Architecture

To resolve these bottlenecks, SW-DGO formulates a distributed, time-varying edge traversal cost field $C_i(u, v, t)$ maintained locally by each autonomous cart $i$:

$$C_i(u, v, t) = w_D \cdot C_{\text{geom}}(u, v) + w_M \cdot C_{\text{mesh}}(u, v, t) + w_H \cdot C_{\text{social}}(v, t) + w_S \cdot C_{\text{kinematic}}(i, v, t)$$

subject to the hard feasibility constraint $e \notin \mathcal{E}_i^{\text{reserved}}(t)$.

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: true, theme: 'neutral' });
</script>

<div class="mermaid" style="text-align: center; margin: 2rem 0;">
graph TD
    Roadmap["Physical Roadmap Graph G = (V, E)"] --> Cgeom["C_geom: Intrinsic Distance<br/>(w_D = 1.0)"]
    Roadmap --> Cmesh["C_mesh: V2V Mesh Telemetry<br/>(w_M = 1.5)"]
    Roadmap --> Csocial["C_social: Human Proxemics<br/>(w_H = 2.0)"]
    Roadmap --> Ckinematic["C_kinematic: Chassis Safety<br/>(w_S = 1.2)"]

    Cgeom --> Search["Incremental D* Lite Graph Repair Engine"]
    Cmesh --> Search
    Csocial --> Search
    Ckinematic --> Search

    Search --> Constraint{"Directional Corridor Reservation (L_e)<br/>e ∉ E_reserved"}
    Constraint -->|Unreserved Edge| Motion["Non-Holonomic Control & Execution"]
    Constraint -->|Reserved Edge| Reroute["Cost-Projected Diversion / Alcove Yield"]
</div>

#### Core Components:

1. **Intrinsic Geometry ($C_{\text{geom}}$)**: Evaluates baseline Euclidean distance $C_{\text{geom}}(u, v) = \|p_u - p_v\|_2$.
2. **Distributed Anticipatory Mesh Telemetry ($C_{\text{mesh}}$)**: When a leading cart discovers congestion at edge $(u,v)$, it broadcasts an event-driven packet over the ad-hoc V2V mesh. Trailing carts receive time-decayed edge penalties $C_{\text{mesh}}$, extending their effective perception horizon beyond onboard sensors and enabling proactive rerouting.
3. **Continuous 2D Asymmetric Human Proxemics ($C_{\text{social}}$)**: Integrates Hall’s Proxemics using an asymmetric Gaussian potential field aligned with pedestrian heading $\theta_h$:
   $$\sigma_{\text{front}} = 1.35\text{ m}, \quad \sigma_{\text{side}} = 0.90\text{ m}, \quad \sigma_{\text{rear}} = 0.60\text{ m}$$
   This creates an expanded front personal space halo that routes robots smoothly around people.
4. **Kinematic Clearance Envelope ($C_{\text{kinematic}}$)**: Enforces a $0.54\text{ m}$ shelf clearance buffer and a $1.08\text{ m}$ dynamic anti-tailgating gap between peer vehicles.
5. **Directional Bottleneck Reservation Protocol**: Single-file corridors (e.g., passages under $2.58\text{ m}$ operational clearance) are managed via directional reservation tuples $\mathcal{L}_e(t)$. When an opposing cart claims an aisle, the reverse edge cost is set to $\infty$ in peer graphs, causing incremental $D^*$ Lite to execute a **cost-projected diversion** through parallel aisles or Turnout Alcoves ($V_{\text{alcove}}$) without deadlock or queueing.

---

### Visualizing the Simulator Across Public Topologies

Here are screenshots captured directly from our live WebAssembly interactive simulation suite running the actual Python planner compiled via Pyodide:

{% include image.html 
  url="/img/posts/2026-08-15-socially-weighted-distributed-graph-optimization/supermarket.png"
  description="Figure 1: SW-DGO autonomous retail carts navigating parallel grocery aisles and Action Alley in a 36 x 24 m supermarket floorplan while maintaining continuous proxemic human discomfort halos."
%}

{% include image.html 
  url="/img/posts/2026-08-15-socially-weighted-distributed-graph-optimization/hospital.png"
  description="Figure 2: Clinical hospital environment showing Emergency Trauma priority transfer (R_lock = ∞) and routine pushchairs yielding inside designated Turnout Alcoves (V_alcove)."
%}

{% include image.html 
  url="/img/posts/2026-08-15-socially-weighted-distributed-graph-optimization/airport.png"
  description="Figure 3: Airport departure concourse luggage fleet navigating high-density passenger clusters near security chokepoints and boarding gate piers."
%}

---

### Key Empirical Findings & Benchmark Results

We benchmarked SW-DGO across **4,650 kinodynamic simulation trials** in three architecturally divergent topologies (Retail Supermarket, Clinical Hospital, and Airport Terminal) under deterministic seed-paired Monte Carlo evaluation:

| Evaluation Dimension | Benchmark Finding & Performance Metric |
| :--- | :--- |
| **Social Compliance** | Proxemic routing eliminates intimate-space exposure, dropping median exposure to **0.00 person-seconds** (vs. 6.40 for $A^*$ and 10.18 for APF, $p = 9.4 \times 10^{-16}$). |
| **Routing vs. Yielding** | Factorial experiments ($2 \times 2$) prove that proxemic route optimization drives social compliance—reactive yielding without social routing collapses mission success to **12%**. |
| **V2V Mesh Anticipation** | Under hidden blockages, mesh telemetry advances rerouting lead time by **11.10 seconds** ($p = 3.8 \times 10^{-9}$) and halves backtracking distance ($1.08\text{ m}$ vs. $2.73\text{ m}$). |
| **Corridor Bottleneck Resolution** | Directional corridor reservations raise single-file aisle mission success from **36.0% to 88.0%** ($p = 1.7 \times 10^{-4}$). |
| **Microsecond Compute Latency** | Incremental $D^*$ Lite graph repair executes in microseconds (median $< 0.01\text{ ms}$, p95 $< 0.20\text{ ms}$), using under 1% of the 50 ms control budget. |
| **Cross-Domain Generalization** | The unchanged planner achieves **99.0%** success in retail supermarkets, **100.0%** in clinical hospitals, and **95.0%** in airport departure terminals with zero domain retuning. |

---

### Interactive WebAssembly Simulator & Open Assets

To make our research fully reproducible and interactive, we compiled the exact Python planning engine to WebAssembly using Pyodide and deployed an interactive online suite:

- **Live Research Portal**: [polla.dev/SW-DGO/](https://polla.dev/SW-DGO/)
- **Interactive Simulator**: [polla.dev/SW-DGO/simulator.html](https://polla.dev/SW-DGO/simulator.html) *(Experiment with live ablation toggles across supermarket, hospital, and airport environments)*
- **GitHub Repository**: [github.com/polla-fattah/SW-DGO](https://github.com/polla-fattah/SW-DGO) *(Includes full Python package `d2ro`, test suites, analysis pipelines, and 4,650-trial raw CSV datasets)*

---

### Summary & Looking Ahead

The key takeaway of SW-DGO is that **distributed coordination is a targeted capability, not an unconditional necessity**. In open layouts, local human-aware navigation is simpler and faster; but under topological bottlenecks and occluded blockages, V2V mesh telemetry and directional reservations provide dramatic improvements in mission completion and social compliance.

Our ongoing research extends SW-DGO towards multi-objective Pareto weight calibration, spatial V2V traffic suppression for scaling beyond 12-cart fleet densities, heading-augmented search spaces, and hybrid GNN/RL learning-guided global goal allocation.
