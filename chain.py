def generateChain(n):
    count = 1
    while n > 1:
        count += 1
        if n % 2 == 0:
            n //= 2
        else:
            n = 3*n + 1
    return count

def maxChainLength(i, j):
    hi = -1
    for a in range(i, j+1):
        length = generateChain(a)
        if length > hi:
            hi = length
    return hi

print(maxChainLength(1, 10) == 20)
print(maxChainLength(100, 200) == 125)
print(maxChainLength(201, 210) == 89)

        
