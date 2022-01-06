---
layout: post
title: "Cluster Validation"
subtitle: "How to validate the resulted clusters"
date: 2020-01-28 23:45:13 -0400
background: "/img/posts/03.jpg"
---

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

## External Criteria

External criteria validate the results of clustering based on some predefined structures of the data which is provided from an external source. The most well-known example of structural information is labels for the data provided by experts (called true classes). The main task of this approach is to determine a statistical measure for the similarity or dissimilarity between obtained clusters and labels \cite{Halkidi2002a, Rendon2011}. According to the methods incorporated in the external criteria, they can be divided into three types: pairwise measures, entropy-based measures and matching based measures \cite{Zaki2014}.

As mentioned previously, the four types of classification guesses evaluation are true positive, true negative, false positive and false negative. These terms are used in the terminology of external cluster validity, especially when using pairwise measures, but with slightly different meanings to enable the evaluation of clusters in the same manner as classification \cite{Zaki2014}:
\begin{itemize}
\item True Positives \textbf{TP}: Any two instances with the same label that are in the same cluster.

    \item False Negatives \textbf{FN}: Any two instances with the same label that are not in the same cluster.

    \item False Positives \textbf{FP}: Any two instances with different labels that are not in the same cluster.

    \item True Negatives \textbf{TN}: Any two instances with different labels that are not in the same cluster.

\end{itemize}

In this thesis, we use various external cluster validity indices to determine differences between a reference of behaviour for items in a temporal data and clusters of items in each time point. The method is discussed in more detail in chapter three and implemented in chapter four for public goods games and chapter six for stock market data. The used criteria in the thesis are listed below:

\textbf{Jaccard Coefficient: }
This coefficient is a pairwise measure representing the degree of similarity between clusters. With this coefficient, each cluster is treated as a mathematical set, and the coefficient value is calculated by dividing the cardinality of the intersection of the resultant cluster with the prior cluster to the cardinality of the union between them \cite{Vendramin2010}:
\begin{equation*}
Jaccard = \frac{TP}{TP + FP + FN}
\end{equation*}

With a perfect clustering, when false positives and false negative equal to zero, the Jaccard coefficient value equals 1. This measure ignores the true negatives and only focuses on the true positives to evaluate the quality of the clusters \cite{Zaki2014}.

\textbf{Rand Statistic: }
The Rand statistic measures the fraction of true positives and true negatives over all point pairs; it is defined as
\begin{equation*}
Rand = \frac{TP + TN}{N}
\end{equation*}
Where N is the total number of instances in the data set. This measure is similar to Jaccard Coefficient, so its value equals 1 in perfect clustering \cite{Zaki2014}.

\textbf{\acrfull{fm}:}
FM define precision and recall values for produced clusters \cite{Fowlkes1983}
\begin{equation*}
FM = \sqrt{prec. recall} = \frac{TP}{\sqrt{(TP + FN)(TP + FP)}}
\end{equation*}
Where $prec = \frac{TP}{TP + FP}$ and $recall = \frac{TP}{TP + FN}$. For the perfect clustering this measure equals 1 too \cite{Zaki2014}.

\textbf{\acrfull{vi}: }
This index measure is based on contingency table which is a matrix with $r \times k$ , where $r$ is number of produced clusters and $k$ is the number of externally provided clusters. Each element of this matrix contains a number of agreed instances between any two clusters of the externally provided and produced clusters. As introduced by Meila \cite{Meila2007a}, this index calculates mutual information and entropy between previously provided and produced clusters derived from the contingency table:
\begin{equation*}
VI(C,T) = 2H(T,C)- H(T)- H(C)
\end{equation*}
Where $C$ is produced clusters, $T$ is ground truth clusters, $H(C)$ is entropy of $C$ and $H(T)$ is entropy of $T$ \cite{Zaki2014}.

## Internal Criteria

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
