package com.douzone.emaillist.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.emaillist.vo.EmaillistVo;

@Repository
public class EmaillistRepository {
	
	@Autowired
	private SqlSession sqlSession;
	
	public List<EmaillistVo> findAll() {
		return sqlSession.selectList("emaillist.findAll");
	}
	
	public List<EmaillistVo> findByKeyword(String keyword) {
		return sqlSession.selectList("emaillist.findByKeyword", keyword);
	}
	
	public Boolean insert(EmaillistVo emaillistVo) {
		return sqlSession.insert("emaillist.insert", emaillistVo) == 1;
	}
	
	public Boolean delete(Long no) {
		return sqlSession.delete("emaillist.delete", no) == 1;
	}

}
