FROM jenkins/jenkins:lts

# 명시적으로 --prefix=/jenkins 붙여서 ENTRYPOINT 재정의
ENTRYPOINT ["java", "-jar", "/usr/share/jenkins/jenkins.war", "--prefix=/jenkins"]