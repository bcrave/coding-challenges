from decimal import Decimal


def plus_minus(arr):
    positive = 0
    negative = 0
    zero = 0

    for num in arr:
        if num > 0:
            positive += 1
        elif num < 0:
            negative += 1
        else:
            zero += 1

    positive_decimal = Decimal(round((positive / len(arr)), 6))
    negative_decimal = Decimal(round((negative / len(arr)), 6))
    zero_decimal = round((zero / len(arr)), 6)

    return "{0:.6f}".format(positive_decimal), "{0:.6f}".format(negative_decimal), "{0:.6f}".format(zero_decimal)


print(plus_minus([-4, 3, -9, 0, 4, 1]))
print(plus_minus([1, 2, 3, -1, -2, -3, 0, 0]))
