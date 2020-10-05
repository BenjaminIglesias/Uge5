/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author Benjamin
 */
public class MainTester {
    public static void main(String[] args) {
        
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EntityManager em = emf.createEntityManager();
        Address a1 = new Address("Hejvej","Herlev",2730);
        Person p1 = new Person("Lars","Henning","44930322");
        Person p2 = new Person("Hanne","Thomsen","112");
        p1.setAddress(a1);
        p2.setAddress(a1);
        em.getTransaction().begin();
        em.persist(p1);
        em.persist(p2);
        em.persist(a1);
        em.getTransaction().commit();
        
        
    }
}
