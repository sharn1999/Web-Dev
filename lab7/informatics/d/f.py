a = input()

counter = 0

numbers = list(map(int, a.split()))

for i in range(1, len(numbers) -1):
    if(numbers[i-1] < numbers[i] and numbers[i] > numbers[i+1]):
        counter +=1
print(counter)

# print(" ".join(map(str, even_index_elements)))