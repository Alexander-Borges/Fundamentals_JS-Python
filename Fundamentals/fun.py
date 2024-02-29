# Algos in Python
# 1. Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for i in range(-300, 0, 3):
    if i not in [-3,-6]:
        print(i)
        print("+++++++++++++++++++++++++++++++++++")

# 2. Print Integers from 2000 to 5280, using a WHILE
num = 2000
while num <= 5280:
    print(num)
    num = num + 1

print(                                          )
    
# 3. Counting, the Dojo Way
# Pring integers 1 to 100. If divisible by print "Coding" instead. If by 10, also print "Dojo".
for d in range(1,101):
    if d % 10 == 0:
        print("Coding Dojo")
    elif d % 5 == 0:
        print("Coding")
    else:
        print(d)

# 4. Flexible Countdown
# Given lowNum, highNum, mult, print multiples of mult from highNum dow to lowNum, using a FOR. For (2,9, 3), print 9 6 3(on successive lines)
lowNum = 2
highNum = 9
mult = 3
for num in range (highNum,lowNum -1, -1):
    if num % mult == 0:
        print(num)