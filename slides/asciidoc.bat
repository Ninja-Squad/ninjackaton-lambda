set PYTHON_HOME=D:\tools\python2.7.3
set ASCIIDOC_HOME=D:\tools\asciidoc-8.6.8

%PYTHON_HOME%\python %ASCIIDOC_HOME%\asciidoc.py -a data-uri -a linkcss! lambda.asciidoc
