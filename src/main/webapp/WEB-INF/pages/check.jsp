<%@ taglib prefix="spring" uri="http://www.springframework.org/tags/form" %>
<%--
  Created by IntelliJ IDEA.
  User: Max
  Date: 16.07.2017
  Time: 15:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <spring:form modelAttribute="userFromServer" method="post" action="/pixellearmus/begin/check">
        <spring:input path="name"/>
        <spring:input path="password"/>
        <spring:button>check user</spring:button>
    </spring:form>
</body>
</html>


 <button type="button" style=<%=abc%>> Click Me!</button>
