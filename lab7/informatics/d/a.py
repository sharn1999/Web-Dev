a = input()

numbers = list(map(int, a.split()))

even_index_elements = numbers[::2]

print(" ".join(map(str, even_index_elements)))