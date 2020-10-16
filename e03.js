function Marsos(str){
    i = 0;
    compteur = 0;
    comparateur = "SOS";
    while (i < str.length)
    {
        for (j = 0; j < comparateur.length; j++)
        {
            if (comparateur[j] != str[i])
                compteur ++;
            i++;
        }
    }
    return compteur;
}

console.log(Marsos("SOFSOSSISSOW"))
console.log(Marsos("SOSSOFSOLSOLSOLSOLSOL"))
console.log(Marsos("RRRRRRRRRRRRRRR"))