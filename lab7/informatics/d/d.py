a = input()

counter = 0

numbers = list(map(int, a.split()))

for i in range(1, len(numbers)):
    if(numbers[i] > numbers[i-1]):
        print(numbers[i], end=" ")

# print(" ".join(map(str, even_index_elements)))