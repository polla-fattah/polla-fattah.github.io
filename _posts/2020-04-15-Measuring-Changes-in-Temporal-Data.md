---
layout: post
title: "Measuring Changes in Temporal Data"
subtitle: ""
excerpt: "Spiliopoulou et al. introduced the monic model, which finds cluster transition over accumulating data sets, providing an ageing function for clustering data that prioritises"
date: 2020-04-15 23:45:13 -0400
background: "/img/posts/2020-04-15-Measuring-Changes-in-Temporal-Data/background.png"
categories: ["data-mining", "Time-Series"]
author: "Polla Fattah"
usemathjax: false
---

# Measuring Changes in Temporal Data

Spiliopoulou et al. [^1] introduced the MONIC _Modeling and monitoring cluster transitions_, which finds cluster transition over accumulating data sets, providing an ageing function for clustering data that prioritises new records over old ones and eliminates records older than two time points. Matching for clusters in one time point to the next one is carried out by passing a threshold that determines normalised maximum number of records that exist in both matched clusters in the two time points. This model defines two kinds of transitions, external and internal. In external transition, clusters may survive, split, be absorbed, disappear or emerge, while in internal transition clusters can change in size, compactness or location.

According to MONIC, each cluster has a lifetime, which is the number of time points throughout which it can survive. Longer cluster lifetimes enable more predictable clustering while short lifetimes lead to volatile and unpredictable clustering.

It can be observed that this model relies on accumulated data over time to detect cluster matches, therefore it cannot be used with non-accumulated data. Moreover, it emphases the measurement of cluster changes and cannot detect changes in cluster membership for individual items clustered over time points.

Gunnemann et al. [^2] introduced a method which traces cluster evolution as change in behaviour types indicated by the value of objects (e.g. persons) in high-dimensional data sets. Different types of mapping function were introduced to map clusters according to their values in different dimensions and subspaces instead of object identifier.

Using this method cluster evolutions were detected and counted in the forms of emerge, disappear, converge and diverge. Moreover, the loss and gain of dimensions of subspace clusters were calculated.

This method counts the number of various changes that occur to clusters of any high dimensional data set, but it lacks to any mean by which to quantify the changes themselves; in other words, there is no indication of the quantity of change that happens to any cluster in two consecutive time points.

Hawwash et al. [^3] proposed a framework for mining, tracking and validating clusters in a data stream using statistical cluster measures like cardinality, scale and density of clusters to detect milestones of clusters change and monitor the behaviour of cluster.

This framework targets accumulative clustering on data streams, but instead of using fixed-time window for clustering it uses milestones to detect the next-best clustering time.

Hawwash et al. [^3] used a linear model in their metrics, which cannot represent real-life situations. They made this concession due to time limitations and the memory complexity of higher degree models. With some enhanced models this method could be profitably used to determine critical time points in the data stream clustering and to track clusters behaviour in general using statistical measures for representative numbers pertaining to the situation of clusterings.

Kalnis et al. [^4] introduced a method to discover moving objects in the snapshots of spatio-temporal data using cluster mapping function, treating clusters as sets and calculating the cardinality ratio of intersection for each two time constitutive clusters over their union; if the ratio passes a certain threshold the cluster is considered to be a moving cluster.

This method detects move in overall clusters and provides visual aids enabling human experts to grasp changes in the underlying data [^5][^6]. This method is excellent for tracking moving cluster change [^7] , but it still lacks a method to quantify the magnitude of change for overall clustering objects.

Aggarwal [^8] introduced a new method to detect changes for single clusters in the data streams that also works for snapshots of data as special cases. This method uses forward and reverse time slice density estimates based on fixed length time window to calculate velocity density at time and space dimensions.

By calculating velocity density three types of change can appear on the clusters in evolving data streams: 1) they may coagulate if the value passed a user specified threshold; 2) they may decay if the value does not pass the threshold; or 3) they may shift their location to another. This method is particularly germane to visually understanding the characteristics of underlying data.

In summary, the previously mentioned methods: 1) are mostly designed to work with data streams or snapshots of spatio-temporal data sets; 2) detect changes inside data by monitoring cluster change in terms of split, absorbed, disappear and emerged etc., which is a good indication for detecting existence of change, but which does not specify the magnitude of change. Our aim is to create a simple factor (scalar) to express the magnitude of change among members of clusterings in temporal data sets.

---

_References_

[^1]: Spiliopoulou, M. et al. (2006) ‘Monic: modeling and monitoring cluster transitions’, Proceedings of the 12th ACM SIGKDD international conference on Knowledge discovery and data mining, pp. 706–711.
[^2]: Günnemann, S. et al. (2011) ‘Tracing evolving clusters by subspace and value similarity’, Advances in Knowledge Discovery and Data Mining, 6635, pp. 444–456.
[^3]: Hawwash, B. and Nasraoui, O. O. (2012) ‘Stream-dashboard: a framework for mining, tracking and validating clusters in a data stream’, Proceedings of the 1st International Workshop on Big Data, Streams and Heterogeneous Source Mining: Algorithms, Systems, Programming Models and Applications. ACM (BigMine ’12), pp. 109–117.
[^4]: Kalnis, P., Mamoulis, N. and Bakiras, S. (2005) ‘On discovering moving clusters in spatio-temporal data’, Advances in Spatial and Temporal Databases. Springer Berlin Heidelberg (Lecture Notes in Computer Science), 3633, pp. 364–381. doi: 10.1007/11535331_21.
[^5]: Ntoutsi, I., Spiliopoulou, M. and Theodoridis, Y. (2011) ‘Summarizing Cluster Evolution in Dynamic Environments’, in Computational Science and Its Applications - ICCSA 2011. Springer Berlin Heidelberg, pp. 562–577. doi: 10.1007/978-3-642-21887-3_43.
[^6]: Böttcher, M., Höppner, F. and Spiliopoulou, M. (2008) ‘On exploiting the power of time in data mining’, ACM SIGKDD Explorations Newsletter, 10(2), pp. 3–11. doi: 10.1145/1540276.1540278.
[^7]: Ntoutsi, I., Spiliopoulou, M. and Theodoridis, Y. (2009) ‘Tracing cluster transitions for different cluster types.’, Control and Cybernetics, 38(1), pp. 239–259. 
[^8]: Aggarwal, C. C. (2005) ‘On change diagnosis in evolving data streams’, Knowledge and Data Engineering, IEEE Transactions on, 17(5), pp. 587–600. doi: 10.1109/TKDE.2005.78.