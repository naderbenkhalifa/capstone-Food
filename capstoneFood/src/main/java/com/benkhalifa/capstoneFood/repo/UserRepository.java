package com.benkhalifa.capstoneFood.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.benkhalifa.capstoneFood.model.User;
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	public User findByFullName(String fullName);
	public User findByPassword(String password);
	public   User findUserByEmail(String email);
	public User findByEmailAndPassword(String email,String password);

	
}
