---
layout: post
title: "Centroid-Based Clustering"
subtitle: "K-Means and PAM"
excerpt: "Centroid-based or representative-based clustering is a method of finding the best k clusters of items in the D data set."
date: 2020-02-11 23:45:13 -0400
background: "/img/posts/2020-02-11-Centroid-Based-Clustering/background.png"
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


## Centroid-Based Clustering

Centroid-based or representative-based clustering is a method of finding the best k clusters of items in the D data set. Each cluster contains a representative point which might be called centroid \cite{Zaki2014}. Two examples of centroid-based clustering discussed below are K--means and PAM clustering methods.

### K--means Clustering

K--means clustering is partitional-based and produces k clusters, minimising the distance between the centre of the cluster and cluster members. The criterion used to calculate the quality of the cluster is the sum of squared errors to the centroid. The aim of the algorithm is to find centroids that minimise the sum of squared error for all clusters \cite{Zaki2014}.

The process starts by assigning k random items as centroids, after which each item is appointed to a cluster with the nearest centroid to it. The location of the centroid is updated according to the existing items in the cluster. The process of assigning instances to clusters and updating centroids is reiterated until convergence (i.e. the centroids stabilise) or a fixed number of iterations has been reached \cite{Jain1999}.

K--means works as a greedy optimisation algorithm so that it might converge to local optima \cite{Zaki2014}. Moreover, using the sum of squared error as a criterion for finding better clusters makes K--means sensitive to outliers, so that extreme values might distort the distribution of the data \cite{Jain1999}.

### PAM Clustering

\acrfull{pam} clustering is another centroid-based technique, but unlike K--means it uses actual instances of the data set as representatives for the clusters instead of virtual centroids. It uses a similarity measure to identify members of a cluster. The members most similar to a medoid are considered in the same cluster so that the sum of squared errors can be used with PAM algorithm to identify the quality of clusters \cite{Kaufman1990}.

Similar to K--means, PAM algorithm starts with random k set of medoids, then each instance is registered as a member of a cluster according to its similarity distance from the medoid. The sum of squared errors is calculated for the current set of medoids. In the original algorithm, different instances are selected as nominees for medoids to optimise the initial state, and the sum of squared errors is calculated according to the selected instances \cite{Kaufman1990}. If the selected instances perform better than the original set of medoids, then they will be replaced with the new ones. This process can be repeated multiple times until convergence. However, due to the large time requirement and complexity of this method, it is usually used only for small data sets, and for larger data sets a modified version of the original version is preferable to find optimum medoids in an acceptable time frame \cite{Ng2002}.

