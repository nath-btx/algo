variables : str : String
            i, compteur : Int

function HowManyCamelCases(String)
{
    for (i; i < str.length(); i++)
    {
        if (str[i] == str[i].toUpperCase())
            compteur += 1;
    }
    return compteur;
}
