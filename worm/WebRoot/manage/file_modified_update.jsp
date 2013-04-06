<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

<%@ page contentType="text/html;charset=utf-8" 
	import="java.io.*,java.awt.Image,java.awt.image.*,com.sun.image.codec.jpeg.*,java.sql.*,com.jspsmart.upload.*"%>
<%@page import="java.beans.Statement"%>
<%@page import="com.mysql.jdbc.Driver"%>



<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>



<%
			//以下为修改的部分
		//String title = request.getParameter("title").toString();
  	     //String name = request.getParameter("name").toString();
  	     //String newsimage = request.getParameter("newsimage").toString();
  	     //String content = request.getParameter("content1").toString();
  	     //String id = request.getParameter("id").toString();
  	     String id=session.getAttribute("id").toString();
  	    // title = new String(title.getBytes("iso-8859-1"),"utf-8");
  	    // name = new String(name.getBytes("iso-8859-1"),"utf-8");
		 //newsimage = new String(newsimage.getBytes("iso-8859-1"),"utf-8");
		 //content = new String(content.getBytes("iso-8859-1"),"utf-8");
		 //id = new String(id.getBytes("iso-8859-1"),"utf-8");

	
    //request.setCharacterEncoding("utf-8");//尝试加的
	SmartUpload mySmartUpload = new SmartUpload();
	long file_size_max = 4000000;
	String fileName2 = "", ext = "", testvar = "";
	String url = "upload/"; //应保证在根目录中有此目录的存在（也就是说需要自己建立相应的文件夹）
	//初始化
	mySmartUpload.initialize(pageContext);
	//只允许上载此类文件
	try {
		//mySmartUpload.setAllowedFilesList("jpg,gif");//此处的文件格式可以根据需要自己修改
		//上载文件
		mySmartUpload.setDeniedFilesList("cmd,asp,jsp,exe,run,sh");
		mySmartUpload.upload();
	} catch (Exception e) {
%>




<SCRIPT language=javascript>
	alert("不允许上传某些危险类型文件");
	window.location = 'file_modified.jsp';
</script>
<%
	}
	try {
	
	String filename=null;
	String dbext=null;
		com.jspsmart.upload.File myFile = mySmartUpload.getFiles().getFile(0);
		if (myFile.isMissing()) {
%>
<SCRIPT language=javascript>
	alert("请先选择要上传的文件");
	window.location = 'file_modified.jsp';
</script>
<%


	} else {
	
			String myFileName = myFile.getFileName(); //取得上载的文件的文件名
			String dbFileName = myFile.getFileName().toString();
			//dbFileName = new String(dbFileName.getBytes("iso-8859-1"),"utf-8");//数据库中文件名
			ext = myFile.getFileExt(); //取得后缀名
 			dbext=  myFile.getFileExt();//数据库中后辍名
			int file_size = myFile.getSize(); //取得文件的大小 
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
				out.println("以下为id");				
				out.println(id);
				out.println("以下为名字");
				out.println(dbFileName);
				out.println("以下为扩展名");				
				out.println(dbext);

				}
				String dbsaveurl = "/worm/"+url+filename + "." +dbext;//数据库中路径				
				String title_new = dbFileName.toString();
				String name_new = dbsaveurl.toString();
				out.println("title_new");				
				out.println(title_new);
				out.println("name_new");				
				out.println(name_new);				
		
				//title = new String(title.getBytes("iso-8859-1"), "utf-8");
				//name = new String(name.getBytes("iso-8859-1"), "utf-8");
				
				String dbUrl = "jdbc:mysql://localhost:3306/worm";
				String dbUsr = "root";
				String dbPwd = "123456";
				Connection conn = null;

				//以下为修改三个内容
	   
		   	     PreparedStatement statement_title = null;
			  	 PreparedStatement statement_name = null;
			  	

 				String sql_title = "update worm_file set title = '"+title_new+"' where id='"+id+"'";
		   	     String sql_name = "update worm_file set name = '"+name_new+"' where id='"+id+"'";
		   	     
		   	     
		   	     
				try {
					Class.forName("com.mysql.jdbc.Driver");
					conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
					//SimpleDateFormat df = new SimpleDateFormat(	"yyyy-MM-dd HH:mm:ss");//设置日期格式
					//String time = df.format(new Date());// new Date()为获取当前系统时间
// 				out.println(title);
// 				out.println(name);
// 				out.println(time);
					//String sql_add = "insert into worm_file (title,name,time) values('" +title+ "','" +name+ "','" +time+ "')";
			 	 
		   	     
					statement_title = conn.prepareStatement(sql_title);
					statement_title.executeUpdate(sql_title);
					statement_name = conn.prepareStatement(sql_name);
					statement_name.executeUpdate(sql_name);
					
						} catch (Exception e) {
						e.printStackTrace();	}
					 	
// 				String ret = "parent.HtmlEdit.focus();";
// 				ret += "var range = parent.HtmlEdit.document.selection.createRange();";
// 				ret += "range.pasteHTML('<img src=\""+ request.getContextPath() + "/upload/"+ name + "." + ext + "\">');";
// 				ret += "alert('上传成功！');";
// 				ret += "window.location='upload.jsp';";
// 				out.print("<script language=javascript>" + ret+ "</script>");
 	
					 	response.sendRedirect("file.jsp");
					 	

		}
	} catch (Exception e) {
		out.print(e.toString());
	}
%>
