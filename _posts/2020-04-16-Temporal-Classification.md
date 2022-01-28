---
layout: post
title: "Temporal Classification"
subtitle: "Time Series Classification"
excerpt: "Temporal and sequence classification is an automatic system that assigns one of the predefined classes to the time series or sequence input"
date: 2020-04-16 23:45:13 -0400
background: "/img/posts/2020-04-16-Temporal-Classification/background.png"
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

# Temporal Classification

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

