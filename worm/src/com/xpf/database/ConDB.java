package com.xpf.database;

import java.sql.*;

public class ConDB 
{
	private String dbUrl = "jdbc:mysql://127.0.0.1:3306/worm";
	private String dbUsr = "root";
	private String dbPwd = "123456";
	
	public Connection getCon()
	{
		Connection conn = null;
		
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection(dbUrl, dbUsr, dbPwd);
			
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return conn;
	}
	
	public void toClose(ResultSet rs, PreparedStatement ps, Connection conn)
	{
		try
		{
			if(rs != null)
			{
				rs.close();
			}
			
			if(ps != null)
			{
				ps.close();
			}
			
			if(conn != null)
			{
				conn.close();
			}
		}catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}
