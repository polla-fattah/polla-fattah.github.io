---
layout: post
title: "Temporal Clustering"
subtitle: "Time Element in Clustering"
excerpt: "Clustering is an unsupervised machine-learning method whose goal is to find natural groupings (clusters) of instances in data sets."
date: 2020-04-17 23:45:13 -0400
background: "/img/posts/2020-04-17-Temporal-Clustering/background.png"
categories: ["data-mining", "Time Series"]
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

# Temporal Clustering

%\cite{Hawwash2012a}
%\cite{WarrenLiao2005}

%http://stats.stackexchange.com/questions/132780/bisecting-k--means-using-dynamic-time-warping

%http://stats.stackexchange.com/questions/131281/dynamic-time-warping-clustering

Clustering is an unsupervised machine-learning method whose goal is to find natural groupings (clusters) of instances in data sets. All clustering methods strive to detect compacted clusters by maximising the total sum of inter-cluster distance and minimising the total sum of the intra-cluster distance between instances \cite{Esling2012}. The distance can be measured using Euclidean distance, DTW distance, or any other similarity measures.

Jebara et al. \cite{Jebara2007} used \acrfull{hmm} to cluster time series data, while Oates et al. \cite{Oates1999} compared two methods for clustering time series data sets, first using HMM alone and then using DTW with HMM.DTW returns the minimised area between two time-series variables, which can be used as a similarity measure between them. They concluded that using DTW enhances the efficiency and effectiveness of the clusterings of the time series data set.

Rodrigues, Gama and Pedroso \cite{Rodrigues2008} used hierarchical clustering to cluster time series data sets. A hierarchical clustering method works by grouping item into a tree of clusters. The tree can be generated in two ways, either by starting from single items then agglomerating them into a higher structure, or starting from the entire data set and dividing it until ends up with single items in each branch of the tree \cite{WarrenLiao2005}. Another method used a scaled-up version of DTW \cite{Keogh2000} with hierarchical clustering, which calculates the distance between temporal variables efficiently.

Soheily-Khah et al. \cite{Soheily-Khah2016} proposed k--means-based clustering for temporal data sets using DTW, the Dynamic Temporal Alignment Kernel, and the Global Alignment Kernel. Items of a data set are partitioned by k--means clustering, minimising the total distance of items to a centre of the clusters chosen randomly at the initial stage, but later recalculated in an iterative manner, and items are allocated to the nearest centroid to form clusters with minimum intra-cluster distance \cite{Zaki2014}.
