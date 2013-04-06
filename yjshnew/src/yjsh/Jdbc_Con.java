package yjsh;
import java.sql.*;
public class Jdbc_Con
{
	String dbDriver = "com.mysql.jdbc.Driver"; 
	String strCon = "jdbc:mysql://localhost:3306/yjsh"; 
	String dbUsr = "root";
	String dbPwd = "123456";
	Connection con = null;
	ResultSet rs = null;
	Statement stmt = null;
	public Jdbc_Con()
	{
		try
		{
			Class.forName(dbDriver);
		}
		catch(java.lang.ClassNotFoundException e)
		{
			System.err.println("���ݿ������������ʧ�ܣ�con�쳣Ϊ��" + e.getMessage());
		}
		finally
		{
			System.out.println("����������سɹ�");
		}
	}
	public ResultSet executeQuery(String strSQL)
	{
		rs = null;
		try
		{
			con = //DriverManager.getConnection(strCon);
					DriverManager.getConnection(strCon, dbUsr, dbPwd);
			Statement stmt = con.createStatement();
			rs = stmt.executeQuery(strSQL);
			
		}
		catch(SQLException ex)
		{
			System.err.println("�������ݿ�ʧ���ˣ�rs�쳣Ϊ��" +ex.getMessage());
		}
		finally
		{
			System.out.println("���ݿ����ӳɹ�");
			
		}
		return rs;
	}
	
	public void executeUpdate(String strSQL)
	{
		try
		{
			con =  //DriverManager.getConnection(strCon);
					DriverManager.getConnection(strCon, dbUsr, dbPwd);
			stmt = con.createStatement();
			stmt.executeUpdate(strSQL);
		}
		catch(SQLException ex)
		{
			System.err.println("�������ݿ�ʧ���ˣ�stm�쳣Ϊ��" +ex.getMessage());
		}
	}

	 public String ex_chinese(String str)
     {
		 if(str==null)
		 {
				str  ="" ;
		 }
		 else
		 {
			   try
			   {
					 str = new String(str.getBytes("iso-8859-1"),"utf-8") ;
			   }
			   catch (Exception ex) 
			   {
					System.err.println("�쳣Ϊ��" +ex.getMessage());
			   }
		 }
		 return str ;
     }

	 public String gettime()
	 {
		String datestr =  "" ;
		try
		{
			java.text.DateFormat df = new java.text.SimpleDateFormat("yyyy��MM��dd�� HH��ss��") ;
			//java.util.Date date = new java.util.Date() ;
			datestr = df.format(new java.util.Date()) ;
		}
		catch (Exception ex)
		{
			System.err.println("�쳣Ϊ��" +ex.getMessage());
		}

		return datestr ;
	 }
	 
//	 public void DBclose(){
//		 try {
//			con.close();
//		} catch (SQLException e) {
//			// Auto-generated catch block
//			e.printStackTrace();
//		}
//	 }
	 public void closecon()
	 {
		 try{
		 if(rs!=null)
		 {
			 rs.close();
			 System.out.print("rs is close");
		 }
		 if(stmt!=null)
		 {
			 stmt.close();
			 System.out.print("stmt is close");
		 }
		 if(con!=null)
		 {
			 con.close();
			 System.out.print("con is close");
		 }
		 }catch(Exception e){
			 e.printStackTrace();
		 }
	 }

}