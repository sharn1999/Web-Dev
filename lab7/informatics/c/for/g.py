x = int(input())

smallest_divisor = x

for i in range(2, x + 1):
    if x % i == 0:
        smallest_divisor = i
        break 
print(smallest_divisor)