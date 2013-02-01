ninjackaton-lambda
==================

Ninjackaton Lambda

# TP

Une classe Tweet vous est fournie. Cette classe représente un Tweet, et contient une constante ALL qui contient 
une list de Tweets. Le principe de l'exercice sera de manipuler cette liste de tweets afin d'en extraire des 
informations.

Etape 1: Ecrivez sur la sortie standard, sans utiliser de boucle, la liste des dates des tweets.

Etape 2: Faites la même chose, sans appeler `getDate()` ni `System.out.println()`.

Etape 3: Extrayez une `List<String>` qui contient les senders des tweets

Etape 4: Extrayez une `List<String>` qui contient les senders des tweets, sans duplicata

Etape 5: Extrayez une `List<String>` qui contient les senders des tweets, sans duplicata, triés par ordre alphabétique

Etape 6: Extrayez une `List<Tweet>` qui contient les tweets contenant le hashtag #lambda, 

Etape 7: Extrayez une `List<Tweet>` qui contient les tweets contenant le hashtag #lambda, triés par sender puis par date

Etape 8: Extrayez un `Set<String>` qui contient l'ensemble des hashtags des tweets

Etape 9: Créez une `Map<String, List<Tweet>>` qui contient, pour chaque sender, les tweets envoyés par ce sender

Etape 10: Extrayez deux listes: les tweets qui contiennent le hashtag #lambda, et ceux qui ne les contiennent pas.

Etape 11: Calculez le total et la moyenne du nombre de caractères des textes des tweets. Hints:
 - Créez une class Stats
 - Utilisez `stream.collect(..., ..., ...)` ou `stream.map(...).reduce(...)`

Etape 12: Faites la même chose, mais de manière parallèle.
