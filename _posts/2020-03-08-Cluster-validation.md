---
layout: post
title: "Cluster Validation"
subtitle: "How to validate the resulted clusters"
excerpt: "Many clustering methods exist to be used in different situations according to the underlying data to be analysed and clustered."
date: 2020-03-08 23:45:13 -0400
background: "/img/posts/2020-03-08-Cluster-validation/background.png"
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

# Clustering Validation

Many clustering methods exist to be used in different situations according to the underlying data to be analysed and clustered. There are many methods to assess clustering results and their initial configurations, which can be categorised into three main types: clustering tendency, cluster stability and cluster evaluation \cite{Zaki2014}.

Clustering tendency or clusterability assesses the suitability of the data for clustering. The aim is to determine that the data has meaningful patterns to be clustered. The spatial histogram method for cluster tendency creates a histogram for the input data set and distance distribution by calculating the pairwise distance between data points. An example of non-clusterable data is uniform instances of a data set, as shown in Figure \ref{fig:uniformData} \cite{Zaki2014}.

\begin{figure}[!h]
\includegraphics[scale=0.33]{images/chapter2/uniformData.png}
\caption{An example of uniform data which can not be clustered. From Zaki et al.\cite{Zaki2014}}
\label{fig:uniformData}
\end{figure}

Cluster stability is concerned with the initial parameters of clustering algorithms, like the number of clusters in K--means. The aim of this method is to determine the optimum initial parameters for the clusters, so that the cluster of different samples of data from the same underlying population guarantee comparable results. Methods of determining the stability of clusters include generating perturbed versions of the data set, using distance functions (e.g. Euclidean) and similarity measures like Rand index \cite{VonLuxburg2010}.

Clustering evaluation can use cluster validity indexes to evaluate the quality of the produced clusters. This task can be further divided into three categories \cite{Halkidi2002a, Halkidi2002, Zaki2014}:

\begin{itemize}

    \item \textbf{External}: External validation derives the estimation for the quality of the generated clusters from sources outside the data set. The most general case is using true labels of items, provided by field experts.

    \item \textbf{Internal}: Internal validation derives the estimation for the quality of the generated clusters using the structure of the data and the clusters. It computes the compactness of the clusters and the separation of clusters from each other.

    \item \textbf{Relative}: External validation compares between the results of two different clusterings for the same data set. The clusterings might be generated using different clustering algorithms, or the same clustering algorithm with different initial parameters.

\end{itemize}

The following subsections focus on the cluster validity indices, especially those used in this thesis.

