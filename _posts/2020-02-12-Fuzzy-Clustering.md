---
layout: post
title: "Fuzzy Clustering"
subtitle: "C-means algorithm"
excerpt: "Fuzzy sets are used in fuzzy logic and can be considered as a generalisation of set theory. An element can be a member of a particular set or not in set theory"
date: 2020-02-12 23:45:13 -0400
background: "/img/posts/2020-02-12-Fuzzy-Clustering/background.png"
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


## Fuzzy Clustering

Fuzzy sets are used in fuzzy logic and can be considered as a generalisation of set theory. An element can be a member of a particular set or not in set theory, while in fuzzy set theory an element can have a gradual transition membership between sets. Hence, fuzzy clustering uses the fuzzy set to allow an instance to be in more than one cluster at the same time \cite{Wang2006}.

The most well known and used fuzzy clustering is fuzzy c--means algorithm, developed by Dunn \cite{Dunn1973a} and later improved by Bezdek \cite{Jain1999} who introduced the concept of the fuzzifier parameter \textbf{m}. This parameter, also called 'fuzziness index', is used to control the fuzziness of the membership of each item in the data set. Usually, m = 2 is used without any particular theoretical basis for this choice. For m = 1 the fuzzy c--means will behave as k--means algorithm, and the fuzziness of the system increases with the larger value of m parameter \cite{Bezdek1981}.

The fuzzy c--means algorithm has a similar approach as k--means algorithm. It requires a predefined number of clusters. Both algorithms start with random initialization of the cluster centres so c--means might have the same problem as k--means by converging to local optima. The result of the cmean algorithm is expressed as a membership percentage of each instance to the available clusters. This fuzzy membership clustering can be converted into hard clusters by choosing a cluster for each item with the highest membership ration \cite{Wang2006}.
