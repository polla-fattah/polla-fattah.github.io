---
layout: post
title: "Classification Algorithms"
subtitle: "How to classify data."
excerpt: "Classification is an instance of supervised learning. Supervised learning classification process includes a training phase to create a model (classifier)."
date: 2020-01-26
background: "/img/posts/01.jpg"
categories: classification
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

# Classification

Classification is an instance of supervised learning. Supervised learning classification process includes a training phase to create a model (classifier). The entire process of using a supervised classification method is illustrated by Kotsiantis [^1] as shown in Figure \ref{fig:supervisedLearning}, with the training step being an important part of it.

Different classifier models are created by using different classification algorithms, which can be divided into four main categories: Decision Tree Classifier, Probabilistic Classification, Support Vector Machines and Linear Discriminant Analysis [^2]. These classifiers are discussed in the following subsections, with particular consideration of Decision Tree Classifiers deployed in this research.

![General process of classification methods](/img/posts/2020-01-26-classification/supervisedLearning.png){:class="responsive-img"}

## Decision Trees

As described by Zaki et al. [^2], Decision Tree is a classification model which recursively partitions the data space into two parts. The split can be considered as a hyperplane parallel to one axis of the data space. The process repeats by dividing each new part into two smaller parts, and this process continues until each sub-part mostly contains items of only one of the target classes. The final result of this partitioning process
can be represented by a tree, where each node is a decision concerning which part an item belongs to, and the leaves represent one of the target classes.

As an example of the decision tree partitioning, consider the iris data set with 150 entries of three classes. The items are displayed in Figure \ref{fig:Recurcive2Decision1}, which plots their sepal length and width as X, Y axes. The partitioning process created six different regions, which are divided by lines instead of hyperplains, as in two-dimensional data space the hyperplanes can only have one dimension. Multiple regions might represent one of the targeted classes. The tree representation of the iris data space partition is shown in Figure \ref{fig:Recurcive2Decision2}.

![Decision trees representation for splitting items of the data by creating hyper-plains which are parallel to one of the axes.](/img/posts/2020-01-26-classification/recursiveCut.png){:class="responsive-img"}

C4.5 might be one of the most famous decision tree algorithms for classification [^3]. C4.5 is build on ID3, both of which were introduced by Quinlan [^4]. This algorithm relies on information gained to create its tree for classification. In this algorithm attributes with higher normalised information gain are used for decide the splits in the data. The the next highest attribute is used for subpartitioning the data recursively [^4].

This algorithm is superseded by a new version C5.0, which is more efficient as it uses less memory and functions more efficiently and effectively, generating a smaller and more concise decision tree, while it is more general as it can classify more data types than its predecessor. It also incorporates boosting, which means multiple classifier trees can be generated and they will vote for predicting items' classes. Boosting is a bootstrap aggregate (bagging) mechanism which may improve the stability and accuracy of the final result of the classifier [^3]. The last aspect of the algorithm is similar to what is provided by Random Forest algorithm, which creates many decision trees from random subsets of the training data [^5].

C4.5 has two drawbacks [^6], the first of which is overfitting, which might be solved by pruning the decision tree to be more general. Two types of pruning can be done on the tree pre-pruning and post-pruning. Pre-pruning is the operation of preventing particular branches from growing when information becomes unreliable. Post-pruning is the operation of cutting branches of a fully grown tree to remove unreliable parts. The second drawback originates from the very nature of the algorithm by selecting attributes with the highest information gain value. This process will become bias to the attributes with a large number of values.

Conditional Inference Tree (Ctree) was introduced by Hothorn et al. [^6] to overcome the attribute bias of the information gain based algorithms. This algorithm uses significance to select covariants of attributes. The significance is determined through P-value which is derived from ANOVA F-statistics. During the training phase, all data permutations will be tested to calculate the p-value.

### Rule-Based Classification

A rule-based classifier uses a set of rules to classify items in a data set. The rules are formalised in the form of IF-THEN clause. The conditions of the IF clause represent the rules that an item should fulfil to be accepted as a particular class. If the rules are ordered and have priority they can be represented in nested IF-THEN-ELSE clauses and might be called decision lists [^7].

Figure \ref{fig:ruleBased}a shows a simple data set with items labelled \textbf{a} or \textbf{b}. We can produce multiple variations of rules to classify items in this data set. It is possible to filter out all class \textbf{a} items first then all others remaining will be class \textbf{b}:
If x $>$ 1.4 and y $<$ 2.4 then class = \textbf{a}\\
Otherwise class = \textbf{b}\\

Conversely, if b class items are filtered out the remaining items will be classified as \textbf{a}:
If x $\leqslant$ 1.2 then class = \textbf{b} \\
If x $>$ 1.2 and y $\leqslant$ 2.6 then class = \textbf{b}\\
Otherwise class = \textbf{a}\\

In most cases, rule-based classification systems and decision trees can be used interchangeably; C4.5 provides both decision trees and classification rules [^3]. A decision tree representing the rule-based classifier is shown in Figure \ref{fig:ruleBased}b. The rules above and the decision tree can be considered as an equivalent classifiers, but most of the time people prefer rule-based classifiers on decision trees as they are more intuitive for human understanding [^7], due to being simpler and more concise [^3].

\begin{figure}[!h]
\includegraphics[width=1\textwidth]{images/chapter2/rulebased.png}  
 \caption{Classifying same data set using both rules and a decision tree.
(a) A two dimensional data sets with items of two classes.
(b) A tree representation for a rule based classification.
From Witten et al. [^7]}
\label{fig:ruleBased}
\end{figure}

Various methods are used to generate rule-based classifiers in different fields of application. The remainder of this section presents more effective samples of these works with a brief explanation of their methodologies.

Rodriguez et al. [^10] used rule-based classification to classify power quality disturbances of signals. They used S-transform to extract features from signals, as this transform can generate variable window size with the ability to preserve phase information during decomposition [^9]. They used leaner and parabolic lines to separate between classes. The separation line is produced using a heuristic function to guarantee maximisation of the number of correctly classified signals from the provided training set.

Chung et al. [^11] use a two-stage classification method to classify power line signals, in the first of which they used a rule-based classifier to differentiate interrupt signals from others, which were then further classified using Hidden Markov Model classifier. The rules of the first stage classifier are created by domain experts relying mainly on the IEEE standards for signal interruption conventions, thus this classifier does not require a training set, as it is a static set of rules that can be calculated directly.

McAulay et al. [^12] used genetic algorithms to create rule-based systems to identify alphabetical numbers. The system uses a random rule generator to create initial rules, which are enhanced through multiple generations by adjusting the initial rules. However, they notice that genetic algorithms might override even good rules which can identify specific characters. To prevent overriding rules, they introduced the concept of remembering rules for a long time if they succeeded to identify the training set example correctly.

Orriols-Puig et al. [^13] used an evolutionary algorithm to create a rule-based classification system in which the system initiates with a set of classifier rules, then evolves online with the environment (new training items) to produce an accurate classification model. They proved that their classification method outperforms other methods (including support vector machine) in classifying data sets with imbalanced class ratios.

Nozaki et al. [^14] used fuzzy systems to create a rule-based classifier. Generating fuzzy rule-based classification system requires two phases, first partitioning the patron space into fuzzy subspaces and then defining a fuzzy rule for each of these. Nozaki et al. used a fuzzy grid introduced by Ishibuchi et al. [^15] with triangle-shaped membership function to generate fuzzy rules from fuzzy subspaces. To enhance the classification results they introduced two procedures, error correction-based learning and significant rule selection. Error correction-based process increases and decreases the procedure of increasing or decreasing rule certainty according to its classification of the items; if a particular rule correctly classified an item its certainty will increase, otherwise, it will decrease accordingly. Significant rule selection is a mechanism to prune unnecessary rules to construct a compact set of a fuzzy rule-based classifier.

As demonstrated above, many domains of computer science and machine learning are used to generate and optimise rule-based classification systems, including expert systems, genetic algorithms, evolutionary algorithms and fuzzy systems. While these classifiers are efficient and effective methods to classify underlying data sets, they require a training data set for rule generation and optimisation. This means a sufficient amount of correctly labelled samples should be available to cover all or most of the aspects and possibilities of situations and characteristics that have to be classified.

The availability of the training data set might not always be an option due to the fact that labelling items is a tedious and laborious undertaking requiring a extensive periods of professionals' valuable time. Experts might know the general rules for classifying items but they cannot identify the attributes of the classes individually due to the complexity of the underlying data sets. Moreover, domain experts might not quite agree on the fine differences between classes, so that it is hard to have a general single view for classifying items in the data set (such as in public goods games case study).

After the training stage these methods create a list of rules that represent the final rule-based classifier model, which might not cover all different opinions for nuanced cases of the classification (i.e. after the training stage, the classifier might lack the required generalisation). As noted previously, the generalisation problem might be solved by using rule pruning [^14]. However, this generalisation can be called local, as it depends on the training data, which is probably classified and labelled using expert single views.

Another aspect which is lacking in the presented methods is that they do not consider the classification of temporal data sets, as demonstrated in later sections. However, these methods also require training samples.

## Support Vector Machine

\acrfull{svm} is a binary parametric classifier that classifies items by creating a hyperplane between classes. This algorithm tries to find an optimum position for the hyperplane so that it splits the classes with the maximum margin between class items and minimum empirical risk. The items on the edges of the margin are called support vectors, as each item can be seen as a vector. An example of an SVM classifier's hyperplane is shown in Figure 2.4. It can be noticed that in a two-dimensional data set the hyperplane is represented as a line [^16].

\begin{figure}[!h]
\includegraphics[width=0.6\textwidth]{images/chapter2/SVM.png}  
 \caption{Hyperplane of support vector machine between items of two classes showing vector $w$ and points on the dotted lines are support vectors. From Muller et al. [^16]}
\label{fig:svmClassifier}
\end{figure}

Assume $D = \{(x_i, y_i)\}^n_{i=1}$ is a data set to be classified. The data set has n items in d dimensions, and each item has a set x of d attributes and y as a class label. For two classes we can assume that y can have one value of 1 or -1. The SVM's hyperplane $h(x)$ equation is defined as $h(x) = w^Tx+ b$. In this equation, w is a d dimensional weight vector and b (bias) is a scalar. The points on the hyperplane equal to 0 ($h(x) = 0$), so that for any $x_i$ if $h(x_i) > 0$ then $y_i = 1$ and if $h(x_i) < 0$ then $_iy = -1$ [^2].

One of the advantages of SVM is that it can use kernel trick. For a data set with nonlinear separation between classes, we can map the d-dimensional items $x_i$ of input space into a high-dimensional feature space using a nonlinear transformation function [^2].

SVM has been used as an elementary stage to create rule-based classifiers. Nunez et al. [^17] used rule extraction mechanism to extract rules from an SVM model generated via training samples. The rules are constructed using multiple of ellipsoid equations. While these rules might present a good visual illustration for the rules, especially for two-dimensional spaces, these equations have mathematical forms so that the generated rules are not intuitive and easy to understand as stand alone rules. Moreover, the ellipsoids are not one-to-one maps for the actual hyperplanes of SVM, so the rule-based classifiers are not as efficient as their SVM counterparts and they have a higher error rate.

## K-Nearest Neighbours

The \acrfull{knn} classifier is a nonparametric lazy classifier. In nonparametric classification the algorithm does not assume any specific distribution for the data sets. Lazy classifiers do not generalise the classification model and calculate the class of the item at the time of testing instead of training, which makes training very efficient by reducing the cost of testing time [^18].

KNN estimates items' classes according to their nearest neighbours. The majority of the K nearest neighbours decide the class of the input item. An odd number of for K is selected (between 3 to 9) to prevent ties. The nearest neighbours are decided using one of the distance measures (e.g. Euclidean distance), as shown in Figure \ref{fig:KNN} [^2].

\begin{figure}[!h]

    \includegraphics[scale=0.9]{images/chapter2/KNN.png}
    \caption{K-Nearest Neighbour Classification with K = 5}
    \label{fig:KNN}

\end{figure}

To prevent attribute bias due to different magnitudes of values it is strongly preferred to normalise all attributes before classification. Non-numerical attributes can also be used with KNN classification, similar attributes with the K neighbours have zero distance, and different attributes have the distance of 1 [^2].

While this classification algorithm is different from rule-based classifiers, we used a variation of this classification for temporal attributes, as explained in chapter six, as a comparison with our proposed classification algorithm to test the performance difference between the algorithms.

## Classification Performance Measures

Multiple methods exist to measure the performance of a classification algorithm and classify a data set into two classes, positive and classified. The terminology was developed in the medical field, where positive denotes the presence of a disease and negative indicates its absence [^19].

In a test data set D with n instances, a classifier tries to identify the class of instances for binary classifiers, whereby four possibilities exist. These possibilities for any classifier can be demonstrated as a confusion matrix, which is shown in Table \ref{tab:confusionMatrix}, and explained below [^2]:

\begin{itemize}
\item \acrfull{tp}: Number of correctly identified positive cases by the classifier.
\item \acrfull{fp}: Number of incorrectly identified cases as positive but their true labels are negative.
\item \acrfull{tn}: Number of correctly identified negative cases by the classifier.
\item \acrfull{fn}: Number of incorrectly identified cases as negative but their true labels are positive.
\end{itemize}

\begin{table}[!h]
\centering
\begin{tabular}{l|l|c|c|c}
\multicolumn{2}{c}{}&\multicolumn{2}{c}{True diagnosis}&\\
\cline{3-4}
\multicolumn{2}{c|}{}&Positive&Negative&\multicolumn{1}{c}{Total}\\
\cline{2-4}
\multirow{2}{\*}{Screening test}& Positive & TP & FP & $a+b$\\
\cline{2-4}
& Negative & FN & TN & $c+d$\\
\cline{2-4}
\multicolumn{1}{c}{} & \multicolumn{1}{c}{Total} & \multicolumn{1}{c}{$a+c$} & \multicolumn{1}{c}{$b+d$} & \multicolumn{1}{c}{$N$}\\
\end{tabular}
\caption{Confusion Matrix}
\label{tab:confusionMatrix}
\end{table}

To measure the overall performance of a classifier directly from the confusion matrix we can calculate the accuracy and error rates. The accuracy of a classifier is the fraction of correctly classified instances so that: $Accuracy = \frac{TP + TN}{n}$. In contrast, the fraction of all misclassified instances comprise the
error rate which is: $Error Rate = \frac{FP + FN}{n}$ [^19].

To measure class-specific performance we can use recall and precision. Recall is the ratio of correctly predicted number of a class labels to the real number of instances of that class in the data set. Recall for the positive instances in the data set is called sensitivity. The sensitivity is the ratio of true positive to the real number of positive cases in the data set so that $sensitivity = \frac{TP}{TP + FN}$. Precision is a class-specific accuracy; it is the ratio of the number of correctly predicted instances of a class to the number of predicted instances of the same class. A specific case of precision for the negative class is called specificity. The specificity is the ratio of true negative to the real negative cases in the data set so that $specificity = \frac{TN}{TN + FP}$ [^19].

For a classifier, there is a trade-off between recall and precision; maximising one of them might cause the other to decline. Consequently, measures are introduced to overcome this problem and create a balance between these two measures. F-measure is computing the harmonic mean of the classes' recall and precision [^2] so that:
\begin{equation*}
F=\frac{2}{\frac{1}{precision} + \frac{1}{recall} } = \frac{2 \times precision \times recall}{precision + recall}
\end{equation*}

\acrfull{auc} of \acrfull{roc} is a measure used to calculate the performance of machine learning algorithms such as classification [^20] . The ROC curve is a graph of the true positive and false positive rates of the predicted classifier's result compared to the real class for each item. Figure 2.6 shows ROC curves for different algorithms with various performances. AUC is the area under the ROC curve plotted as a performance result of the classifier. Methods of calculating AUC vary according to the nature of application and available data. The multi-class AUCs are calculated using the equations of [^21]. $auc = \frac{2}{c(c-1)}\sum aucs$. Where c is number of classes and aucs is a set of auc between any two classes.

\begin{figure}[!h]

    \includegraphics[scale=0.4]{images/chapter2/AUC.png}
    \caption{Receiver operating characteristic (ROC) curves for various classifiers. From [^22]}
    \label{fig:ROC}

\end{figure}

---

[^1]: Kotsiantis, S. B. (2007) ‘Supervised machine learning: A review of classification techniques’, Informatica, 31, pp. 249–268. doi: 10.1115/1.1559160.
[^2]: Zaki, M. J. and Meira, M. J. (2014) Data Mining and Analysis: Fundamental Concepts and Algorithms, Cambridge University Press. New York: Cambridge University Press.
[^3]: Wu, X. et al. (2008) ‘Top 10 algorithms in data mining’, Knowledge and Information Systems, 14(1), pp. 1–37. doi: 10.1007/s10115-007-0114-2.
[^4]: Quinlan, J. R. (2014) C4.5: programs for machine learning. Elsevier (C4.5 - programs for machine learning / J. Ross Quinlan).
[^5]: Breiman, L. (2001) ‘Random forest’, Machine learning, 45(1), pp. 5--32. doi: 10.1017/CBO9781107415324.004.
[^6]: Hothorn, T., Hornik, K. and Zeileis, A. (2006) ‘Unbiased Recursive Partitioning: A Conditional Inference Framework’, Journal of Computational and Graphical Statistics, 15(3), pp. 651–674.
[^7]: Witten, I. H., Frank, E. and Hall, M. a. (2011) Data Mining: Practical Machine Learning Tools and Techniques, Third Edition. Morgan Kaufmann. doi: 10.1002/1521-3773(20010316)40:6<9823::AID-ANIE9823>3.3.CO;2-C.
[^8]: Rodriguez, A. et al. (2012) ‘Rule-based classification of power quality disturbances using S-transform’, Electric Power Systems Research, 86, pp. 113–121. doi: 10.1016/j.epsr.2011.12.009.
[^9]: Chen, C. S. (1996) ‘Statistical analysis of space-varying morphological openings with flat structuring elements’, IEEE Transactions on Signal Processing, 44(4), pp. 998–1001.
[^10]: Rodriguez, A. et al. (2012) ‘Rule-based classification of power quality disturbances using S-transform’, Electric Power Systems Research, 86, pp. 113–121. doi: 10.1016/j.epsr.2011.12.009.
[^11]: Chung, J. et al. (2002) ‘Power disturbance classifier using a rule-based method and wavelet packet-based hidden Markov model’, IEEE Transactions on Power Delivery, 17(1), pp. 233–241.
[^12]: McAulay, A. D. and Oh, J. C. (1994) ‘Improving Learning of Genetic Rule-Based Classifier’, IEEE Transactions on Systems, Man, and Cybernetics. IEEE, 24, pp. 152--159.
[^13]: Orriols-Puig, A. and Bernadó-Mansilla, E. (2009) ‘Evolutionary rule-based systems for imbalanced data sets’, Soft Computing, 13(3), pp. 213–225. doi: 10.1007/s00500-008-0319-7.
[^14]: Nozaki, K., Ishibuchi, H. and Tanaka, H. (1996) ‘Adaptive fuzzy rule-based classification systems’, IEEE Transactions on Fuzzy Systems, 4(3), pp. 238–250. doi: 10.1109/91.531768.
[^15]: Ishibuchi, H., Nozaki, K. and Tanaka, H. (1992) ‘Distributed representation of fuzzy rules and its application to pattern classification’, Fuzzy Sets and Systems, 52(1), pp. 21–32.
[^16]: Muller, K.-R. et al. (2001) ‘An introduction to kernel-based algorithms’, IEEE Transactions on Neural Networks, 12(2), pp. 181--202.
[^17]: Núñez, H., Angulo, C. and Català, A. (2006) ‘Rule-based learning systems for support vector machines’, Neural Processing Letters, 24(1), pp. 1–18. doi: 10.1007/s11063-006-9007-8.
[^18]: Wettschereck, D., Aha, D. W. and Mohri, T. (1997) ‘A Review and Empirical Evaluation of Feature Weighting Methods for a Class of Lazy Learning Algorithms’, Artificial Intelligence Review. Springer, 11(1--5), pp. 273--314. doi: 10.1023/A:1006593614256.
[^19]: Fawcett, T. (2006) ‘An introduction to ROC analysis’, Pattern Recognition Letters, 27(8), pp. 861–874. doi: 10.1016/j.patrec.2005.10.010.
[^20]: Bradley, A. P. (1997) ‘The use of the area under the ROC curve in the evaluation of machine learning algorithms’, Pattern Recognition, 30(7), pp. 1145–1159. doi: 10.1016/S0031-3203(96)00142-2.
[^21]: Hand, D. D. J. and Till, R. J. R. (2001) ‘A simple generalisation of the area under the ROC curve for multiple class classification problems’, Machine Learning, pp. 171–186.
[^22]: Alpaydin, E. (2010) Introduction to Machine Learning. London, England: The MIT Press. doi: 10.1007/s10994-009-5137-3.
