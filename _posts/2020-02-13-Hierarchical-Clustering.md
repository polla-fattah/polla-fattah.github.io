---
layout: post
title: "Hierarchical Clustering"
subtitle: ""
excerpt: "Hierarchical clustering is a method to group instances of a data set into a series of nested clusters or a tree of clusters called a dendrogram"
date: 2020-02-13 23:45:13 -0400
background: "/img/posts/2020-02-13-Hierarchical-Clustering/background.png"
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

## Hierarchical Clustering

Hierarchical clustering is a method to group instances of a data set into a series of nested clusters or a tree of clusters called a dendrogram, which represents the similarity level between instances in the data set. An example hierarchical clustering is shown in Figure \ref{fig:Hira}. The figure shows a simple two-dimensional data set with three distinctive clusters. The data set is represented as in a hierarchical clustering model using a dendrogram. The dendrogram can be cut at any level (represented as a dotted horizontal line) to separate different patterns of the data set \cite{Jain1999}. The level of the cutoff line is subjective and may vary from one data set to another. Cutting a dendrogram from a higher level produces fewer patterns (clusters) \cite{Wang2006}.

\begin{figure}[!h]
\hfill{\begin{minipage}{\dimexpr \textwidth-2\fboxsep-2\fboxrule}
\centering
\subfigure[Data set]{
\includegraphics[width=0.7\textwidth]{images/chapter2/hira1.png}
}\\
\subfigure[Dendrogram of the data set]{
\includegraphics[width=0.7\textwidth]{images/chapter2/hira2.png}
}

    \end{minipage}}
    \caption{A simple data set with a possible dendrogram for hierarchical clustering algorithm.
        (a) Two dimensional data set with three obvious different groups.
        (b) A dendrogram representation for a hierarchical clustering of the previous data set
        From \cite{Jain1999}}
    \label{fig:Hira}

\end{figure}

Based on the internal functioning of the hierarchical clustering algorithm, they can be divided into divisive and agglomerative types. The divisive method starts by assigning all instances into one cluster then partitions that cluster into two smaller clusters according to the similarities between instances. The process of sub-dividing each subcluster into another two clusters continues until each cluster contains single instance. In contrast, agglomerative hierarchical clustering starts by assigning each instance of the data set as a cluster, then starts to combine two most similar clusters into a single bigger cluster. This process is repeated recursively until a single cluster is achieved or a certain number of clusters are reached \cite{Zaki2014}.

Whether divisive or agglomerative approach is used, a prerequisite to begin clustering is a proximity matrix, a symmetric matrix containing the similarity between every point in the data set using a distance function. This matrix is updated after each iteration to reflect the status of the data set under the method of clustering. The distance function can be Euclidean, Manhattan or any other distance function \cite{Zaki2014}. Sections shows how time-based distance measures can be used to cluster temporal data sets.

To determine the similarity between clusters using proximity matrix in agglomerative method, one of the available linkage methods can be used \cite{Wang2006}:

\begin{itemize}
\item Single linkage: calculates the minimum distance between any items of two different clusters.
\item Complete linkage: calculates the maximum distance between any items of two different clusters.
\item Average linkage: calculates the average distance between all items of two different clusters.
\item Centroid linkage: calculates the distance between centre of two different clusters.
\end{itemize}

Due to the time complexity hierarchical clustering can not be used with very large data sets which can not fit the memory. Moreover, the nature of the algorithm do not allow to reconsider the previous steps of the recursive clustering operation (dividing or joining) in contrast with the other clustering technique which we see before \cite{Wang2006}.
