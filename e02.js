function Pangram(str) {
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    i = 0;
 
    for (j = 0; j < str.length; j++)
    {
        if (alphabet[i] == str[j].toLowerCase())
        {
            i++;
            j = 0;
        }
        if (i == 26)
            return true
    }
    return false
    
}

console.log(Pangram("The quick brown fox jumps over the lazy dog"));
console.log(Pangram("Hello Efrei"));
console.log(Pangram("Monsieur Jack, vous dactylographiez bien mieux que Wolf"))
console.log(Pangram("Monsieur Jack, vous dactylographiez bien mieux que olf"))
console.log(Pangram("Un quetzal réfugié en kimono achète dix pyjamas verts sur le Web."))

