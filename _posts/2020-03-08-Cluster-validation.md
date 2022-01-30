---
layout: post
title: "Cluster Validation"
subtitle: "How to validate the resulted clusters"
excerpt: "Many clustering methods exist to be used in different situations according to the underlying data to be analysed and clustered."
date: 2020-03-08 23:45:13 -0400
background: "/img/posts/2020-03-08-Cluster-validation/background.png"
categories: ["data-mining", "Clustering"]
author: "Polla Fattah"
usemathjax: false
---

# Clustering Validation

Many clustering methods exist to be used in different situations according to the underlying data to be analysed and clustered. There are many methods to assess clustering results and their initial configurations, which can be categorised into three main types: clustering tendency, cluster stability and cluster evaluation [^3].

Clustering tendency or clusterability assesses the suitability of the data for clustering. The aim is to determine that the data has meaningful patterns to be clustered. The spatial histogram method for cluster tendency creates a histogram for the input data set and distance distribution by calculating the pairwise distance between data points. An example of non-clusterable data is uniform instances of a data set, as shown in Figure below [^3].


{% include image.html url="/img/posts/2020-03-08-Cluster-validation/uniformData.png" description="An example of uniform data which can not be clustered. From Zaki" %}


Cluster stability is concerned with the initial parameters of clustering algorithms, like the number of clusters in K--means. The aim of this method is to determine the optimum initial parameters for the clusters, so that the cluster of different samples of data from the same underlying population guarantee comparable results. Methods of determining the stability of clusters include generating perturbed versions of the data set, using distance functions (e.g. Euclidean) and similarity measures like Rand index [^1].

Clustering evaluation can use cluster validity indexes to evaluate the quality of the produced clusters. This task can be further divided into three categories [^3]:


- **External**: External validation derives the estimation for the quality of the generated clusters from sources outside the data set. The most general case is using true labels of items, provided by field experts.

- **Internal** Internal validation derives the estimation for the quality of the generated clusters using the structure of the data and the clusters. It computes the compactness of the clusters and the separation of clusters from each other.

- **Relative**: External validation compares between the results of two different clusterings for the same data set. The clusterings might be generated using different clustering algorithms, or the same clustering algorithm with different initial parameters.

---

_Reference_

[^1]: Von Luxburg, U. (2010) ‘Clustering stability: an overview’, Foundations and Trends in Machine Learning, 2(3), pp. 235--274.
[^3]: Zaki, M. J. and Meira, M. J. (2014) Data Mining and Analysis: Fundamental Concepts and Algorithms, Cambridge University Press. New York: Cambridge University Press.