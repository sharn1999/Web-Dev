a = input()

counter = 0

numbers = list(map(int, a.split()))

for el in numbers:
    if(el>0):
        counter +=1
print(counter)

# print(" ".join(map(str, even_index_elements)))