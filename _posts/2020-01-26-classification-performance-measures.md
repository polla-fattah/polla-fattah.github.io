---
layout: post
title: "Classification Performance Measures"
subtitle: "How to measure classification performance"
excerpt: "Multiple methods exist to measure the performance of a classification algorithm and classify a data set into two classes, positive and classified. "
date: 2020-01-26 23:45:13 -0400
background: "/img/posts/2020-01-26-classification-performance-measures/background.jpg"
categories: ["data-mining", "classification"]
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



# Classification Performance Measures

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

[^2]: Zaki, M. J. and Meira, M. J. (2014) Data Mining and Analysis: Fundamental Concepts and Algorithms, Cambridge University Press. New York: Cambridge University Press.

[^19]: Fawcett, T. (2006) ‘An introduction to ROC analysis’, Pattern Recognition Letters, 27(8), pp. 861–874. doi: 10.1016/j.patrec.2005.10.010.
[^20]: Bradley, A. P. (1997) ‘The use of the area under the ROC curve in the evaluation of machine learning algorithms’, Pattern Recognition, 30(7), pp. 1145–1159. doi: 10.1016/S0031-3203(96)00142-2.
[^21]: Hand, D. D. J. and Till, R. J. R. (2001) ‘A simple generalisation of the area under the ROC curve for multiple class classification problems’, Machine Learning, pp. 171–186.
[^22]: Alpaydin, E. (2010) Introduction to Machine Learning. London, England: The MIT Press. doi: 10.1007/s10994-009-5137-3.
