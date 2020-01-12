def compare_triplets(a, b):
  a_score = 0
  b_score = 0

  for i in range(len(a)):
    if a[i] > b[i]:
      a_score += 1
    elif a[i] < b[i]:
      b_score += 1
  total_scores = [a_score, b_score]
  return total_scores


print(compare_triplets([5,6,7], [3,6,10]))