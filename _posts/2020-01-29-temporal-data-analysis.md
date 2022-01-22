---
layout: post
title: "Temporal Data Analysis"
subtitle: "How collected data over time affects analysis."
excerpt: "Temporal data analysis is concerned with mining and analysing sequential data sets . A sequential data set is ordered according to some index."
date: 2020-01-29 23:45:13 -0400
background: "/img/posts/2020-01-29-temporal-data-analysis/background.jpg"
categories: ["data-mining", "Time Series"]
author: "Polla Fattah"
---

# Temporal Data Analysis

Temporal data analysis is concerned with mining and analysing sequential data sets \cite{Laxman2006}. A sequential data set is ordered according to some index. A special case of sequential data is temporal data, which is ordered according to a time reference. According to Han et al. \cite{Han2006}, ''A time-series database consists of sequences of values or events obtained over repeated measurements of time.''. In this thesis, we use the terms ''time series'' and ''temporal data'' interchangeably. Sequential data sets can be used in applications to study protein order series, DNA sequence and lists of moves in a chess game. Examples of temporal data include stock market data and public goods game data set. Data streams can be considered as a special case of temporal data with an endless sequence of flowing data, such as satellite remote sensor, data from electric power grids and telecommunications data \cite{Han2006}.

In the following subsections we discuss methods to measure changes in temporal data as well as classifying and clustering them.

## Measuring Changes in Temporal Data

Spiliopoulou et al. \cite{Spiliopoulou2006} introduced the \acrshort{monic} model, which finds cluster transition over accumulating data sets, providing an ageing function for clustering data that prioritises new records over old ones and eliminates records older than two time points. Matching for clusters in one time point to the next one is carried out by passing a threshold that determines normalised maximum number of records that exist in both matched clusters in the two time points. This model defines two kinds of transitions, external and internal. In external transition, clusters may survive, split, be absorbed, disappear or emerge, while in internal transition clusters can change in size, compactness or location.

According to MONIC, each cluster has a lifetime, which is the number of time points throughout which it can survive. Longer cluster lifetimes enable more predictable clustering while short lifetimes lead to volatile and unpredictable clustering.

It can be observed that this model relies on \gls{accumulateddata} over time to detect cluster matches, therefore it cannot be used with non-accumulated data. Moreover, it emphases the measurement of cluster changes and cannot detect changes in cluster membership for individual items clustered over time points.

Gunnemann et al. \cite{Gunnemann2011a} introduced a method which traces cluster evolution as change in behaviour types indicated by the value of objects (e.g. persons) in high-dimensional data sets. Different types of mapping function were introduced to map clusters according to their values in different dimensions and subspaces instead of object identifier.

Using this method cluster evolutions were detected and counted in the forms of emerge, disappear, converge and diverge. Moreover, the loss and gain of dimensions of subspace clusters were calculated.

This method counts the number of various changes that occur to clusters of any high dimensional data set, but it lacks to any mean by which to quantify the changes themselves; in other words, there is no indication of the quantity of change that happens to any cluster in two consecutive time points.

Hawwash et al. \cite{Hawwash2012a} proposed a framework for mining, tracking and validating clusters in a data stream using statistical cluster measures like cardinality, scale and density of clusters to detect milestones of clusters change and monitor the behaviour of cluster.

This framework targets accumulative clustering on data streams, but instead of using fixed-time window for clustering it uses milestones to detect the next-best clustering time.

Hawwash et al. \cite{Hawwash2012a} used a linear model in their metrics, which cannot represent real-life situations. They made this concession due to time limitations and the memory complexity of higher degree models. With some enhanced models this method could be profitably used to determine critical time points in the data stream clustering and to track clusters behaviour in general using statistical measures for representative numbers pertaining to the situation of clusterings.

Kalnis et al. \cite{Kalnis2005} introduced a method to discover moving objects in the snapshots of spatio-temporal data using cluster mapping function, treating clusters as sets and calculating the cardinality ratio of intersection for each two time constitutive clusters over their union; if the ratio passes a certain threshold the cluster is considered to be a moving cluster.

This method detects move in overall clusters and provides visual aids enabling human experts to grasp changes in the underlying data \cite{Ntoutsi2011, Bottcher2008}. This method is excellent for tracking moving cluster change \cite{Ntoutsi2009} , but it still lacks a method to quantify the magnitude of change for overall clustering objects.

Aggarwal \cite{Aggarwal2005} introduced a new method to detect changes for single clusters in the data streams that also works for snapshots of data as special cases. This method uses forward and reverse time slice density estimates based on fixed length time window to calculate velocity density at time and space dimensions.

By calculating velocity density three types of change can appear on the clusters in evolving data streams: 1) they may coagulate if the value passed a user specified threshold; 2) they may decay if the value does not pass the threshold; or 3) they may shift their location to another. This method is particularly germane to visually understanding the characteristics of underlying data.

In summary, the previously mentioned methods: 1) are mostly designed to work with data streams or snapshots of spatio-temporal data sets; 2) detect changes inside data by monitoring cluster change in terms of split, absorbed, disappear and emerged etc., which is a good indication for detecting existence of change, but which does not specify the magnitude of change. Our aim is to create a simple factor (scalar) to express the magnitude of change among members of clusterings in temporal data sets.

## Temporal Classification

Temporal and sequence classification is an automatic system that assigns one of the predefined classes to the time series or sequence input \cite{Laxman2006}. Many temporal classifications have been introduced that reuse traditional classification algorithms in terms of criteria and measurements crafted for temporal data. Three main methods exist for classifying temporal data set: distance--based, feature extraction--based and model--based \cite{Amr2009,Laxman2006}.

Wang et al. \cite{Wang2005} proposed a rule-based classification method for categorical and high-dimensional data sets that rely on calculating frequent item sets using frequent pattern mining and association rules, then using the highest confidence sets covering rules for grouping according to rule heads (class labels). This method has been found to result in an efficient and accurate rule-based classifier, but it might produce a very large number of rules, as they are extracted from association mining, which might be hard for humans to follow and comprehend. Moreover, to create the frequent item test, it is required to have training data sets, which might be expensive and labour intensive to acquire and deploy.

It is possible to use traditional classification algorithms (non-temporal) to classify temporal data set by using distance measures specially designed to evaluate distances in a temporal data set. Many temporal supervised and unsupervised algorithms use \acrfull{dtw} \cite{Berndt1994} to align between two sequences or time series and find the distance between them. This method was originally used in speech recognition to identify human speech patterns \cite{rabiner1993fundamentals}.

\begin{figure}[!h]
\centering
\includegraphics[width=1\textwidth]{images/chapter2/DWtvsEuclidean.png}
\caption{Difference between time alignment and Euclidean distance of two time series. Aligned points are indicated by arrows. From Keogh et al. \cite{Keogh2005}}
\label{fig:DWtvsEuclidean}
\end{figure}

Dynamic time wrapping tries to find the best match between two time series to calculate the smallest distance between them, unlike Euclidean distance, which uses the one-to-one mapping between the same time points regardless of any time shift. Figure \ref{fig:DWtvsEuclidean} compares these two distance measures. Dynamic time wrapping creates wrapping matrix which consists of Euclidean distances between every two points in both time series; then a local cost function finds the shortest path between two time series that represents the best match. Dynamic time wrapping has been implemented successfully in numerous temporal classification and clustering methods, but it has a drawback in using heuristic methods, which are inefficient due to searching for the best path in the wrapping matrix \cite{Keogh2005}. The wrapping matrix and time wrapping distance between two time serris are shown in Figure \ref{fig:timewrapIllustration}.

\begin{figure}[!h]
\centering
\includegraphics[width=1\textwidth]{images/chapter2/DTWIlustration.png}
\caption{Calculating the distance between two time series using wrapping matrix.
(a) Two similar but out of phase sequences.
(b) Finding the optimal path (minimum distance) between the sequences which causes time wrap alignment between different time points of them.
(c) The resulting alignment.
From Keogh et al. \cite{Keogh2005}}
\label{fig:timewrapIllustration}
\end{figure}

\begin{figure}[!h]
\includegraphics[scale=0.8]{images/chapter2/KNN_Temporal.png}
\caption{K-Nearest Neighbour using dynamic time wrapping for time series classification. From Regan \cite{Regan2014}}
\label{fig:KNN_Temporal}
\end{figure}

Distance-based K-Nearest Neighbours classification method (KNN) is used with temporal and sequential data with Euclidean distance measure \cite{Wei2006}. However, for complex time series, Euclidean distance is sensitive to the time fluctuation; thus DTW has been used \cite{KajanLaszl2006}. Figure \ref{fig:KNN_Temporal} illustrates temporal KNN operation.

It is possible to use feature extraction in order to extract useful features from time series so that it becomes possible to use traditional classification methods to classify temporal data. Agrawal et al. \cite{Agrawal1993a} proposed the use of the \acrfull{dft} to transform a sequence from the time domain to the frequency domain. Using DFT allows selection of the most important frequencies then representing them back in the original dimensional space. The DFT has an important property as it can ignore shifts and find similar sequences because the Fourier coefficient is invariant for shifts.

Chan et al. \cite{Chan1999} used \acrfull{dwt} to translate each time series from the time domain into the time/frequency domain. This transformation is linear as it changes the original time series into various frequency components in a lossless transformation. The sequence is then represented by its features, expressed as wavelet coefficients. Only a selected number of coefficients are necessary to represent the original time series, which allows a better and efficient use of the available classification algorithms.

Douzal-Chouakria et al. \cite{Douzal-Chouakria2012} used classification trees to classify time series data by introducing new splits for the tree nodes using time series proximities, relying on adaptive metrics considering behaviours and values. Other methods use SVM as a temporal data classifier using different kernels \cite{Sitaram2007}.

Model-based classifiers can also be used for temporal and sequential classifications, like Naive Bayes sequence classifier \cite{Tseng2009} and Hidden Markov Model \cite{Oates1999}. In the training step, the parameters of the model are created and trained depending on some assumptions, and a set of parameters describing probability distributions. In the classification step, a new sequence is assigned to the class with the best possible similarity \cite{Xing2010}.

## Temporal Clustering

%\cite{Hawwash2012a}
%\cite{WarrenLiao2005}

%http://stats.stackexchange.com/questions/132780/bisecting-k--means-using-dynamic-time-warping

%http://stats.stackexchange.com/questions/131281/dynamic-time-warping-clustering

Clustering is an unsupervised machine-learning method whose goal is to find natural groupings (clusters) of instances in data sets. All clustering methods strive to detect compacted clusters by maximising the total sum of inter-cluster distance and minimising the total sum of the intra-cluster distance between instances \cite{Esling2012}. The distance can be measured using Euclidean distance, DTW distance, or any other similarity measures.

Jebara et al. \cite{Jebara2007} used \acrfull{hmm} to cluster time series data, while Oates et al. \cite{Oates1999} compared two methods for clustering time series data sets, first using HMM alone and then using DTW with HMM.DTW returns the minimised area between two time-series variables, which can be used as a similarity measure between them. They concluded that using DTW enhances the efficiency and effectiveness of the clusterings of the time series data set.

Rodrigues, Gama and Pedroso \cite{Rodrigues2008} used hierarchical clustering to cluster time series data sets. A hierarchical clustering method works by grouping item into a tree of clusters. The tree can be generated in two ways, either by starting from single items then agglomerating them into a higher structure, or starting from the entire data set and dividing it until ends up with single items in each branch of the tree \cite{WarrenLiao2005}. Another method used a scaled-up version of DTW \cite{Keogh2000} with hierarchical clustering, which calculates the distance between temporal variables efficiently.

Soheily-Khah et al. \cite{Soheily-Khah2016} proposed k--means-based clustering for temporal data sets using DTW, the Dynamic Temporal Alignment Kernel, and the Global Alignment Kernel. Items of a data set are partitioned by k--means clustering, minimising the total distance of items to a centre of the clusters chosen randomly at the initial stage, but later recalculated in an iterative manner, and items are allocated to the nearest centroid to form clusters with minimum intra-cluster distance \cite{Zaki2014}.
