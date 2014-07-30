import operator
def interleave(array):
  put = 0
  #op = operator.ge if sum(1 for x in array if x>=0) - len(array) > 0 else operator.lt
  op = operator.ge
  for i, val in enumerate(array):
    if op(val, 0) and 2*put<len(array):
      array[2*put], array[i] = array[i], array[2*put]
      put += 1

  return array

print interleave([-1, -1, -1, -1, 2, 3, -4])
print interleave([1, -1])
print interleave([-1, 1])
print interleave([1,-2,3,-4,5])
print interleave([1,-2,3,-4,5,-6])
print interleave(range(6))
print interleave(range(-6, 0))
