package facades;

import DTO.PersonDTO;
import DTO.PersonsDTO;
import entities.*;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class PersonFacade implements IPersonFacade{

    private static PersonFacade instance;
    private static EntityManagerFactory emf;
    
    //Private Constructor to ensure Singleton
    private PersonFacade() {}
    
    
    /**
     * 
     * @param _emf
     * @return an instance of this facade class.
     */
    public static PersonFacade getFacadeExample(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new PersonFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
    //TODO Remove/Change this before use
    public long getRenameMeCount(){
        EntityManager em = emf.createEntityManager();
        try{
            long renameMeCount = (long)em.createQuery("SELECT COUNT(r) FROM RenameMe r").getSingleResult();
            return renameMeCount;
        }finally{  
            em.close();
        }
        
    }
    
    
    @Override
    public PersonDTO addPerson(String fName, String lName, String phone) {
        try{
        Person p = new Person(fName,lName,phone);
       
        EntityManager em = getEntityManager();
        em.getTransaction().begin();
        em.persist(p);
        em.getTransaction().commit();
        return new PersonDTO(p.getFirstName(),p.getLastName(),p.getPhone(),p.getId());
    }finally{getEntityManager().close();}
    }

    @Override
    public PersonDTO deletePerson(long id) {
  EntityManager em = getEntityManager();
  Person p = em.find(Person.class, id);

  em.getTransaction().begin();
  em.remove(p);
  em.getTransaction().commit();
  
  return new PersonDTO(p);
    }

    @Override
    public PersonDTO getPerson(long id){
      
        
        try{
            Person person = getEntityManager().find(Person.class,id);
            return new PersonDTO(person.getFirstName(), person.getLastName(), person.getPhone(),person.getId());
        }
        finally {
            getEntityManager().close();
        }}
        
    

    @Override
    public PersonsDTO getAllPersons() {
        EntityManager em = getEntityManager();
        TypedQuery<Person> tq = em.createQuery("SELECT p FROM Person p", Person.class);
        return new PersonsDTO(tq.getResultList());
        
    }

   @Override
    public PersonDTO editPerson(PersonDTO pDTO) {
        EntityManager em = getEntityManager();
        Person pToEdit =  em.find(Person.class, pDTO.getId());
           
           if (pDTO.getFirstName() != null){
            pToEdit.setFirstName(pDTO.getFirstName());
           }
           if (pDTO.getLastName()!= null){
            pToEdit.setLastName(pDTO.getLastName());  
           }
  
            if (pDTO.getPhone()!= null){  
              pToEdit.setPhone(pDTO.getPhone());
             }
             em.getTransaction().begin();
             em.persist(pToEdit);
             em.getTransaction().commit();
               return new PersonDTO(pToEdit);
    }
    
}
