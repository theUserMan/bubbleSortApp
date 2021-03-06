# Bubble up lesser element
def bubbleUp(arr, cur, end, ix):
    for i in range(end-1,cur-1,-1):
        newArr = [a for a in arr[ix][0].split()]
        if int(newArr[i+1]) < int(newArr[i]):
            tmp = newArr[i+1]
            newArr[i+1] = newArr[i]
            newArr[i] = tmp
            arr += [(" ".join(newArr),i)]
            ix += 1
    return ix

# Sort the list
def bubbleSort(arr, cur):
    end = len(arr[0][0].split())-1
    ix = 0
    for i in range(end):
        ix = bubbleUp(arr,i,end,ix)

# Main
def bubbleMain(inputArr):
    arr = [(inputArr,-2)]
    size = len(inputArr.split())

    if size>1 and size<9:
        bubbleSort(arr,0)

    srtdArr = [int(a) for a in arr[len(arr)-1][0].split()]
    if srtdArr == sorted(srtdArr):
        return arr
    else:
        return ""