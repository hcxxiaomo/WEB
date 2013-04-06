<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%@ page contentType="text/html;charset=utf-8" 
	import="java.io.*,java.awt.Image,java.awt.image.*,com.sun.image.codec.jpeg.*,java.sql.*,com.jspsmart.upload.*"%>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>



<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>

<%
				String dbUrl = "jdbc:mysql://localhost:3306/worm";
				String dbUsr = "root";
				String dbPwd = "123456";
				Connection conn = null;

				//以下为修改三个内容
	   
		   	     PreparedStatement statement_link = null;
			  	 PreparedStatement statement_imgurl = null;
	
    //request.setCharacterEncoding("utf-8");//尝试加的
	SmartUpload mySmartUpload = new SmartUpload();
	long file_size_max = 4000000;
	String fileName2 = "", ext = "", testvar = "";
	String url = "upload/"; //应保证在根目录中有此目录的存在（也就是说需要自己建立相应的文件夹）
	//初始化
	mySmartUpload.initialize(pageContext);
	//只允许上载此类文件
	

		
	try {
		mySmartUpload.setAllowedFilesList("jpg,gif,png.jpeg");//此处的文件格式可以根据需要自己修改
		//上载文件
		//mySmartUpload.setDeniedFilesList("cmd,asp,jsp,exe,run,sh");
		mySmartUpload.upload();
	} catch (Exception e) {
%>
<SCRIPT  type="text/javascript">
	alert("亲，不允许上传非图片类型文件");
	window.location = 'links_modified.jsp';
</script>
<%
	}
	
		String link = mySmartUpload.getRequest().getParameter("link");
  	 	String id = mySmartUpload.getRequest().getParameter("id");
  	   
  	    link = new String(link.getBytes("utf-8"),"utf-8");
		id = new String(id.getBytes("utf-8"),"utf-8");
	
	
	
	try {
	
	String filename=null;
	String dbext=null;
		com.jspsmart.upload.File myFile = mySmartUpload.getFiles().getFile(0);
		
	
			String myFileName = myFile.getFileName(); //取得上载的文件的文件名
			String dbFileName = myFile.getFileName().toString();
			//dbFileName = new String(dbFileName.getBytes("iso-8859-1"),"utf-8");//数据库中文件名
			ext = myFile.getFileExt(); //取得后缀名
 			dbext=  myFile.getFileExt();//数据库中后辍名
			int file_size = myFile.getSize(); //取得文件的大小 
			if(file_size !=0){
				String saveurl = "";
				if (file_size < file_size_max) {
							//更改文件名，取得当前上传时间的毫秒数值
							Calendar calendar = Calendar.getInstance();
							filename = String.valueOf(calendar.getTimeInMillis());
							saveurl = application.getRealPath("/") + url;
							saveurl += filename + "." + dbext; //保存路径
			
							myFile.saveAs(saveurl, SmartUpload.SAVE_PHYSICAL);
							out.print(saveurl);
			
			
							//out.println(dbsaveurl);
			// 				out.println("以下为id");				
			// 				out.println(id);
			// 				out.println("以下为名字");
			// 				out.println(dbFileName);
			// 				out.println("以下为扩展名");				
			// 				out.println(dbext);
	
					}
					String dbsaveurl = "/worm/"+url+filename + "." +dbext;//数据库中路径				
					String title_new = dbFileName.toString();
					String name_new = dbsaveurl.toString();
	
			   	    String sql_imgurl= "update worm_links set imgurl = '"+name_new+"' where id='"+id+"'";
					try {
						Class.forName("com.mysql.jdbc.Driver");
						conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
			   	     
						statement_imgurl = conn.prepareStatement(sql_imgurl);
						statement_imgurl.executeUpdate(sql_imgurl);
						
							} catch (Exception e) {
							e.printStackTrace();	}
 					}
 	
 				try {
 	
 	 				String sql_link = "update worm_links set link = '"+link+"' where id='"+id+"'";
					Class.forName("com.mysql.jdbc.Driver");
					conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
		   	     
					statement_link = conn.prepareStatement(sql_link);
					statement_link.executeUpdate(sql_link);

						} catch (Exception e) {
						e.printStackTrace();	}
 	
					 	response.sendRedirect("links.jsp");
					} catch (Exception e) {
						out.print(e.toString());
					}
%>
