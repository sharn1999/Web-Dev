a = input()

numbers = list(map(int, a.split()))

maxN = numbers[0]
maxI = 0

for i in range(0, len(numbers)):
    if(maxN < numbers[i]):
        maxN = numbers[i]
        maxI = i
print(maxN, end=" ")
print(maxI, end=" ")

# print(" ".join(map(str, even_index_elements)))