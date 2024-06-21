---
layout: post
title: "Fuzzy Clustering"
subtitle: "C-means algorithm"
excerpt: "Fuzzy sets are used in fuzzy logic and can be considered as a generalisation of set theory. An element can be a member of a particular set or not in set theory"
date: 2020-02-12 23:45:13 -0400
background: "/img/posts/2020-02-12-Fuzzy-Clustering/background.png"
categories: ["data-mining", "clustering"]
author: "Polla Fattah"
usemathjax: false
---
<style>body p{text-align: justify}</style>


# Fuzzy Clustering

Fuzzy sets are used in fuzzy logic and can be considered as a generalisation of set theory. An element can be a member of a particular set or not in set theory, while in fuzzy set theory an element can have a gradual transition membership between sets. Hence, fuzzy clustering uses the fuzzy set to allow an instance to be in more than one cluster at the same time [^1].

The most well known and used fuzzy clustering is fuzzy c-means algorithm, developed by Dunn [^3] and later improved by Bezdek [^2] who introduced the concept of the fuzzifier parameter \textbf{m}. This parameter, also called 'fuzziness index', is used to control the fuzziness of the membership of each item in the data set. Usually, m = 2 is used without any particular theoretical basis for this choice. For m = 1 the fuzzy c-means will behave as k--means algorithm, and the fuzziness of the system increases with the larger value of m parameter [^4].

The fuzzy c-means algorithm has a similar approach as k--means algorithm. It requires a predefined number of clusters. Both algorithms start with random initialization of the cluster centres so c-means might have the same problem as k--means by converging to local optima. The result of the cmean algorithm is expressed as a membership percentage of each instance to the available clusters. This fuzzy membership clustering can be converted into hard clusters by choosing a cluster for each item with the highest membership ration [^1].

---

_Reference_

[^1]: Wang, X. Y. (2006) Fuzzy Clustering in the Analysis of Fourier Transform Infrared Spectra for Cancer Diagnosis. The University of Nottingham.
[^2]: Jain, A. K., Murty, M. N. and Flynn, P. J. (1999) ‘Data clustering: a review’, ACM computing surveys (CSUR). ACM Press, 31(3), pp. 264--323. doi: 10.1145/331499.331504.
[^3]: Dunn, J. C. (1974) ‘A Fuzzy Relative of the ISODATA Process and Its Use in Detecting Compact Well-Separated Clusters’, Journal of Cybernetics, 3(3), pp. 32–57. doi: 10.1080/01969727308546046.
[^4]: Bezdek, J. C. (1981) Pattern Recognition with Fuzzy Objective Function Algorithms, SIAM Review. New York: Plenum Press. doi: 10.1007/978-1-4757-0450-1.
