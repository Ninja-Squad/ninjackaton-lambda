package com.ninja_squad.training.lambda;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * A tweet
 * @author JB
 */
public final class Tweet {

    /**
     * The list of tweets to play with
     */
    public static final List<Tweet> TWEETS =
        Collections.unmodifiableList(Arrays.asList(new Tweet(1L,
                                                             "@clacote",
                                                             "#lambda are cool",
                                                             date("12/01/2012 10:00"),
                                                             2),
                                                   new Tweet(2L,
                                                             "@cedric_exbrayat",
                                                             "I love #lambda too",
                                                             date("12/01/2012 11:00"),
                                                             0),
                                                   new Tweet(3L,
                                                             "@jbnizet",
                                                             "Too bad we can't use #lambda in real projects yet",
                                                             date("12/01/2012 12:00"),
                                                             0),
                                                   new Tweet(4L,
                                                             "@agnes_crepet",
                                                             "I'm gonna have a #baby. Hormones rock!",
                                                             date("13/01/2012 14:00"),
                                                             1),
                                                   new Tweet(5L,
                                                             "@brian_goetz",
                                                             "#JDK8 is delayed to 2015 :-(",
                                                             date("14/01/2012 18:00"),
                                                             234),
                                                   new Tweet(6L,
                                                             "@jbnizet",
                                                             "Oh Nooooo! I want #lambda now! #suicide",
                                                             date("15/01/2012 22:00"),
                                                             0)));

    private static final Date date(String s) {
        try {
            return new SimpleDateFormat("dd/MM/yyyy HH:mm").parse(s);
        }
        catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }

    private final Long id;
    private final String sender;
    private final String text;
    private final Date date;
    private final int retweetCount;

    public Tweet(Long id, String sender, String text, Date date, int retweetCount) {
        this.id = id;
        this.sender = sender;
        this.text = text;
        this.date = date;
        this.retweetCount = retweetCount;
    }

    public Long getId() {
        return id;
    }

    public String getSender() {
        return sender;
    }

    public String getText() {
        return text;
    }

    public Date getDate() {
        return date;
    }

    public int getRetweetCount() {
        return retweetCount;
    }

    /**
     * Extracts the hash tags from the tweet
     * @return a set of hash tags, with the leading <code>#</code>
     */
    public Set<String> getHashTags() {
        return Arrays.stream(text.split("[\\s.,;:]")).filter(s -> s.startsWith("#")).collect(Collectors.toSet());
    }

    /**
     * Tests if the given hash tag is contained into the tweet
     * @param hashTag a hash tag, with a leading <code>#</code>
     * @return
     */
    public boolean containsHashTag(String hashTag) {
        return text.contains(hashTag);
    }

    @Override
    public String toString() {
        return "Tweet{" +
               "id=" + id +
               ", sender='" + sender + '\'' +
               ", text='" + text + '\'' +
               ", date=" + date +
               ", retweetCount=" + retweetCount +
               '}';
    }
}
