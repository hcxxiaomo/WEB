package com.xpf.database.device;

import com.xpf.database.*;

import java.sql.*;

public class UpdateDev 
{
	private ConDB condb = new ConDB();
	
	public void Update(int key, Dev dev)
	{
		switch(key)
		{
		case 1:
			String sql = "insert into xpf_device (xpf_device_number, xpf_dev_name, xpf_dev_number, xpf_dev_property, xpf_dev_begintime, xpf_dev_endtime, xpf_dev_buytime, xpf_dev_dutypeople, xpf_dev_buymount, xpf_dev_nowmount, xpf_dev_lendmount, xpf_dev_inmount, xpf_dev_mountdanwei, xpf_dev_location, xpf_dev_belongto, xpf_dev_other, xpf_dev_time) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			AddDev(sql, dev);
			break;
		case 2:
			AlterDev(dev);		
			break;
		case 3:
			DeleteDev(dev);
			break;
		}
	}
	
	private void AddDev(String sql, Dev dev)
	{
		Connection conn = null;
		PreparedStatement ps = null;
		
		try
		{
			conn = condb.getCon();
			ps = conn.prepareStatement(sql);
			
			ps.setString(1, dev.getXpf_device_number());
			ps.setString(2, dev.getXpf_dev_name());
			ps.setString(3, dev.getXpf_dev_number());
			ps.setString(4, dev.getXpf_dev_property());
			ps.setString(5, dev.getXpf_dev_begintime());
			ps.setString(6, dev.getXpf_dev_endtime());
			ps.setString(7, dev.getXpf_dev_buytime());
			ps.setString(8, dev.getXpf_dev_dutypeople());
			ps.setInt(9, dev.getXpf_dev_buymount());
			ps.setInt(10, dev.getXpf_dev_nowmount());
			ps.setInt(11, dev.getXpf_dev_lendmount());
			ps.setInt(12, dev.getXpf_dev_inmount());
			ps.setString(13, dev.getXpf_dev_mountdanwei());
			ps.setString(14, dev.getXpf_dev_location());
			ps.setString(15, dev.getXpf_dev_belongto());
			ps.setString(16, dev.getXpf_dev_other());
			ps.setString(17, dev.getXpf_dev_time());
			
			ps.execute();
		}catch(Exception e)
		{
			e.printStackTrace();
		}finally
		{
			condb.toClose(null, ps, conn);
		}
	}
	
	private void AlterDev(Dev dev)
	{
		Connection conn = null;
		String sql1 = "update xpf_device set xpf_dev_name = '" +dev.getXpf_dev_name()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql2 = "update xpf_device set xpf_dev_number = '" +dev.getXpf_dev_number()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql3 = "update xpf_device set xpf_dev_property = '" +dev.getXpf_dev_property()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql4 = "update xpf_device set xpf_dev_begintime = '" +dev.getXpf_dev_begintime()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql5 = "update xpf_device set xpf_dev_endtime = '" +dev.getXpf_dev_endtime()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql6 = "update xpf_device set xpf_dev_buytime = '" +dev.getXpf_dev_buymount()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql7 = "update xpf_device set xpf_dev_dutypeople = '" +dev.getXpf_dev_dutypeople()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql8 = "update xpf_device set xpf_dev_buymount = " +dev.getXpf_dev_buymount()+ " where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql9 = "update xpf_device set xpf_dev_nowmount = " +dev.getXpf_dev_nowmount()+ " where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql10 = "update xpf_device set xpf_dev_lendmount = " +dev.getXpf_dev_lendmount()+ " where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql11 = "update xpf_device set xpf_dev_inmount = " +dev.getXpf_dev_inmount()+ " where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql12 = "update xpf_device set xpf_dev_mountdanwei = '" +dev.getXpf_dev_mountdanwei()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql13 = "update xpf_device set xpf_dev_location = '" +dev.getXpf_dev_location()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql14 = "update xpf_device set xpf_dev_belongto = '" +dev.getXpf_dev_belongto()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		String sql15 = "update xpf_device set xpf_dev_other = '" +dev.getXpf_dev_other()+ "' where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		
		PreparedStatement ps1 = null;
		PreparedStatement ps2 = null;
		PreparedStatement ps3 = null;
		PreparedStatement ps4 = null;
		PreparedStatement ps5 = null;
		PreparedStatement ps6 = null;
		PreparedStatement ps7 = null;
		PreparedStatement ps8 = null;
		PreparedStatement ps9 = null;
		PreparedStatement ps10 = null;
		PreparedStatement ps11 = null;
		PreparedStatement ps12 = null;
		PreparedStatement ps13 = null;
		PreparedStatement ps14 = null;
		PreparedStatement ps15 = null;
		
		try
		{
			conn = condb.getCon();
			ps1 = conn.prepareStatement(sql1);
			ps2 = conn.prepareStatement(sql2);
			ps3 = conn.prepareStatement(sql3);
			ps4 = conn.prepareStatement(sql4);
			ps5 = conn.prepareStatement(sql5);
			ps6 = conn.prepareStatement(sql6);
			ps7 = conn.prepareStatement(sql7);
			ps8 = conn.prepareStatement(sql8);
			ps9 = conn.prepareStatement(sql9);
			ps10 = conn.prepareStatement(sql10);
			ps11 = conn.prepareStatement(sql11);
			ps12 = conn.prepareStatement(sql12);
			ps13 = conn.prepareStatement(sql13);
			ps14 = conn.prepareStatement(sql14);
			ps15 = conn.prepareStatement(sql15);
			
			ps1.executeUpdate(sql1);
			ps2.executeUpdate(sql2);
			ps3.executeUpdate(sql3);
			ps4.executeUpdate(sql4);
			ps5.executeUpdate(sql5);
			ps6.executeUpdate(sql6);
			ps7.executeUpdate(sql7);
			ps8.executeUpdate(sql8);
			ps9.executeUpdate(sql9);
			ps10.executeUpdate(sql10);
			ps11.executeUpdate(sql11);
			ps12.executeUpdate(sql12);
			ps13.executeUpdate(sql13);
			ps14.executeUpdate(sql14);
			ps15.executeUpdate(sql15);
			
			ps2.close();
			ps3.close();
			ps4.close();
			ps5.close();
			ps6.close();
			ps7.close();
			ps8.close();
			ps9.close();
			ps10.close();
			ps11.close();
			ps12.close();
			ps13.close();
			ps14.close();
			ps15.close();
			
		}catch(Exception e)
		{
			e.printStackTrace();
		}finally
		{
			condb.toClose(null, ps1, conn);
		}
	}
	
	
	private void DeleteDev(Dev dev)
	{
		Connection conn = null;
		PreparedStatement ps = null;
		String sql = "delete from xpf_device where xpf_device_number = '" +dev.getXpf_device_number()+ "'";
		
		try
		{
			conn = condb.getCon();
			ps = conn.prepareStatement(sql);
			ps.executeUpdate(sql);
		}catch(Exception e)
		{
			e.printStackTrace();
		}finally
		{
			condb.toClose(null, ps, conn);
		}
	}
}
