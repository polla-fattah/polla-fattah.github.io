---
layout: post
title: "Clustering Algorithms"
subtitle: "What is CLustering"
excerpt: "Unsupervised machine learning methods aim to find patterns or groups (clusters) in data sets so that the most similar items in the data set will be gathered in the same cluster"
date: 2020-02-10 23:45:13 -0400
background: "/img/posts/2020-02-10-clustering/background.png"
categories: ["data-mining", "clustering"]
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

# Clustering

Unsupervised machine learning methods aim to find patterns or groups (clusters) in data sets so that the most similar items in the data set will be gathered in the same cluster, and dissimilar items will be in different clusters. The task of clustering is required in many fields, especially when little information is known about the data sets, and field experts have few assumptions about it. Examples of fields in which clustering is required include data mining, pattern recognition, decision making, document retrieval and image segmentation \cite{Jain1999}.

In this thesis, multiple clustering algorithms are used to cluster items of each time point in temporal data. Each time point was used separately, so there is no time effect on the clustering because each time point is treated as a separate data set. This clustering process is part of the proposed method to measure changes over time in temporal data (as presented in chapter four). We also used clustering multiple temporal clustering algorithms as a comparison with our proposed classification method (chapter six).

Figure \ref{fig:Clustering} shows the main steps of a clustering method. It can be noticed that unlike supervised methods, clustering methods do not have training data set to generate their model. Instead, they entirely depend on the given features of the items in the data set to group them into clusters.

\begin{figure}[!h]
\includegraphics[scale=0.4]{images/chapter2/ClusteringSteps.png}
\caption{General steps of clustering methods. From \cite{Jain1999}}
\label{fig:Clustering}
\end{figure}

The first step in any clustering task is feature selection/extraction. Feature selection refers to selecting a group of features (attributes) of the original data set which are most effective and representative for the instances or items which have to be clustered. Feature extraction is the process of deducing new features by transforming existing ones to obtain more effective features. The aim of feature selection and extraction is to obtain an effective and efficient clustering method by creating better quality of clusters in shorter computation time \cite{Jain1999}.

The second step is detecting pattern similarity by finding the distances between items in the data set. Multiple distance measures are available to measure the similarity between any two points in a hyperspace of features like Euclidean and Manhattan distances and correlation coefficients \cite{Jain1999}.

The next step is the actual clustering process to identify patterns in data sets using one of the available clustering algorithms. There are multiple clustering algorithms which can be classified into four types Centroid-based clustering, Density-based clustering, Fuzzy clustering and Hierarchical clustering \cite{Zaki2014}.

The last step is feedback or clustering evaluation. There are many ways to evaluate the results of clustering algorithm, including using external clustering validity indices to compare generated clusters with the true classes of the items or using internal clustering validity to evaluate the structure of the clusters and the similarities between items of one cluster compared with dissimilarities with items of different ones \cite{Jain1999, Zaki2014}.