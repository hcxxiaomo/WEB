package com.xpf.database.book;

import com.xpf.database.*;

import java.sql.*;

public class UpdateBook 
{
private ConDB condb = new ConDB();
	
	public void Update(int key, Book book)
	{
		switch(key)
		{
		case 1:
			String sql = "insert into xpf_books(xpf_books_number, xpf_book_name, xpf_book_number, xpf_book_kind, xpf_book_begintime, xpf_book_buytime, xpf_book_dutypeople, xpf_book_buymount, xpf_book_nowmount, xpf_book_lendmount, xpf_book_inmount, xpf_book_location, xpf_book_belongto, xpf_book_other, xpf_book_time)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			AddBook(sql, book);
			break;
		case 2:
			AlterBook(book);
			break;
		case 3:
			DeleteBook(book);
			break;
		}
	}
	
	private void AddBook(String sql, Book book)
	{
		Connection conn = null;
		PreparedStatement ps = null;
		
		try
		{
			conn = condb.getCon();
			ps = conn.prepareStatement(sql);
			
			ps.setString(1, book.getXpf_books_number());
			ps.setString(2, book.getXpf_book_name());
			ps.setString(3, book.getXpf_book_number());
			ps.setString(4, book.getXpf_book_kind());
			ps.setString(5, book.getXpf_book_begintime());
			ps.setString(6, book.getXpf_book_buytime());
			ps.setString(7, book.getXpf_book_dutypeople());
			ps.setInt(8, book.getXpf_book_buymount());
			ps.setInt(9, book.getXpf_book_nowmount());
			ps.setInt(10, book.getXpf_book_lendmount());
			ps.setInt(11, book.getXpf_book_inmount());
			ps.setString(12, book.getXpf_book_location());
			ps.setString(13, book.getXpf_book_belongto());
			ps.setString(14, book.getXpf_book_other());
			ps.setString(15, book.getXpf_book_time());
			
			ps.execute();
			
		}catch(Exception e)
		{
			e.printStackTrace();
		}finally
		{
			condb.toClose(null, ps, conn);
		}
	}
	
	private void AlterBook(Book book)
	{
		Connection conn = null;
		String sql1 = "update xpf_books set xpf_book_name = '" +book.getXpf_book_name()+ "' where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql2 = "update xpf_books set xpf_book_number = '" +book.getXpf_book_number()+ "' where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql3 = "update xpf_books set xpf_book_kind = '" +book.getXpf_book_kind()+ "' where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql4 = "update xpf_books set xpf_book_begintime = '" +book.getXpf_book_begintime()+ "' where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql5 = "update xpf_books set xpf_book_buytime = '" +book.getXpf_book_buytime()+ "' where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql6 = "update xpf_books set xpf_book_dutypeople = '" +book.getXpf_book_dutypeople()+ "' where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql7 = "update xpf_books set xpf_book_buymount = " +book.getXpf_book_buymount()+ " where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql8 = "update xpf_books set xpf_book_nowmount = " +book.getXpf_book_nowmount()+ " where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql9 = "update xpf_books set xpf_book_lendmount = " +book.getXpf_book_lendmount()+ " where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql10 = "update xpf_books set xpf_book_inmount = " +book.getXpf_book_inmount()+ " where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql11 = "update xpf_books set xpf_book_location = '" +book.getXpf_book_location()+ "' where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql12 = "update xpf_books set xpf_book_belongto = '" +book.getXpf_book_belongto()+ "' where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		String sql13 = "update xpf_books set xpf_book_other = '" +book.getXpf_book_other()+ "' where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		
		
		
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
		}catch(Exception e)
		{
			e.printStackTrace();
		}finally
		{
			condb.toClose(null, ps1, conn);
		}
	}
	
	
	private void DeleteBook(Book book)
	{
		Connection conn = null;
		PreparedStatement ps = null;
		String sql = "delete from xpf_books where xpf_books_number = '" +book.getXpf_books_number()+ "'";
		
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
