function HowManyCamelCases(str)
{
    compteur = 0;
    for (i = 0; i < str.length; i++)
    {
        if (str[i] == str[i].toUpperCase())
            compteur += 1;
    }
    return compteur;
}

console.log(HowManyCamelCases("MaPhraseAUneMajusculeAChaqueMort"));
