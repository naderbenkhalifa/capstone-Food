package com.benkhalifa.capstoneFood.model;

import java.sql.Date;
import java.util.List;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="purchases")

public class Purchase {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int id;
	
	@Column
	private float totalcost;
	
	@Column
	private Date dateOfPurchase;
	
	@Column
	private int totalQuantity;
	
	@Column
	private String shippingAddress;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name = "purchase_id")
	private List<PurchaseItem> purchaseItems;
	
	
	
	

	@OneToOne
	@JoinColumn(name="user_id")
	private User user;

}
