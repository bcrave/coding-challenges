def a_very_big_sum(list):
  sum = 0

  for i in list:
    sum += i
  
  return sum

print(a_very_big_sum([1, 2, 3]))