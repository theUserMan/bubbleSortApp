# Bubble up lesser element
def bubbleUp(arr, cur, end):
    for i in range(end-1,cur-1,-1):
        if arr[cur][0][i+1] < arr[cur][0][i]:
            arr += [[arr[cur][0],i]]
            arr[cur][0][i+1], arr[cur][0][i] = arr[cur][0][i], arr[cur][0][i+1]

# Sort the list
def bubbleSort(arr, cur):
    end = len(arr[cur][0])-1
    for i in range(end):
        bubbleUp(arr,i,end)

# Main
def bubbleMain(inputArr):
    arr = [[[int(a) for a in inputArr.split()],-1]]
    size = len(arr[0][0])

    if size>1 and size<9:
        bubbleSort(arr,0)

    if arr[size-2][0] == sorted(arr[0][0]):
        return arr
    else:
        return ""