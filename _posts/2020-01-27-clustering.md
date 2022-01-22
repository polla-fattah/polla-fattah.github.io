---
layout: post
title: "Clustering Algorithms"
subtitle: "Clustering Algorithms"
excerpt: "Unsupervised machine learning methods aim to find patterns or groups (clusters) in data sets so that the most similar items in the data set will be gathered in the same cluster"
date: 2020-01-27
background: "/img/posts/2020-01-27-clustering/background.png"
categories: ["data-mining", "clustering"]
author: "Polla Fattah"
---

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

## Centroid-Based Clustering

Centroid-based or representative-based clustering is a method of finding the best k clusters of items in the D data set. Each cluster contains a representative point which might be called centroid \cite{Zaki2014}. Two examples of centroid-based clustering discussed below are K--means and PAM clustering methods.

### K--means Clustering

K--means clustering is partitional-based and produces k clusters, minimising the distance between the centre of the cluster and cluster members. The criterion used to calculate the quality of the cluster is the sum of squared errors to the centroid. The aim of the algorithm is to find centroids that minimise the sum of squared error for all clusters \cite{Zaki2014}.

The process starts by assigning k random items as centroids, after which each item is appointed to a cluster with the nearest centroid to it. The location of the centroid is updated according to the existing items in the cluster. The process of assigning instances to clusters and updating centroids is reiterated until convergence (i.e. the centroids stabilise) or a fixed number of iterations has been reached \cite{Jain1999}.

K--means works as a greedy optimisation algorithm so that it might converge to local optima \cite{Zaki2014}. Moreover, using the sum of squared error as a criterion for finding better clusters makes K--means sensitive to outliers, so that extreme values might distort the distribution of the data \cite{Jain1999}.

### PAM Clustering

\acrfull{pam} clustering is another centroid-based technique, but unlike K--means it uses actual instances of the data set as representatives for the clusters instead of virtual centroids. It uses a similarity measure to identify members of a cluster. The members most similar to a medoid are considered in the same cluster so that the sum of squared errors can be used with PAM algorithm to identify the quality of clusters \cite{Kaufman1990}.

Similar to K--means, PAM algorithm starts with random k set of medoids, then each instance is registered as a member of a cluster according to its similarity distance from the medoid. The sum of squared errors is calculated for the current set of medoids. In the original algorithm, different instances are selected as nominees for medoids to optimise the initial state, and the sum of squared errors is calculated according to the selected instances \cite{Kaufman1990}. If the selected instances perform better than the original set of medoids, then they will be replaced with the new ones. This process can be repeated multiple times until convergence. However, due to the large time requirement and complexity of this method, it is usually used only for small data sets, and for larger data sets a modified version of the original version is preferable to find optimum medoids in an acceptable time frame \cite{Ng2002}.

## Fuzzy Clustering

Fuzzy sets are used in fuzzy logic and can be considered as a generalisation of set theory. An element can be a member of a particular set or not in set theory, while in fuzzy set theory an element can have a gradual transition membership between sets. Hence, fuzzy clustering uses the fuzzy set to allow an instance to be in more than one cluster at the same time \cite{Wang2006}.

The most well known and used fuzzy clustering is fuzzy c--means algorithm, developed by Dunn \cite{Dunn1973a} and later improved by Bezdek \cite{Jain1999} who introduced the concept of the fuzzifier parameter \textbf{m}. This parameter, also called 'fuzziness index', is used to control the fuzziness of the membership of each item in the data set. Usually, m = 2 is used without any particular theoretical basis for this choice. For m = 1 the fuzzy c--means will behave as k--means algorithm, and the fuzziness of the system increases with the larger value of m parameter \cite{Bezdek1981}.

The fuzzy c--means algorithm has a similar approach as k--means algorithm. It requires a predefined number of clusters. Both algorithms start with random initialization of the cluster centres so c--means might have the same problem as k--means by converging to local optima. The result of the cmean algorithm is expressed as a membership percentage of each instance to the available clusters. This fuzzy membership clustering can be converted into hard clusters by choosing a cluster for each item with the highest membership ration \cite{Wang2006}.

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
