/**
 In a machine learning optimization system, you are given an array modelScores of size n, 
 where modelScores[i] represents the performance score of the i-th model after a training cycle.
 Implement a function that determines the size of the largest subsequence of models such that 
 their scores form a continuous value band i.e, the absolute difference between any two consecutive scores after sorting is atmost 1.
 The function findLargestScoreband takes the following input:
 * int modelScores[n] : the performance scores for each model.
 * The function should return an integer, the size of the largest subsequence that satiesfies the given requirements.
 * Note: A subsequence of an array is formed by deleting zero or more elements without changing the order of the remaining elements.
 * Example: n = 5
 * modelScores = [8, 5, 4, 8, 4]
 * Any single element subsequence forms a value band., so [8], [5], [4] are all qualify.
 * Value bands of size 2 are [4, 4], [5, 4]sorted = [4, 5] and [8, 8].
 * There is one subsequence of size 3: [4, 4, 5] sorted = [4, 4, 5].
 * The largest subsequence has size 3, so the function should return 3.
 * Output: 3
 */


function findLargestScoreband(modelScores){

}