package com.ninja_squad.training.lambda;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Le TP Lambda
 * @author JB
 */
public class TP {

    /**
     * Ecrivez les dates des tweets sur la sortie standard
     */
    public static void step1() {
        // TODO
    }

    /**
     * Faites la même chose, sans appeler getDate() ni System.out.println()
     */
    public static void step2() {
        // TODO
    }

    /**
     * Extrayez une List<String> qui contient les senders des tweets
     */
    public static List<String> step3() {
        // TODO
        return null;
    }

    /**
     * Extrayez une List<String> qui contient les senders des tweets, sans duplicata
     */
    public static List<String> step4() {
        // TODO
        return null;
    }

    /**
     * Extrayez une List<String> qui contient les senders des tweets, sans duplicata, triés par ordre alphabétique
     */
    public static List<String> step5() {
        // TODO
        return null;
    }

    /**
     * Extrayez une List<Tweet> qui contient les tweets contenant le hashtag #lambda
     */
    public static List<Tweet> step6() {
        // TODO
        return null;
    }

    /**
     * Extrayez une List<Tweet> qui contient les tweets contenant le hashtag #lambda, triés par sender puis par date
     */
    public static List<Tweet> step7() {
        // TODO
        return null;
    }

    /**
     * Extrayez un Set<String> qui contient l'ensemble des hash tags des tweets
     */
    public static Set<String> step8() {
        // TODO
        return null;
    }

    /**
     * Créez une Map<String, List<Tweet>> qui contient, pour chaque sender, les tweets envoyés par ce sender
     */
    public static Map<String, List<Tweet>> step9() {
        // TODO
        return null;
    }

    /**
     * Extrayez deux listes: les tweets qui contiennent le hash tag #lambda, et ceux qui ne les contiennent pas.
     */
    public static Map<Boolean, List<Tweet>> step10() {
        // TODO
        return null;
    }

    /**
     * Calculez le total du nombre de caractères des textes des tweets.
     * Hints:
     *     Utilisez un {@link java.util.stream.IntStream}
     */
    public static int step11() {
        // TODO
        return 0;
    }

    /**
     * Calculez la moyenne du nombre de caractères des textes des tweets.
     * Hints:
     *     Utilisez un {@link java.util.stream.IntStream}
     */
    public static int step12() {
        // TODO
        return 0;
    }

    /**
     * Même chose, mais en calculant manuellement la somme.
     * Hints:
     *     Utilisez stream.collect(..., ..., ...) ou stream.map(...).reduce(...)
     */
    public static int step13() {
        // TODO
        return 0;
    }

    /**
     * Faites la même chose, mais de manière parrallèle
     */
    public static int step14() {
        // TODO
        return 0;
    }
}
