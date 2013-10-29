var quizz = {
    title: 'Test your Lambda knowledge',
    description: 'This quizz will test your knowledge about the JDK8 new awesome feature : Lambda!',
    questions: [
        {
            type: 'checkbox',
            text: 'Which of the following are correct lambda expressions?',
            answers: [
                {
                    text: '(int x, int y) -> x + y',
                    correct: true
                },
                {
                    text: '(String s) -> { System.out.println(s); }',
                    correct: true
                },
                {
                    text: '() -> "Hello"',
                    correct: true
                },
                {
                    text: '(s1, s2) -> s1.compareToIgnoreCase(s2)',
                    correct: true
                }
            ]
        },
        {
            type: 'checkbox',
            text: 'Easy? Let\'s try these expressions.',
            answers: [
                {
                    text: '() -> () -> "hi"',
                    correct: true
                },
                {
                    text: 'flag ? (() -> "ninja") : (() -> "squad")',
                    correct: true
                },
                {
                    text: '(a,) -> "Hello"',
                    correct: false
                },
                {
                    text: 'Integer::parseInt',
                    correct: true
                }
            ]
        },
        {
            type: 'radio',
            text: 'A lambda is an implementation of :',
            answers: [
                {
                    text: 'Any interface',
                    correct: false
                },
                {
                    text: 'An anonymous inner class',
                    correct: false
                },
                {
                    text: 'A functional interface',
                    correct: true
                }
            ]
        },
        {
            type: 'checkbox',
            text: 'How are functional interfaces so special?',
            answers: [
                {
                    text: 'They only have abstract methods',
                    correct: false
                },
                {
                    text: 'They must have been annotated with @FunctionalInterface',
                    correct: false
                },
                {
                    text: 'They can only have one abstract method',
                    correct: true
                }
            ]
        },
        {
            type: 'checkbox',
            text: 'What\'s the role of the new package `java.util.function`?',
            answers: [
                {
                    text: 'Providing a new Date API',
                    correct: false
                },
                {
                    text: 'Containing the new class Lambda.java',
                    correct: false
                },
                {
                    text: 'Providing useful functional interfaces',
                    correct: true
                }
            ]
        },
        {
            type: 'checkbox',
            text: 'Why is there a compilation error for this code ?\n\n `int sum = 0;` \n\n`list.forEach(e -> { sum += e.size(); });`',
            answers: [
                {
                    text: 'The lambda expression is incorrect',
                    correct: false
                },
                {
                    text: 'There is no forEach method on List',
                    correct: false
                },
                {
                    text: 'sum is not final',
                    correct: true
                }
            ]
        },
        {
            type: 'radio',
            text: 'Default methods must have a body',
            answers: [
                {
                    text: 'True',
                    correct: true
                },
                {
                    text: 'False',
                    correct: false
                }
            ]
        },
        {
            type: 'radio',
            text: 'Default methods are inherited',
            answers: [
                {
                    text: 'True',
                    correct: true
                },
                {
                    text: 'False',
                    correct: false
                }
            ]
        },
        {
            type: 'radio',
            text: 'Default methods can be overriden',
            answers: [
                {
                    text: 'True',
                    correct: true
                },
                {
                    text: 'False',
                    correct: false
                }
            ]
        },
        {
            type: 'checkbox',
            text: 'What are the new default methods available for the Collection interface?',
            answers: [
                {
                    text: 'spliterator()',
                    correct: true
                },
                {
                    text: 'stream()',
                    correct: true
                },
                {
                    text: 'parallelStream()',
                    correct: true
                },
                {
                    text: 'skip(int i)',
                    correct: false
                },
                {
                    text: 'removeIf(Predicate filter)',
                    correct: true
                },
                {
                    text: 'map(Function mapper)',
                    correct: false
                },
                {
                    text: 'forEach(Consumer action)',
                    correct: true
                }
            ]
        },
        {
            type: 'checkbox',
            text: 'What are the new default methods available for the List interface?',
            answers: [
                {
                    text: 'sort()',
                    correct: true
                },
                {
                    text: 'replaceAll()',
                    correct: true
                },
                {
                    text: 'reverse()',
                    correct: false
                }
            ]
        },
        {
            type: 'radio',
            text: 'You can create a `Stream` on any collection',
            answers: [
                {
                    text: 'True',
                    correct: true
                },
                {
                    text: 'False',
                    correct: false
                }
            ]
        },
        {
            type: 'radio',
            text: 'You can call the same methods on a `stream` and a `parallelStream`',
            answers: [
                {
                    text: 'True',
                    correct: true
                },
                {
                    text: 'False',
                    correct: false
                }
            ]
        },
        {
            type: 'radio',
            text: 'Parallelism relies on the Fork/Join framework',
            answers: [
                {
                    text: 'True',
                    correct: true
                },
                {
                    text: 'False',
                    correct: false
                }
            ]
        },
        {
            type: 'checkbox',
            text: 'What are the methods provided by the Stream interface?',
            answers: [
                {
                    text: 'collect(Collector collector)',
                    correct: true
                },
                {
                    text: 'find()',
                    correct: false
                },
                {
                    text: 'count()',
                    correct: true
                },
                {
                    text: 'flatMap(Function flatMapper)',
                    correct: true
                },
                {
                    text: 'limit()',
                    correct: true
                }
            ]
        },
        {
            type: 'radio',
            text: 'There are streams for primitives',
            answers: [
                {
                    text: 'True',
                    correct: true
                },
                {
                    text: 'False',
                    correct: false
                }
            ]
        },
        {
            type: 'radio',
            text: 'Streams can operate lazily on infinite sources',
            answers: [
                {
                    text: 'True',
                    correct: true
                },
                {
                    text: 'False',
                    correct: false
                }
            ]
        },
        {
            type: 'checkbox',
            text: 'What are the methods provided by the Collectors class?',
            answers: [
                {
                    text: 'counting()',
                    correct: true
                },
                {
                    text: 'groupingBy(Function classifier)',
                    correct: true
                },
                {
                    text: 'averagingInt(Function mapper)',
                    correct: true
                },
                {
                    text: 'minBy(Comparator comparator)',
                    correct: true
                },
                {
                    text: 'toArray()',
                    correct: false
                },
                {
                    text: 'toList()',
                    correct: true
                }
            ]
        }
    ]
};
angular.module("example-quizz", ['quizz', 'btford.markdown', 'ngAnimate']);
angular.module("example-quizz").constant('quizz', quizz);

var quizzWithoutPreviousButton = angular.extend({}, quizz);
quizzWithoutPreviousButton.options = {
    showPrevious: false
};
angular.module("example-quizz").constant('quizzWithoutPreviousButton', quizzWithoutPreviousButton);
