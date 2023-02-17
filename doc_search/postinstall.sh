#!/bin/env bash

./node_modules/.bin/node-java-maven
cp ${HOME}"/.m2/repository/org/apache/ivy/ivy/2.5.1/ivy-2.5.1.jar" ./ivy-2.5.1.jar

java -jar ivy-2.5.1.jar \
     -dependency org.apache.tika tika-app 2.7.0 \
     -retrieve "lib/[artifact]-[revision](-[classifier]).[ext]" \
     -confs default
