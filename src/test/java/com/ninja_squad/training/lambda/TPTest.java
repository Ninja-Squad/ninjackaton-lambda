package com.ninja_squad.training.lambda;

import org.junit.Test;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import static org.junit.Assert.*;

/**
 * Tests unitaires du TP Lambda
 * @author JB
 */
public class TPTest {

    private void executeWithWrappedSysout(Runnable block) {
        PrintStream original = System.out;
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            PrintStream out = new PrintStream(baos) {
                @Override
                public void println(Object o) {
                    super.println(o);
                    original.println(o);
                }
            };
            System.setOut(out);
            block.run();
            String s = new String(baos.toByteArray());
            assertTrue(s.startsWith("Thu Jan 12"));
        }
        finally {
            System.setOut(original);
        }
    }

    @Test
    public void step1() {
        executeWithWrappedSysout(TP::step1);
    }

    @Test
    public void step2() {
        executeWithWrappedSysout(TP::step2);
    }

    @Test
    public void step3() {
        List<String> senders = TP.step3();

        assertEquals(Arrays.asList("@clacote",
                                   "@cedric_exbrayat",
                                   "@jbnizet",
                                   "@agnes_crepet",
                                   "@brian_goetz",
                                   "@jbnizet"),
                     senders);
    }

    @Test
    public void step4() {
        List<String> senders = TP.step4();

        assertEquals(Arrays.asList("@clacote",
                                   "@cedric_exbrayat",
                                   "@jbnizet",
                                   "@agnes_crepet",
                                   "@brian_goetz"),
                     senders);
    }

    @Test
    public void step5() {
        List<String> senders = TP.step5();

        assertEquals(Arrays.asList("@agnes_crepet",
                                   "@brian_goetz",
                                   "@cedric_exbrayat",
                                   "@clacote",
                                   "@jbnizet"),
                     senders);
    }

    @Test
    public void step6() {
        List<Tweet> lambdaTweets = TP.step6();

        assertEquals(lambdaTweets.stream().map(Tweet::getId).collect(Collectors.toList()),
                     Arrays.asList(1L, 2L, 3L, 6L));
    }

    @Test
    public void step7() {
        List<Tweet> lambdaTweets = TP.step7();

        assertEquals(lambdaTweets.stream().map(Tweet::getId).collect(Collectors.toList()),
                     Arrays.asList(2L, 1L, 3L, 6L));
    }

    @Test
    public void step8() {
        Set<String> hashTags = TP.step8();

        assertEquals(hashTags,
                     new HashSet<>(Arrays.asList("#baby", "#lambda", "#suicide", "#JDK8")));
    }

    @Test
    public void step9() {
        Map<String, List<Tweet>> tweetsBySender = TP.step9();

        assertEquals(Arrays.asList(5L),
                     tweetsBySender.get("@brian_goetz").stream().map(Tweet::getId).collect(Collectors.toList()));
        assertEquals(Arrays.asList(2L),
                     tweetsBySender.get("@cedric_exbrayat").stream().map(Tweet::getId).collect(Collectors.toList()));
        assertEquals(Arrays.asList(1L),
                     tweetsBySender.get("@clacote").stream().map(Tweet::getId).collect(Collectors.toList()));
        assertEquals(Arrays.asList(4L),
                     tweetsBySender.get("@agnes_crepet").stream().map(Tweet::getId).collect(Collectors.toList()));
        assertEquals(Arrays.asList(3L, 6L),
                     tweetsBySender.get("@jbnizet").stream().map(Tweet::getId).collect(Collectors.toList()));
    }

    @Test
    public void step10() {
        Map<Boolean, List<Tweet>> partition = TP.step10();
        Collection<Tweet> withLambda = partition.get(true);
        Collection<Tweet> withoutLambda = partition.get(false);

        assertEquals(Arrays.asList(1L, 2L, 3L, 6L),
                     withLambda.stream().map(Tweet::getId).collect(Collectors.toList()));
        assertEquals(Arrays.asList(4L, 5L),
                     withoutLambda.stream().map(Tweet::getId).collect(Collectors.toList()));
    }

    @Test
    public void step11() {
        TP.Stats stats = TP.step11();
        assertEquals(31, stats.getAverage());
        assertEquals(188, stats.getTotal());
    }


    @Test
    public void step12() {
        TP.Stats stats = TP.step12();
        assertEquals(31, stats.getAverage());
        assertEquals(188, stats.getTotal());
    }
}
