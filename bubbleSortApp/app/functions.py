# Test the algorithm
def testSort(arr,cur):
    return arr[cur] == sorted(arr[cur])

# Bubble up lesser element
def bubbleUp(arr, cur, end):
    for i in range(end,cur,-1):
        if arr[cur-1][i] < arr[cur-1][i-1]:
            arr[cur] += [i]
            arr[cur][i-1] = arr[cur-1][i]
            arr[cur][i] = arr[cur-1[i-1]]

# Sort the list
def bubbleSort(arr,cur):
    numElts = len(arr[cur])
    while not(cur == numElts):
        arr += [arr[cur],-1]
        cur += 1
        bubbleUp(arr,cur,numElts-1)
    return arr

# Main
def bubbleMain(arr):
    cur = 0
    arr = [[a for a in arr.split()],0]
    print("Sorting "+str(arr[0]))

    if len(arr[0])>1 and len(arr[0])<9:
        arr = bubbleSort(arr,cur)

    if testSort(arr[len(arr[0])-1], cur):
        return arr
    else:
        return ""