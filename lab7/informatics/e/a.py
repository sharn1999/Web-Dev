def min_of_four(a, b, c, d):
    return min(a, b, c, d)
a =  int(input())
numbers = list(map(int, a.split()))
a, b, c, d = numbers[0], numbers[1],numbers[2], numbers[3]
print(min_of_four(a, b, c, d))