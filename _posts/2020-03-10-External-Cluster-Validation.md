---
layout: post
title: "External Cluster Validation"
subtitle: "How to validate the resulted clusters"
excerpt: "External criteria validate the results of clustering based on some predefined structures of the data which is provided from an external source."
date: 2020-03-10 23:45:13 -0400
background: "/img/posts/2020-03-10-External-Cluster-Validation/background.png"
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

# External Criteria

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

