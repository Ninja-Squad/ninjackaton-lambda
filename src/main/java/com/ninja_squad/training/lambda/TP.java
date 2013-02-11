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
     * Extrayez une List<String> qui contient les senders des tweets
     */
    public static void step1() {
        // TODO
    }

    /**
     * Faites la m�me chose, sans appeler getDate() ni System.out.println()
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
     * Extrayez une List<String> qui contient les senders des tweets, sans duplicata, tri�s par ordre alphab�tique
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
     * Extrayez une List<Tweet> qui contient les tweets contenant le hashtag #lambda, tri�s par sender puis par date
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
     * Cr�ez une Map<String, List<Tweet>> qui contient, pour chaque sender, les tweets envoy�s par ce sender
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

    public static class Stats {
        // TODO

        public int getAverage() {
            // TODO
            return 0;
        }

        public int getTotal() {
            // TODO
            return 0;
        }
    }

    /**
     * Calculez le total et la moyenne du nombre de caract�res des textes des tweets.
     * Hints:
     *     Cr�ez une class Stats
     *     Utilisez stream.collect(..., ..., ...) ou stream.map(...).reduce(...)
     */
    public static Stats step11() {
        return null;
    }

    /**
     * Faites la m�me chose, mais de mani�re parall�le.
     */
    public static Stats step12() {
        return null;
    }
}
