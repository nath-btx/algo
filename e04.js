// arr est l'array qu'on test
// x la lettre qu'on cherche
// renvoi compteur 

// OK
function Count(arr, x)
{
    compteur = 0;
    for (i = 0;i < arr.length; i++)
    {
        if (arr[i] == x)
            compteur ++;
    }
    return compteur;
}

// Valeurs test
a = [0,1,2,3,4,5,6,7,8,9];
b = [1,1,1];
c = [1,1,3,4,2,1,3,4,1];
d = [9,8,7,6,5,4,3,2,1,0];
x = 1;

// console.log(Count(a,1));
// console.log(Count(b,1));
// console.log(Count(c,1));

// temp -> somme des valeurs de l'array
// arr.length -> nombre de valeurs dans l'array
// return temp/arr.length

// OK
function Average(arr)
{
    temp = 0;
    for (i = 0; i < arr.length; i++)
    {
        temp += arr[i];
    }
    return temp/arr.length;
}

// console.log(Average(a));
// console.log(Average(b));
// console.log(Average(c));

// OK
function Min(arr)
{
    temp = arr[0];
    for (i = 0; i < arr.length; i++)
    {
        if (temp > arr[i])
            temp = arr[i]
    }
    return temp;
}

// console.log(Min(a));
// console.log(Min(b));
// console.log(Min(c));
// console.log(Min(d));

// OK
function Max(arr)
{
    temp = arr[0];
    for (i = 0; i < arr.length; i++)
    {
        if (temp < arr[i])
            temp = arr[i]
    }
    return temp;
}

// console.log(Max(a));
// console.log(Max(b));
// console.log(Max(c));
// console.log(Max(d));

// OK
function Shift(arr)
{
    temp = arr[0];
    for (i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i+1]
    }
    arr[arr.length - 1] = temp;
    return arr;
}

// console.log(a);
// console.log(Shift(a));
// console.log(c);
// console.log(Shift(c));

// OK
function Diff(arr)
{
    return Max(arr) - Min(arr);
}

console.log(Diff(d));