---
layout: post
title: "Temporal Clustering"
subtitle: "Time Element in Clustering"
excerpt: "Clustering is an unsupervised machine-learning method whose goal is to find natural groupings (clusters) of instances in data sets."
date: 2020-04-17 23:45:13 -0400
background: "/img/posts/2020-04-17-Temporal-Clustering/background.png"
categories: ["data-mining", "Time-Series"]
author: "Polla Fattah"
usemathjax: false
---
<style>body p{text-align: justify}</style>


# Temporal Clustering

Clustering is an unsupervised machine-learning method whose goal is to find natural groupings (clusters) of instances in data sets. All clustering methods strive to detect compacted clusters by maximising the total sum of inter-cluster distance and minimising the total sum of the intra-cluster distance between instances [^4]. The distance can be measured using Euclidean distance, DTW distance, or any other similarity measures.

Jebara et al. [^2] used  hidden Markov model (HMM) to cluster time series data, while Oates et al. [^1] compared two methods for clustering time series data sets, first using HMM alone and then using DTW with HMM.DTW returns the minimised area between two time-series variables, which can be used as a similarity measure between them. They concluded that using DTW enhances the efficiency and effectiveness of the clusterings of the time series data set.

Rodrigues, Gama and Pedroso [^3]used hierarchical clustering to cluster time series data sets. A hierarchical clustering method works by grouping item into a tree of clusters. The tree can be generated in two ways, either by starting from single items then agglomerating them into a higher structure, or starting from the entire data set and dividing it until ends up with single items in each branch of the tree [^5]. Another method used a scaled-up version of DTW [^7] with hierarchical clustering, which calculates the distance between temporal variables efficiently.

Soheily-Khah et al. [^6] proposed k-means-based clustering for temporal data sets using DTW, the Dynamic Temporal Alignment Kernel, and the Global Alignment Kernel. Items of a data set are partitioned by k-means clustering, minimising the total distance of items to a centre of the clusters chosen randomly at the initial stage, but later recalculated in an iterative manner, and items are allocated to the nearest centroid to form clusters with minimum intra-cluster distance [^8].

---

_References_

[^1]: Oates, T., Firoiu, L. and Cohen, P. (1999) ‘Clustering time series with hidden Markov models and dynamic time warping’, Proceedings of the IJCAI-99 workshop on neural, symbolic and reinforcement learning methods for sequence learning, pp. 17–21.
[^2]: Jebara, T., Song, Y. and Thadani, K. (2007) ‘Spectral Clustering and Embedding with Hidden Markov Models’, 18th European Conference on Machine Learning, ECML 2007, Proceedings of, 4701, pp. 164–175. doi: 10.1007/978-3-540-74958-5_18.
[^3]: Rodrigues, P. P., Gama, J. and Pedroso, J. P. (2008) ‘Hierarchical clustering of time-series data streams’, IEEE Transactions on Knowledge and Data Engineering, 20(5), pp. 615–627. doi: 10.1109/TKDE.2007.190727.
[^41]: Esling, P. and Agon, C. (2012) ‘Time-series data mining’, ACM Computing Surveys (CSUR), 45(1), pp. 1–34. doi: 10.1145/2379776.2379788.
[^5]: Warren Liao, T. (2005) ‘Clustering of time series data - A survey’, Pattern Recognition, 38(11), pp. 1857–1874. doi: 10.1016/j.patcog.2005.01.025.
[^6]: Soheily-Khah, S., Douzal-Chouakria, A. and Gaussier, E. (2016) ‘Generalized k-means-based clustering for temporal data under weighted and kernel time warp’, Pattern Recognition Letters. Elsevier B.V., 75, pp. 63–69. doi: 10.1016/j.patrec.2016.03.007.
[^7]: Keogh, E. and Ratanamahatana, C. A. (2005) ‘Exact indexing of dynamic time warping’, Knowledge and Information Systems, 7, pp. 358–386. doi: 10.1007/s10115-004-0154-9.
[^8]: Zaki, M. J. and Meira, M. J. (2014) Data Mining and Analysis: Fundamental Concepts and Algorithms, Cambridge University Press. New York: Cambridge University Press.

[^1]: 
[^1]: 
[^1]: 
