---
layout: post
title: "Internal Cluster Validation"
subtitle: "How to validate the resulted clusters"
excerpt: "Internal criteria measure the 'goodness' of clusters for the data by extracting information from data and clusters alone, such as the compactness of data points inside one cluster."
date: 2020-03-09 23:45:13 -0400
background: "/img/posts/2020-03-09-Internal-Cluster-Validation/background.png"
categories: ["data-mining", "Clustering"]

author: "Polla Fattah"
---

<style>
  .responsive-img {
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.footnotes {
  font-size: 0.7em;
  margin-top: 1em;
}
</style>

# Internal Criteria

Internal criteria measure the 'goodness' of clusters for the data by extracting information from data and clusters alone, such as the compactness of data points inside one cluster and the separation of clusters from each other \cite{Rendon2011}. These criteria were used as part of the cost function, to determine the quality of the selected classification rules in each time point, and to compare different clustering algorithms' performances, as presented in chapter six.

\textbf{Dunn Index: }
This index calculates the ratio of minimum distance between clusters to the maximum distance between any two instances of the same cluster \cite{Dunn1973}:
\begin{equation*}
Dunn = min*{1\leqslant i \leqslant c} \left \{ min \left \{ \frac{d(c_i, c_j)}{max*{1\leqslant i \leqslant k(d(X_k))}} \right \} \right \}
\end{equation*}
Where $c_i, c_j \in c$ of size $m$ and the maximum distance can be computed from the mean or between all pairs. A larger value for Dunn index means, better clustering output, because it means that the closest instances between two clusters are larger than the distance between two farthest instances in the same cluster \cite{Zaki2014}.

\textbf{\acrfull{db}:}
This measure is introduced by Davies et al. \cite{Davies1979a}. It calculates intera cluster compactness and inter cluster separation by producing the ratio of spreading sample points around mean (i.e. variation) to the distance between mean of clusters \cite{Rendon2011}.
\begin{equation*}
DB = \frac{1}{k} \sum*{i=1}^{k}\sum*{j=1}^{k}\max*{i\neq j }\left \{ \frac{s*{\mu*i} + s*{\mu_j}}{\delta(\mu_i, \mu_j)} \right \}
\end{equation*}
Where $k$ is number of clusters, $ s*{\mu_i}$ and $s*{\mu_j} $ are the spread of points around any two clusters cluster mean ''Centroid'', and $\delta(\mu_i, \mu_j)$ denotes the mean of both clusters.

A smaller value of this measure indicates better the clustering, as in such cases the clusters are well separated and each cluster is well represented by its mean; in other words, larger values mean better compacted instances in the clusters and clusters that are well separated from each other \cite{Zaki2014}.

\textbf{\acrshort{sd}: } This measure is introduced by Halkidi et al. \cite{Halkidi2000}. It calculates the average scattering for clustering and total separation among clusters.
\begin{equation*}
SD = a \times Scatter + Distribution
\end{equation*}
Where $a$ is a weighting factor equal to the maximum distance of two instances in the data set. The $Scatter$ indicates the average compactness of clusters. A smaller value of $Scatter$ is a signal for a compact cluster, and its the value increases for less compact clusters. The $Distribution$ is the measure of the total separation between clusters. A larger value $Scatter$ indicates better clustering and a smaller value of this term indicates greater proximity between clusters to each other. $Scatter$, and $Distribution$ have different ranges so that $a$ (the weighting factor) is important to maintain the balance between them. As SD measure is a total of $Scatterer$ and $Distribution$ so that the smaller SD value indicates better clustering \cite{Halkidi2000}.

\textbf{\acrshort{sdwb}:} This measure is introduced by Halkidi et al. \cite{Halkidi}. The S_Dbw index is similar to SD index as it measures the intracluster and intercluster variances \cite{Rendon2011}. The definition of S_Dbw indicates that both criteria of ''good'' clustering (i.e. compactness and separation) are properly combined, enabling reliable evaluation of clustering results.
\begin{equation*}
S_Dbw = Scatter + Dens_bw
\end{equation*}
As with SD, the $Scatter$ indicates the average compactness of clusters, smaller $Scatter$ value indicating a compact cluster, with an increased value for less compact clusters. Dens_bw(c) indicates the inter-cluster density by calculating the average number of points between the clusters in relation with density within clusters. Thus a small value of Dens_bw means good separation among clusters. As in SD, a smaller value of this measure is an indication of well defined clustering \cite{Halkidi}.

## Relative Criteria

Relative criteria are used to compare between two clusterings with same data and clustering algorithm but different initial parameters, like number of clusters \cite{Halkidi2002}. These criteria mostly use internal clustering validity indices like Dunn index and Davies–-Bouldin Index to compare between clusterings' initial parameters \cite{Jain1988}. On the other hand Vendramin et al. \cite{Vendramin2010} proposed a novel method to compare relative criteria, using external cluster validity indices like Jaccard and Rand.
