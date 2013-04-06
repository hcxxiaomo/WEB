<%@ page contentType="text/plain; charset=UTF-8"%>
<%@ page language="java"%>
<%@ page import="java.sql.*"%>
<%@page import="com.mysql.jdbc.Driver"%>
<%!
    //查询数据库是否存在相同信息
    boolean hasSameValue(String name, String value) {
        boolean result = false;                 //保存检测结果
	
        String dbUrl = "jdbc:mysql://localhost:3306/worm";
    	String dbUsr = "root";
    	String dbPwd = "123456";
        
        String sql = "select * from worm_manage where " + name + " = ?";   //定义查询数据库的SQL语句
        Connection conn = null;                 //声明Connection对象
        PreparedStatement pstmt = null;         //声明PreparedStatement对象
        ResultSet rs = null;                    //声明ResultSet对象
        
        try {
    		Class.forName("com.mysql.jdbc.Driver");
    		conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
            pstmt = conn.prepareStatement(sql); //根据sql创建PreparedStatement
            pstmt.setString(1, value);          //设置参数
            rs = pstmt.executeQuery();          //执行查询，返回结果集

            //根据结果集是否存在决定查询结果
            if (rs.next()) {
                result = true;
            } else {
                result = false;
            }
            } catch (ClassNotFoundException e) {
    			e.printStackTrace();
    		} catch (SQLException e) {
    			e.printStackTrace();
    		}finally {
    			try {
    				if(rs != null) {
    					rs.close();
    					rs = null;
    				}
    				if(pstmt != null) {
    					pstmt.close();
    					pstmt = null;
    				}
    				if(conn != null) {
    					conn.close();
    					conn = null;
    				}
    			} catch (SQLException e) {
    				e.printStackTrace();
    			}
        }
        return result;
    }
%>
<%
    out.clear();                                    //清空当前的输出内容（空格和换行符）
    request.setCharacterEncoding("UTF-8");          //设置请求体字符编码格式为UTF-8

    String name = request.getParameter("name");     //获取name参数
    //String password = request.getParameter("password"); 
    String value = request.getParameter("value");   //获取value参数

    String info = null;                             //用于保存提示对象的名称

    //如果需要判断的是验证码，采用session方式验证
    if ("code".equals(name)) {
        String sessionCode = (String) session.getAttribute("_CODE_");   //获取session中保存的验证码
        //根据对比结果输出响应信息
        if (value != null && value.equals(sessionCode)) {
            out.print("0验证码正确。");
        } else {
            out.print("1验证码错误。");
        }
    } else {
        //根据name变量确定提示对象的名称
        if ("username".equals(name)) {
            info = "用户名";
        } else if ("password".equals(name)){
        	info = "密码";
        }

        //根据是否存在相同信息输出对应的响应
        if (hasSameValue(name, value)) {
            out.print("0该" + info + "正确，请继续。");
        } else {
            out.print("1该" + info + "错误，请重新输入。");
        }
    }
%>