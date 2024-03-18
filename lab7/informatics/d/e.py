a = input()

counter = 0

numbers = list(map(int, a.split()))

for i in range(1, len(numbers)):
    if(numbers[i-1] > 0 and numbers[i] > 0 or numbers[i-1] < 0 and numbers[i] < 0):
        print(numbers[i-1], end=" ")
        print(numbers[i], end=" ")
        break

# print(" ".join(map(str, even_index_elements)))