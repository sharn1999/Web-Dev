a = input()

numbers = list(map(int, a.split()))

for el in numbers:
    if(el%2==0):
        print(el)

# print(" ".join(map(str, even_index_elements)))