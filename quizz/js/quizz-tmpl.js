angular.module('quizz', ['controllers-quizz', 'templates-quizz']);

angular.module("controllers-quizz", []).controller('QuizzCtrl', ['$scope', '$window', '$injector', function($scope, $window, $injector) {
    $scope.started = false;
    $scope.finished = false;
    $scope.resultSelector  = 'all';

    var defaultQuizz = {
        options: {
            showPrevious: true
        }
    };

    $scope.initWithConstant = function(constant) {
        $scope.init($injector.get(constant));
    };

    $scope.init = function(quizz) {
        $scope.quizz = angular.extend({}, defaultQuizz, quizz);
        $scope.started = false;
        $scope.finished = false;
        $scope.currentQuestion = null;
        $scope.resultFilter = $scope.allResultFilter;
    };

    $scope.start = function() {
        $scope.started = true;
        $scope.currentQuestion = $scope.quizz.questions[0];
    };

    function questionIndex() {
        return $scope.quizz.questions.indexOf($scope.currentQuestion);
    }

    function quizzLength() {
        return $scope.quizz.questions.length;
    }

    $scope.questionIndex = questionIndex;

    $scope.questionOddity = function() {
        return questionIndex() % 2 == 0 ? 'even' : 'odd';
    };

    $scope.hasNext = function() {
        return questionIndex() < quizzLength() - 1;
    };

    $scope.hasPrevious = function() {
        return questionIndex() > 0;
    };

    $scope.showNext = $scope.hasNext;

    $scope.showPrevious = function() {
        return $scope.hasPrevious() && $scope.quizz.options.showPrevious;
    };

    $scope.next = function() {
        $scope.currentQuestion = $scope.quizz.questions[questionIndex() + 1];
    };

    $scope.previous = function() {
        $scope.currentQuestion = $scope.quizz.questions[questionIndex() - 1];
    };

    $scope.finish = function() {
        $scope.currentQuestion = null;
        $scope.finished = true;
    };

    function isAnswerCorrect(question) {
        if (question.type == 'radio') {
            return question.selectedAnswer && question.selectedAnswer.correct;
        }
        else if (question.type == 'checkbox') {
            return question.answers.every(function(answer) {
                return ((answer.correct && answer.checked) || (!answer.correct && !answer.checked));
            });
        }
        else if (question.type == 'free') {
            return question.typedAnswer && question.answers.indexOf(question.typedAnswer.trim()) >= 0;
        }
        else {
            return false;
        }
    }

    $scope.isAnswerCorrect = isAnswerCorrect;

    $scope.getScore = function() {
        return $scope.quizz.questions.filter(isAnswerCorrect).length;
    };

    $scope.isAnswerSelected = function(question, answer) {
        if (question.type == 'radio') {
            return question.selectedAnswer === answer;
        }
        else {
            return answer.checked;
        }
    };

    $scope.allResultFilter = function(question) {
        return true;
    };

    $scope.errorsOnlyResultFilter = function(question) {
        return !isAnswerCorrect(question);
    };
}]);
/*
 * angular-markdown-directive v0.1.0
 * (c) 2013 Brian Ford http://briantford.com,
 * modified by JB Nizet to avoid exceptions on null and undefined values
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', []).
    directive('btfMarkdown', function () {
        var converter = new Showdown.converter();
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                if (attrs.btfMarkdown) {
                    scope.$watch(attrs.btfMarkdown, function (newVal) {
                        var html = newVal ? converter.makeHtml(newVal) : '';
                        element.html(html);
                    });
                } else {
                    var html = converter.makeHtml(element.text());
                    element.html(html);
                }
            }
        };
    });

angular.module('templates-quizz', ['templates/Quizz.html']);

angular.module("templates/Quizz.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/Quizz.html",
    "<div class=\"quizz-intro jumbotron\" ng-show=\"!started\">\n" +
    "    <h1>{{ quizz.title }}</h1>\n" +
    "    <p btf-markdown=\"quizz.description\"></p>\n" +
    "    <button class=\"btn btn-primary btn-large quizz-start-button\" ng-click=\"start()\">Start</button>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"quizz-question\" ng-show=\"started && !finished\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-2 col-sd-12 row text-center\">\n" +
    "            <h1 class=\"col-md-12 col-xs-6\">{{ questionIndex() + 1 }} / {{ quizz.questions.length }}</h1>\n" +
    "            <div class=\"col-md-12 col-xs-6\">\n" +
    "                <div class=\"quizz-question-sign-container\">\n" +
    "                    <div class=\"quizz-question-sign-{{ questionOddity() }}\">\n" +
    "                        <span class=\"glyphicon glyphicon-question-sign\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-10\">\n" +
    "            <h4 class=\"well\" btf-markdown=\"currentQuestion.text\"></h4>\n" +
    "            <form role=\"form\" class=\"well\">\n" +
    "                <div class=\"form-group\" ng-show=\"currentQuestion.type == 'radio'\">\n" +
    "                    <label class=\"radio\" ng-repeat=\"answer in currentQuestion.answers\">\n" +
    "                        <input type=\"radio\" ng-model=\"currentQuestion.selectedAnswer\" ng-value=\"answer\"/>\n" +
    "                        {{ answer.text }}\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-show=\"currentQuestion.type == 'checkbox'\">\n" +
    "                    <label class=\"checkbox\" ng-repeat=\"answer in currentQuestion.answers\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"answer.checked\"/>\n" +
    "                        {{ answer.text }}\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\" ng-show=\"currentQuestion.type == 'free'\">\n" +
    "                    <input type=\"text\" ng-model=\"currentQuestion.typedAnswer\" placeholder=\"Your answer\" class=\"form-control\"/>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "\n" +
    "            <div class=\"progress progress-striped\">\n" +
    "                <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" style=\"width: {{ questionIndex() * 100 / quizz.questions.length }}%;\"></div>\n" +
    "            </div>\n" +
    "\n" +
    "            <ul class=\"pager\">\n" +
    "                <li class=\"previous\" ng-show=\"showPrevious()\" ng-click=\"previous()\">\n" +
    "                    <a class=\"quizz-previous-button\" href=\"\">&larr; Previous</a>\n" +
    "                </li>\n" +
    "                <li class=\"next\" ng-show=\"showNext()\" ng-click=\"next()\">\n" +
    "                    <a class=\"quizz-next-button\" href=\"\">Next &rarr;</a>\n" +
    "                </li>\n" +
    "                <li class=\"next\" ng-show=\"!hasNext()\" ng-click=\"finish()\">\n" +
    "                    <a class=\"quizz-finish-button\" href=\"\">Finish &rarr;</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"quizz-result\" ng-show=\"finished\">\n" +
    "    <h1>Your score: {{ (getScore() * 100 / quizz.questions.length) | number:0}} % ({{ getScore() }} / {{ quizz.questions.length }})</h1>\n" +
    "\n" +
    "    <ul class=\"nav nav-pills\">\n" +
    "        <li ng-class=\"{active: resultFilter == allResultFilter}\">\n" +
    "            <a href=\"\" ng-click=\"resultFilter = allResultFilter\">All</a>\n" +
    "        </li>\n" +
    "        <li ng-class=\"{active: resultFilter == errorsOnlyResultFilter}\">\n" +
    "            <a href=\"\" ng-click=\"resultFilter = errorsOnlyResultFilter\">Errors only</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <hr/>\n" +
    "\n" +
    "    <div ng-repeat=\"question in quizz.questions | filter:resultFilter\" class=\"quizz-result-question\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-2 text-center\">\n" +
    "                <span class=\"glyphicon glyphicon-ok-circle quizz-correct\" ng-show=\"isAnswerCorrect(question)\"></span>\n" +
    "                <span class=\"glyphicon glyphicon-remove-circle quizz-incorrect\" ng-show=\"!isAnswerCorrect(question)\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-10\">\n" +
    "                <div class=\"well\" btf-markdown=\"question.text\"></div>\n" +
    "                <table class=\"table\" ng-show=\"['radio', 'checkbox'].indexOf(question.type) >= 0\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <th class=\"quizz-tick\">Yours</th>\n" +
    "                        <th class=\"quizz-tick\">Correct</th>\n" +
    "                        <th></th>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                    <tr ng-repeat=\"answer in question.answers\">\n" +
    "                        <td class=\"quizz-tick\">\n" +
    "                            <span class=\"glyphicon glyphicon-ok\" ng-show=\"isAnswerSelected(question, answer) && answer.correct\"></span>\n" +
    "                            <span class=\"glyphicon glyphicon-remove\" ng-show=\"isAnswerSelected(question, answer) && !answer.correct\"></span>\n" +
    "                        </td>\n" +
    "                        <td class=\"quizz-tick\">\n" +
    "                            <span class=\"glyphicon glyphicon-ok\" ng-show=\"answer.correct\"></span>\n" +
    "                        </td>\n" +
    "                        <td>{{ answer.text }}</td>\n" +
    "                    </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "                <div ng-show=\"question.type == 'free'\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-2\">\n" +
    "                            <strong>Yours:</strong>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-10 quizz-free-yours\">\n" +
    "                            <span class=\"glyphicon glyphicon-ok\" ng-show=\"isAnswerCorrect(question)\"> </span>\n" +
    "                            <span class=\"glyphicon glyphicon-remove\" ng-show=\"!isAnswerCorrect(question)\"> </span>\n" +
    "                            {{ question.typedAnswer }}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row quizz-free-correct\">\n" +
    "                        <div class=\"col-xs-2\"><strong>Correct:</strong></div>\n" +
    "                        <div class=\"col-xs-10\">\n" +
    "                            <ul class=\"unstyled\">\n" +
    "                                <li ng-repeat=\"answer in question.answers\"><span class=\"glyphicon glyphicon-ok\"></span> {{ answer }}</li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"quizz-explanation\" ng-show=\"question.explanation\">\n" +
    "                    <h2>Explanation</h2>\n" +
    "                    <div btf-markdown=\"question.explanation\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <hr/>\n" +
    "    </div>\n" +
    "</div>");
}]);
