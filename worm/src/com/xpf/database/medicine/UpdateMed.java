package com.xpf.database.medicine;

import com.xpf.database.*;
import java.sql.*;

public class UpdateMed
{
	private ConDB condb = new ConDB();
	
	public void Update(int key, Med med)
	{
		switch(key)
		{
		case 1:
			String sql = "insert into xpf_medicine (xpf_medicine_number, xpf_med_name, xpf_med_number, xpf_med_kind, xpf_med_property, xpf_med_begintime, xpf_med_endtime, xpf_med_buytime, xpf_med_dutypeople, xpf_med_buymount, xpf_med_nowmount, xpf_med_mountdanwei, xpf_med_location, xpf_med_belongto, xpf_med_other, xpf_med_time) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			AddMed(sql, med);
			break;
		case 2:
			AlterMed(med);
			break;
		case 3:
			DeleteMed(med);
			break;
		}
	}
	
	private void AddMed(String sql, Med med)
	{
		Connection conn = null;
		PreparedStatement ps = null;
		try
		{
			conn = condb.getCon();
			ps = conn.prepareStatement(sql);
			
			ps.setString(1, med.getXpf_medicine_number());
			ps.setString(2, med.getXpf_med_name());
			ps.setString(3, med.getXpf_med_number());
			ps.setString(4, med.getXpf_med_kind());
			ps.setString(5, med.getXpf_med_property());
			ps.setString(6, med.getXpf_med_begintime());
			ps.setString(7, med.getXpf_med_endtime());
			ps.setString(8, med.getXpf_med_buytime());
			ps.setString(9, med.getXpf_med_dutypeople());
			ps.setInt(10, med.getXpf_med_buymount());
			ps.setInt(11, med.getXpf_med_nowmount());
			ps.setString(12, med.getXpf_med_mountdanwei());
			ps.setString(13, med.getXpf_med_location());
			ps.setString(14, med.getXpf_med_belongto());
			ps.setString(15, med.getXpf_med_other());
			ps.setString(16, med.getXpf_med_time());
			
			ps.execute();
			
			
		}catch(Exception e)
		{
			e.printStackTrace();
		}finally
		{
			condb.toClose(null, ps, conn);
		}
	}
	
	private void AlterMed(Med med)
	{
		String sql1 = "update xpf_medicine set xpf_med_name = '" +med.getXpf_med_name()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql2 = "update xpf_medicine set xpf_med_number = '" +med.getXpf_med_number()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql3 = "update xpf_medicine set xpf_med_kind = '" +med.getXpf_med_kind()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql4 = "update xpf_medicine set xpf_med_property = '" +med.getXpf_med_property()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql5 = "update xpf_medicine set xpf_med_begintime = '" +med.getXpf_med_begintime()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql6 = "update xpf_medicine set xpf_med_endtime = '" +med.getXpf_med_endtime()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql7 = "update xpf_medicine set xpf_med_buytime = '" +med.getXpf_med_buytime()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql8 = "update xpf_medicine set xpf_med_dutypeople = '" +med.getXpf_med_dutypeople()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql9 = "update xpf_medicine set xpf_med_buymount = " +med.getXpf_med_buymount()+ " where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql10 = "update xpf_medicine set xpf_med_nowmount = " +med.getXpf_med_nowmount()+ " where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql11 = "update xpf_medicine set xpf_med_mountdanwei = '" +med.getXpf_med_mountdanwei()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql12 = "update xpf_medicine set xpf_med_location = '" +med.getXpf_med_location()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql13 = "update xpf_medicine set xpf_med_belongto = '" +med.getXpf_med_belongto()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		String sql14 = "update xpf_medicine set xpf_med_other = '" +med.getXpf_med_other()+ "' where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
	
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
		
		Connection conn = null;
		
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
			
			
		}catch(Exception e)
		{
			e.printStackTrace();
		}finally
		{
			condb.toClose(null, ps1, conn);
		}
	}
	
	private void DeleteMed(Med med)
	{
		Connection conn = null;
		PreparedStatement ps = null;
		String sql = "delete from xpf_medicine where xpf_medicine_number = '" +med.getXpf_medicine_number()+ "'";
		
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
