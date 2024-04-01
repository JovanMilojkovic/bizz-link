FROM openjdk:11
ENV SPRING_PROFILES_ACTIVE=prod
COPY target/codecool-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]