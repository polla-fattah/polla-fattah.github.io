---
layout: post
title: "Internal Cluster Validation"
subtitle: "How to validate the resulted clusters"
excerpt: "Internal criteria measure the 'goodness' of clusters for the data by extracting information from data and clusters alone, such as the compactness of data points inside one cluster."
date: 2020-03-09 23:45:13 -0400
background: "/img/posts/2020-03-09-Internal-Cluster-Validation/background.png"
categories: ["data-mining", "Clustering"]
author: "Polla Fattah"
usemathjax: false
---
<style>body p{text-align: justify}</style>


# Internal Cluster Validation


Internal criteria measure the 'goodness' of clusters for the data by extracting information from data and clusters alone, such as the compactness of data points inside one cluster and the separation of clusters from each other [^2]. These criteria were used as part of the cost function, to determine the quality of the selected classification rules in each time point, and to compare different clustering algorithms' performances, as presented in chapter six.

## Dunn Index
This index calculates the ratio of minimum distance between clusters to the maximum distance between any two instances of the same cluster [^3]:

{% include image.html url="/img/posts/2020-03-09-Internal-Cluster-Validation/dunn.png" description="" %}

Where _c<sub>i</sub>, c<sub>j</sub> &#8712; c_ of size _m_ and the maximum distance can be computed from the mean or between all pairs. A larger value for Dunn index means, better clustering output, because it means that the closest instances between two clusters are larger than the distance between two farthest instances in the same cluster [^1].

## Davies-Bouldin Index

This measure is introduced by Davies et al. [^4]. It calculates internal cluster compactness and inter cluster separation by producing the ratio of spreading sample points around mean (i.e. variation) to the distance between mean of clusters [^2].

{% include image.html url="/img/posts/2020-03-09-Internal-Cluster-Validation/db.png" description="" %}


Where _k_ is number of clusters, _s<sub>&mu;<sub>i</sub></sub>_ and _s<sub>&mu;<sub>j</sub></sub>_ are the spread of points around any two clusters cluster mean "Centroid", and _&delta;(&mu;<sub>i</sub>, &mu;<sub>i</sub>)_ denotes the mean of both clusters.

A smaller value of this measure indicates better the clustering, as in such cases the clusters are well separated and each cluster is well represented by its mean; in other words, larger values mean better compacted instances in the clusters and clusters that are well separated from each other [^1].

## SD
 This measure is introduced by Halkidi et al. [^5]. It calculates the average scattering for clustering and total separation among clusters.

{% include image.html url="/img/posts/2020-03-09-Internal-Cluster-Validation/sd.png" description="" %}


Where _a_ is a weighting factor equal to the maximum distance of two instances in the data set. The _Scatter_ indicates the average compactness of clusters. A smaller value of _Scatter_ is a signal for a compact cluster, and its the value increases for less compact clusters. The _Distribution_ is the measure of the total separation between clusters. A larger value _Scatter_ indicates better clustering and a smaller value of this term indicates greater proximity between clusters to each other. _Scatter_, and _Distribution_ have different ranges so that _a_ (the weighting factor) is important to maintain the balance between them. As SD measure is a total of _Scatterer_ and _Distribution_ so that the smaller SD value indicates better clustering [^5].

## sdwb

This measure is introduced by Halkidi et al. [^6]. The S_Dbw index is similar to SD index as it measures the intracluster and intercluster variances [^2]. The definition of S_Dbw indicates that both criteria of "good" clustering (i.e. compactness and separation) are properly combined, enabling reliable evaluation of clustering results.

{% include image.html url="/img/posts/2020-03-09-Internal-Cluster-Validation/sdbw.png" description="" %}

As with SD, the _Scatter_ indicates the average compactness of clusters, smaller _Scatter_ value indicating a compact cluster, with an increased value for less compact clusters. Dens_bw(c) indicates the inter-cluster density by calculating the average number of points between the clusters in relation with density within clusters. Thus a small value of Dens_bw means good separation among clusters. As in SD, a smaller value of this measure is an indication of well defined clustering [^6].

---

_Reference_

[^1]: Zaki, M. J. and Meira, M. J. (2014) Data Mining and Analysis: Fundamental Concepts and Algorithms, Cambridge University Press. New York: Cambridge University Press.
[^2]: Rendón, E. and Abundez, I. (2011) ‘Internal versus External cluster validation indexes’, International Journal of computers and communications, 5(1), pp. 27–34. available at: http://w.naun.org/multimedia/UPress/cc/20-463.pdf (Accessed: 7 April 2013).
[^3]: Dunn, J. C. (1973) ‘A Fuzzy Relative of the ISODATA Process and Its Use in Detecting Compact Well-Separated Clusters’, Journal of Cybernetics, 3(3), pp. 32–57. doi: 10.1080/01969727308546046.
[^4]: Davies, D. L. and Bouldin, D. W. (1979) ‘A cluster separation measure’, IEEE transactions on pattern analysis and machine intelligence, 1(2), pp. 224–227. doi: 10.1109/TPAMI.1979.4766909.
[^5]: Halkidi, M., Vazirgiannis, M. and Batistakis, Y. (2000) ‘Quality scheme assessment in the clustering process’, Principles of Data Mining and Knowledge Discovery, pp. 265–276.
[^6]: Halkidi, M., Vazirgiannis, M. and Batistakis, Y. (2000) ‘Quality scheme assessment in the clustering process’, Principles of Data Mining and Knowledge Discovery, pp. 265–276. 