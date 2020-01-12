matrix = [
  [11, 2, 4],
  [4, 5, 6], 
  [10, 8, -12]
]

def diagonal_difference(matrix):
    l = len(matrix)
    primary_diagonal = [matrix[i][i] for i in range(l)]
    secondary_diagonal = [matrix[l-1-i][i] for i in range(l-1, -1, -1)]

    return abs(sum(primary_diagonal) - sum(secondary_diagonal))

print(diagonal_difference(matrix)) 

# should return 15